<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Inicia Sesión</h3><hr />
        <form action="#" @submit.prevent="login">
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

          <el-button native-type="submit" type="success" round icon="el-icon-user">Inicia Sesión</el-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (accept) => {
            this.$alert("Usuario Logeado con éxito", "Felicitaciones", {
              confirmButtonText: "OK",
            });
            this.quienSoy;
            this.$router.push({ name: "Principal" });
          },
          (reject) => {
            alert("no existe");
            console.log(reject.message);
          }
        );
    },
  },
};
</script>
