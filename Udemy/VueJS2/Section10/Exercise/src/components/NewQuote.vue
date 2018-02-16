<template>
<div class="newQuote">
  <div class="fontColor-Dark fontWeight-bold">
    <slot name="label"></slot>
  </div>
  <div class="padding-Little">
    <textarea name="newQuote" rows="5" class="padding-Little fontColor-Dark borderColor-Dark"></textarea>
    <div class="btnAddQuote padding-Little text-Centered backgroundColor-Dark fontColor-Light">Add Quote</div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>

.newQuote {
  margin: 8px;
  margin-top: 16px;
}

textarea {
  width: 100%;
  max-width: 548px;
  font-size: 1.2em;
}

.btnAddQuote {
  width: 100%;
  max-width: 550px;
  cursor: pointer;
}
</style>
