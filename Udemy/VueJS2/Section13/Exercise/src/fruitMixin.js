export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFuits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
}
