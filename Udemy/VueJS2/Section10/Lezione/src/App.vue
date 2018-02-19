<template>
    <div class="container">
      <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
      <appNewQuote @quoteAdded="newQuote"></appNewQuote>
      <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
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
  import Header from './components/Header.vue'

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
            if (this.quotes.length > this.maxQuotes) {
              return alert('Please delete Quotes first!');
            }
            this.quotes.push(quote);
          },
          deleteQuote(index) {
            this.quotes.splice(index, 1);
          }
        },
        components: {
          appNewQuote: NewQuote,
          appQuoteGrid: QuoteGrid,
          appHeader: Header
        }
    }
</script>

<style>
</style>
