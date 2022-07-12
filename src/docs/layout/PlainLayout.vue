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
              <CommandForm />
            </div>
          </div>

          <div class="flex-1 overflow-y-auto overflow-x-hidden h-full pb-20">
            <Sidebar />
          </div>

          <!-- sidebar footer -->
          <div class="sticky bottom-0 bg-panel-em rounded m-3 mb-8 border border-light hover:bg-active hover:text-active transition duration-300">
            <div class="flex py-2 px-3 items-center mx-0 rounded cursor-pointer">
              <div class="mr-2 text-lg text-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </div>
              <div class="flex-1 text-sm">
                <div class="font-medium mx-1">Free Plan</div>
              </div>
              <div class="text-xs font-medium hover:text-green-500">Upgrade</div>
            </div>
          </div>
          <!-- // sidebar footer -->
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="flex flex-col h-full">
          <div class="app-draggable sticky top-0 z-10 backdrop-blur bg-panel border-b">
            <div class="flex flex-1">
              <Topbar class="flex-1" />
            </div>
          </div>
          <div class="flex flex-col flex-1 mt-16 lg:mt-0 h-full overflow-auto bg-base">
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
import CommandForm from './CommandForm.vue';

@Options({
  components: {
    IconActivity,
    Topbar,
    Sidebar,
    Profile,
    CommandForm
  }
})
export default class PlainLayout extends Vue {}
</script>
