 /* eslint-disable */
<template>
<Header />
  <h1>Hello {{name}}, Welcome on Home Page</h1>
  <table border="1px">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link>
      <button v-on:click="deleteRestaurant(item.id)">Delete</button>
      </td>
      
    </tr>
    </table>
</template>
<script>
import Header from './Header-resto.vue'
import axios from 'axios';
export default {
  name: "Home",
  data(){
    return {
      name:'',
      restaurant:[]
    }
  },
 components:{
  Header
 },
 methods:{
  async deleteRestaurant(id)
  {
    let result = await axios.delete("http://localhost:3000/restaurant/"+id);
    console.warn(result)
    if(result.status==200)
    {
      this.loadData()
    }
  },
   async loadData(){
    let user = localStorage.getItem('user-info');
    this.name= JSON.parse(user).name;
    if(!user)
    {
        this.$router.push({name:"SignUp"})
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result)
    this.restaurant=result.data;
  }
 },
  async mounted(){
    this.loadData()
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
  color: #333;
}

th {
  background-color: #f8f8f8;
  padding: 12px 16px;
  font-weight: bold;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

td {
  padding: 12px 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}

td:last-child {
  text-align: center;
}

td:last-child a,
td:last-child button {
  margin: 4px;
  padding: 8px 12px;
  border: none;
  background-color: skyblue;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

td:last-child a:hover,
td:last-child button:hover {
  background-color: #01a6e2;
}

table {
  border: none;
}
</style>
