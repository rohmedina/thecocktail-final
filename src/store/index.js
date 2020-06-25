import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    name: "",
    userLogin: false,
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
  },
  actions: {
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
  },
  modules: {},
});
