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
      state.drinks = drinks;
    },
  },
  actions: {
    setFavorito({ commit }, payload) {
      let favs = {
        drinksfavorites: [payload],
      };
      let email = Firebase.auth().currentUser.email;
      let data = {
        email,
        favs,
      };
      axios.post("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drink", data).then((data) => {
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
