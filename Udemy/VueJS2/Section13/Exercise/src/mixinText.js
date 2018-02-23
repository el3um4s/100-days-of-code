export const mixinText = {
  data(){
    text: 'un testo'
  },
  computed:{
    computedReverseMixin(){
      return this.text.split('').reverse().join('');
    },
    computedLenghtMixin(){
      return `${this.text} (${this.text.length})`;
    }
  }
}
