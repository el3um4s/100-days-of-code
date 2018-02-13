import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
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
