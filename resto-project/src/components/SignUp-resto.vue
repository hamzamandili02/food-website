 /* eslint-disable */
<template>
  <img class="logo" src="../assets/food2.jpg" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password"  placeholder="Enter password" />
    <button :disabled="!isPasswordValid" v-on:click="signUp">Sign Up</button>
    <p v-if="!isPasswordValid">Password must be at least 8 characters long and contain at least one letter, one number, and one special character.</p>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.log(result);
      if(result.status==201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:"Home"})
      }
    },
  },
  computed: {
  isPasswordValid() {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(this.password);
  },
},
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user)
    {
        this.$router.push({name:"Home"})
    }
  }
};
</script>

<style>

</style>