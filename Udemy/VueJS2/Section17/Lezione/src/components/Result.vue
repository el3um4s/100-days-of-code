<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <!-- <p>Counter is: {{ $store.state.counter }}</p> -->
  </div>
</template>

<script>
    // export default {
    //     props: ['counter']
    // }
    export default {
      computed: {
        counter() {
          return this.$store.state.counter;
        }
      }
    }
</script>
