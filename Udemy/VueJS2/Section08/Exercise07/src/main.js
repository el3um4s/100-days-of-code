import Vue from 'vue'
import App from './App.vue'

export const eventServer = new Vue({
  methods: {
    showDetailsServer(server){
      this.$emit('showDetailsServer', server);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
