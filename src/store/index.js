import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    sortSelect: '',
    products: [
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
        price: 10000
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
        price: 10000
      }
    ]
  }),
  getters: {
    products (state) {
      return state.products
    },
    sortSelect (state) {
      return state.sortSelect
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
