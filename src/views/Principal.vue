<!-- eslint-disable -->
<template>
  <div class="pt-5">
    <h1>
      Estas en la vista principal ya logueado
    </h1>

    <div class="demo-input-suffix container pb-5">
      <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="strDrink" size="medium" v-on:keyup.enter="searchDrink"> </el-input>
    </div>

    <el-container class="container">
      <el-row :gutter="20">
        <DrinkCard v-for="(drink, i) in drinks" :key="i" :strDrinkThumb="drink.strDrinkThumb" :strDrink="drink.strDrink" :strIngredient1="drink.strIngredient1" :strIngredient2="drink.strIngredient2" />
      </el-row>
    </el-container>
  </div>
</template>

<script>
import DrinkCard from "../components/DrinkCard";
import Firebase from "firebase";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {
    DrinkCard,
  },
  data() {
    return {
      drinks: [],
    };
  },

  created() {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((data) => {
      this.drinks = data.data.drinks;
      data.data.drinks.length = 20;
    });
  },

  methods: {
    searchDrink() {
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((data) => {
        this.drinks = data.data.drinks;
        console.log(this.drinks);
      });
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
</style>
