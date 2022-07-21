<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center">
        <div class="x-iconbox x-iconbox-lg radius-circle mr-2 border text-active hidden mr-5">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" /></svg>
        </div>

        <div class="flex-1">
          <h3>Cards</h3>
          <p class="text-light font-light">Card examples</p>
        </div>
      </div>
    </div>

    <div class="py-md">
      <div class="grid grid-cols-3 gap-5">
        <!-- card -->
        <div class="x-card flex flex-col">
          <div class="x-card-header pr-0">
            <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
            Title
            <div class="tools">
              <div class="x-dropdown x-dropdown-align-right x-dropdown-nocaret">
                <button class="btn btn-icon btn-md">
                  <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                    />
                  </svg>
                </button>

                <div class="x-dropdown-items">
                  <div class="x-contextmenu">
                    <div class="x-list min-w-200">
                      <div class="x-list-header">Header A</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 1
                        <div class="tools">
                          <span class="x-badge">100</span>
                          <div class="x-caret"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div class="x-list">
              <div class="x-list-header">Header A</div>
              <a class="x-list-item">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                List 1
                <div class="tools">
                  <span class="x-badge">100</span>
                  <div class="x-caret"></div>
                </div>
              </a>
              <div class="x-separator mb-0"></div>
              <div class="x-list-header">Header B</div>
              <a class="x-list-item">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                List 2
                <div class="tools">
                  <div class="x-caret"></div>
                </div>
              </a>
              <a class="x-list-item">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                List 3
                <div class="tools">
                  <span class="x-badge x-badge-primary">100</span>
                </div>
              </a>
              <div class="x-separator mb-0"></div>
              <a class="x-list-item">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                List 4
              </a>
            </div>
          </div>
          <div class="x-card-footer text-center p-2">
            <a href="javascript:;" class="text-sm hover:text-active">
              Read More
              <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </a>
          </div>
        </div>
        <!-- // card -->
        <!-- card -->
        <div class="x-card rounded-lg overflow-hidden">
          <div class="ratio-16by9 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" title="Image"></div>
          <div class="p-5">
            <div class="font-semibold text-lg mb-2">Lorem ipsum dolor sit amet</div>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <hr class="x-separator mb-0" />
          <div class="p-3">
            <span class="x-label x-label-rounded x-label-dark x-label-sm"># photography</span>
            <span class="x-label x-label-rounded x-label-dark x-label-sm"># travel</span>
            <span class="x-label x-label-rounded x-label-dark x-label-sm"># winter</span>
          </div>
        </div>
        <div class="x-card overflow-hidden">
          <div class="ratio-16by9 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" title="Image"></div>
          <div class="p-5">
            <div class="font-semibold text-lg mb-2">Lorem ipsum dolor sit amet</div>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <hr class="x-separator mb-0" />
          <div class="p-3">
            <span class="x-label x-label-rounded x-label-black x-label-sm"># photography</span>
            <span class="x-label x-label-rounded x-label-black x-label-sm"># travel</span>
            <span class="x-label x-label-rounded x-label-black x-label-sm"># winter</span>
          </div>
        </div>
        <!-- // card -->

        <!-- card -->
        <div class="x-card col-span-2 bg-gray-500/10 overflow-hidden">
          <div class="h-full w-full flex">
            <div class="h-auto w-56 flex-none bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" title="Image"></div>
            <div class="p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-light flex items-center">
                  <svg class="fill-current text-light w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div class="text-active font-medium text-lg mb-2">Can coffee make you a better developer?</div>
                <p class="text-light text-base font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="text-active leading-none">Jonathan Reinink</p>
                  <p class="text-light">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- // card -->
        <!-- card -->
        <div class="x-card py-md px-sm">
          <form>
            <div class="mb-3">
              <label class="x-form-label text-base font-semibold">Newsletter Subscripion</label>
              <input class="x-form-control w-full" type="text" placeholder="Please Enter Your Email Address" />
            </div>
            <div class="flex justify-end">
              <button class="btn btn-md btn-primary" type="button">Subscripion</button>
            </div>
          </form>
        </div>
        <!-- // card -->
        <!-- card -->
        <div class="x-card col-span-3 rounded-lg overflow-hidden">
          <div class="h-full w-full flex">
            <div class="h-auto w-56 flex-none bg-cover bg-right" style="background-image: url('https://images.pexels.com/photos/4065907/pexels-photo-4065907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" title="Image"></div>
            <div class="p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-light flex items-center">
                  <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div class="font-semibold mb-2">Can coffee make you a better developer?</div>
                <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="leading-none">Jonathan Reinink</p>
                  <p class="text-light">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- // card -->
      </div>
    </div>
  </div>
</template>
