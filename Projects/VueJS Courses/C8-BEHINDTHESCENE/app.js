const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    // avant
    console.log("beforeCreate()");
  },
  created() {
    // avant
    console.log("created()");
  },
  beforeMount() {
    // avant
    console.log("BeforeMount()");
  },
  mounted() {
    // après
    console.log("mounted");
  },
  beforeUpdate() {
    // avant
    console.log("beforeUpdate");
  },
  updated() {
    // après
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeunmount()");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `<p>{{favoriteMeal}}</p>`,
  data() {
    return {
      favoriteMeal: "pizza",
    };
  },
});
app2.mount("#app2");

// setTimeout(function () {
//   app.unmount();
// }, 3000);

const data = {
  message: "Hello",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "World";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!!";

console.log(proxy.longMessage);
