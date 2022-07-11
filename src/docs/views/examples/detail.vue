<template>
  <div class="x-card min-w-md max-w-md m-auto">
    <form class="p-pg">
      <div class="mb-3">
        <label class="x-form-label" for="username">Username</label>
        <input id="username" class="x-form-control w-full font-medium" type="text" placeholder="Username" autocomplete="username" />
      </div>
      <div class="mb-3">
        <label class="x-form-label" for="password">Password</label>
        <input id="password" ref="password" class="x-form-control w-full font-medium error" type="password" placeholder="Password" autocomplete="current-password" />
        <p class="x-form-control-error">Password Incorrect</p>
      </div>
      <div class="flex items-center justify-between mt-6">
        <div>
          <label tabindex="4" class="x-checkbox x-checkbox-primary">
            <input type="checkbox" />
            <span class="text-sm font-medium">Remember email</span>
          </label>
        </div>
        <button type="button" tabindex="5" class="btn btn-primary">Sign in</button>
      </div>
    </form>

    <div class="text-center py-md text-sm">
      <a class="font-semibold" href="javascript:;">Forgot Password?</a>
      <div class="x-separator-h"></div>
      <a class="font-semibold" href="javascript:;">Create an account?</a>
    </div>
  </div>
</template>
