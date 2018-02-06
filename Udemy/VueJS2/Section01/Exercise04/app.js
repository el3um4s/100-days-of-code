
new Vue({
  el: '#exercise',
  data: {
    highlight: true,
    shrink: false,
    effectActive: false,
    labelEffect: 'Start Effect',
    colorRed: 'colorRed',
    textCenter: 'textCenter',
    backgroundYellow: 'backgroundYellow',
    marginAuto: 'marginAuto',
    color: 'red',
    color2: 'green',
    rectangle: 'rectangle',
    largeBorder: false
  },
  methods: {
    startEffect() {
        this.effectActive = !this.effectActive;
        this.labelEffect = this.effectActive ? 'Stop Effect' : 'Start Effect';
        this.applyEffectOnTimeout();
    },
    applyEffectOnTimeout(){
      timeout = setTimeout(() => {
        //this.highlight = !this.highlight;
        //this.shrink = !this.shrink;
        //if (this.effectActive) this.applyEffectOnTimeout();
        if (this.effectActive) {
          this.highlight = !this.highlight;
          this.shrink = !this.shrink;
          this.applyEffectOnTimeout();
        }
      }, 1000);
    },
    startProgress() {

    }
  }
});
