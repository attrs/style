<template>
  <div class="flex flex-1">
    <div class="flex flex-1">
      <div class="overflow-y-auto overflow-x-hidden hidden lg:flex">
        <div class="flex flex-col flex-1 bg-panel border-r min-w-250">
          <Sidebar />
        </div>
      </div>
      <div class="flex flex-col flex-1 bg-panel">
        <div class="flex flex-col flex-1">
          <div class="bg-panel app-draggable border-b hidden lg:flex sticky top-0 z-10">
            <div class="flex flex-1">
              <Topbar class="flex-1" />
            </div>
          </div>
          <div class="flex flex-col flex-1 bg-base lg:shadow-inset mt-16 lg:mt-0">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import IconActivity from 'bootstrap-icons/icons/activity.svg';

import Topbar from './Topbar.vue';
import Sidebar from './Sidebar.vue';

@Options({
  components: {
    IconActivity,
    Topbar,
    Sidebar
  }
})
export default class PlainLayout extends Vue {}
</script>
