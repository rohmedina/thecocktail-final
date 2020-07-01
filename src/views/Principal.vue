<!-- eslint-disable -->
<template>
  <div>
    <Header />

    <div class="buscador pb-5">
      <el-input size="medium" v-model="buscado" placeholder="Escribe tu trago favorito" prefix-icon="el-icon-search" v-on:keyup.enter="searchDrink" @keyup.esc="limpiarBuscador"> </el-input>
      <el-button icon="el-icon-search" type="success" circle @click="searchDrink"></el-button>
      <el-button type="danger" icon="el-icon-refresh" circle @click="limpiarBuscador"></el-button>
    </div>

    <el-container class="container d-none" :class="{ 'd-block': mostrarBusqueda }">
      <el-row :gutter="20">
        <DrinkCard :strDrinkThumb="drinkBuscado.img" :strDrink="drinkBuscado.nombre" :strIngredient1="drinkBuscado.ing1" :strIngredient2="drinkBuscado.ing2" />
      </el-row>
    </el-container>

    <el-container class="container" :class="{ 'd-none': mostrarBusqueda }">
      <el-row :gutter="20">
        <DrinkCard v-for="(drink, i) in drinks" :key="i" :strDrinkThumb="drink.img" :strDrink="drink.nombre" :strIngredient1="drink.ing1" :strIngredient2="drink.ing2" :idDrink="drink.id" :drinks="drinks" />
      </el-row>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../components/Header";
import DrinkCard from "../components/DrinkCard";
import Firebase from "firebase";
import axios from "axios";
import { mapGetters, mapState } from "vuex";
export default {
  name: "",
  components: {
    Header,
    DrinkCard,
  },
  data() {
    return {
      drinks: [],
      buscado: null,
      drinkBuscado: {},
      mostrarBusqueda: false,
    };
  },

  created() {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((data) => {
      let Drinks = data.data.drinks;
      Drinks.forEach((el) => {
        // Normalizar Nombres
        let drinkNormalizado = el.strDrink.toUpperCase();
        let trago = {
          nombre: drinkNormalizado,
          img: el.strDrinkThumb,
          ing1: el.strIngredient1,
          ing2: el.strIngredient2,
          id: el.idDrink,
        };
        this.drinks.push(trago);
      });
    });
  },

  methods: {
    searchDrink() {
      this.mostrarBusqueda = true;
      // Normalizamos busqueda del usuario.
      let buscadoNorm = this.buscado.toUpperCase();

      const filtered = this.drinks.filter((el) => el.nombre === buscadoNorm);
      this.drinkBuscado = {
        nombre: filtered[0].nombre,
        img: filtered[0].img,
        ing1: filtered[0].ing1,
        ing2: filtered[0].ing2,
      };
      // console.log(filtered[0].nombre);
    },
    limpiarBuscador() {
      this.drinkBuscado = {};
      this.buscado = null;
      this.mostrarBusqueda = false;
    },
  },
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 1em;
}
.container {
  align-content: center;
  padding-top: 1em;
}
.buscador {
  max-width: 400px;
  margin: auto;
  align-content: center;
  display: flex;
  margin-top: 2em;
}
</style>
