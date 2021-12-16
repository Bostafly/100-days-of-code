const app = Vue.createApp({
  data() {
    return {
      userClassInput: "",
      hidePanel: false,
      inlineBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        visible: !this.hidePanel,
        hidden: this.hidePanel,
      };
    },
  },
  methods: {
    changeVisibility() {
      this.hidePanel = !this.hidePanel;
    },
  },
});

app.mount("#assignment");
