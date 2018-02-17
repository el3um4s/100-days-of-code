<template>
    <div @click="deleteQuote(id)" class="singleQuota fontColor-Dark backgroundColor-Light padding-Little text-Centered borderColor-Dark transition-Fade">
      <slot name="quota"></slot>
    </div>
</template>

<script>
import { listQuotes } from '../main.js';

export default {
  props: {
    id: Number
  },
  methods: {
    deleteQuote(id){
      listQuotes.deleteQuote(id);
    }
  }
}
</script>

<style scoped>
.singleQuota {
  width: auto;
}
</style>
