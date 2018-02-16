<template>
<div class="quotesAdded">
  <div class="fontColor-Dark fontWeight-bold">
    <slot name="label"></slot>
  </div>
  <div class="progressBar borderColor-Dark backgroundColor-Light">
    <div class="progressBar-progress backgroundColor-Dark fontColor-Light text-Centered">
      <slot name="quotesAdded"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {}
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
  width: 20%;
}
</style>
