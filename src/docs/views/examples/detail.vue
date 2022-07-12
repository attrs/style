<template>
  <div class="container p-pg mx-auto">
    <div class="mb-8">
      <div>
        <a class="px-2 flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition duration-500" @click="$router.push('/examples/project')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-xs bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          <span>Project Overview</span>
        </a>
      </div>
    </div>
    <div class="pb-md border-b">
      <div class="flex items-center space-x-3">
        <div class="x-iconbox text-black flex items-center justify-center relative mr-5 cursor-pointer x-iconbox-lg radius-circle" style="background-color: rgb(70, 72, 62)">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSIjOENDODRCIj4KICAgIDxwYXRoIGQ9Ik0xMTYuNTA0IDMuNThjNi45NjItMy45ODUgMTYuMDMtNC4wMDMgMjIuOTg2IDAgMzQuOTk1IDE5Ljc3NCA3MC4wMDEgMzkuNTE3IDEwNC45OSA1OS4zMDMgNi41ODEgMy43MDcgMTAuOTgzIDExLjAzMSAxMC45MTYgMTguNjE0djExOC45NjhjLjA0OSA3Ljg5Ny00Ljc4OCAxNS4zOTYtMTEuNzMxIDE5LjAxOS0zNC44OCAxOS42NjUtNjkuNzQyIDM5LjM1NC0xMDQuNjE2IDU5LjAxOS03LjEwNiA0LjA2My0xNi4zNTYgMy43NS0yMy4yNC0uNjQ2LTEwLjQ1Ny02LjA2Mi0yMC45MzItMTIuMDk0LTMxLjM5LTE4LjE1LTIuMTM3LTEuMjc0LTQuNTQ2LTIuMjg4LTYuMDU1LTQuMzYgMS4zMzQtMS43OTggMy43MTktMi4wMjIgNS42NTctMi44MDcgNC4zNjUtMS4zODggOC4zNzQtMy42MTYgMTIuMzg0LTUuNzc4IDEuMDE0LS42OTQgMi4yNTItLjQyOCAzLjIyNC4xOTMgOC45NDIgNS4xMjcgMTcuODA1IDEwLjQwMyAyNi43NzcgMTUuNDgxIDEuOTE0IDEuMTA1IDMuODUyLS4zNjIgNS40ODgtMS4yNzQgMzQuMjI4LTE5LjM0NSA2OC40OTgtMzguNjE3IDEwMi43Mi01Ny45NjggMS4yNjgtLjYxIDEuOTY5LTEuOTU2IDEuODY2LTMuMzQ1LjAyNC0zOS4yNDUuMDA2LTc4LjQ5Ny4wMTItMTE3Ljc0Mi4xNDUtMS41NzYtLjc2Ny0zLjAyNS0yLjE5Mi0zLjY3LTM0Ljc1OS0xOS41NzUtNjkuNS0zOS4xOC0xMDQuMjUzLTU4Ljc2YTMuNjIxIDMuNjIxIDAgMDAtNC4wOTQtLjAwNkM5MS4yIDM5LjI1NyA1Ni40NjUgNTguODggMjEuNzEyIDc4LjQ1NGMtMS40Mi42NDYtMi4zNzMgMi4wNzEtMi4yMDQgMy42NTMuMDA2IDM5LjI0NSAwIDc4LjQ5NyAwIDExNy43NDhhMy4zMjkgMy4zMjkgMCAwMDEuODkgMy4zMDNjOS4yNzQgNS4yNTkgMTguNTYgMTAuNDgxIDI3Ljg0IDE1LjcyMiA1LjIyOCAyLjgxNCAxMS42NDcgNC40ODYgMTcuNDA3IDIuMzMgNS4wODMtMS44MjMgOC42NDYtNy4wMSA4LjU0OS0xMi40MDcuMDQ4LTM5LjAxNi0uMDI0LTc4LjAzOC4wMzYtMTE3LjA0OC0uMTI3LTEuNzMyIDEuNTE2LTMuMTYzIDMuMi0zIDQuNDU2LS4wMyA4LjkxOC0uMDYgMTMuMzc0LjAxMiAxLjg2LS4wNDIgMy4xNCAxLjgyMyAyLjkxIDMuNTY4LS4wMTggMzkuMjYzLjA0OCA3OC41MjctLjAzIDExNy43OS4wMTIgMTAuNDY0LTQuMjg3IDIxLjg1LTEzLjk2NiAyNi45Ny0xMS45MjQgNi4xNzctMjYuNjYyIDQuODY3LTM4LjQ0Mi0xLjA1Ni0xMC4xOTgtNS4wOS0xOS45My0xMS4wOTctMjkuOTQ3LTE2LjU1QzUuMzY4IDIxNS44ODYuNTU1IDIwOC4zNTcuNjA0IDIwMC40NjZWODEuNDk3Yy0uMDczLTcuNzQgNC41MDQtMTUuMTk3IDExLjI5LTE4Ljg1QzQ2Ljc2OCA0Mi45NjYgODEuNjM2IDIzLjI3IDExNi41MDQgMy41OHoiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xNDYuOTI4IDg1Ljk5YzE1LjIxLS45NzkgMzEuNDkzLS41OCA0NS4xOCA2LjkxMyAxMC41OTcgNS43NDIgMTYuNDcyIDE3Ljc5MyAxNi42NTkgMjkuNTY2LS4yOTYgMS41ODgtMS45NTYgMi40NjQtMy40NzIgMi4zNTUtNC40MTMtLjAwNi04LjgyNy4wNi0xMy4yNC0uMDMtMS44NzIuMDcyLTIuOTYtMS42NTQtMy4xOTUtMy4zMDktMS4yNjgtNS42MzMtNC4zNC0xMS4yMTItOS42NDItMTMuOTI5LTguMTM5LTQuMDc1LTE3LjU3Ni0zLjg3LTI2LjQ1MS0zLjc4NS02LjQ3OS4zNDQtMTMuNDQ2LjkwNS0xOC45MzUgNC43MTUtNC4yMTQgMi44ODYtNS40OTQgOC43MTItMy45OSAxMy40MDQgMS40MTggMy4zNjkgNS4zMDcgNC40NTYgOC40ODkgNS40NTggMTguMzMgNC43OTQgMzcuNzU0IDQuMzE3IDU1LjczNCAxMC42MjYgNy40NDQgMi41NzIgMTQuNzI2IDcuNTcyIDE3LjI3NCAxNS4zNjYgMy4zMzMgMTAuNDQ2IDEuODcyIDIyLjkzMi01LjU2IDMxLjMxOC02LjAyNyA2LjkwMS0xNC44MDUgMTAuNjU3LTIzLjU2IDEyLjY5Ny0xMS42NDcgMi41OTctMjMuNzM0IDIuNjYzLTM1LjU2MiAxLjUxLTExLjEyMi0xLjI2OC0yMi42OTYtNC4xOS0zMS4yODItMTEuNzY4LTcuMzQyLTYuMzc1LTEwLjkyOC0xNi4zMDgtMTAuNTcyLTI1Ljg5NS4wODUtMS42MTkgMS42OTctMi43NDggMy4yNDgtMi42MTUgNC40NDQtLjAzNiA4Ljg4OC0uMDQ4IDEzLjMzMi4wMDYgMS43NzUtLjEyNyAzLjA5MSAxLjQwNyAzLjE4MiAzLjA4LjgyIDUuMzY3IDIuODM3IDExIDcuNTE3IDE0LjE4MiA5LjAzMiA1LjgyNyAyMC4zNjUgNS40MjggMzAuNzA3IDUuNTkxIDguNTY4LS4zOCAxOC4xODYtLjQ5NSAyNS4xNzgtNi4xNTggMy42ODktMy4yMyA0Ljc4Mi04LjYzNCAzLjc4NS0xMy4yODMtMS4wOC0zLjkyNS01LjE4Ni01Ljc1NC04LjcxMi02Ljk1LTE4LjA5NS01LjcyNC0zNy43MzYtMy42NDctNTUuNjU2LTEwLjEyLTcuMjc1LTIuNTcxLTE0LjMxLTcuNDMyLTE3LjEwNS0xNC45MDYtMy45LTEwLjU3OC0yLjExMy0yMy42NjIgNi4wOTgtMzEuNzY1IDguMDA2LTguMDYgMTkuNTYzLTExLjE2NCAzMC41NTEtMTIuMjc1eiI+PC9wYXRoPgogIDwvZz4KPC9zdmc+"
            style="margin: 0px auto; width: 65%; height: 65%"
          />
        </div>

        <div class="flex-1">
          <div class="flex items-center">
            <div class="flex-1">
              <h4 class="mb-2">node-express</h4>
              <div class="text-xs text-success">Updated 3 hours ago</div>
              <div class="mt-1">
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
            </div>
          </div>
        </div>

        <div class="x-navbar self-start mr-1 mt-3">
          <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
            <img src="https://s.gravatar.com/avatar/b108f1755344e3171652353a5f73c0bc?s=100&r=x&d=retro" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
            <img src="https://s.gravatar.com/avatar/ba6fa8051ab0fb7cc7945122b8d9d28f?s=100&r=x&d=robohash" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white/50" loading="lazy" />
          </dd>
        </div>
      </div>
    </div>

    <div class="py-md"></div>
  </div>
</template>
