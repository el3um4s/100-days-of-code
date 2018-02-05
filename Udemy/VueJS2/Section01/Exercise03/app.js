new Vue({
        el: '#exercise',
        data: {
            value: 0,
            delay: 5
        },
        computed: {
          result() {
            return this.value != 37 ? 'not there yet' : 'done';
          }
        },
        watch: {
          result(newValue, oldValue){
            let vm = this;
            setTimeout(function () {
              vm.value = 0;
            }, vm.delay*1000);
          }
        },
        methods: {

        }
    });
