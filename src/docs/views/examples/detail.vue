<template>
  <div class="container p-pg mx-auto">
    <div class="mb-sm">
      <div>
        <a class="px-2 flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition duration-500" @click="$router.push('/examples/project')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-xs bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          <span>Project Overview</span>
        </a>
      </div>
    </div>

    <div class="x-card p-md mb-md">
      <div class="flex items-stretch space-x-10">
        <div class="self-center x-iconbox text-black flex items-center justify-center relative cursor-pointer x-iconbox-lg radius-circle" style="background-color: rgb(70, 72, 62)">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSIjOENDODRCIj4KICAgIDxwYXRoIGQ9Ik0xMTYuNTA0IDMuNThjNi45NjItMy45ODUgMTYuMDMtNC4wMDMgMjIuOTg2IDAgMzQuOTk1IDE5Ljc3NCA3MC4wMDEgMzkuNTE3IDEwNC45OSA1OS4zMDMgNi41ODEgMy43MDcgMTAuOTgzIDExLjAzMSAxMC45MTYgMTguNjE0djExOC45NjhjLjA0OSA3Ljg5Ny00Ljc4OCAxNS4zOTYtMTEuNzMxIDE5LjAxOS0zNC44OCAxOS42NjUtNjkuNzQyIDM5LjM1NC0xMDQuNjE2IDU5LjAxOS03LjEwNiA0LjA2My0xNi4zNTYgMy43NS0yMy4yNC0uNjQ2LTEwLjQ1Ny02LjA2Mi0yMC45MzItMTIuMDk0LTMxLjM5LTE4LjE1LTIuMTM3LTEuMjc0LTQuNTQ2LTIuMjg4LTYuMDU1LTQuMzYgMS4zMzQtMS43OTggMy43MTktMi4wMjIgNS42NTctMi44MDcgNC4zNjUtMS4zODggOC4zNzQtMy42MTYgMTIuMzg0LTUuNzc4IDEuMDE0LS42OTQgMi4yNTItLjQyOCAzLjIyNC4xOTMgOC45NDIgNS4xMjcgMTcuODA1IDEwLjQwMyAyNi43NzcgMTUuNDgxIDEuOTE0IDEuMTA1IDMuODUyLS4zNjIgNS40ODgtMS4yNzQgMzQuMjI4LTE5LjM0NSA2OC40OTgtMzguNjE3IDEwMi43Mi01Ny45NjggMS4yNjgtLjYxIDEuOTY5LTEuOTU2IDEuODY2LTMuMzQ1LjAyNC0zOS4yNDUuMDA2LTc4LjQ5Ny4wMTItMTE3Ljc0Mi4xNDUtMS41NzYtLjc2Ny0zLjAyNS0yLjE5Mi0zLjY3LTM0Ljc1OS0xOS41NzUtNjkuNS0zOS4xOC0xMDQuMjUzLTU4Ljc2YTMuNjIxIDMuNjIxIDAgMDAtNC4wOTQtLjAwNkM5MS4yIDM5LjI1NyA1Ni40NjUgNTguODggMjEuNzEyIDc4LjQ1NGMtMS40Mi42NDYtMi4zNzMgMi4wNzEtMi4yMDQgMy42NTMuMDA2IDM5LjI0NSAwIDc4LjQ5NyAwIDExNy43NDhhMy4zMjkgMy4zMjkgMCAwMDEuODkgMy4zMDNjOS4yNzQgNS4yNTkgMTguNTYgMTAuNDgxIDI3Ljg0IDE1LjcyMiA1LjIyOCAyLjgxNCAxMS42NDcgNC40ODYgMTcuNDA3IDIuMzMgNS4wODMtMS44MjMgOC42NDYtNy4wMSA4LjU0OS0xMi40MDcuMDQ4LTM5LjAxNi0uMDI0LTc4LjAzOC4wMzYtMTE3LjA0OC0uMTI3LTEuNzMyIDEuNTE2LTMuMTYzIDMuMi0zIDQuNDU2LS4wMyA4LjkxOC0uMDYgMTMuMzc0LjAxMiAxLjg2LS4wNDIgMy4xNCAxLjgyMyAyLjkxIDMuNTY4LS4wMTggMzkuMjYzLjA0OCA3OC41MjctLjAzIDExNy43OS4wMTIgMTAuNDY0LTQuMjg3IDIxLjg1LTEzLjk2NiAyNi45Ny0xMS45MjQgNi4xNzctMjYuNjYyIDQuODY3LTM4LjQ0Mi0xLjA1Ni0xMC4xOTgtNS4wOS0xOS45My0xMS4wOTctMjkuOTQ3LTE2LjU1QzUuMzY4IDIxNS44ODYuNTU1IDIwOC4zNTcuNjA0IDIwMC40NjZWODEuNDk3Yy0uMDczLTcuNzQgNC41MDQtMTUuMTk3IDExLjI5LTE4Ljg1QzQ2Ljc2OCA0Mi45NjYgODEuNjM2IDIzLjI3IDExNi41MDQgMy41OHoiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xNDYuOTI4IDg1Ljk5YzE1LjIxLS45NzkgMzEuNDkzLS41OCA0NS4xOCA2LjkxMyAxMC41OTcgNS43NDIgMTYuNDcyIDE3Ljc5MyAxNi42NTkgMjkuNTY2LS4yOTYgMS41ODgtMS45NTYgMi40NjQtMy40NzIgMi4zNTUtNC40MTMtLjAwNi04LjgyNy4wNi0xMy4yNC0uMDMtMS44NzIuMDcyLTIuOTYtMS42NTQtMy4xOTUtMy4zMDktMS4yNjgtNS42MzMtNC4zNC0xMS4yMTItOS42NDItMTMuOTI5LTguMTM5LTQuMDc1LTE3LjU3Ni0zLjg3LTI2LjQ1MS0zLjc4NS02LjQ3OS4zNDQtMTMuNDQ2LjkwNS0xOC45MzUgNC43MTUtNC4yMTQgMi44ODYtNS40OTQgOC43MTItMy45OSAxMy40MDQgMS40MTggMy4zNjkgNS4zMDcgNC40NTYgOC40ODkgNS40NTggMTguMzMgNC43OTQgMzcuNzU0IDQuMzE3IDU1LjczNCAxMC42MjYgNy40NDQgMi41NzIgMTQuNzI2IDcuNTcyIDE3LjI3NCAxNS4zNjYgMy4zMzMgMTAuNDQ2IDEuODcyIDIyLjkzMi01LjU2IDMxLjMxOC02LjAyNyA2LjkwMS0xNC44MDUgMTAuNjU3LTIzLjU2IDEyLjY5Ny0xMS42NDcgMi41OTctMjMuNzM0IDIuNjYzLTM1LjU2MiAxLjUxLTExLjEyMi0xLjI2OC0yMi42OTYtNC4xOS0zMS4yODItMTEuNzY4LTcuMzQyLTYuMzc1LTEwLjkyOC0xNi4zMDgtMTAuNTcyLTI1Ljg5NS4wODUtMS42MTkgMS42OTctMi43NDggMy4yNDgtMi42MTUgNC40NDQtLjAzNiA4Ljg4OC0uMDQ4IDEzLjMzMi4wMDYgMS43NzUtLjEyNyAzLjA5MSAxLjQwNyAzLjE4MiAzLjA4LjgyIDUuMzY3IDIuODM3IDExIDcuNTE3IDE0LjE4MiA5LjAzMiA1LjgyNyAyMC4zNjUgNS40MjggMzAuNzA3IDUuNTkxIDguNTY4LS4zOCAxOC4xODYtLjQ5NSAyNS4xNzgtNi4xNTggMy42ODktMy4yMyA0Ljc4Mi04LjYzNCAzLjc4NS0xMy4yODMtMS4wOC0zLjkyNS01LjE4Ni01Ljc1NC04LjcxMi02Ljk1LTE4LjA5NS01LjcyNC0zNy43MzYtMy42NDctNTUuNjU2LTEwLjEyLTcuMjc1LTIuNTcxLTE0LjMxLTcuNDMyLTE3LjEwNS0xNC45MDYtMy45LTEwLjU3OC0yLjExMy0yMy42NjIgNi4wOTgtMzEuNzY1IDguMDA2LTguMDYgMTkuNTYzLTExLjE2NCAzMC41NTEtMTIuMjc1eiI+PC9wYXRoPgogIDwvZz4KPC9zdmc+"
            style="margin: 0px auto; width: 65%; height: 65%"
          />
        </div>

        <div class="flex-1">
          <div class="flex items-center">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-3">
                <h5 class="leading-tight">node-express</h5>
                <div class="text-xs text-light">node@16</div>
              </div>
              <div class="text-xs text-success">
                <!-- 
                  <div class="inline-block">
                    <span class="x-dot x-dot-info mr-[7px] ring-[3px] ring-sky-500/30 mb-[1px]"></span>
                    <span class="font-medium text-info">Running</span>
                    <small class="font-medium text-info">(1/1)</small>
                  </div>
                  <span>&nbsp;·&nbsp;</span>
                  -->
                <div class="inline-block">
                  <div class="flex text-xs space-x-3">
                    <div class="flex text-xs space-x-1">
                      <span class="text-default font-medium">1.5 vCore</span>
                      <span class="text-light">CPU</span>
                    </div>
                    <div class="flex text-xs space-x-1">
                      <span class="text-default font-medium">512MB</span>
                      <span class="text-light">Memory</span>
                    </div>
                    <div class="hidden md:flex text-xs space-x-1">
                      <span class="text-default font-medium">1</span>
                      <span class="text-light">Instances</span>
                    </div>
                  </div>
                </div>
                <!--
                  <span>&nbsp;·&nbsp;</span>
                  Updated 3 hours ago
                  -->
              </div>
              <div class="text-xs text-success">Updated 3 hours ago</div>
            </div>
          </div>
        </div>

        <div class="x-navbar flex-col justify-between items-end">
          <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
            <div class="x-iconbox x-iconbox-xs radius-circle border bg-success ring-1 ring-gray-100/30">J</div>
            <div class="x-iconbox x-iconbox-xs radius-circle border bg-warning ring-1 ring-gray-100/30">S</div>
            <div class="x-iconbox x-iconbox-xs radius-circle mr-3 ring-1 ring-gray-100/30"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&amp;v=4')"></div></div>
          </dd>
          <div>
            <div class="x-dropdown x-dropdown-align-right">
              <a class="btn btn-sm btn-default m-0 font-normal flex items-center space-x-1">
                <div class="x-iconbox x-iconbox-3xs radius-circle border bg-success ring-1 ring-gray-100/30 mr-2">J</div>
                <b>joje</b>
                <span>branch</span>
              </a>
              <div class="x-dropdown-items">
                <div class="x-contextmenu">
                  <div class="x-list x-list-hover min-w-200">
                    <div class="x-list-header">Select a branch</div>
                    <a class="x-list-item py-2">
                      <div class="x-iconbox x-iconbox-3xs radius-circle border bg-success ring-1 ring-gray-100/30 mr-2">J</div>
                      joje (main)
                    </a>
                    <a class="x-list-item py-2">
                      <div class="x-iconbox x-iconbox-3xs radius-circle border ing-1 ring-gray-100/30 mr-2"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&amp;v=4')"></div></div>
                      Mew
                    </a>
                    <a class="x-list-item py-2">
                      <div class="x-iconbox x-iconbox-3xs radius-circle border bg-warning ring-1 ring-gray-100/30 mr-2">S</div>
                      Stray Cat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-md">
      <div class="mx-1 mb-4 hidden md:flex space-x-3 items-center">
        <div class="flex-1">
          <div class="my-sm x-tab x-tab-plain x-tab-underline x-tab-bg-primary text-md">
            <div class="x-tab-item active" data-tab="services">
              <span class="x-dot x-dot-info mr-[8px] ring-4 ring-sky-500/40 mx-2 hidden"></span>
              Overview
              <div class="x-badge x-badge-info ring-4 ring-sky-500/40 hidden">1</div>
            </div>
            <div class="x-tab-item" data-tab="domains">Build Logs</div>
            <div class="x-tab-item" data-tab="activity">Logs</div>
            <div class="x-tab-item" data-tab="activity">Terminal</div>
            <div class="x-tab-item" data-tab="settings">CLI</div>
            <div class="x-tab-item" data-tab="settings">Config</div>
          </div>
        </div>
      </div>

      <!--
      <div class="x-card">
        <h6 class="text-default font-medium text-md mb-5 m-sm">Usage</h6>

        <div class="my-6 px-sm">
          <div class="mb-1 text-xs">
            <div class="text-light min-w-150">
              CPU
              <small class="font-normal">(0 vCore/0.1 vCore)</small>
            </div>
            <div class="min-w-150 my-3">
              <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 0%"></div></div>
            </div>
          </div>
          <div class="mb-1 text-xs">
            <div class="text-light min-w-150">
              Memory
              <small class="font-normal">(5.15MB/32MB)</small>
            </div>
            <div class="min-w-150 my-3">
              <div class="x-progress-bar x-progress-bar-info overflow-hidden"><div class="x-progress-bar-gauge" style="width: 16.1%"></div></div>
            </div>
          </div>
        </div>
      </div>
      -->
      <div class="mb-lg">
        <h6 class="relative px-1 mb-4">
          Deployments
          <a class="absolute right-2 text-base text-default hover:text-light cursor-pointer transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </a>
        </h6>
        <div class="x-card">
          <h6 class="text-default font-medium text-md m-5 hidden">Deployments</h6>

          <div class="my-6">
            <div class="x-list">
              <div class="x-list-item px-6 py-1">
                <div class="x-iconbox x-iconbox-2xs radius-circle border bg-green-500/80 ring-1 ring-gray-100/30 mr-3">J</div>
                <div class="flex-1">
                  <div class="font-normal">
                    <a class="cursor-pointer link text-xs mr-2">https://port-0-node-ex...jv.gksl1.cloudtype.app</a>
                  </div>
                </div>
                <a class="ml-2 cursor-pointer text-sm text-light hover:text-default transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </div>
              <div class="x-list-item px-6 py-1">
                <div class="x-iconbox x-iconbox-2xs radius-circle x-iconbox-success text-white mr-3"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&amp;v=4')"></div></div>
                <div class="flex-1">
                  <div class="font-normal">
                    <a class="cursor-pointer link text-xs mr-2">https://port-0-node-ex...3k.gksl1.cloudtype.app</a>
                  </div>
                </div>
                <a class="ml-2 cursor-pointer text-sm text-light hover:text-default transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-lg">
        <h6 class="relative px-1 mb-4">
          Deployments
          <a class="absolute right-2 text-base text-default hover:text-light cursor-pointer transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </a>
        </h6>

        <div class="x-card">
          <div class="x-list">
            <div class="x-list-header">Main</div>
            <div class="x-list-item px-6">
              <div class="x-iconbox x-iconbox-xs radius-circle x-iconbox-success text-white mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check" style="width: 80%; height: 80%"><path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z"></path></svg>
              </div>
              <div class="flex-1 mb-2">
                <div class="font-medium text-base">
                  <span class="text-sm mr-2">node@16</span>
                  <span class="text-xs text-success">2 days ago</span>
                </div>
                <div class="text-light text-xs mt-[2px]">
                  <a href="https://github.com/cloudtype/node-express.git" target="_blank" rel="noopener noreferrer" class="link text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="text-active bi bi-github mr-1 text-md">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    username/repo ·
                    <span class="font-medium text-info">master</span>
                  </a>
                </div>
              </div>
              <a class="btn btn-xs btn-default">Connect</a>
              <a class="ml-2 cursor-pointer text-sm text-light hover:text-default transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16">
                  <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                  />
                </svg>
              </a>
            </div>
            <div class="x-list-header">Branch</div>
            <div class="x-list-item px-6">
              <div class="x-iconbox x-iconbox-xs radius-circle x-iconbox-success text-white mr-5"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&amp;v=4')"></div></div>
              <div class="flex-1 mb-2">
                <div class="font-medium text-base">
                  <span class="text-sm mr-2">node@16</span>
                  <span class="text-xs text-success">2 days ago</span>
                </div>
                <div class="text-light text-xs mt-[2px]">
                  <a href="https://github.com/cloudtype/node-express.git" target="_blank" rel="noopener noreferrer" class="link text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="text-active bi bi-github mr-1 text-md">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    username/repo ·
                    <span class="font-medium text-info">feature/CRT-102</span>
                  </a>
                </div>
              </div>
              <a class="btn btn-xs btn-default">Connect</a>
              <a class="ml-2 cursor-pointer text-sm text-light hover:text-default transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16">
                  <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-lg">
        <h6 class="relative px-1 mb-4">
          Deployment History
          <a class="absolute right-2 text-base text-default hover:text-light cursor-pointer transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </a>
        </h6>

        <div class="x-card">
          <div>
            <div class="x-list">
              <div class="x-list-item px-6">
                <div class="x-iconbox x-iconbox-xs radius-circle x-iconbox-success text-white mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check" style="width: 80%; height: 80%"><path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z"></path></svg>
                </div>
                <div class="flex-1 mb-2">
                  <div class="font-medium text-base">
                    <span class="text-sm mr-2">node@16</span>
                    <span class="text-xs text-success">2 days ago</span>
                  </div>
                  <div class="text-light text-xs mt-[2px]">
                    <a href="https://github.com/cloudtype/node-express.git" target="_blank" rel="noopener noreferrer" class="link text-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="text-active bi bi-github mr-1 text-md">
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                      username/repo ·
                      <span class="font-medium text-info">master</span>
                    </a>
                  </div>
                </div>
                <a class="btn btn-xs btn-primary">Restore</a>
              </div>
              <div class="x-list-item px-6">
                <div class="x-iconbox x-iconbox-xs radius-circle x-iconbox-success text-white mr-5"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&amp;v=4')"></div></div>
                <div class="flex-1 mb-2">
                  <div class="font-medium text-base">
                    <span class="text-sm mr-2">node@16</span>
                    <span class="text-xs text-success">2 days ago</span>
                  </div>
                  <div class="text-light text-xs mt-[2px]">
                    <a href="https://github.com/cloudtype/node-express.git" target="_blank" rel="noopener noreferrer" class="link text-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="text-active bi bi-github mr-1 text-md">
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                      username/repo ·
                      <span class="font-medium text-info">feature/CRT-102</span>
                    </a>
                  </div>
                </div>
                <a class="btn btn-xs btn-primary">Restore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
