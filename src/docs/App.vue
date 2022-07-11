<template>
  <div class="fullsize flex flex-col">
    <PlainLayout>
      <router-view />
    </PlainLayout>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import PlainLayout from '@/layout/PlainLayout.vue';

@Options({
  components: {
    PlainLayout
  }
})
export default class App extends Vue {}
</script>
