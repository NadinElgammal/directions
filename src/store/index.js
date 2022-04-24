import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name: "Ahmed",
        age: 50
    },
    mutations: {},
    actions: {},
    getters: {
        cartTotalPrice : () => {
            let total = 5;
            return total;
        }
    },
})