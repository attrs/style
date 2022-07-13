<template>
  <div class="x-dropdown w-full">
    <div class="flex items-center py-4 px-3 mx-0 hover:bg-hover rounded transition duration-300 cursor-pointer text-light hover:text-default">
      <div class="x-iconbox x-iconbox-sm radius-circle mr-2 ring-1 ring-gray-400/30"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/6936583?s=200&v=4')"></div></div>
      <div class="flex-1 text-sm">
        <div class="font-semibold mx-1 text-default">Attrs</div>
        <div class="x-label x-label-3xs x-label-black">Team</div>
      </div>
      <div class="text-sm mr-2 text-light hover:text-info transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
          <path
            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
          />
        </svg>
      </div>
      <div class="text-sm">
        <svg class="rotate-90" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
        </svg>
      </div>
    </div>

    <div class="x-dropdown-items w-full">
      <div class="x-contextmenu">
        <div class="x-list x-list-hover min-w-200">
          <div class="x-list-header">Switch space</div>
          <a class="x-list-item cursor-pointer">
            <div class="flex-1 flex items-center font-medium">
              <div class="x-iconbox x-iconbox-xs radius-circle mr-3 ring-1 ring-gray-400/30"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/2775009?s=70&v=4')"></div></div>
              Mew
            </div>
            <div class="btn btn-2xs btn-black">Personal</div>
          </a>
          <a class="x-list-item cursor-pointer">
            <div class="flex-1 flex items-center font-medium">
              <div class="x-iconbox x-iconbox-xs radius-circle mr-3 ring-1 ring-gray-400/30"><div class="ratio-1by1 w-full bg-cover" style="background-image: url('https://avatars.githubusercontent.com/u/6936583?s=200&v=4')"></div></div>
              Attrs
            </div>
            <div class="btn btn-2xs btn-black">Team</div>
          </a>
          <div class="x-list-header">Actions</div>
          <a class="x-list-item cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-plus-square-dotted text-sky-500 text-base" viewBox="0 0 16 16">
              <path
                d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
            Create a new team
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
