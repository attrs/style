<template>
  <div class="fullsize flex flex-col theme-dark">
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

<style scoped lang="postcss">
.btn-gnb {
  @apply font-normal text-md rounded-sm leading-relaxed;
}
</style>
