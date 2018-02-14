<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Select a server</p>
      <div v-else>
        <p>details:</p>
        <ul>
          <li>id: {{server.id}}</li>
          <li>status: {{server.status}}</li>
        </ul>
        <button @click="server.status='Normal'">Reset Server</button>
      </div>
    </div>

</template>

<script>
import  { eventServer }  from '../../main.js';

export default {
  // props: {
  //   server: Object
  // },
  // Uso data e non props perché poi posso/devo modificare i valori
  // Console c'è questo messaggio di errore
  // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "server"
  data: function() {
    return {
    server: null
  }},
  created(){
    eventServer.$on('showDetailsServer', (server) => {
      this.server = server;
    });
  }
}
</script>

<style>

</style>
