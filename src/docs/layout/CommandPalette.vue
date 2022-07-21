<template>
  <div class="bg-panel shadow-lg md:rounded-lg">
    <div class="bg-card px-5 py-5 md:rounded-t-lg border-b border-light">
      <input ref="inputbox" class="bg-transparent outline-none appearance-none w-full placeholder:text-light" type="text" placeholder="Enter a keyword or command" />
    </div>
    <div class="bg-panel md:rounded-b-lg md:max-h-[50vh] overflow-y-auto scrollbar">
      <div class="x-list x-list-hover my-3">
        <div class="x-list-header">Recently</div>
        <router-link to="/base/typography" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Typography</span>
            Typography
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">1</div>
          </div>
        </router-link>
        <router-link to="/component/button" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Button
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>

        <router-link to="/component/icon" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Icon
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>

        <router-link to="/component/card" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Card
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>

        <router-link to="/component/list" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            List
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/label" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Label
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/navbar" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Navbar
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/pagination" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Pagination
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/tab" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Tab
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/form" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Form
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/table" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Table
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
        <router-link to="/component/alert" class="x-list-item" @click="$emit('close')">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
            <span class="text-light">Component</span>
            Alert
          </div>
          <div class="tools flex space-x-1">
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
                <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
              </svg>
            </div>
            <div class="ml-1.5 rounded-sm font-mono text-[0.625rem] leading-6 px-1.5 ring-slate-100 bg-active text-light">2</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Ref } from 'vue-property-decorator';
import Mousetrap from 'mousetrap';

@Options({
  components: {}
})
export default class CommandPalette extends Vue {
  @Ref() private inputbox: HTMLInputElement;
  private listener: () => void;

  public mounted() {
    this.inputbox?.focus();
    this.listener = this.listener = () => {
      //
    };
    this.listener = Mousetrap.bind(['up', 'down'], this.listener);
  }
}
</script>
