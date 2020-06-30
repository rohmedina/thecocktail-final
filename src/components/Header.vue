<template>
  <div>
    <div class="container-portada">
      <div class="capa-gradient"> </div>
      <div class="container-details">
        <div class="details pt-5">
          <h1>The Cocktail</h1>
          <div v-if="!userLogin">
            <p><strong>Ingresa y selecciona tus tragos favoritos</strong></p>
          </div>
          <div v-if="userLogin">
            <p><strong>Selecciona y guarda tus tragos favoritos</strong></p>
          </div>

          <button round v-if="!userLogin"
            ><router-link :to="{ name: 'Registro' }"><strong>REGISTRATE</strong></router-link></button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  computed: {
    userLogin() {
      return this.$store.getters.getuserLogin;
    },
  },
};
</script>

<style scoped>
.container-portada {
  width: 100%;
  height: 400px;
  position: relative;
  background-image: url(../assets/img/barra1_1200.jpg);
  background-size: 130%;
  animation: movimiento 20s infinite linear alternate;
}

@keyframes movimiento {
  from {
    background-position: bottom left;
  }
  to {
    background-position: top right;
  }
}

.capa-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: -webkit-linear-gradient(left, black, #0672d0);
  opacity: 0.5;
}

.container-details {
  padding-top: 4em;
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: auto;
}

.details {
  width: 100%;
  position: relative;
  top: 20px;
  color: white;
}

.details h1 {
  font-size: 40px;
  font-weight: 700;
  margin-left: 10px;
}

.details p {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
}

.details button {
  padding: 10px 20px;
  font-size: 16px;
  background: none;
  border-style: none;
  border: 1px solid white;
  color: white;
  margin-top: 20px;
  transition: background 300ms;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 20px;
  background: white;
}

.details button:hover {
  background: rgb(236, 221, 221);
  color: black;
  text-decoration: none;
}
</style>
