<template>
<div class="container">
  <app-header></app-header>
  <hr>
  <app-servers></app-servers>
  <hr>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Servers from './Servers.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers': Servers
  }
}
</script>

<style>

</style>
