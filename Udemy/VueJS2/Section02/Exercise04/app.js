
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
    largeBorder: false,
    colorStyle: "blue",
    lenghtBar: 10
  },
  computed: {
    myStyle() {
      return {
        backgroundColor: this.colorStyle
      }
    },
    progressBar(){
      return {
        width: this.lenghtBar + 'px',
        height: '20px',
        backgroundColor: this.colorStyle
      }
    }
  },
  methods: {
    startEffect() {
        this.effectActive = !this.effectActive;
        this.labelEffect = this.effectActive ? 'Stop Effect' : 'Start Effect';
        this.applyEffectOnTimeout();
    },
    applyEffectOnTimeout(){
       setTimeout(() => {
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
      setTimeout(()=>{
          this.lenghtBar = this.lenghtBar + Math.floor(Math.random() * 20) + 5;;
          if (this.lenghtBar <= 500 ) {
            this.startProgress();
          }
      }, Math.floor(Math.random() * 500) + 200);
    }
  }
});
