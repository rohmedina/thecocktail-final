<!-- eslint-disable -->
<template>
  <div class="container login pt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3 p-5">
        <h3 class="title is-3">Inicia Sesión</h3><hr />
        <form action="#" @submit.prevent="login">
          <div class="field pb-3">
            <label class="label">Ingresa tu correo</label>
            <div class="control">
              <el-input placeholder="Ingresa tu Correo" v-model="email" clearable type="email" size="small"> </el-input>
            </div>
          </div>
          <div class="field pb-5">
            <label class="label">Ingresa tu contraseña</label>
            <div class="control">
              <el-input placeholder="Ingresa tu Password" v-model="password" clearable type="password" size="small"> </el-input>
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
            this.$store.commit("changeStateLogin");
            this.$router.push({ name: "Principal" });
            this.$store.dispatch("login");
          },
          (reject) => {
            this.$alert("Usuario no Existe", "Verifica tus datos", {
              confirmButtonText: "OK",
            });
            console.log(reject.message);
          },
          (data) => {
            data.user.updateProfile({
              displayName: this.form.name,
            });
          }
        );
    },
  },
};
</script>

<style>
.login {
  max-width: 800px;
  min-height: 600px;
  background-image: url(../assets/img/registro_bg.jpg);
  color: white;
}
</style>
