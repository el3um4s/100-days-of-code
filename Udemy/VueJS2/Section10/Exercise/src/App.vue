<template>
  <div class="container">
    <appTitle>{{ label.title }}</appTitle>

    <appQuotesAdded>
        <span slot="label">{{ label.quotesAdded }}</span>
        <span slot="quotesAdded">2/10</span>
    </appQuotesAdded>

    <appNewQuote>
      <span slot="label">{{ label.newQuote }}</span>
    </appNewQuote>

    <appListQuotes></appListQuotes>
    <appInfo>{{ label.info }}</appInfo>

  </div>
</template>

<script>
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
          }
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
