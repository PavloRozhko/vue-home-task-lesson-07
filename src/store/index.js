import { createStore } from 'vuex'

import { studentsList, fivePointGradeSystem, twelvePointGradeSystem, productsList, currencies } from '../data/constants'

export default createStore({
  state: {
    //--- Task 01
    studentsList,
    fivePointGradeSystem,
    twelvePointGradeSystem,
    currentGradeSystem: 12,
    currentStudentStatus: null,
    //--- task 02
    productsList,
    currencies,
    productsCart: [],
    totalPrice: 0,
    currentCurrencyCode: 'UAH',
    currentCurrencySymbol: '₴',
  },

  getters: {
    //--- Task 01
    currentStudentStatus(state) {
      return state.currentStudentStatus
    },
    getStudentsList(state) {
      let filteredStudentsList
      if (state.currentGradeSystem === 12) {
        filteredStudentsList = JSON.parse(JSON.stringify(state.studentsList))

        if (state.currentStudentStatus) {
          const currentRange = state.twelvePointGradeSystem.filter((system) => {
            return system.gradeValue === state.currentStudentStatus
          })
          filteredStudentsList = filteredStudentsList.filter((student) => {
            return student.averageGrade >= currentRange[0].range[0] && student.averageGrade <= currentRange[0].range[1]
          })
        }
      } else {
        filteredStudentsList = JSON.parse(JSON.stringify(state.studentsList))
        filteredStudentsList.forEach((student) => {
          student.averageGrade = Math.ceil((student.averageGrade / 12) * 5)
        })
        if (state.currentStudentStatus) {
          const currentRange = state.fivePointGradeSystem.filter((system) => {
            return system.gradeValue === state.currentStudentStatus
          })
          filteredStudentsList = filteredStudentsList.filter(
            (student) =>
              student.averageGrade >= currentRange[0].range[0] && student.averageGrade <= currentRange[0].range[1]
          )
        }
      }
      return filteredStudentsList
    },
    getStudentStatusValues(state) {
      if (state.currentGradeSystem === 12) return state.twelvePointGradeSystem
      else return state.fivePointGradeSystem
    },
    //--- task 02
    getProductsList(state) {
      if (state.currentCurrencyCode === 'UAH') {
        return state.productsList
      }

      let convertedProductsList = JSON.parse(JSON.stringify(state.productsList))
      const currentCurrency = state.currencies.find((currency) => currency.code === state.currentCurrencyCode)

      convertedProductsList.forEach((product) => {
        const roundedPrice = (product.price * currentCurrency.rate).toFixed(2)
        product.price = parseFloat(roundedPrice)
      })

      return convertedProductsList
    },
    getProductsCart(state) {
      return state.productsCart
    },
    getTotalPrice(state) {
      return state.totalPrice
    },
    getCurrencies(state) {
      return state.currencies
    },
    getCurrencySymbol(state) {
      return state.currentCurrencySymbol
    },
  },
  mutations: {
    setGradeSystem(state, gradeSystem) {
      state.currentGradeSystem = gradeSystem
    },
    setStudentStatus(state, studentStatus) {
      state.currentStudentStatus = studentStatus
    },
    //--- task 02
    addToCart(state, chosenProduct) {
      state.productsList = state.productsList.filter((product) => product.id !== chosenProduct.id)
      state.productsCart.push(chosenProduct)
    },
    removeFromCart(state, deletedProduct) {
      state.productsCart = state.productsCart.filter((product) => product.id !== deletedProduct.id)
    },
    countTotalSum(state, chosenProductPrice) {
      state.totalPrice += chosenProductPrice
    },
    subtractFromTotal(state, deletedProductPrice) {
      state.totalPrice -= deletedProductPrice
    },
    setCurrency(state, currencyCode) {
      const selectedCurrency = state.currencies.find((currency) => currency.code === currencyCode)
      state.currentCurrencySymbol = selectedCurrency.symbol
      state.currentCurrencyCode = selectedCurrency.code
    },
  },
  actions: {
    //--- task 01
    setGradeSystem({ commit }, gradeSystem) {
      commit('setGradeSystem', gradeSystem)
    },
    setStudentStatus({ commit }, studentStatus) {
      commit('setStudentStatus', studentStatus)
    },
    //--- task 02
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, productID) {
      commit('removeFromCart', productID)
    },
    countTotalSum({ commit }, productPrice) {
      commit('countTotalSum', productPrice)
    },
    subtractFromTotal({ commit }, productPrice) {
      commit('subtractFromTotal', productPrice)
    },
    setCurrency({ commit }, code) {
      commit('setCurrency', code)
    },
  },
})
