<template>
  <transition name="modal">
    <div v-if="dataPreInit || show" v-show="show" ref="mask" class="modal-mask" tab-index="-1" @mousedown="close">
      <div
        ref="container"
        class="modal-container"
        :class="{
          'modal-container-left': position === 'left',
          'modal-container-right': position === 'right'
        }"
        :style="{
          'background-color': dataBg || 'transparent'
        }"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Prop, Vue, Watch } from 'vue-property-decorator';

let esclistener = null;

export default class XModal extends Vue {
  public static actives = [];
  public static prevstyle = null;

  @Prop() private dataOpen!: boolean;
  @Prop() private dataPosition!: string;
  @Prop() private dataBg!: string;
  @Prop() private dataPreInit!: boolean;

  private show = false;
  private position: string = this.dataPosition || null;

  public mounted() {
    if (this.dataOpen === true) this.open();
  }

  public open() {
    this.show = true;
    if (!XModal.actives.length) {
      // document.body.style.overflowY = 'hidden';
      document.body.addEventListener('keydown', esclistener);
    }
    XModal.actives.push(this);
    document.body.classList.add('x-modal-shown');
    document.documentElement.classList.add('x-modal-shown');

    this.$emit('open');
  }

  public close(event?) {
    if (event && !~[this.$refs.mask, this.$refs.container].indexOf(event.target)) return;

    this.show = false;
    ~XModal.actives.indexOf(this) && XModal.actives.splice(XModal.actives.indexOf(this), 1);
    if (!XModal.actives.length) {
      // document.body.style.overflowY = '';
      document.body.removeEventListener('keydown', esclistener);
      document.body.classList.remove('x-modal-shown');
      document.documentElement.classList.remove('x-modal-shown');
    }
    this.$emit('close');
  }

  public toggle() {
    this.show !== true ? this.open() : this.close();
  }

  public exists() {
    return !!document.body.contains(this.$el);
  }

  @Watch('dataOpen')
  private watch() {
    if (this.dataOpen === true) this.open();
    else this.close();
  }
}

esclistener = (e) => {
  if (e.keyCode === 27 && XModal.actives.length) XModal.actives[XModal.actives.length - 1]?.close();
};

setInterval(() => {
  if (!XModal.actives?.length) return;

  for (const modal of XModal.actives) {
    if (!modal.exists()) {
      modal.close();
    }
  }

  if (!XModal.actives.length) {
    document.body.removeEventListener('keydown', esclistener);
    document.body.classList.remove('x-modal-shown');
    document.documentElement.classList.remove('x-modal-shown');
  }
}, 3500);
</script>

<style lang="postcss">
.x-modal-shown {
  height: auto !important;
  overflow: hidden !important;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
  text-align: center;
  pointer-events: auto;

  &:before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}

.modal-container {
  display: inline-block;
  position: static;
  transition: all 0.15s ease;
  text-align: initial;
  vertical-align: middle;
  z-index: 9999;
  transform-origin: 50% 50%;

  &.modal-container-left {
    transition: all 0.25s ease;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.modal-container-right {
    transition: all 0.25s ease;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(0.95);

  &.modal-container-left {
    transform: none;
    left: -20rem;
  }

  &.modal-container-right {
    transform: none;
    right: -20rem;
  }
}
</style>
