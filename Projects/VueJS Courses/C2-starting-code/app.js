const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finished the course and learn vue!",
      courseGoalB: "Master vue and build an amazing apps",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
