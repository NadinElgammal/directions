<template>
    <section class="product-profile">
        <h1>Product id : {{ product.id }}</h1>
        <h2>product name : {{ product.title }}</h2>
        <h2>product price : {{ product.price }}</h2>
    </section>
</template>

<script>
export default {
    name: "Product-Profile",
   props : ["products"]
}
</script>