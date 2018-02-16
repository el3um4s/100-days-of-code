<template>
<div class="listQuotes">
  <appSingleQuota v-for="quota in quotes">
    <span slot="quota">{{ quota.quota }}</span></appSingleQuota>
</div>
</template>

<script>
import SingleQuota from './SingleQuota.vue';
import {
  listQuotes
} from '../main.js';

export default {
  data() {
    return {
      quotes: listQuotes.$data.arrQuotes
    }
  },
  components: {
    appSingleQuota: SingleQuota
  }
}
</script>

<style scoped>
.listQuotes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 8px;
  grid-auto-flow: dense;
}
</style>
