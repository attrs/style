<template>
  <div class="flex">
    <div class="x-navbar x-navbar-align-end flex-1 pr-3">
      <div class="x-navbar x-navbar-align-end items-center flex-1">
        <div class="x-dropdown x-dropdown-align-right">
          <a class="btn inline-flex text-sm">
            <div class="x-iconbox radius-circle w-8 h-8 my-3" style="background-image: url('https://s.gravatar.com/avatar/9a091d8ff86fc121f75f158d132ff242?s=100&r=x&d=retro')"></div>
          </a>

          <div class="x-dropdown-items">
            <div class="x-contextmenu text-sm px-1">
              <div class="x-list min-w-250">
                <div class="x-list-header">joje 로 로그인 되었습니다.</div>
                <a class="x-list-item cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-circle icon">
                    <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-7a7 7 0 00-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 008 1z"></path>
                  </svg>
                  계정관리
                </a>
                <a class="x-list-item cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-people-fill icon">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6z"></path>
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
                    <path d="M4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                  </svg>
                  팀 개설하기
                </a>
                <!---->
                <div class="x-separator"></div>
                <a href="http://localhost:9000" target="_blank" class="x-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.59 190.78" fill="currentColor" width="1em" height="1em" class="icon">
                    <rect x="215.24" y="199.94" width="32" height="48" rx="1.99" transform="rotate(-45 -25.348 365.71)"></rect>
                    <rect x="271.81" y="143.37" width="32" height="48" rx="1.99" transform="rotate(-45 31.22 309.139)"></rect>
                    <rect x="266.15" y="250.85" width="32" height="48" rx="1.99" transform="rotate(-45 25.56 416.622)"></rect>
                    <path d="M.39 105.53a1.83 1.83 0 00.29 2.54l26.92 26.87 28.29 28.29 26.83 26.86a1.83 1.83 0 002.53.28l20.35-20.36a1.81 1.81 0 00-.28-2.53L78.45 140.6l-28.29-28.28L23.3 85.44a1.82 1.82 0 00-2.53-.28zM56.96 48.97a1.83 1.83 0 00.28 2.53l26.88 26.87 28.29 28.29 26.87 26.88a1.84 1.84 0 002.54.28l20.37-20.38a1.82 1.82 0 00-.28-2.53l-26.88-26.88-28.28-28.28-26.88-26.88a1.82 1.82 0 00-2.53-.28z"></path>
                  </svg>
                  localhost
                </a>
                <a href="http://localhost:9010" target="docs" class="x-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-book icon">
                    <path
                      d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                    ></path>
                  </svg>
                  도큐멘테이션
                </a>
                <a href="https://help.cloudtype.io/guide" target="help" class="x-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-life-preserver icon">
                    <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm6.43-5.228a7.025 7.025 0 01-3.658 3.658l-1.115-2.788a4.015 4.015 0 001.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 01-3.658-3.658l2.788-1.115a4.015 4.015 0 001.985 1.985L5.228 14.43zm9.202-9.202l-2.788 1.115a4.015 4.015 0 00-1.985-1.985l1.115-2.788a7.025 7.025 0 013.658 3.658zm-8.087-.87a4.015 4.015 0 00-1.985 1.985L1.57 5.228A7.025 7.025 0 015.228 1.57l1.115 2.788zM8 11a3 3 0 110-6 3 3 0 010 6z"></path>
                  </svg>
                  이용가이드
                </a>
                <a class="x-list-item cursor-pointer text-info hover:text-primary hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-emoji-smile icon">
                    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"></path>
                    <path d="M4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                  </svg>
                  초대하기
                </a>
                <div class="x-separator"></div>
                <!---->
                <a class="x-list-item cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-box-arrow-right icon">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 001 0v-2A1.5 1.5 0 009.5 2h-8A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h8a1.5 1.5 0 001.5-1.5v-2a.5.5 0 00-1 0v2z"></path>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L14.293 7.5H5.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z"></path>
                  </svg>
                  로그아웃
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default class Topbar extends Vue {
  public async mounted() {
    // console.log('mounted', this.msg);
  }
}
</script>
