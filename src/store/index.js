import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state) => ({
    sortValue: state.sortValue,
    products: state.products
  })
})

export default createStore({
  plugins: [vuexLocal.plugin],
  state: () => ({
    sortValue: window.sessionStorage.getItem('sortValue') || '',
    products: window.sessionStorage.getItem('products') || [
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        img: require('../assets/img/image.png'),
        price: 100
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        img: require('../assets/img/image.png'),
        price: 1000
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        img: require('../assets/img/image.png'),
        price: 10000
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        img: require('../assets/img/image.png'),
        price: 100000
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        img: require('../assets/img/image.png'),
        price: 1000000
      }
    ]
  }),
  getters: {
    products (state) {
      return state.products
    },
    sortSelect (state) {
      return state.sortValue
    }
  },
  mutations: {
    addProduct (state, payload) {
      state.products.push(payload)
      this.commit('sortProducts')
    },
    deleteProduct (state, payload) {
      state.products.splice(payload, 1)
    },
    updateSortValue (state, payload) {
      state.sortValue = payload
      this.commit('sortProducts')
    },
    sortProducts (state) {
      if (state.sortValue) {
        state.products.sort((a, b) => {
          if (state.sortValue.value === 'min') {
            return a.price - b.price
          } else if (state.sortValue.value === 'max') {
            return b.price - a.price
          } else {
            return a.name.localeCompare(b.name)
          }
        })
      }
    }
  }
})
