<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
