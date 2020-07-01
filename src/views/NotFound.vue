<template>
  <div class="text-center pt-3">
    <h1>Error 404: Página no encontrada</h1>
    <p class="pt-3"> <router-link :to="{ name: 'Home' }">Vuelve al inicio amigo por aquí</router-link> </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
<style lang="css">
p {
  font-size: 2em;
}
</style>
