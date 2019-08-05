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
    window.addEventListener('keydown', (e) => {
      if (this.gameStarted == true) {
        this.recordGuessed();
      }
    });
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
    recordGuessed() {
      if (this.wordCounter == this.words.length - 1) {
        this.finishGame();
      } else {
        this.wordCounter++;
        this.totalWordCounter++;
      }
    },
    playSound(sound) {
      if (sound) {
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
    },
    getPointsCase(points) {
      var modpoints = points % 100;
      if (modpoints % 10 >= 2 && modpoints % 10 <= 4) {
        return "очка";
      } else if (modpoints % 10 == 1 && modpoints != 11) {
        return "очко";
      } else {
        return "очков";
      }
    }
  }
});


var app = new Vue({
  el: '#app',
});