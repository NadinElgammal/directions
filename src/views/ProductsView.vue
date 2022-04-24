<template>
<div>
  <navbar/>
  <br>
  <!-- <b-button variant="success">
  HelloWorld
  </b-button> -->
  <br><br><br>

  <Products :products="products" />

  <!-- <div>
    <label> Hour </label>
    <input type="text" v-model="hour"><br>
    <label> Minute </label>
    <input type="text" v-model="minute"><br>
    <label> Second </label>
    <input type="text" v-model="second"> <br>
  </div> -->

<div class="container">
    <form id="signup-form" @submit.prevent>
      <div class="row">
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg">Full Name  <span class="text-danger">*</span> </label>
          <input type="text" v-model="loginForm.name" class="form-control">
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg">Email  <span class="text-danger">*</span> </label>
          <input type="email" v-model="loginForm.email" class="form-control">
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg">Password <span class="text-danger">*</span> </label>
          <input type="password" v-model="loginForm.pass" class="form-control">
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg">Phone number <span class="text-danger">*</span> </label>
          <input v-model="loginForm.num" class="form-control" type="tel">
        </div>
        <div class="col-12 form-group text-center">
        <br>
          <button @click="getData" type="submit" class="btn btn-primary"> Submit </button>
        </div>
      </div>
    </form>
    <br>
    <br><br><br>

</div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'
import Products from "@/components/Products.vue"
export default {
  name: 'ProductsView',
  components: {
    HelloWorld,
    navbar,
    Products
  },
  data(){
    return {
      loginForm:{
        name:null,
        email:null,
        pass:null,
        num:null
      },
      hour:0,
      minute:0,
      second:0,

      products: [
        {
          id: 1,
          title: "quidem molestiae enim",
          price:100,
          image: "https://n.nordstrommedia.com/id/sr3/191263b7-e1f0-4a54-86a6-0dd363f885b9.jpeg?h=365&w=240&dpr=2"
        },
        {
          id: 2,
          title: "sunt qui excepturi placeat culpa",
          price:120,
          image: "https://i.pinimg.com/originals/03/6e/67/036e672eb165432b956f8e3ea8144506.jpg"

        },
        {
          id: 3,
          title: "sunt qui excepturi placeat culpa",
          price:150,
          image: "https://n.nordstrommedia.com/id/sr3/0164224e-d28a-47a7-8727-bb9f91889421.jpeg?h=365&w=240&dpr=2"
        },
        {
          id: 4,
          title: "non esse culpa molestiae omnis sed optio",
          price:200,
          image: "https://n.nordstrommedia.com/id/sr3/e6ae0201-5b53-460b-a236-c0f99f4b805d.jpeg?h=365&w=240&dpr=2"
        },
        {
          id: 5,
          title: "eaque aut omnis a",
          price:250,
          image: "https://img.shopstyle-cdn.com/sim/ca/0c/ca0c0e7d596127f4e51135e91b6e8d64_best/luxie-marled-turtleneck-sweater.jpg"

        },
        {
          id: 6,
          title: "quidem molestiae enim",
          price:250,
          image: "https://cdn.fashiola.com/L518817707/low-classic-women-sweaters-knit-boat-neck-sweater.jpg"
        },
      ]
}

  },
  methods : {
    getData(){
      let data = new FormData();
      data.append ('name', this.loginForm.name) ;
      data.append ('email', this.loginForm.email) ;
      data.append ('pass', this.loginForm.pass) ;
      data.append ('phone', this.loginForm.num) ;
      this.axios.post(`https://jsonplaceholder.typicode.com/posts`, data  ).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }
  },

  watch :{
    hour(v){
      this.minute = v * 60
      console.log('Run hour')
    },
    minute(v){
      this.hour = v / 60
      this.second = v * 60
      console.log('Run Min')
    },
    second(v){
      this.minute = v / 60
      console.log('Run sec')
    }
  }
}
</script>

<style lang="css" scoped>

</style>
