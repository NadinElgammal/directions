<template>
<div>
  <navbar/>
  <br>
   <!-- <b-button variant="success">
     HelloWorld
   </b-button> -->
   <br><br><br>

  <Products :products="products" />
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
  }
}
</script>

<style lang="css" scoped>

</style>
