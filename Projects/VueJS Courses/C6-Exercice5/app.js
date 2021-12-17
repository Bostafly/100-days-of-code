const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      displayList: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.displayList ? "Hide" : "Show";
    },
  },
  methods: {
    addTasks() {
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
      this.displayList = !this.displayList;
    },
  },
});

app.mount("#assignment");
