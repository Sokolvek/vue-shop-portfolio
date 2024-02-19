import { defineStore } from "pinia";



export const useCounterStore = defineStore("counter", {
  state: () => ({
    sum: 0,
    cart: [],
    cartPopup:false
  }),
  getters: {},
  actions: {
    addToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    deleteFromCart(index) {
      this.sum -= this.cart[index].price;
      this.cart.splice(index, index + 1);
    },
  },
});
