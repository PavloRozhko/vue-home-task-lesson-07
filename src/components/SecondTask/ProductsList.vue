<template>
  <div class="products-list">
    <h2 class="products-list__title">Список товарів</h2>
    <div v-if="isListEmpty" class="is-empty">Список продуктів порожній</div>
    <div v-else class="products-list__container">
      <div v-for="product in getProductsList" :key="product.id" class="products-list__item item">
        <div class="item__title">{{ product.title }}</div>
        <div class="item__price">{{ product.price }} {{ getCurrencySymbol }}</div>
        <div class="item__action">
          <button @click="onAddToCart(product)">Купити</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductsList',

  computed: {
    ...mapGetters(['getProductsList', 'getCurrencySymbol']),
    isListEmpty() {
      return this.getProductsList.length === 0
    },
  },

  methods: {
    ...mapActions(['addToCart', 'countTotalSum']),
    onAddToCart(product) {
      this.addToCart(product)
      this.countTotalSum(product.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.products-list {
  max-width: 53.125em;
  margin: 0 auto;
  // .products-list__title
  &__title {
    font-size: 1.5em;
    font-weight: 700;
  }
  // .products-list__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625em;
  // .item__price
  &__price {
    font-weight: 600;
  }
  // .item__action
  &__action {
    button {
      cursor: pointer;
      padding: 0.625em 0.9375em;
      background-color: blue;
      color: wheat;
      border-radius: 0.375em;
      transition: background-color 0.3s ease 0s;
      &:hover {
        background-color: green;
      }
    }
  }
}
.is-empty {
  font-size: 2em;
  font-weight: 700;
  text-align: center;
}
</style>
