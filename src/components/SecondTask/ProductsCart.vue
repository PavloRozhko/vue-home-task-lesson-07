<template>
  <div class="products-cart">
    <h2 class="products-cart__title">Корзина</h2>
    <div class="products-cart__container">
      <div v-if="isCartEmpty" class="is-empty">Корзина порожня</div>
      <div v-for="product in getProductsCart" v-else :key="product.id" class="products-cart__item item">
        <div class="item__title">{{ product.title }}</div>
        <div class="item__price">{{ product.price }} {{ getCurrencySymbol }}</div>
        <div class="item__action">
          <button @click="onRemove(product)">Відмовитись</button>
        </div>
      </div>
    </div>
    <div v-if="!isCartEmpty" class="products-cart__total total-info">
      <div class="total-info__title">Разом до оплати</div>
      <div class="total-info__price">{{ getTotalPrice }} {{ getCurrencySymbol }}</div>
      <div class="total-info__action">
        <button>Оплатити</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductsCart',

  computed: {
    ...mapGetters(['getProductsCart', 'getTotalPrice', 'getCurrencySymbol']),
    isCartEmpty() {
      return this.getProductsCart.length === 0
    },
  },
  methods: {
    ...mapActions(['removeFromCart', 'subtractFromTotal']),
    onRemove(product) {
      this.removeFromCart(product)
      this.subtractFromTotal(product.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.products-cart {
  max-width: 53.125em;
  margin: 0 auto;
  // .products-cart__title
  &__title {
    font-size: 1.5em;
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .products-cart__container
  &__container {
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  }
  // .products-cart__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .products-cart__total
  &__total {
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
        background-color: red;
      }
    }
  }
}
.total-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // .total-info__title
  &__title {
    text-decoration: underline;
    font-weight: 700;
    font-size: 1.5em;
  }
  // .total-info__price
  &__price {
    font-size: 1.75em;
    color: green;
  }
  // .total-info__action
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
