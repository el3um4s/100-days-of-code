import Vue from 'vue'
import App from './App.vue'

export const listQuotes = new Vue({
  data: {
    arrQuotes: [{
      quota: 'Un due tre stella'
    },
    {
      quota: 'Tigre contro tigre'
    },
    {
      quota: 'contro tigre'
    },
    {
      quota: 'Un due'
    },
    {
      quota: 't'
    },
    {
      quota: 'contro tigre'
    }]
  },
  methods: {
    changeAgeBus(age){
      this.$emit('ageWasChanged', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
