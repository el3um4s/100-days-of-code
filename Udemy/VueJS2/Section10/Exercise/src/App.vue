<template>
    <div class="container">
      <!-- <appQuotesAdded></appQuotesAdded>
      <appFooter></appFooter> -->
      <!-- title -->
      <div class="padding-Little backgroundColor-Dark fontColor-Light text-Centered"><h1>Wonderful Quotes</h1></div>
      <!-- Quotes Added -->
      <div class="quotesAdded">
        <div class="fontColor-Dark fontWeight-bold">Quotes Added</div>
        <div class="progressBar borderColor-Dark backgroundColor-Light">
          <div class="progressBar-progress backgroundColor-Dark fontColor-Light text-Centered">2 / 10</div>
        </div>
      </div>
      <!-- Add Quote -->
      <div>
        <div class="fontColor-Dark fontWeight-bold">New Quote</div>
        <div class="padding-Little">
          <textarea name="newQuote" rows="5" class="padding-Little fontColor-Dark borderColor-Dark"></textarea>
          <div class="btnAddQuote padding-Little text-Centered backgroundColor-Dark fontColor-Light">Add Quote</div>
        </div>
      </div>
      <div class="listQuotes"></div>
      <!-- Info -->
      <div class="fontColor-Dark padding-Little text-Centered backgroundColor-Light">Info: click on a quote to delete it.</div>
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

<style scoped>
  /* .listQuotes{
    display: grid;
  } */
  .container {
    margin: auto;
    width: 90%;
    max-width: 600px;
    font-family: 'Open Sans', sans-serif;
  }

  .progressBar {
    height: 24px;
  }

  .progressBar-progress {
    height: 100%;
    width: 20%;
  }

  textarea {
    width: 100%;
    max-width: 566px;
    font-size: 1.2em;
  }

  .btnAddQuote {
    width: 100%;
    max-width: 568px;
    cursor: pointer;
  }


</style>
