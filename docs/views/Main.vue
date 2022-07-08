<template>
  <div class="mt-12"></div>
</template>

<script lang="ts">
import { Options, Vue, Prop, Watch } from 'vue-property-decorator';
import IconActivity from 'bootstrap-icons/icons/activity.svg';

@Options({
  components: {
    IconActivity
  }
})
export default class Main extends Vue {
  public async mounted() {
    // console.log('mounted', this.msg);
  }
}
</script>
