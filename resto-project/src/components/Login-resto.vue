 /* eslint-disable */
<template>
  <img class="logo" src="../assets/food2.jpg" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <p v-if="!isPasswordValid">Password must be at least 8 characters long and contain at least one letter, one number, and one special character.</p>
    <button :disabled="!isPasswordValid" v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
  isPasswordValid() {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(this.password);
  },
},
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${encodeURIComponent(
          this.email
        )}&password=${encodeURIComponent(this.password)}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
      console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
