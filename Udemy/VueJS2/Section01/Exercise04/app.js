new Vue({
  el: '#exercise',
  data: {
    highlight: true,
    shrink: false,
    effectActive: false,
    labelEffect: 'Start Effect'
  },
  methods: {
    startEffect() {
        this.effectActive = !this.effectActive;
        this.labelEffect = this.effectActive ? 'Stop Effect' : 'Start Effect';
        this.applyEffectOnTimeout();
    },
    applyEffectOnTimeout(){
      setTimeout(() => {
        this.highlight = !this.highlight;
        this.shrink = !this.shrink;
        if (this.effectActive) this.applyEffectOnTimeout();
      }, 1000);
    },
    startProgress() {

    }
  }
});
