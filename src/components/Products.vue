<template>
<section class="products">
      <div class="container">
          <div class="row">
              <div class="col-lg-3" v-for="product in products" :key="product.id">
                      <img :src="product.image" alt="" v-if="product.image">
                      <img src="https://i.pinimg.com/originals/fe/85/23/fe852303fa92b21ee3bba2d1f1a858f8.jpg" alt="" v-else>
                      <router-link :to="{ name: 'ProductProfile', params: { product_id: product.id } }">{{ product.title }}</router-link>
                      <h5 style="color: #080">{{ product.price }}</h5>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: "Products",
props: ["products"]
}
</script>

<style lang="css" scoped>
@import "@/css/products.css";
</style>
