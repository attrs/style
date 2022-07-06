<template>
  <div class="flex flex-1">
    <div class="flex flex-1">
      <div class="overflow-y-auto overflow-x-hidden hidden lg:flex">
        <div class="flex flex-col flex-1 bg-panel border-r min-w-250">sidebar</div>
      </div>
      <div class="flex flex-col flex-1 bg-panel">
        <div class="flex flex-col flex-1">
          <div class="bg-panel app-draggable border-b hidden lg:flex sticky top-0 z-10">
            <div class="flex flex-1">
              <div class="flex flex-1">
                <div class="x-navbar">
                  <div class="x-inputbox x-inputbox-rounded hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-search icon ml-0 mr-1 text-sm"><path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"></path></svg>
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
                <div class="x-navbar x-navbar-align-end flex-1 pr-3">
                  <div class="x-navbar x-navbar-align-end flex-1">
                    <a class="px-3 btn btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-plus-circle icon">
                        <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"></path>
                        <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z"></path>
                      </svg>
                    </a>
                    <a class="px-3 btn btn-icon hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bell icon">
                        <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zM8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"></path>
                      </svg>
                      <div class="x-badge x-badge-warning mx-0 hidden">0</div>
                    </a>
                    <a class="px-3 btn btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-chat-quote-fill icon">
                        <path
                          d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 00-.227-.272 1.467 1.467 0 00-.469-.324l-.008-.004A1.785 1.785 0 005.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 00.011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 00-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 00.012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 00-.228-.4 1.686 1.686 0 00-.227-.273 1.466 1.466 0 00-.469-.324l-.008-.004A1.785 1.785 0 0010.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"
                        ></path>
                      </svg>
                    </a>
                    <div class="x-dropdown x-dropdown-align-right mr-1">
                      <a class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-collection icon"><path d="M2.5 3.5a.5.5 0 010-1h11a.5.5 0 010 1h-11zm2-2a.5.5 0 010-1h7a.5.5 0 010 1h-7zM0 13a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0016 13V6a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 000 6v7zm1.5.5A.5.5 0 011 13V6a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-13z"></path></svg>
                      </a>
                      <div class="x-dropdown-items">
                        <div class="x-contextmenu text-sm">
                          <div class="x-list min-w-200">
                            <div class="x-list-header">@joje6</div>
                            <a class="x-list-item cursor-pointer">@joje6/react</a>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <!---->
                    <div class="x-dropdown x-dropdown-align-right">
                      <a class="btn inline-flex text-sm pr-3">
                        <div class="x-iconbox radius-circle w-8 h-8"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://s.gravatar.com/avatar/ba6fa8051ab0fb7cc7945122b8d9d28f?s=100&amp;r=x&amp;d=robohash')"></div></div>
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

@Options({
  components: {
    IconActivity
  }
})
export default class PlainLayout extends Vue {}
</script>
