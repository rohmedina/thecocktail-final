<template>
  <b-navbar class="navbar is-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1>The Coctail</h1>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        <router-link :to="{ name: 'Home' }">Inicio</router-link>
      </b-navbar-item>

      <b-navbar-item href="#">
        About
      </b-navbar-item>
      <b-navbar-item href="#">
        Contact
      </b-navbar-item>
      <b-navbar-item href="#">
        <router-link :to="{ name: 'Favorito' }">Favoritos</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link :to="{ name: 'Registro' }">
            <a class="button is-primary">
              <strong>Registrate</strong>
            </a>
          </router-link>

          <router-link :to="{ name: 'Login' }">
            <a class="button is-light">
              Log in
            </a>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "",
};
</script>
