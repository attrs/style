<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center">
        <div class="x-iconbox x-iconbox-lg radius-circle mr-2 border text-active hidden mr-5">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" /></svg>
        </div>

        <div class="flex-1">
          <h3>Billing</h3>
          <p class="text-light font-light">Manage your billing</p>
        </div>
      </div>
    </div>

    <div class="py-md">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5">
        <!-- credit -->
        <div class="x-card p-sm">
          <h6 class="relative ext-active font-medium text-md mb-5">
            Credit

            <a class="absolute -right-1 -top-1 text-base text-default hover:text-light cursor-pointer transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>
          </h6>

          <div class="relative mt-2">
            <div class="inline-flex text-3xl font-medium text-default">$100.00</div>
          </div>
        </div>
        <!-- // credit -->
        <!-- current -->
        <div class="x-card p-sm">
          <h6 class="relative text-active font-medium text-md mb-5">
            Estimated

            <a class="absolute -right-1 -top-1 text-base text-default hover:text-light cursor-pointer transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>
          </h6>

          <div class="relative mt-2">
            <div class="inline-flex text-3xl font-medium text-active">$65.20</div>
          </div>
        </div>
        <!-- // current -->
        <!-- prev -->
        <div class="x-card p-sm">
          <h6 class="relative text-active font-medium text-md mb-5">
            Payment Method

            <a class="absolute -right-1 -top-1 text-base text-default hover:text-light cursor-pointer transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>
          </h6>

          <div class="relative mt-2 text-center py-3">
            <a class="btn btn-sm -btn-outline btn-primary ring-4 ring-sky-500/10">Add Credit Card</a>
          </div>
        </div>
        <!-- // prev -->
      </div>

      <h5 class="relative mt-lg mb-sm">
        Subscriptions
        <a class="absolute right-2 top-1 text-base text-default hover:text-light cursor-pointer transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </a>
      </h5>
      <div class="x-card">
        <div class="x-list x-list-hover my-3">
          <div class="x-list-header">Base Plan</div>
          <a class="x-list-item">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon text-lg text-danger bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Team Plan
              <small class="text-light">(x4)</small>
            </div>
            <div class="tools flex space-x-1"><div class="ml-1.5 rounded-sm text-xs font-medium px-2 py-[2px] bg-active text-info">4 vCore / 4G RAM</div></div>
          </a>
          <div class="x-list-header">Addon</div>
          <a class="x-list-item">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon text-lg text-system bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Disk
              <small class="text-light">(100G)</small>
            </div>
            <div class="tools flex space-x-1"><div class="ml-1.5 rounded-sm text-xs font-medium px-2 py-[2px] bg-active text-info">100G</div></div>
          </a>
        </div>
      </div>

      <h5 class="relative mt-lg mb-sm">
        Invoice
        <a class="absolute right-2 top-1 text-base text-default hover:text-light cursor-pointer transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill rounded-circle" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </a>
      </h5>
      <div class="x-card">
        <div class="x-list x-list-lined x-list-hover my-3">
          <a class="x-list-item py-4">
            <div class="flex-1">2022.06</div>
            <div class="text-normal font-mono text-sm mx-3">$100.00</div>
            <div class="tools flex space-x-1"><div class="ml-1.5 rounded-sm text-xs font-medium px-2 py-[2px] bg-active text-active">Detail</div></div>
          </a>
          <a class="x-list-item py-4">
            <div class="flex-1">2022.05</div>
            <div class="text-normal font-mono text-sm mx-3">$20.00</div>
            <div class="tools flex space-x-1"><div class="ml-1.5 rounded-sm text-xs font-medium px-2 py-[2px] bg-active text-active">Detail</div></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
