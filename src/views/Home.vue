<template>
  <div class="pb-5">
    <!--HEADER BIENVENIDA A LA PAG-->
      
<Header />

    <!-- <div class="pt-5">
      <b-jumbotron class="jumbo" header="The Cocktail" lead="">
        <p>Ingresa y selecciona tus tragos favoritos</p>

        <el-button class="boton" round><router-link :to="{ name: 'Registro' }">REGISTRATE</router-link></el-button>
      </b-jumbotron>
    </div> -->

    <!--BODY-->
    <div class="pt-5">

    <Carousel />
      <h1>algunas card y carousel</h1>

      <b-container class="p-1 pt-5">
        <b-row>
          <b-col sm="6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at sunt tempore itaque cum reiciendis dicta veritatis fuga est omnis ea quidem, tenetur blanditiis. Totam sunt a accusamus fugiat aliquid.</p>
          </b-col>
          <b-col sm="6">
            <img src="../assets/img/drink6.jpg" fluid alt="Fluid image" rounded="top"></img>
          </b-col>
        </b-row>
        <b-row class="pt-5">
        <b-col sm="6" md="6">
        <img src="../assets/img/drink1.jpg" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at sunt tempore itaque cum reiciendis dicta veritatis fuga est omnis ea quidem, tenetur blanditiis. Totam sunt a accusamus fugiat aliquid.</p>
          </b-col>
          <b-col sm="6" md="6">
        <img src="../assets/img/drink3.jpg" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam .</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import Carousel from '../components/Carousel'
import Header from '../components/Header'
export default {
  name: "Home",
  components: {
    Carousel,
    Header
  }
};
</script>
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

// .jumbo {
//   background-image: url("../assets/img/barra1_1200.jpg");
//   background-position: center top cover;
//   color: white;
// }
// .boton {
//   text-decoration: none;
// }
// .boton:hover {
//   text-decoration: none;
// }

</style>
