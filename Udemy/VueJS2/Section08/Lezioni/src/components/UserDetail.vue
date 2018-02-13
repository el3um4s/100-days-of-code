<template>
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>User Name: {{ switchName() }}</p>
  <p>User Age: {{ userAge }}</p>
  <button @click="resetName">Reset name</button>
  <button @click="resetFn()">Reset Name</button>
</div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    myName: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = 'max';
      this.$emit('nameWasReset', this.myName);
    }
  },
  created(){
    eventBus.$on('ageWasChanged', (eta) => {
      this.userAge = eta;
    });
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
