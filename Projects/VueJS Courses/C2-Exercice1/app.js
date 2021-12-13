const app = Vue.createApp({
  data() {
    return {
      name: "Yoann",
      age: 31,
      image:
        "https://static.wikia.nocookie.net/frstarwars/images/5/5f/Yoda.png/revision/latest?cb=20161009183018",
    };
  },
  methods: {
    ageIncrement5() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
