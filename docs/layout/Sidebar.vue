<template>
  <div class="py-3 px-3">
    <div>
      <div class="x-list-item border-b border-dashed px-3">
        <div class="x-iconbox x-iconbox-md radius-circle mr-5 border border-2"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://s.gravatar.com/avatar/9a091d8ff86fc121f75f158d132ff242?s=100&r=x&d=retro')"></div></div>
        <div class="flex-1 text-sm">
          <div class="font-semibold mx-1">joje</div>
          <div class="">
            <div class="x-label x-label-2xs x-label-black mx-0">스타터 플랜</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 px-1">
      <button type="button" class="w-full flex items-center text-sm text-light font-medium rounded shadow-sm py-1.5 pl-2 pr-3 bg-input">
        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none text-default">
          <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
        </svg>
        검색하기..
        <span class="ml-auto pl-3 flex-none text-xs font-semibold text-default">⌘K</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop, Watch } from 'vue-property-decorator';
import IconActivity from 'bootstrap-icons/icons/activity.svg';

@Options({
  components: {
    IconActivity
  }
})
export default class Sidebar extends Vue {
  public async mounted() {
    // console.log('mounted', this.msg);
  }
}
</script>
