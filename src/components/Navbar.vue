<!-- eslint-disable -->
<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-navbar-brand href="#">
      <img src="../assets/img/drink.svg" alt="" class="logo" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <router-link :to="{ path: '/' }" class="routerLink nav-link">Home</router-link>
        </b-navbar-nav>

        <!-- SI NO ESTÁ LOGUEADO -->
        <b-navbar-nav>
          <router-link :to="{ name: 'Asociados' }" v-if="!userLogin" class="routerLink nav-link">Asociados</router-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'Registro' }" v-if="!userLogin" class="routerLink nav-link">Regístrate</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link class="routerLink nav-link" :to="{ name: 'Login' }" v-if="!userLogin">Login</router-link>
        </b-navbar-nav>

        <!-- SOLO SI EL USUARIO ESTÁ REGISTRADO -->
        <b-navbar-nav v-if="userLogin">
          <router-link class="routerLink nav-link" :to="{ name: 'Favorito' }">Favoritos</router-link>
        </b-navbar-nav>
        <b-nav-item right>
          <div v-if="userLogin">
            <el-button type="danger" round @click="logout">Log Out</el-button>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "",
  computed: {
    userLogin() {
      return this.$store.getters.getuserLogin;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$alert("Usuario Deslogueado con éxito", "Vuelve Pronto", {
        confirmButtonText: "OK",
      });
    },
  },
};
</script>

<style scoped>
.routerLink:hover {
  text-decoration: none;
}
.logo {
  width: 40px;
}
</style>
