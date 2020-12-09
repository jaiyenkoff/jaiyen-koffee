import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [53363],
    products: [
      {
        name: "Cold Brew Coffee",
        id: 53362,
        price: 80,
        quantity: 10,
        category: "Coffee",
        details: {
          origin: "Omgoi",
          size: "250ml",
          additional: ""
        },
        images: [
          '53362-1.jpg',
        ]
      },
      {
        name: "Cold Brew Coffee with Milk",
        id: 53363,
        price: 85,
        quantity: 10,
        category: "Coffee",
        details: {
          origin: "Omgoi",
          size: "250ml",
          additional: ""
        },
        images: [
          '53363-1.jpg',
        ]
      },
            {
        name: "Cocoa",
        id: 53364,
        price: 80,
        quantity: 10,
        category: "Cocoa",
        details: {
          origin: "Rich Cocoa",
          size: "250ml",
          additional: ""
        },
        images: [
          '53364-1.jpg',
        ]
      },
      {
        name: "Thai Tea Latte",
        id: 53365,
        price: 80,
        quantity: 10,
        category: "Tea",
        details: {
          origin: "Thai Tea",
          size: "250ml",
          additional: ""
        },
        images: [
          '53365-1.jpg',
        ]
      },
    ]
  },
  mutations: {
    addToCart (state, payload) {
      state.cart.push( Number(payload) )
    },
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.indexOf( Number(payload) );
      state.cart.splice(indexToDelete, 1)
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload),
      commit('decrementProductInventory', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('incrementProductInventory', payload)
    }
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    }
  }
});