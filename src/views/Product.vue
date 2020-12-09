<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <img  class="flex-col--2" :src="makeImagePath(product)" alt="">
        <div class="flex-col--2" >
          <h2>{{ product.name }}</h2>
          <p>Price: ฿{{ product.price }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p>
          <h3>Details</h3>
          <ul>
            <li>Origin: {{ product.details.origin }}</li>
            <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
          </ul>
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default {
  name: 'product',
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
 methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
    }
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}

.flex-col--2 {
  width: 50%;
}

.flex-col--2 h3,h2,p,li{
  padding-left: 25px;
}

.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  margin-left: 25px;
  background-color: #363636;
  color: #FFF;
  &:hover, &:focus {
    background-color:#CA9E7B;
  }
}
</style>