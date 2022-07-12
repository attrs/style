<template>
  <div>
    <button type="button" class="w-full flex items-center text-sm text-light font-medium rounded py-1.5 pl-2 pr-3 bg-input border border-light" @click="open">
      <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
        <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
      </svg>
      Commands ..
      <span class="ml-auto pl-3 flex-none text-xs text-light font-medium">⌘K</span>
    </button>

    <XModal ref="modalCommandPalette">
      <div class="relative lg:my-16 min-w-screen min-h-screen bg-panel md:bg-transparent max-w-screen md:min-w-2xl md:max-w-2xl md:min-h-full md:max-h-full md:shadow">
        <CommandPalette />
      </div>
    </XModal>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Ref } from 'vue-property-decorator';
import Mousetrap from 'mousetrap';

import XModal from '@/components/x-modal.vue';
import CommandPalette from './CommandPalette.vue';

@Options({
  components: {
    XModal,
    CommandPalette
  }
})
export default class CommandForm extends Vue {
  @Ref()
  private modalCommandPalette: XModal;
  private listener: () => void;

  public mounted() {
    this.listener = this.listener = () => {
      this.open();
    };
    this.listener = Mousetrap.bind(['command+k', 'ctrl+k'], this.listener);
  }

  public destroyed() {
    this.listener && Mousetrap.unbind(['command+k', 'ctrl+k'], this.listener);
  }

  private open() {
    this.modalCommandPalette.open();
  }
}
</script>
