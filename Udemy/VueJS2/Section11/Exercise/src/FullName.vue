<template>
  <div>
    <div class="form-group"><input class="form-control" type="text" placeholder="First Name" v-model="firstName" @input="changeName"></div>
    <div class="form-group"><input class="form-control" type="text" placeholder="Last Name" v-model="lastName" @input="changeName"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: Object}
  },
  data(){
    return {
      firstName: this.value.firstName,
      lastName: this.value.lastName
    }
  },
  methods: {
    changeName(){
      console.log(this.value);
      const nomeCompleto = {
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.$emit('input', nomeCompleto);
    }
  }
}
</script>

<style>
</style>
