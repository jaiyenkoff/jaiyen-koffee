<template>
  <div>
    <div class="wrapper header" :style="{ backgroundImage: 'url(' + require('@/assets/img/header.png') + ')' }">
    </div>
    <section class="wrapper welcome" :style="{ backgroundImage: 'url(' + require('@/assets/img/welcome.jpg') + ')' }">
      <span class="welcometxt">
      <h2>Welcome to Jaiyen Koffee</h2>
      <p>Don't hurry Drink Coffee</p>
      </span>
    </section>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'
export default {
  name: 'home',
  mixins: [imagePath],
  computed: {
    products: function() {
      return this.$store.state.products
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 50%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}

.header{
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
text-align: center;
height: 1000px;
margin: 0 auto;
}

.welcome{
background-color: black;
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
text-align: center;
height: 500px;
opacity: 0.6; 
margin: auto;
display: flex;
align-items:center;
justify-content:center;
}

.welcometxt{
color: white;
vertical-align: middle;
text-shadow: 2px 2px 4px #000000;
}

.welcometxt p{
font-size: 24pt;
}

.welcometxt h2{
font-family: 'Raleway', sans-serif;
font-size: 60pt;
}
</style>