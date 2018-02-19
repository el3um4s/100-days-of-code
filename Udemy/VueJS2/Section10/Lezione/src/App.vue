<template>
    <div class="container">
      <appNewQuote @quoteAdded="newQuote"></appNewQuote>
      <appQuoteGrid :quotes="quotes"></appQuoteGrid>
      <div class="col-sm-12">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it! 
        </div>
      </div>
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
        methods: {
          newQuote(quote) {
            this.quotes.push(quote);
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
