<template>
  <div id="app">
    <cms-header></cms-header>
    <router-view></router-view>
    <v-dialog/>
  </div>
</template>

<script>
  import cmsHeader from '@/components/cms-header'
  export default {
    components: {
      'cms-header': cmsHeader
    }
  }

</script>
<style>
  .v--modal-overlay {
    z-index: 9999;
  }
</style>
