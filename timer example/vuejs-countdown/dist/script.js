Vue.component('countdown', {
  template: '#countdown-template',
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
      interval: {
        type: Number
      }
    },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      finished: false};
  },
  computed: {
    seconds() {
      delta = this.interval - this.now;
      if (delta < 0){
        this.finished = true;
        delta = 0;
      }
      return delta;
    } } });

var app = new Vue({
  el: '#app' });
