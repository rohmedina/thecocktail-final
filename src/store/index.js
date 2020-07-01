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
    eliminarDrink(state, newFavoritos) {
      state.favoritos = newFavoritos;
    },
  },
  //aun funciona
  actions: {
    setfavoritos({ commit }, favs) {
      commit("SET_FAVORITOS", favs);
    },
    setStateFavoritos({ commit, state }, drink) {
      let drinks = state.favoritos;
      drinks.push(drink);

      let idDrink = drink.idDrink;
      let strDrink = drink.strDrink;
      let strDrinkThumb = drink.strDrinkThumb;

      let payload = {
        email: Firebase.auth().currentUser.email,
        drinks: {
          drinksFavoritos: drinks,
        },
      };
      axios.post("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drink", payload).then((data) => {
        commit("setStateFavoritos", drinks);
      });
    },
    eliminarDrink({ commit, state }, drink) {
      let favoritos = state.favoritos;
      let newFavoritos = favoritos.filter((f) => f.idDrink !== drink.idDrink);

      let payload = {
        email: Firebase.auth().currentUser.email,
        drinks: {
          drinksFavoritos: newFavoritos,
        },
      };
      axios.post("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drink", payload).then((data) => {
        commit("eliminarDrink", newFavoritos);
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
