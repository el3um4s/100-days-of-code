<template>
<div class="newQuote">
  <div class="fontColor-Dark fontWeight-bold">
    <slot name="label"></slot>
  </div>
  <div class="padding-Little">
    <textarea
      v-model="tempQuote"
      rows="5"
      class="padding-Little fontColor-Dark borderColor-Dark"></textarea>
    <div @click="addQuote" class="btnAddQuote padding-Little text-Centered backgroundColor-Dark fontColor-Light">Add Quote</div>
    <div class="error text-Centered transition-Removing" v-if="logError">
      Too many Quotes! Delete some before adding ones!
    </div>
  </div>
</div>
</template>

<script>
import { listQuotes } from '../main.js'

export default {
  data(){
    return {
      tempQuote: "",
      logError: false
    }
  },
  methods: {
    addQuote(){
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

.error {
  margin: 8px;
  padding: 8px;
  border: 1px solid #700000;
  color: #700000;
}

.transition-Removing {
    -webkit-animation: fadeOut 3s;
    animation: fadeOut 3s;
}

@-webkit-keyframes fadeOut {
  0% { opacity: 0 }
  50% {opacity: 1 }
  100% { opacity: 0 }
}

@keyframes fadeOut {
  0% { opacity: 0 }
  50% {opacity: 1 }
  100% { opacity: 0 }
}

</style>
