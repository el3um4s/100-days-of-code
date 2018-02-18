<template>
    <div class="container">
      <appNewQuote></appNewQuote>
      <appQuoteGrid :quotes="quotes"></appQuoteGrid>
    </div>
</template>

<script>
  import NewQuote from './components/NewQuote.vue';
  import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data(){
          return {
            quotes:[
              'Just a Quote to see something'
            ],
            maxQuotes: 10
          }
        },
        components: {
          appNewQuote: NewQuote,
          appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
