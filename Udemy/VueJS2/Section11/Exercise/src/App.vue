<template>
<div>
  <form v-if="!dataSubmitted">
    <h2 class="sr-only">Signup Form</h2>
    <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
    <appFullName v-model="fullName"></appFullName>
    <!-- <div class="form-group"><input class="form-control" type="text" name="firstName" placeholder="First Name" v-model="fullName.firstName"></div>
    <div class="form-group"><input class="form-control" type="text" name="lastName" placeholder="Last Name" v-model="fullName.lastName"></div> -->
    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" v-model="email"></div>
    <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" v-model="password"></div>
    <div class="form-group d-flex justify-content-between"><label>Store Data</label>
      <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-1" value="Yes" v-model="storeData"><label class="form-check-label" for="formCheck-1">Yes</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-2" value="No" v-model="storeData"><label class="form-check-label" for="formCheck-2">No</label></div>
    </div>
    <div class="form-group"><button class="btn btn-primary btn-block" @click.prevent="sendForm">Sign Up</button></div>
  </form>
  <form v-if="dataSubmitted">
    <h2 class="sr-only">Signup Form</h2>
    <div class="illustration"><i class="icon ion-person"></i></div>
    <div class="form-group"><input class="form-control" type="text" name="firstName" placeholder="First Name" v-model="fullName.firstName" readonly></div>
    <div class="form-group"><input class="form-control" type="text" name="lastName" placeholder="Last Name" v-model="fullName.lastName" readonly></div>
    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" v-model="email" readonly></div>
    <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" v-model="password" readonly></div>
    <div class="form-group d-flex justify-content-between"><label>Store Data: <strong>{{ storeData }}</strong></label></div>
    <div class="form-group"><button class="btn btn-primary btn-block" @click.prevent="clearData">Clear Data</button></div>
  </form>
</div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  data() {
    return {
      fullName: {
        firstName: null,
        lastName: null
      },
      email: null,
      password: null,
      storeData: 'Yes',
      dataSubmitted: false
    }
  },
  components: {
    appFullName: FullName
  },
  methods: {
    sendForm() {
      this.dataSubmitted = true;
    },
    clearData(){
      this.fullName.firstName = null;
      this.fullName.lastName = null;
      this.email = null;
      this.password = null;
      this.storeData = 'Yes';
      this.dataSubmitted = false;
    }
  }
}
</script>

<style>

</style>




<!-- Exercise 1 -->
<!-- Create a Signup Form where you retrieve the following Information -->
<!-- Full Name (First Name + Last Name) -->
<!-- Mail -->
<!-- Password -->
<!-- Store Data? Yes/No -->

<!-- Exercise 2 -->
<!-- Only display the Form if it has NOT been submitted -->
<!-- Display the Data Summary ONCE the Form HAS been submitted -->

<!-- Exercise 3 -->
<!-- Edit the Example from above and create a custom "Full Name" Control -->
<!-- which still holds the First Name and Last Name Input Field -->

    <!-- <h4>Your Data</h4>

<div class="panel-body">
    <p>Full Name: </p>
    <p>Mail: </p>
    <p>Password: </p>
    <p>Store in Database?: </p>
</div> -->
