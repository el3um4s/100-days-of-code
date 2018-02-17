<template>
<div class="quotesAdded">
  <appLabel>Quotes Added</appLabel>
  <div class="progressBar borderColor-Dark backgroundColor-Light">
    <div
      class="progressBar-progress backgroundColor-Dark fontColor-Light text-Centered"
      :style="{ width: (quotesAdded*10) + '%'}">
      {{ quotesAdded }}/{{ maxQuotes }}
    </div>
  </div>
</div>
</template>

<script>
import Label from './Label.vue';

export default {
    components: {
      appLabel: Label
    },
    props: {
      quotesAdded: Number,
      maxQuotes: Number
    }
}
</script>

<style>

.quotesAdded {
    margin: 8px;
    margin-top: 16px;
}

.progressBar {
  height: 24px;
}

.progressBar-progress {
  height: 100%;
  transition: width 500ms;
}
</style>
