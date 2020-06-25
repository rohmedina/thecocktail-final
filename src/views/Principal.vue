<template>
  <div>
    <h1>
      Estas en la vista principal ya logueado
    </h1>

    <div class="demo-input-suffix container">
      <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="strDrink" size="medium" v-on:keyup.enter="searchDrink"> </el-input>
    </div>
    <el-container class="container">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" v-for="(drink, i) in drinks" :key="i">
          <div class="grid-content">
            <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="drink.strDrinkThumb" class="image" />
              <div style="padding: 14px;">
                <h3
                  ><strong>{{ drink.strDrink }}</strong></h3
                >
                <span>Ingredientes:</span>
                <ul>
                  <li>
                    {{ drink.strIngredient1 }}
                  </li>
                  <li>
                    {{ drink.strIngredient2 }}
                  </li>
                </ul>

                <div class="bottom clearfix">
                  <el-button class="favorite" round icon="el-icon-cold-drink">Favorito</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import Firebase from "firebase";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      drinks: [],
    };
  },

  mounted() {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((data) => {
      this.drinks = data.data.drinks;
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
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.time {
  font-size: 13px;
  color: #999;
}

.favorite {
  margin-top: 13px;
  line-height: 12px;
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

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
