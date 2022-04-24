import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Ahmed",
    age: 50
  },
  actions: {
    addToCart:({commit}, { product, quantity }) => {
        commit("ADD_TO_CART", { product, quantity });
    }
  },
  mutations: {
    ADD_TO_CART:({}, { product, quantity }) => {
      window.localStorage.setItem("product", JSON.stringify(product));
      window.localStorage.setItem("quantity", quantity);
    }
  },
  getters: {
    cartTotalPrice: () => {
      let total = 5;
      return total;
    }
  },
});
