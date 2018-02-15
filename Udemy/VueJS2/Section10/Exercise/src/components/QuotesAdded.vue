<template>
  <div class="row">
    <div class="col-xs-12">
      <h3>Quotes Added</h3>
      <appProgressBar></appProgressBar>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
  components: {
    appProgressBar: ProgressBar
  }
}
</script>

<style scoped>
</style>
