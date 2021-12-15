const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    /* name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },*/
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + "" + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + "" + "Last Name";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
