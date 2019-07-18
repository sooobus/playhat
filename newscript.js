Vue.component('hatgame', {
  template: '#countdown-template',
  props: {
      interval: {
        type: Number
      }
    },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      gameStarted: false,
      wordCounter: 0,
      words: [
        { word: 'шляпа', complexity: 0.1 },
        { word: 'силаэдр', complexity: 1.0 },
        { word: 'код', complexity: 0.5 },
      ],
      secondsLeft: 0
    };
  },
  computed: {
    seconds() {
      delta = this.interval - this.now;
      if (delta < 0){
        this.finishGame();
        delta = 0;
      }
      return delta;
    } },
  methods: {
    buttonClicked() {
      if (this.wordCounter == this.words.length - 1){
        this.finishGame();
      }
      else {
        this.wordCounter++;
      }
    },
    startGame() {
      this.wordCounter = 0;
      this.gameStarted = true;
      window.setInterval(() => {
        this.now = Math.trunc(new Date().getTime() / 1000);
      }, 1000);
      this.interval = this.now + this.interval;
    },
    finishGame() {
      this.gameStarted = false;

    }
  }
});

var app = new Vue({
  el: '#app' });
