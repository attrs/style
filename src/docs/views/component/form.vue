<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center">
        <div class="x-iconbox x-iconbox-lg radius-circle mr-2 border text-active hidden mr-5">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" /></svg>
        </div>

        <div class="flex-1">
          <h3>Form</h3>
          <p class="text-light font-light">Form examples</p>
        </div>
      </div>
    </div>

    <div class="py-md">
      <div class="x-card-title">Vertical</div>
      <div class="x-card mb-md p-sm">
        <div>
          <div class="mb-3">
            <label class="x-form-label" for="firstname">First Name</label>
            <input id="firstname" ref="firstname" class="x-form-control min-w-300" type="text" placeholder="John" autocomplete="firstname" />
            <p class="x-form-control-message font-bold">Please fill out this field.</p>
          </div>
          <div class="mb-3">
            <label class="x-form-label" for="lastname">Last Name</label>
            <input id="lastname" ref="lastname" class="x-form-control min-w-300" type="text" placeholder="Doe" autocomplete="lastname" />
          </div>
          <div class="mb-3">
            <label class="x-form-label" for="city">City</label>
            <select id="city" ref="city" class="x-form-control w-full">
              <option>Seoul</option>
            </select>
          </div>
          <button class="btn btn-primary" type="button">Submit</button>
        </div>
      </div>

      <div class="x-card-title">Horizontal</div>
      <div class="x-card mb-md p-sm">
        <div>
          <div class="flex flex-wrap mb-sm">
            <div class="w-full lg:w-1/4 mb-6 md:mb-3 pr-3">
              <label class="x-form-label" for="firstname2">First Name</label>
              <input id="firstname2" ref="firstname" class="x-form-control w-full" type="text" placeholder="John" autocomplete="firstname" />
              <p class="x-form-control-message font-bold">Please fill out this field.</p>
            </div>
            <div class="w-full lg:w-1/4 mb-6 md:mb-3 pr-3">
              <label class="x-form-label" for="lastname2">Last Name</label>
              <input id="lastname2" ref="lastname" class="x-form-control w-full" type="text" placeholder="John" autocomplete="firstname" />
            </div>
            <div class="w-full lg:w-1/4 mb-6 md:mb-3 pr-3">
              <label class="x-form-label" for="city2">City</label>
              <select id="city2" ref="city" class="x-form-control w-full">
                <option>Seoul</option>
              </select>
            </div>
            <div class="w-full lg:w-1/4 mb-6 md:mb-3 pr-3">
              <label class="x-form-label">&nbsp;</label>
              <button class="btn btn-default" type="button">Add</button>
            </div>
          </div>
        </div>
      </div>

      <div class="x-card-title">Flex</div>
      <div class="x-card mb-md p-sm">
        <div>
          <div class="flex">
            <input type="text" placeholder="Name" class="x-form-control w-full" />
            <select class="x-form-control flex-1">
              <option value="">Select Target</option>
              <option value="aws-eks-alpha">Target</option>
            </select>
            <a type="button" class="btn btn-primary text-center btn-disabled" style="width: 90px">Add</a>
          </div>
        </div>
      </div>

      <div class="x-card-title">Grid</div>
      <div class="x-card mb-md p-sm">
        <div class="grid grid-cols-2 gap-5">
          <div>
            <label class="x-form-label" for="firstname3">First Name</label>
            <input id="firstname3" ref="firstname" class="x-form-control w-full" type="text" placeholder="John" autocomplete="firstname" />
            <p class="x-form-control-message font-bold">Please fill out this field.</p>
          </div>
          <div>
            <label class="x-form-label" for="lastname3">Last Name</label>
            <input id="lastname3" ref="lastname" class="x-form-control w-full" type="text" placeholder="John" autocomplete="firstname" />
          </div>
          <div>
            <label class="x-form-label" for="city3">City</label>
            <select id="city3" ref="city" class="x-form-control w-full">
              <option>Seoul</option>
            </select>
          </div>
          <div>
            <label class="x-form-label" for="address3">Address</label>
            <input id="address3" ref="address" class="x-form-control w-full" type="text" placeholder="Address" autocomplete="address" />
          </div>
          <div class="col-span-2">
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
      </div>

      <div class="x-card-title">Checkbox</div>
      <div class="x-card grid grid-cols-2 divide-x divide-y divide-border mb-md">
        <!-- Square-->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Default</h6>
          <div class="grid grid-cols-3">
            <label class="x-checkbox">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-default">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-info">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-warning">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-success">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-system">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-danger">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-black">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
          </div>
        </div>

        <!-- rounded -->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Rounded</h6>
          <div class="grid grid-cols-3">
            <label class="x-checkbox x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-default x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-info x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-warning x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-success x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-system x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-danger x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
            <label class="x-checkbox x-checkbox-black x-checkbox-rounded">
              <input type="checkbox" checked />
              <span>Checkbox</span>
            </label>
          </div>
        </div>
      </div>

      <div class="x-card-title">Radio</div>
      <div class="x-card grid grid-cols-2 divide-x divide-y divide-border mb-md">
        <!-- Square-->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Default</h6>
          <div class="grid grid-cols-3">
            <label class="x-checkbox">
              <input type="radio" name="radio" checked />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-default">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-info">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-warning">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-success">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-system">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-danger">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-black">
              <input type="radio" name="radio" />
              <span>Radio</span>
            </label>
          </div>
        </div>

        <!-- rounded -->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Square</h6>
          <div class="grid grid-cols-3">
            <label class="x-checkbox x-checkbox-square">
              <input type="radio" name="radio2" checked />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-default x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-info x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-warning x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-success x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-system x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-danger x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
            <label class="x-checkbox x-checkbox-black x-checkbox-square">
              <input type="radio" name="radio2" />
              <span>Radio</span>
            </label>
          </div>
        </div>
      </div>

      <div class="x-card-title">Switch</div>
      <div class="x-card grid grid-cols-2 divide-x divide-y divide-border mb-md">
        <!-- Square-->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Default</h6>
          <div class="grid grid-cols-4">
            <label class="x-switch">
              <input type="checkbox" />
              <span data-on="Yes" data-off="No"></span>
            </label>
            <label class="x-switch">
              <input type="checkbox" />
              <span></span>
            </label>
            <label class="x-switch x-switch-rounded">
              <input type="checkbox" />
              <span data-on="Yes" data-off="No"></span>
            </label>
            <label class="x-switch x-switch-rounded">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>

        <!-- rounded -->
        <div class="p-md">
          <h6 class="text-light font-semibold mb-xs">Colored</h6>
          <div class="grid grid-cols-3">
            <label class="x-switch x-switch-rounded x-switch-primary mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-secondary mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-default mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-info mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-success mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-warning mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-danger mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-system mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>

            <label class="x-switch x-switch-rounded x-switch-black mb-1">
              <input type="checkbox" checked />
              <span></span>
            </label>
          </div>
        </div>
      </div>

      <div class="x-card-title">Login</div>
      <div class="x-card grid grid-cols-2 divide-x divide-y divide-border mb-md">
        <div class="p-sm">
          <div class="w-full max-w-md m-auto self-center">
            <form class="x-form">
              <div class="mb-3">
                <label class="x-form-label" for="username">Username</label>
                <input id="username" ref="username" class="x-form-control w-full" type="text" placeholder="Username" autocomplete="username" />
              </div>
              <div class="mb-3">
                <label class="x-form-label" for="password">Password</label>
                <input id="password" ref="password" class="x-form-control w-full" type="password" placeholder="Password" autocomplete="current-password" />
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  <label class="x-checkbox">
                    <input type="checkbox" />
                    <span>Remember username</span>
                  </label>
                </div>
                <button class="btn btn-primary" type="button">Log In</button>
              </div>
            </form>

            <div class="font-semibold text-base text-center py-md">
              <a href="javascript:;">Forgot Password?</a>
              <div class="x-separator-h"></div>
              <a href="javascript:;">Create an account?</a>
            </div>
          </div>
        </div>
        <div class="p-sm">
          <div class="w-full max-w-md m-auto self-center">
            <form class="x-form">
              <div class="mb-3">
                <label class="x-form-label" for="username2">Username</label>
                <input id="username2" ref="username" class="x-form-control w-full" type="text" placeholder="Username" autocomplete="username" />
              </div>
              <div class="mb-3">
                <label class="x-form-label" for="password2">Password</label>
                <input id="password2" ref="password" class="x-form-control w-full error" type="password" placeholder="Password" autocomplete="current-password" />
                <p class="x-form-control-error">Password Incorrect</p>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  <label class="x-checkbox x-checkbox-warning x-checkbox-rounded">
                    <input type="checkbox" />
                    <span>Remember username</span>
                  </label>
                </div>
                <button class="btn btn-primary" type="button">Log In</button>
              </div>
            </form>

            <div class="font-semibold text-base text-center py-md">
              <a href="javascript:;">Forgot Password?</a>
              <div class="x-separator-h"></div>
              <a href="javascript:;">Create an account?</a>
            </div>
          </div>
        </div>
      </div>

      <div class="x-card-title">List Form</div>
      <div class="x-card mb-md">
        <div class="x-list x-list-lined">
          <div class="x-list-item" data-toggle="settings">
            <div class="flex-1">
              <div class="font-bold text-lg">Settings</div>
              <div class="x-form-control-message">Timezone &amp; Locale</div>
            </div>
            <div class="x-caret x-caret-down"></div>
          </div>
          <div data-toggle-id="settings" class="p-sm" style="display: none">
            <div>
              <div class="mb-3">
                <label class="x-form-label">First Name</label>
                <input ref="firstname" class="x-form-control max-w-md" type="text" placeholder="John" autocomplete="firstname" />
                <p class="x-form-control-message font-bold">Please fill out this field.</p>
              </div>
              <div class="mb-3">
                <label class="x-form-label">Last Name</label>
                <input ref="lastname" class="x-form-control max-w-md" type="text" placeholder="Doe" autocomplete="lastname" />
              </div>
              <div class="mb-3">
                <label class="x-form-label">City</label>
                <select ref="city" class="x-form-control w-full">
                  <option>Seoul</option>
                </select>
              </div>
              <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
          <div class="x-list-item">
            <div class="flex-1">
              <div class="font-bold text-lg">Configuration</div>
              <div class="x-form-control-message">UI & Theme</div>
            </div>
            <div class="btn btn-default" data-toggle="configuration">Expand</div>
          </div>
          <div data-toggle-id="configuration" class="p-sm" style="display: none">
            <div>
              <div class="mb-3">
                <label class="x-form-label">First Name</label>
                <input ref="firstname" class="x-form-control max-w-md" type="text" placeholder="John" autocomplete="firstname" />
                <p class="x-form-control-message font-semibold">Please fill out this field.</p>
              </div>
              <div class="mb-3">
                <label class="x-form-label">Last Name</label>
                <input ref="lastname" class="x-form-control max-w-md" type="text" placeholder="Doe" autocomplete="lastname" />
              </div>
              <div class="mb-3">
                <label class="x-form-label">City</label>
                <select ref="city" class="x-form-control w-full">
                  <option>Seoul</option>
                </select>
              </div>
              <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
          <div class="x-list-item">
            <div class="flex-1">
              <div class="font-bold text-lg">Change repository visibility</div>
              <div class="x-form-control-message">This repository is currently public.</div>
            </div>
            <label class="x-switch x-switch-rounded">
              <input type="checkbox" checked />
              <span></span>
            </label>
          </div>
        </div>
      </div>

      <div class="x-card-title">Field Form</div>
      <div class="x-card p-sm mb-md">
        <div class="x-field">
          <div class="x-field-label">
            <h6 class="font-bold text-lg">Project Name</h6>
          </div>
          <div class="x-field-body">
            <p class="x-form-control w-full">myproject</p>
            <p class="x-form-control-message">
              Template repositories let users generate new repositories with the same directory structure and files.
              <a class="link">Learn more</a>
            </p>
          </div>
        </div>
        <div class="x-field">
          <div class="x-field-label">
            <h6 class="font-bold text-lg">Project Settings</h6>
            <p class="text-xs">Template repositories let users generate new repositories with the same directory structure and files.</p>
            <a href="javascript:;" class="link text-xs">Learn more.</a>
          </div>
          <div class="x-field-body">
            <div class="x-card bg-panel-em x-list x-list-lined">
              <div class="x-list-item" data-toggle="project-settings">
                <div class="flex-1">
                  <div class="font-bold text-lg">Project</div>
                  <div class="x-form-control-message">Project Settings</div>
                </div>
                <div class="x-caret x-caret-down"></div>
              </div>
              <div data-toggle-id="project-settings" class="p-sm">
                <div>
                  <div class="mb-3">
                    <label class="x-form-label">First Name</label>
                    <input ref="firstname" class="x-form-control max-w-md" type="text" placeholder="John" autocomplete="firstname" />
                    <p class="x-form-control-message font-semibold">Please fill out this field.</p>
                  </div>
                  <button class="btn btn-primary" type="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="x-field">
          <div class="x-field-label">
            <h6 class="font-bold text-lg">Environments</h6>
            <p class="text-xs">Public wikis will still be readable by everyone.</p>
            <a href="javascript:;" class="link text-xs">Learn more.</a>
          </div>
          <div class="x-field-body">
            <div class="x-card bg-panel-em x-list x-list-lined">
              <div class="x-list-item" data-toggle="project-settings">
                <div class="flex-1">
                  <div class="font-bold text-lg">Environment</div>
                  <div class="x-form-control-message">Set Environment Variables</div>
                </div>
                <div class="x-caret x-caret-down"></div>
              </div>
              <div data-toggle-id="project-settings" class="p-sm">
                <div>
                  <div class="mb-3">
                    <label class="x-form-label">First Name</label>
                    <input ref="firstname" class="x-form-control max-w-md" type="text" placeholder="John" autocomplete="firstname" />
                    <p class="x-form-control-message font-bold">Please fill out this field.</p>
                  </div>
                  <button class="btn btn-primary" type="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
