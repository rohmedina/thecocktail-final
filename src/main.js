import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "firebase";
import FirebaseConfig from "@/config/firebaseconfig";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Firebase.initializeApp(FirebaseConfig);
Vue.use(ElementUI);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
