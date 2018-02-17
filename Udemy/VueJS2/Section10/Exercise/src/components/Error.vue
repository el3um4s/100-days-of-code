<template>
  <div class="error text-Centered transition-Removing">
    Too many Quotes! Delete some before adding ones!
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.error {
  margin: 8px;
  padding: 8px;
  border: 1px solid #700000;
  color: #700000;
}

.transition-Removing {
    -webkit-animation: fadeOut 3s;
    animation: fadeOut 3s;
}

@-webkit-keyframes fadeOut {
  0% { opacity: 0 }
  50% {opacity: 1 }
  100% { opacity: 0 }
}

@keyframes fadeOut {
  0% { opacity: 0 }
  50% {opacity: 1 }
  100% { opacity: 0 }
}
</style>
