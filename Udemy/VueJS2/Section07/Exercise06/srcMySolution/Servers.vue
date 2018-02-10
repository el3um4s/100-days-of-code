<template>
  <div class="row">
      <app-listgroup></app-listgroup>
      <app-details></app-details>
  </div>
</template>

<script>
import ServerDetails from './ServerDetails.vue';
import ListGroup from './ListGroup.vue';
export default {
  components: {
    'app-details': ServerDetails,
    'app-listgroup': ListGroup
  }
}
</script>

<style>
</style>
