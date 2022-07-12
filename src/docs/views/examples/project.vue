<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center space-x-3">
        <div class="hidden x-iconbox text-black flex items-center justify-center relative mr-5 cursor-pointer x-iconbox-md radius-circle" style="background-color: rgb(70, 72, 62)">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSIjOENDODRCIj4KICAgIDxwYXRoIGQ9Ik0xMTYuNTA0IDMuNThjNi45NjItMy45ODUgMTYuMDMtNC4wMDMgMjIuOTg2IDAgMzQuOTk1IDE5Ljc3NCA3MC4wMDEgMzkuNTE3IDEwNC45OSA1OS4zMDMgNi41ODEgMy43MDcgMTAuOTgzIDExLjAzMSAxMC45MTYgMTguNjE0djExOC45NjhjLjA0OSA3Ljg5Ny00Ljc4OCAxNS4zOTYtMTEuNzMxIDE5LjAxOS0zNC44OCAxOS42NjUtNjkuNzQyIDM5LjM1NC0xMDQuNjE2IDU5LjAxOS03LjEwNiA0LjA2My0xNi4zNTYgMy43NS0yMy4yNC0uNjQ2LTEwLjQ1Ny02LjA2Mi0yMC45MzItMTIuMDk0LTMxLjM5LTE4LjE1LTIuMTM3LTEuMjc0LTQuNTQ2LTIuMjg4LTYuMDU1LTQuMzYgMS4zMzQtMS43OTggMy43MTktMi4wMjIgNS42NTctMi44MDcgNC4zNjUtMS4zODggOC4zNzQtMy42MTYgMTIuMzg0LTUuNzc4IDEuMDE0LS42OTQgMi4yNTItLjQyOCAzLjIyNC4xOTMgOC45NDIgNS4xMjcgMTcuODA1IDEwLjQwMyAyNi43NzcgMTUuNDgxIDEuOTE0IDEuMTA1IDMuODUyLS4zNjIgNS40ODgtMS4yNzQgMzQuMjI4LTE5LjM0NSA2OC40OTgtMzguNjE3IDEwMi43Mi01Ny45NjggMS4yNjgtLjYxIDEuOTY5LTEuOTU2IDEuODY2LTMuMzQ1LjAyNC0zOS4yNDUuMDA2LTc4LjQ5Ny4wMTItMTE3Ljc0Mi4xNDUtMS41NzYtLjc2Ny0zLjAyNS0yLjE5Mi0zLjY3LTM0Ljc1OS0xOS41NzUtNjkuNS0zOS4xOC0xMDQuMjUzLTU4Ljc2YTMuNjIxIDMuNjIxIDAgMDAtNC4wOTQtLjAwNkM5MS4yIDM5LjI1NyA1Ni40NjUgNTguODggMjEuNzEyIDc4LjQ1NGMtMS40Mi42NDYtMi4zNzMgMi4wNzEtMi4yMDQgMy42NTMuMDA2IDM5LjI0NSAwIDc4LjQ5NyAwIDExNy43NDhhMy4zMjkgMy4zMjkgMCAwMDEuODkgMy4zMDNjOS4yNzQgNS4yNTkgMTguNTYgMTAuNDgxIDI3Ljg0IDE1LjcyMiA1LjIyOCAyLjgxNCAxMS42NDcgNC40ODYgMTcuNDA3IDIuMzMgNS4wODMtMS44MjMgOC42NDYtNy4wMSA4LjU0OS0xMi40MDcuMDQ4LTM5LjAxNi0uMDI0LTc4LjAzOC4wMzYtMTE3LjA0OC0uMTI3LTEuNzMyIDEuNTE2LTMuMTYzIDMuMi0zIDQuNDU2LS4wMyA4LjkxOC0uMDYgMTMuMzc0LjAxMiAxLjg2LS4wNDIgMy4xNCAxLjgyMyAyLjkxIDMuNTY4LS4wMTggMzkuMjYzLjA0OCA3OC41MjctLjAzIDExNy43OS4wMTIgMTAuNDY0LTQuMjg3IDIxLjg1LTEzLjk2NiAyNi45Ny0xMS45MjQgNi4xNzctMjYuNjYyIDQuODY3LTM4LjQ0Mi0xLjA1Ni0xMC4xOTgtNS4wOS0xOS45My0xMS4wOTctMjkuOTQ3LTE2LjU1QzUuMzY4IDIxNS44ODYuNTU1IDIwOC4zNTcuNjA0IDIwMC40NjZWODEuNDk3Yy0uMDczLTcuNzQgNC41MDQtMTUuMTk3IDExLjI5LTE4Ljg1QzQ2Ljc2OCA0Mi45NjYgODEuNjM2IDIzLjI3IDExNi41MDQgMy41OHoiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xNDYuOTI4IDg1Ljk5YzE1LjIxLS45NzkgMzEuNDkzLS41OCA0NS4xOCA2LjkxMyAxMC41OTcgNS43NDIgMTYuNDcyIDE3Ljc5MyAxNi42NTkgMjkuNTY2LS4yOTYgMS41ODgtMS45NTYgMi40NjQtMy40NzIgMi4zNTUtNC40MTMtLjAwNi04LjgyNy4wNi0xMy4yNC0uMDMtMS44NzIuMDcyLTIuOTYtMS42NTQtMy4xOTUtMy4zMDktMS4yNjgtNS42MzMtNC4zNC0xMS4yMTItOS42NDItMTMuOTI5LTguMTM5LTQuMDc1LTE3LjU3Ni0zLjg3LTI2LjQ1MS0zLjc4NS02LjQ3OS4zNDQtMTMuNDQ2LjkwNS0xOC45MzUgNC43MTUtNC4yMTQgMi44ODYtNS40OTQgOC43MTItMy45OSAxMy40MDQgMS40MTggMy4zNjkgNS4zMDcgNC40NTYgOC40ODkgNS40NTggMTguMzMgNC43OTQgMzcuNzU0IDQuMzE3IDU1LjczNCAxMC42MjYgNy40NDQgMi41NzIgMTQuNzI2IDcuNTcyIDE3LjI3NCAxNS4zNjYgMy4zMzMgMTAuNDQ2IDEuODcyIDIyLjkzMi01LjU2IDMxLjMxOC02LjAyNyA2LjkwMS0xNC44MDUgMTAuNjU3LTIzLjU2IDEyLjY5Ny0xMS42NDcgMi41OTctMjMuNzM0IDIuNjYzLTM1LjU2MiAxLjUxLTExLjEyMi0xLjI2OC0yMi42OTYtNC4xOS0zMS4yODItMTEuNzY4LTcuMzQyLTYuMzc1LTEwLjkyOC0xNi4zMDgtMTAuNTcyLTI1Ljg5NS4wODUtMS42MTkgMS42OTctMi43NDggMy4yNDgtMi42MTUgNC40NDQtLjAzNiA4Ljg4OC0uMDQ4IDEzLjMzMi4wMDYgMS43NzUtLjEyNyAzLjA5MSAxLjQwNyAzLjE4MiAzLjA4LjgyIDUuMzY3IDIuODM3IDExIDcuNTE3IDE0LjE4MiA5LjAzMiA1LjgyNyAyMC4zNjUgNS40MjggMzAuNzA3IDUuNTkxIDguNTY4LS4zOCAxOC4xODYtLjQ5NSAyNS4xNzgtNi4xNTggMy42ODktMy4yMyA0Ljc4Mi04LjYzNCAzLjc4NS0xMy4yODMtMS4wOC0zLjkyNS01LjE4Ni01Ljc1NC04LjcxMi02Ljk1LTE4LjA5NS01LjcyNC0zNy43MzYtMy42NDctNTUuNjU2LTEwLjEyLTcuMjc1LTIuNTcxLTE0LjMxLTcuNDMyLTE3LjEwNS0xNC45MDYtMy45LTEwLjU3OC0yLjExMy0yMy42NjIgNi4wOTgtMzEuNzY1IDguMDA2LTguMDYgMTkuNTYzLTExLjE2NCAzMC41NTEtMTIuMjc1eiI+PC9wYXRoPgogIDwvZz4KPC9zdmc+"
            style="margin: 0px auto; width: 65%; height: 65%"
          />
        </div>

        <div class="flex-1">
          <div class="flex items-center">
            <div class="flex-1">
              <h4 class="mb-3">Project</h4>
              <div class="text-xs text-success">
                Updated 3 hours ago
                <span>&nbsp;·&nbsp;</span>
                <div class="inline-block">
                  <div class="flex text-xs space-x-3">
                    <div class="flex text-xs space-x-1">
                      <span class="text-default font-medium">1 vCore</span>
                      <span class="text-light">CPU</span>
                    </div>
                    <div class="flex text-xs space-x-1">
                      <span class="text-default font-medium">256MB</span>
                      <span class="text-light">Memory</span>
                    </div>
                    <div class="flex text-xs space-x-1">
                      <span class="text-default font-medium">4</span>
                      <span class="text-light">Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col self-stretch items-end">
          <div class="flex-1 p-2">
            <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 hidden">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
            </dd>
          </div>

          <div class="x-navbar self-end">
            <div class="x-navbar items-stretch space-x-3 pr-1">
              <div class="x-dropdown x-dropdown-align-right border rounded">
                <a class="btn btn-sm btn-transparent bg-light m-0 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="icon ml-0">
                    <path fill-rule="evenodd" d="M5.75 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 19.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM5.75 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"></path>
                    <path fill-rule="evenodd" d="M5.75 16.75A.75.75 0 006.5 16V8A.75.75 0 005 8v8c0 .414.336.75.75.75z"></path>
                    <path fill-rule="evenodd" d="M17.5 8.75v-1H19v1a3.75 3.75 0 01-3.75 3.75h-7a1.75 1.75 0 00-1.75 1.75H5A3.25 3.25 0 018.25 11h7a2.25 2.25 0 002.25-2.25z"></path>
                  </svg>
                  <b>main</b>
                  stage
                </a>
                <div class="x-dropdown-items">
                  <div class="x-contextmenu">
                    <div class="x-list x-list-hover min-w-200">
                      <div class="x-list-header">Select a stage</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        main
                        <div class="tools">
                          <span class="x-badge bg-info">5</span>
                        </div>
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

    <div class="py-md">
      <div class="mx-1 mb-4 flex space-x-3 items-center">
        <div class="flex-1">
          <h5 class="hidden">
            <span class="x-dot x-dot-info mr-[8px] ring-4 ring-sky-500/40 mx-2 hidden"></span>
            Services
          </h5>
          <div class="my-sm x-tab x-tab-plain x-tab-underline x-tab-bg-primary text-md">
            <div class="x-tab-item active">
              <span class="x-dot x-dot-info mr-[8px] ring-4 ring-sky-500/40 mx-2 hidden"></span>
              Services
              <div class="x-badge x-badge-info ring-4 ring-sky-500/40 hidden">1</div>
            </div>
            <div class="x-tab-item">Domains</div>
            <div class="x-tab-item">Activity</div>
            <div class="x-tab-item">Settings</div>
          </div>
        </div>
        <a class="btn btn-sm btn-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg mr-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
          Create New
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5">
        <!-- service -->
        <div class="x-card">
          <div class="x-list-item py-5">
            <div class="x-iconbox mr-5 cursor-pointer x-iconbox-sm radius-circle" style="background-color: rgb(70, 72, 62)" @click="$router.push('/examples/detail')">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSIjOENDODRCIj4KICAgIDxwYXRoIGQ9Ik0xMTYuNTA0IDMuNThjNi45NjItMy45ODUgMTYuMDMtNC4wMDMgMjIuOTg2IDAgMzQuOTk1IDE5Ljc3NCA3MC4wMDEgMzkuNTE3IDEwNC45OSA1OS4zMDMgNi41ODEgMy43MDcgMTAuOTgzIDExLjAzMSAxMC45MTYgMTguNjE0djExOC45NjhjLjA0OSA3Ljg5Ny00Ljc4OCAxNS4zOTYtMTEuNzMxIDE5LjAxOS0zNC44OCAxOS42NjUtNjkuNzQyIDM5LjM1NC0xMDQuNjE2IDU5LjAxOS03LjEwNiA0LjA2My0xNi4zNTYgMy43NS0yMy4yNC0uNjQ2LTEwLjQ1Ny02LjA2Mi0yMC45MzItMTIuMDk0LTMxLjM5LTE4LjE1LTIuMTM3LTEuMjc0LTQuNTQ2LTIuMjg4LTYuMDU1LTQuMzYgMS4zMzQtMS43OTggMy43MTktMi4wMjIgNS42NTctMi44MDcgNC4zNjUtMS4zODggOC4zNzQtMy42MTYgMTIuMzg0LTUuNzc4IDEuMDE0LS42OTQgMi4yNTItLjQyOCAzLjIyNC4xOTMgOC45NDIgNS4xMjcgMTcuODA1IDEwLjQwMyAyNi43NzcgMTUuNDgxIDEuOTE0IDEuMTA1IDMuODUyLS4zNjIgNS40ODgtMS4yNzQgMzQuMjI4LTE5LjM0NSA2OC40OTgtMzguNjE3IDEwMi43Mi01Ny45NjggMS4yNjgtLjYxIDEuOTY5LTEuOTU2IDEuODY2LTMuMzQ1LjAyNC0zOS4yNDUuMDA2LTc4LjQ5Ny4wMTItMTE3Ljc0Mi4xNDUtMS41NzYtLjc2Ny0zLjAyNS0yLjE5Mi0zLjY3LTM0Ljc1OS0xOS41NzUtNjkuNS0zOS4xOC0xMDQuMjUzLTU4Ljc2YTMuNjIxIDMuNjIxIDAgMDAtNC4wOTQtLjAwNkM5MS4yIDM5LjI1NyA1Ni40NjUgNTguODggMjEuNzEyIDc4LjQ1NGMtMS40Mi42NDYtMi4zNzMgMi4wNzEtMi4yMDQgMy42NTMuMDA2IDM5LjI0NSAwIDc4LjQ5NyAwIDExNy43NDhhMy4zMjkgMy4zMjkgMCAwMDEuODkgMy4zMDNjOS4yNzQgNS4yNTkgMTguNTYgMTAuNDgxIDI3Ljg0IDE1LjcyMiA1LjIyOCAyLjgxNCAxMS42NDcgNC40ODYgMTcuNDA3IDIuMzMgNS4wODMtMS44MjMgOC42NDYtNy4wMSA4LjU0OS0xMi40MDcuMDQ4LTM5LjAxNi0uMDI0LTc4LjAzOC4wMzYtMTE3LjA0OC0uMTI3LTEuNzMyIDEuNTE2LTMuMTYzIDMuMi0zIDQuNDU2LS4wMyA4LjkxOC0uMDYgMTMuMzc0LjAxMiAxLjg2LS4wNDIgMy4xNCAxLjgyMyAyLjkxIDMuNTY4LS4wMTggMzkuMjYzLjA0OCA3OC41MjctLjAzIDExNy43OS4wMTIgMTAuNDY0LTQuMjg3IDIxLjg1LTEzLjk2NiAyNi45Ny0xMS45MjQgNi4xNzctMjYuNjYyIDQuODY3LTM4LjQ0Mi0xLjA1Ni0xMC4xOTgtNS4wOS0xOS45My0xMS4wOTctMjkuOTQ3LTE2LjU1QzUuMzY4IDIxNS44ODYuNTU1IDIwOC4zNTcuNjA0IDIwMC40NjZWODEuNDk3Yy0uMDczLTcuNzQgNC41MDQtMTUuMTk3IDExLjI5LTE4Ljg1QzQ2Ljc2OCA0Mi45NjYgODEuNjM2IDIzLjI3IDExNi41MDQgMy41OHoiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xNDYuOTI4IDg1Ljk5YzE1LjIxLS45NzkgMzEuNDkzLS41OCA0NS4xOCA2LjkxMyAxMC41OTcgNS43NDIgMTYuNDcyIDE3Ljc5MyAxNi42NTkgMjkuNTY2LS4yOTYgMS41ODgtMS45NTYgMi40NjQtMy40NzIgMi4zNTUtNC40MTMtLjAwNi04LjgyNy4wNi0xMy4yNC0uMDMtMS44NzIuMDcyLTIuOTYtMS42NTQtMy4xOTUtMy4zMDktMS4yNjgtNS42MzMtNC4zNC0xMS4yMTItOS42NDItMTMuOTI5LTguMTM5LTQuMDc1LTE3LjU3Ni0zLjg3LTI2LjQ1MS0zLjc4NS02LjQ3OS4zNDQtMTMuNDQ2LjkwNS0xOC45MzUgNC43MTUtNC4yMTQgMi44ODYtNS40OTQgOC43MTItMy45OSAxMy40MDQgMS40MTggMy4zNjkgNS4zMDcgNC40NTYgOC40ODkgNS40NTggMTguMzMgNC43OTQgMzcuNzU0IDQuMzE3IDU1LjczNCAxMC42MjYgNy40NDQgMi41NzIgMTQuNzI2IDcuNTcyIDE3LjI3NCAxNS4zNjYgMy4zMzMgMTAuNDQ2IDEuODcyIDIyLjkzMi01LjU2IDMxLjMxOC02LjAyNyA2LjkwMS0xNC44MDUgMTAuNjU3LTIzLjU2IDEyLjY5Ny0xMS42NDcgMi41OTctMjMuNzM0IDIuNjYzLTM1LjU2MiAxLjUxLTExLjEyMi0xLjI2OC0yMi42OTYtNC4xOS0zMS4yODItMTEuNzY4LTcuMzQyLTYuMzc1LTEwLjkyOC0xNi4zMDgtMTAuNTcyLTI1Ljg5NS4wODUtMS42MTkgMS42OTctMi43NDggMy4yNDgtMi42MTUgNC40NDQtLjAzNiA4Ljg4OC0uMDQ4IDEzLjMzMi4wMDYgMS43NzUtLjEyNyAzLjA5MSAxLjQwNyAzLjE4MiAzLjA4LjgyIDUuMzY3IDIuODM3IDExIDcuNTE3IDE0LjE4MiA5LjAzMiA1LjgyNyAyMC4zNjUgNS40MjggMzAuNzA3IDUuNTkxIDguNTY4LS4zOCAxOC4xODYtLjQ5NSAyNS4xNzgtNi4xNTggMy42ODktMy4yMyA0Ljc4Mi04LjYzNCAzLjc4NS0xMy4yODMtMS4wOC0zLjkyNS01LjE4Ni01Ljc1NC04LjcxMi02Ljk1LTE4LjA5NS01LjcyNC0zNy43MzYtMy42NDctNTUuNjU2LTEwLjEyLTcuMjc1LTIuNTcxLTE0LjMxLTcuNDMyLTE3LjEwNS0xNC45MDYtMy45LTEwLjU3OC0yLjExMy0yMy42NjIgNi4wOTgtMzEuNzY1IDguMDA2LTguMDYgMTkuNTYzLTExLjE2NCAzMC41NTEtMTIuMjc1eiI+PC9wYXRoPgogIDwvZz4KPC9zdmc+"
                style="margin: 0px auto; width: 65%; height: 65%"
              />
            </div>
            <div class="flex-1 leading-snug cursor-pointer" @click="$router.push('/examples/detail')">
              <div class="font-medium text-sm text-active">node-express</div>
              <div class="text-xs text-light">node@16</div>
              <div class="text-xs">
                <span class="x-dot x-dot-info mr-[5px]"></span>
                <span class="font-medium text-info">Running</span>
                <small class="font-medium text-info">(1/1)</small>
                <span>&nbsp;·&nbsp;</span>
                <span class="text-active">
                  <span class="font-medium">1 vCore</span>
                  <span class="text-light">&nbsp;/&nbsp;</span>
                  <span class="font-medium">256MB</span>
                </span>
              </div>
            </div>
            <div class="self-start">
              <a class="cursor-pointer text-lg hover:text-active hover:opacity-50 transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-github icon mx-1">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="border-b border-light hidden">
            <div class="px-5 py-5">
              <div class="mb-3">
                <div class="x-card-title text-xs">
                  CPU
                  <small class="font-normal">(0 vCore/0 vCore)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
              <div class="mb-3">
                <div class="x-card-title text-xs">
                  Memory
                  <small class="font-normal">(0B/0B)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
              <div class="mb-3 hidden">
                <div class="x-card-title text-xs">
                  Replicas
                  <small class="font-normal">(0/0)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="x-navbar">
            <div class="x-navbar">
              <a class="py-4 px-2 cursor-pointer hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-play-fill icon"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>
              </a>
              <a class="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-pause-fill icon text-muted"><path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"></path></svg>
              </a>
            </div>
            <div class="x-navbar pr-2">
              <a class="btn btn-sm btn-default btn-outline bg-active text-primary hover:opacity-70 transition duration-500">Connect</a>
            </div>
          </div>
        </div>
        <!-- // service -->
        <!-- service -->
        <div class="x-card">
          <div class="x-list-item py-5">
            <div class="x-iconbox mr-5 cursor-pointer x-iconbox-sm bg-transparent" @click="$router.push('/examples/detail')">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQoJPHBhdGggZD0iTTMuMTI5IDM1LjEzNkwwIC4wNGgzNC4zNjNsLTMuMTMyIDM1LjA5Ny0xNC4wNTggMy44OTctMTQuMDQ0LTMuOXoiIGZpbGw9IiNFMzRFMjYiPjwvcGF0aD4NCgk8cGF0aCBkPSJNMTcuMTgyIDIuOTF2MzMuMTQ0bDExLjM2Ny0zLjE1MSAyLjY3OC0yOS45OTRIMTcuMTgyeiIgZmlsbD0iI0VGNjYyQSI+PC9wYXRoPg0KCTxwYXRoIGQ9Ik02LjQwMSA3LjIxM2wxLjE2IDEzLjAxN2gxNC45MmwtLjUwMSA1LjU4My00LjgwNCAxLjI5OC00Ljc5NC0xLjI5Ny0uMzItMy41ODRINy43NGwuNjE4IDYuOTEgOC44MTYgMi40NDkgOC44MjgtMi40NDkgMS4xODMtMTMuMjE0SDExLjQ5OGwtLjM5My00LjQwOEgyNy41NzZsLjM4NS00LjMwNUg2LjQwMnoiIGZpbGw9IiNmZmYiPjwvcGF0aD4NCgk8cGF0aCBkPSJNMTcuMTgyIDcuMjEzSDYuNDAybDEuMTYgMTMuMDE3aDkuNjJ2LTQuMzA0aC01LjY4NGwtLjM5My00LjQwOGg2LjA3N1Y3LjIxM3pNMTcuMTgyIDI3LjExbC0uMDA2LjAwMi00Ljc5NC0xLjI5Ny0uMzItMy41ODVINy43NGwuNjE4IDYuOTEgOC44MTYgMi40NDkuMDA3LS4wMDJWMjcuMTF6IiBmaWxsPSIjRUJFQkVCIj48L3BhdGg+DQo8L3N2Zz4="
                style="margin: 0px auto; width: 100%; height: 100%"
              />
            </div>
            <div class="flex-1 leading-snug cursor-pointer" @click="$router.push('/examples/detail')">
              <div class="font-medium text-sm text-active">Web</div>
              <div class="text-xs text-light">web</div>
              <div class="text-xs">
                <span class="x-dot x-dot-danger mr-[5px]"></span>
                <span class="font-medium text-danger">Stopped</span>
                <small class="font-medium text-danger"></small>
                <span>&nbsp;·&nbsp;</span>
                <span class="text-active">
                  <span class="font-medium">1 vCore</span>
                  <span class="text-light">&nbsp;/&nbsp;</span>
                  <span class="font-medium">256MB</span>
                </span>
              </div>
            </div>
            <div class="self-start">
              <a class="cursor-pointer text-lg hover:text-active hover:opacity-50 transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-github icon mx-1">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="border-b border-light hidden">
            <div class="px-5 py-5">
              <div class="mb-3">
                <div class="x-card-title text-xs">
                  CPU
                  <small class="font-normal">(0 vCore/0 vCore)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
              <div class="mb-3">
                <div class="x-card-title text-xs">
                  Memory32
                  <small class="font-normal">(0B/0B)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
              <div class="mb-3 hidden">
                <div class="x-card-title text-xs">
                  Replicas
                  <small class="font-normal">(0/0)</small>
                </div>
                <div class="my-3">
                  <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="x-navbar">
            <div class="x-navbar">
              <a class="py-4 px-2 cursor-pointer hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-play-fill icon"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>
              </a>
              <a class="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-pause-fill icon text-muted"><path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"></path></svg>
              </a>
            </div>
            <div class="x-navbar pr-2">
              <a class="btn btn-sm btn-default btn-outline bg-active text-primary hover:opacity-70 transition duration-500">Connect</a>
            </div>
          </div>
        </div>
        <!-- // service -->
        <div class="rounded-lg flex items-center justify-center hover:border border-dashed border-sky-500/50 bg-transparent opacity-20 hover:opacity-100 cursor-pointer transition duration-300">
          <div>
            <div class="x-iconbox flex items-center justify-center bg-sky-500 relative cursor-pointer x-iconbox-sm radius-circle text-white ring-4 ring-sky-300/20">
              <svg fill="currentColor" viewBox="0 0 1000 1000">
                <g><path d="M905.3,407.7H584.1l0.6-310.3c0-0.3-0.1-0.4-0.1-0.7v-4.9h-0.5c-3.3-43.8-40.4-78.8-84.9-79.1c-44.5-0.3-81.1,34.1-83.8,77.9h-0.6l0.1,317H93.5C47.1,407.3,9.7,445.5,10,492c0.3,46.5,38.2,84.4,84.7,84.7l320.1-0.3l0.1,326.2c0.3,46.5,38.2,84.4,84.7,84.7c46.5,0.3,83.8-37.1,83.5-83.5l0.6-327.5l322.8-0.3c46.5,0.3,83.8-37.1,83.5-83.6C989.7,445.9,951.8,408,905.3,407.7z" /></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
