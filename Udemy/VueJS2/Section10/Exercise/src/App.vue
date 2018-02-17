<template>
  <div class="container">
    <appTitle>{{ label.title }}</appTitle>

    <appQuotesAdded :quotesAdded="quotes.length*10">
        <span slot="label">{{ label.quotesAdded }}</span>
        <span slot="quotesAdded">{{ quotes.length }}/10</span>
    </appQuotesAdded>

    <appNewQuote>
      <span slot="label">{{ label.newQuote }}</span>
    </appNewQuote>

    <appListQuotes></appListQuotes>
    <appInfo>{{ label.info }}</appInfo>

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
          label: {
            title: 'Wonderful Quotes',
            quotesAdded: 'Quotes Added',
            newQuote: 'New Quote',
            info: 'Info: click on a quote to delete it'
          },
          quotes: listQuotes.$data.arrQuotes
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
