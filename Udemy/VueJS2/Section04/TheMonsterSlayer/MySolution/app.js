function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

new Vue({
  el: "#app",
  data: {
    ui: {
      showNewGame: true,
      showControl: false,
      showBattle: false
    },
    player: {
      salute: 100,
      maxSalute: 100,
      attacco: {
        min: 1,
        max: 5
      },
      specialAttack: {
        min: 5,
        max: 10
      },
      guarigione: {
        perTurno: 1,
        pozione: 10
      }
    },
    monster: {
      salute: 100,
      maxSalute: 100,
      attacco: {
        min: 1,
        max: 5
      }
    },
    logs: []
  },
  methods: {
    attack() {
      let n = random(this.player.attacco.min, this.player.attacco.max);
      this.monster.salute -= n;
      let log = `Player hits monster for ${n}`;
      this.logs.unshift({
        player: log
      });
      if (this.logs.length > 15) {
        this.logs.pop();
      }
      if (this.monster.salute <= 0) {
        if (confirm('You win! New Game?')) {
           this.giveUp();
        }
      } else {
        this.enemyAttack();
      }
    },
    specialAttacck() {
      let n = random(this.player.specialAttack.min, this.player.specialAttack.max);
      this.monster.salute -= n;
      let log = `Player hits monster for ${n}`;
      this.logs.unshift({
        player: log
      });
      if (this.logs.length > 15) {
        this.logs.pop();
      }
      if (this.monster.salute <= 0) {
        if (confirm('You win! New Game?')) {
           this.giveUp();
        }
      } else {
        this.enemyAttack();
      }
    },
    heal() {
      this.player.salute += this.player.guarigione.pozione;
      let log = `Player heals himself for ${this.player.guarigione.pozione}`;
      this.logs.unshift({
        player: log
      });
      if (this.logs.length > 15) {
        this.logs.pop();
      }
      if (this.monster.salute <= 0) {
        if (confirm('You win! New Game?')) {
           this.giveUp();
        }
      } else {
        this.enemyAttack();
      }
    },
    giveUp() {
      this.player.salute = this.player.maxSalute;
      this.monster.salute = this.monster.maxSalute;
      this.ui.showNewGame = true;
      this.ui.showControl = false;
      this.ui.showBattle = false;
      this.logs = [];
    },
    enemyAttack() {
      let n = random(this.monster.attacco.min, this.monster.attacco.max);
      this.player.salute -= n;
      let log = `Monster hits player for ${n}`;
      this.logs.unshift({
        monster: log
      });
      if (this.logs.length > 15) {
        this.logs.pop();
      }
      if (this.player.salute <= 0) {
        if (confirm('You lost! New Game?')) {
           this.giveUp();
        }
      }
    },
    healthbar(life = 100) {
      let color = 'red';
      switch (true) {
        case (life >= 75):
          color = 'green';
          break;
        case (life >= 50):
          color = 'gold';
          break;
        case (life >= 25):
          color = 'orange';
          break;
        case (life < 25):
          color = 'red'
        default:
          color: 'red';
      }
      return {
        backgroundColor: color,
        margin: 0,
        color: 'white',
        width: life + '%',
        maxWidth: '100%'
      };
    }
  }
});
