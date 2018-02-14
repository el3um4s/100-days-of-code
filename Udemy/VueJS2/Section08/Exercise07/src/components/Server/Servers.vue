<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    :class="server.status.toLowerCase()"
                    v-for="server in servers">
                Server #{{ server.id }}
                <button @click="showDetailsServer(server)">Show Details</button>
            </li>
        </ul>
    </div>
</template>

<script>
  import  { eventServer }  from '../../main.js';

  export default  {
    data: function() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
        ]
      };
    },
    methods: {
      showDetailsServer(server){
        console.log(server);
        eventServer.showDetailsServer(server);
      }
    }
  }
</script>

<style scoped>
  .critical {
    background-color: #f05a11;
  }

  .unknown {
    background-color: #3ccad7
  }

  .normal {
    background-color: #7bf059;
  }
</style>
