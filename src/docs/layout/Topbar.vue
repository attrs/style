<template>
  <div class="flex" flex="1">
    <div class="x-navbar hidden">
      <a class="btn btn-icon">
        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </a>
    </div>
    <div class="x-navbar x-navbar-align-end flex-1">
      <div class="hidden">
        <label class="x-switch x-switch-rounded x-switch-sm x-switch-default">
          <input type="checkbox" />
          <span></span>
        </label>
      </div>
      <a href="https://github.com/attrs/style" target="_blank" class="btn hidden">
        <svg class="icon mr-0" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
          />
        </svg>
        <div id="github_stargazers" class="x-badge x-badge-info">0</div>
      </a>
      <div class="x-dropdown x-dropdown-align-right">
        <a class="btn">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
            <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
          </svg>
        </a>
        <div class="x-dropdown-items">
          <div class="x-contextmenu">
            <div class="x-list x-list-hover min-w-200">
              <div class="x-list-header">Select a theme</div>
              <a class="x-list-item cursor-pointer" @click="setTheme('dark')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
                </svg>
                Dark Theme
                <small class="ml-1">.theme-dark</small>
              </a>
              <a class="x-list-item cursor-pointer" @click="setTheme('light')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                  <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
                </svg>
                Light Theme
                <small class="ml-1">.theme-light</small>
              </a>
              <a class="x-list-item cursor-pointer" @click="setTheme('mix')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                  <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                </svg>
                Dark sidebar + Light contents
              </a>
              <a class="x-list-item cursor-pointer" @click="setTheme('violet')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                  <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
                </svg>
                Violet Theme
                <small class="ml-1">.theme-violet</small>
              </a>
              <a class="x-list-item cursor-pointer" @click="setTheme('red')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                  <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
                </svg>
                Red Theme
                <small class="ml-1">.theme-red</small>
              </a>
              <div class="x-separator"></div>
              <a class="x-list-item cursor-pointer" @click="setTheme('')">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                  <path fill-rule="evenodd" d="M4 14V2h1v12H4z" />
                </svg>
                Default
                <small class="ml-1">prefers-color-scheme auto detection</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="x-dropdown x-dropdown-align-right">
        <a class="btn flex items-center px-3 pr-5 text-sm">
          <div class="x-iconbox x-iconbox-xs radius-circle border bg-green-500/80 ring-1 ring-gray-500/30">J</div>
          &nbsp;
        </a>
        <div class="x-dropdown-items">
          <div class="x-contextmenu mr-1">
            <div class="x-list x-list-hover min-w-200">
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
              <div class="x-separator"></div>
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
              <div class="x-separator"></div>
              <a href="https://github.com/attrs/style/tree/master/src/docs" target="_blank" class="x-list-item">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  ></path>
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';

@Options({
  components: {}
})
export default class Topbar extends Vue {
  public mounted() {
    this.applyTheme();
  }

  private applyTheme() {
    const theme = localStorage.theme;
    const body = document.body;
    const sidebar = document.documentElement.querySelector('#sidebar');

    body.classList.remove('theme-dark');
    body.classList.remove('theme-light');
    body.classList.remove('theme-violet');
    body.classList.remove('theme-red');
    sidebar?.classList.remove('theme-dark');

    if (theme === 'dark') {
      body.classList.add('theme-dark');
    } else if (theme === 'light') {
      body.classList.add('theme-light');
    } else if (theme === 'violet') {
      body.classList.add('theme-violet');
    } else if (theme === 'red') {
      body.classList.add('theme-red');
    } else if (theme === 'mix') {
      body.classList.add('theme-light');
      sidebar?.classList.add('theme-dark');
    }
  }

  private setTheme(theme: string) {
    if (!theme) localStorage.removeItem('theme');
    else localStorage.theme = theme;
    this.applyTheme();
  }
}
</script>
