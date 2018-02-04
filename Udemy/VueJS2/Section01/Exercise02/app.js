new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods: {
          showAlert() {
            alert('Alert!');
          },
          storeValue() {
            this.value = event.target.value;
          }
        }
    });
