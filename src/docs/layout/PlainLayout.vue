<template>
  <div class="fullsize flex flex-1">
    <div class="h-screen overflow-y-hidden flex flex-1">
      <div id="sidebar" class="hidden lg:flex">
        <div class="flex flex-col flex-1 bg-panel border-r min-w-300">
          <div class="py-3 px-3">
            <div class="mb-5">
              <Profile />
            </div>
            <div class="mt-4 px-1">
              <Commands />
            </div>
          </div>

          <div class="flex-1 overflow-y-auto overflow-x-hidden h-full">
            <Sidebar />
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="flex flex-col h-full">
          <div class="app-draggable sticky top-0 z-10 backdrop-blur bg-panel border-b">
            <div class="flex flex-1">
              <Topbar class="flex-1" />
            </div>
          </div>
          <div class="flex flex-col flex-1 mt-16 lg:mt-0 h-full overflow-auto">
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
import Profile from './Profile.vue';
import Commands from './Commands.vue';

@Options({
  components: {
    IconActivity,
    Topbar,
    Sidebar,
    Profile,
    Commands
  }
})
export default class PlainLayout extends Vue {}
</script>
