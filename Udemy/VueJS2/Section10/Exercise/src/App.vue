<template>
    <div class="container">
      <appQuotesAdded></appQuotesAdded>
      <appFooter></appFooter>
    </div>
</template>

<script>
  import QuotesAdded from './components/QuotesAdded.vue';
  import Footer from './components/Footer.vue';

  export default {
      components: {
        appFooter: Footer,
        appQuotesAdded: QuotesAdded
      }
    }
</script>

<style>
</style>
