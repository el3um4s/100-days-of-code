<template>
  <div>
    <p>Counter is: {{ counter }} ( {{ doubleCounter }} )</p>
    <p>Number of Clicks: {{ clicks }} ( {{ contaClickString }} )</p>
  </div>
</template>

<script>
    // export default {
    //     props: ['counter']
    // }

    import { mapGetters }from 'vuex';

    export default {
      computed: {
        ...mapGetters({
          doubleCounter: 'doubleCounter',
          contaClickString: 'stringCounter'
        }),
        counter() {
          // return this.$store.state.counter * 2;
          return this.$store.getters.doubleCounter;
        },
        clicks() {
          return this.$store.getters.stringCounter;
        }
      },
      // computed: mapGetters({
      //   doubleCounter: 'doubleCounter',
      //   contaClickString: 'stringCounter'
      // })
    }
</script>
