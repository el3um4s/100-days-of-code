<template>
<div class="newQuote">
  <appLabel>New Quote</appLabel>
  <div class="padding-Little">
    <textarea
      v-model="tempQuote"
      rows="5"
      class="padding-Little fontColor-Dark borderColor-Dark"></textarea>
    <div @click="addQuote" class="btnAddQuote padding-Little text-Centered backgroundColor-Dark fontColor-Light">Add Quote</div>
    <appError v-if="logError"></appError>
    <appErrorNoQuote v-if="logNoQuote"></appErrorNoQuote>
  </div>
</div>
</template>

<script>
import { listQuotes } from '../main.js';
import Label from './Label.vue';
import Error from './Error.vue';
import ErrorNoQuote from './ErrorNoQuote.vue';

export default {
  data(){
    return {
      tempQuote: "",
      logError: false,
      logNoQuote: false
    }
  },
  components:{
    appLabel: Label,
    appError: Error,
    appErrorNoQuote: ErrorNoQuote
  },
  methods: {
    addQuote(){
      if (this.tempQuote.length === 0) {
        this.logNoQuote = true;
        setTimeout(() => { this.logNoQuote = false; }, 2000);
        return;
      };
      if (listQuotes.$data.arrQuotes.length <= listQuotes.$data.maxQuotes-1 ) {
        listQuotes.addQuote({quota: this.tempQuote});
        this.tempQuote = "";
      } else {
        this.logError = true;
        setTimeout(() => { this.logError = false; }, 3000);
      }
    }
  }
}
</script>

<style scoped>

.newQuote {
  margin: 8px;
  margin-top: 16px;
}

textarea {
  width: 100%;
  max-width: 548px;
  font-size: 1.2em;
}

.btnAddQuote {
  width: 100%;
  max-width: 550px;
  cursor: pointer;
  transition: background 0.8s;
}

.btnAddQuote:hover {
  background: #3ca4bf radial-gradient(circle, transparent 1%, #3ca4bf 1%) center/15000%;
}

.btnAddQuote:active {
  background-color: #31869c;
  background-size: 100%;
  transition: background 0s;
}

</style>
