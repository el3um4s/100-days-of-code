<template>
  <div class="container">
    <appTitle>Wonderful Quotes</appTitle>
    <appQuotesAdded :quotesAdded="quotes.length" :maxQuotes="maxQuotes"></appQuotesAdded>
    <appNewQuote></appNewQuote>
    <appListQuotes :listQuotes="quotes"></appListQuotes>
    <appInfo>Info: click on a quote to delete it</appInfo>
  </div>
</template>

<script>
  import { listQuotes } from './main.js';
  import Title from './components/Title.vue';
  import QuotesAdded from './components/QuotesAdded.vue';
  import NewQuote from './components/NewQuote.vue';
  import ListQuotes from './components/ListQuotes.vue';
  import Info from './components/Info.vue';

  export default {
      data(){
        return {
          quotes: listQuotes.$data.arrQuotes,
          maxQuotes: listQuotes.$data.maxQuotes
        }
      },
      components: {
        appTitle: Title,
        appQuotesAdded: QuotesAdded,
        appNewQuote: NewQuote,
        appListQuotes: ListQuotes,
        appInfo: Info
      }
    }
</script>

<style scoped>
  .container {
    margin: auto;
    width: 90%;
    max-width: 600px;
    font-family: 'Open Sans', sans-serif;
  }

</style>
