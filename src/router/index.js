import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    // route level code-splitting
    // this generates a separate chunk (registro.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registro" */ "../views/Registro.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    alias: ["/ingresa", "/logueate", "/ingresar"],
  },
  {
    path: "/asociados",
    name: "Asociados",
    // route level code-splitting
    // this generates a separate chunk (asociados.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "asociados" */ "../views/Asociados.vue"),
  },
  {
    path: "/principal",
    name: "Principal",
    // route level code-splitting
    // this generates a separate chunk (principal.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "principal" */ "../views/Principal.vue"),
    meta: {
      login: true,
    },
  },
  {
    path: "/favorito",
    name: "Favorito",
    // route level code-splitting
    // this generates a separate chunk (favorito.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "favorito" */ "../views/Favorito.vue"),
    meta: {
      login: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    next("principal");
  } else {
    next();
  }
});

export default router;
