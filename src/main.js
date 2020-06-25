import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "firebase";
import FirebaseConfig from "@/config/firebaseconfig";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Firebase.initializeApp(FirebaseConfig);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
