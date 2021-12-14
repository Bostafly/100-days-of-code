const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      userInput2: "",
      userInputFinal: "",
    };
  },
  methods: {
    displayAlert() {
      alert("ALERT!");
    },
    displayUserInput1(event) {
      this.userInput1 = event.target.value;
    },
    displayUserInput2(event) {
      this.userInput2 = event.target.value;
    },
    displayUserInputFinal(event) {
      this.userInputFinal = this.userInput2;
    },
  },
});

app.mount("#assignment");
