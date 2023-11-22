<template>
  <div class="second-task">
    <div class="second-task__item heder-item">
      <h2 class="heder-item__title">Вітаємо на нашому сайті</h2>
      <currency-options class="heder-item__options" />
    </div>
    <products-list class="second-task__item" />
    <products-cart class="second-task__item" />
  </div>
</template>

<script>
import CurrencyOptions from './CurrencyOptions.vue'
import ProductsCart from './ProductsCart.vue'
import ProductsList from './ProductsList'

export default {
  name: 'SecondTask',
  components: { ProductsList, ProductsCart, CurrencyOptions },
}
</script>

<style lang="scss" scoped>
.second-task {
  padding-bottom: 1.5625em;
  // .second-task__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
}
.heder-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // .heder-item__title
  &__title {
    font-size: 2em;
    font-weight: 700;
  }
}
</style>
