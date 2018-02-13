<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age (30)</button>
        <button @click="ageFn()">Edit Age (50)</button>
        <button @click="changeAge">Edit Age (60)</button>
        <button @click="changeAge70">Edit Age (70)</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

  export default {
    props: {
      userAge: Number,
      ageFn: Function
    },
    methods: {
      editAge(){
        this.userAge = 30;
        this.$emit("ageWasEdited", this.userAge);
      },
      changeAge() {
        this.userAge = 60;
        eventBus.$emit('ageWasChanged', this.userAge);
      },
      changeAge70() {
        this.userAge = 70;
        eventBus.changeAgeBus(this.userAge);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
