import Vue from 'vue'
import App from './App.vue'

export const listQuotes = new Vue({
  data: {
    maxQuotes: 10,
    arrQuotes: []
  },
  methods: {
    addQuote(quote){
      // this.$emit('ageWasChanged', quote);
      this.arrQuotes.push(quote);
    },
    deleteQuote(id){
      this.arrQuotes.splice(id, 1);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
