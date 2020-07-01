import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";
import router from "../router/index";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    name: "",
    userLogin: false,
    drinks: [],
    favoritos: [],
    favs: [],
  },
  getters: {
    getuserLogin(state) {
      return state.userLogin;
    },
  },
  mutations: {
    changeStateLogin(state) {
      state.userLogin = !state.userLogin;
      return state.userLogin;
    },
    Logout(state) {
      state.userLogin = false;
    },
    Login(state) {
      state.userLogin = true;
    },
    setStateFavoritos(state, drinks) {
      state.favoritos = drinks;
    },
    SET_FAVORITOS(state, favs) {
      state.favoritos = favs;
    },
    eliminarDrink(state, i) {
      state.favoritos.splice(i, 1);
    },
  },
  //aun funciona
  actions: {
    setfavoritos({ commit }, favs) {
      commit("SET_FAVORITOS", favs);
    },

    setStateFavoritos({ commit, state }, drink) {
      let drinks = state.favoritos;
      // console.log(drinks);
      // console.log(drink);
      if (!drinks.find((f) => f.idDrink === drink.idDrink)) {
        drinks.push(drink);
        let payload = {
          email: Firebase.auth().currentUser.email,
          drinks: {
            drinksFavoritos: drinks,
          },
        };
        axios.post("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drink", payload).then((data) => {
          commit("setStateFavoritos", drinks);
        });
      } else {
        alert("Este Drink ya existe en favoritos");
      }
    },

    eliminarDrink({ commit, state }, i) {
      let email = Firebase.auth().currentUser.email;
      let drinks = state.favoritos;
      let favs = {
        drinks,
      };
      let payload = {
        email: Firebase.auth().currentUser.email,
        drinks: {
          drinksFavoritos: drinks,
        },
      };
      commit("eliminarDrink", i);
      axios.post("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drink", payload).then((data) => {
        console.log(data);
      });
    },
    logout({ commit }) {
      Firebase.auth()
        .signOut()
        .then(() => {
          commit("Logout");
          router.push("/");
        });
    },
    login({ commit }) {
      commit("Login");
    },
    setDrinks({ commit }, drinks) {
      commit("setStateFavoritos", drinks);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
