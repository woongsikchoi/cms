<template>
  <div>
    <cms-header></cms-header>
    <container></container>
  </div>
</template>
<script>
  import cmsHeader from './cms-header'
  import container from './container'
  export default {
    components: {
      'cms-header': cmsHeader,
      'container': container
    }
  }
</script>
