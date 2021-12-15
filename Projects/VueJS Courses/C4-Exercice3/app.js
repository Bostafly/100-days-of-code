const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result() {
      console.log("passe");
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value > 37) {
        return "Too much !";
      } else {
        return "";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.value = 0;
      }, 5000);
    },
  },
  methods: {
    add(value) {
      this.value = this.value + value;
    },
  },
});

app.mount("#assignment");
