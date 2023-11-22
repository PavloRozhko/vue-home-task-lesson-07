<template>
  <div class="currency-option">
    <label for="currency">Оберіть валюту</label>
    <select id="currency" v-model="currencyCode">
      <option v-for="currency in getCurrencies" :key="currency" :value="currency.code">{{ currency.title }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CurrencyOptions',

  data() {
    return {
      currencyCode: 'UAH',
    }
  },
  computed: {
    ...mapGetters(['getCurrencies']),
  },

  watch: {
    currencyCode(newValue) {
      this.setCurrency(newValue)
    },
  },

  methods: {
    ...mapActions(['setCurrency']),
  },
}
</script>

<style lang="scss" scoped>
.currency-option {
  display: flex;
  align-items: center;
  gap: 0.9375em;
}
</style>
