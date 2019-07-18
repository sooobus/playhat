Vue.component('hatgame', {
    template: '#hatgame-template',
    props: {
        interval: {
          type: Number
        }
      },
    data() {
      return {
        gameStarted: false,
        wordCounter: 0,
        words: [
          { word: 'шляпа', complexity: 0.1 },
          { word: 'силаэдр', complexity: 1.0 },
          { word: 'код', complexity: 0.5 },
        ],
        secondsLeft: 60
      }
    }//,
    //methods: {
    //  buttonClicked() {
    //    if (this.wordCounter == this.words.length - 1){
    //      this.gameStarted = false;
    //    }
    //    else {
    //      this.wordCounter++;
    //    }
    //  },
    //  startGame() {
    //    this.wordCounter = 0;
    //    this.gameStarted = true;
    //  }
    //}
  });

  const app = new Vue({
    el: '#app' });
