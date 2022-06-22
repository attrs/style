<template>
  <div>
    <div class="min-w-screen max-w-screen py-3 pb-5">
      <div class="container mx-auto">
        <div class="x-navbar text-active relative my-3 mx-pg rounded">
          <div class="x-navbar">
            <div class="ml-3 lg:ml-0">
              <a href="/" route="" class="inline-block tracking-wider text-blackwhite">
                <div class="text-lg lg:text-xl uppercase tracking-widest font-round">CLOUDTYPE</div>
              </a>
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="x-navbar lg:hidden">
            <a class="btn hover:bg-black hover:text-white text-xl mx-0 px-1 py-1 mr-2 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="bi bi-three-dots-vertical block"
              >
                <path
                  d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="x-navbar hidden lg:flex">
            <router-link class="btn btn-plain mx-xs btn-gnb" to="/">홈</router-link>
            <router-link class="btn btn-plain mx-xs btn-gnb" to="/subscriptions">구독</router-link>
            <router-link class="btn btn-plain mx-xs btn-gnb" to="/receipts">영수증</router-link>
            <router-link class="btn btn-plain mx-xs btn-gnb" to="/credits">크레딧</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-60">
    <router-view />
  </div>
</template>

<style scoped lang="postcss">
  .btn-gnb {
    @apply font-normal text-md rounded-sm leading-relaxed;
  }
</style>
