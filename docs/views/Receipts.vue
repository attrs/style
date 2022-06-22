<template>
  <div>영수증</div>
</template>

<script lang="ts">
  import { Options, Vue, Prop, Watch } from 'vue-property-decorator';
  import IconActivity from 'bootstrap-icons/icons/activity.svg';

  @Options({
    components: {
      IconActivity
    }
  })
  export default class Receipts extends Vue {
    @Prop() readonly msg!: string;

    private project = null;

    private create() {
      this.project = { name: 'my project' };
    }

    public async mounted() {
      // console.log('mounted', this.msg);
    }

    @Watch('project')
    private watch() {
      // console.log('project', this.project);
    }
  }
</script>
