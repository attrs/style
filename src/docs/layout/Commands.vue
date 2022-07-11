<template>
  <button type="button" class="w-full flex items-center text-sm text-muted font-medium rounded py-1.5 pl-2 pr-3 bg-input border border-light">
    <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
      <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
    </svg>
    Commands ..
    <span class="ml-auto pl-3 flex-none text-xs text-light font-medium">⌘K</span>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';

@Options({
  components: {}
})
export default class Sidebar extends Vue {
  public async mounted() {
    // console.log('mounted', this.msg);
  }
}
</script>
