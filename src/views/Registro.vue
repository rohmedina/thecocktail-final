<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Crear una cuenta</h3><hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="name" class="input" type="text" placeholder="Rodrigo Medina" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="email" class="input" type="email" placeholder="Enter Email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input v-model="password" class="input" type="password" placeholder="Enter password" />
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
            this.$alert("Usuario creado con éxito", "Felicitaciones", {
              confirmButtonText: "OK",
            });
            // this.$router.push({ name: "Home" });
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
