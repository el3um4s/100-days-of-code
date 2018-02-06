new Vue({
  el: '#exercise',
  data: {
    YOUR_NAME: 'Samuele',
    AGE: 35,
    randomImage: 'https://source.unsplash.com/random'
  },
  methods: {
    random() {
      return Math.random();
    }
  }
});
