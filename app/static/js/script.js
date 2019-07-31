Vue.component('hatgame', {
  template: '#countdown-template',
  props: {
    words: {
      type: Array
    },
    interval: {
      type: Number
    }
  },

  created() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      gameStarted: false,
      wordCounter: 0,
      secondsLeft: 0,
      totalWordCounter: 0,
    };
  },
  computed: {
    seconds() {
      delta = this.secondsLeft - this.now;
      if (delta < 0) {
        this.finishGame();
        delta = 0;
      }
      return delta;
    }
  },

  methods: {
    buttonClicked() {
      if (this.wordCounter == this.words.length - 1) {
        this.finishGame();
      } else {
        this.wordCounter++;
        this.totalWordCounter++;
      }
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    startGame() {
      this.wordCounter = 0;
      this.gameStarted = true;
      this.secondsLeft = this.now + this.interval;
    },
    finishGame() {
      this.playSound('../static/sound/bell.mp3');
      this.gameStarted = false;
    }
  }
});


var app = new Vue({
  el: '#app',
});
