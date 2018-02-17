<template>
  <div class="error text-Centered transition-Removing">
    Insert a quote!
  </div>
</template>

<script>
</script>

<style>
.error {
  margin: 8px;
  padding: 8px;
  border: 1px solid #006654;
  color: #006654;
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
