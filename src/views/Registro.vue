<template>
  <div class="container mt-50 pt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3 p-5">
        <h3 class="title is-3">Crear una cuenta</h3><hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Ingresa tu Nombre</label>
            <div class="control">
              <el-input placeholder="Ingresa tu Nombre" v-model="name" clearable type="text" size="small"> </el-input>
            </div>
          </div>
          <div class="field">
            <label class="label">Ingresa un Correo</label>
            <div class="control">
              <el-input placeholder="Ingresa un Correo" v-model="email" clearable type="email" size="small"> </el-input>
            </div>
          </div>
          <div class="field pb-5">
            <label class="label">Ingresa una Contraseña</label>
            <div class="control">
              <el-input placeholder="Ingresa un Password" v-model="password" clearable type="password" size="small"> </el-input>
            </div>
          </div>
          <el-button native-type="submit" type="primary" round icon="el-icon-plus">Registrarme</el-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import config from "@/config.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  name: "Register",
  methods: {
    register() {
      this.error = "";
      if (this.name && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.name = "";
            this.email = "";
            this.password = "";
            this.$alert("Usuario creado con éxito", "Felicitaciones", {
              confirmButtonText: "OK",
            });
            this.$store.commit("changeStateLogin");
            this.$router.push({ name: "Principal" });
            //actualizar el usuario
            if (user) {
              user.catch((err) => {
                this.error = err.message;
              });
            }
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "Todos los campos son requeridos";
      }
    },
  },
};
</script>
