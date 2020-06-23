<template>
  <div>
    <h1>
      Estas en la vista principal ya logueado
    </h1>

    <el-button type="warning" round @click="logout">Log Out</el-button>

    <el-container>
      <el-row>
        <el-col :span="8" v-for="(drink, i) in drinks" :key="i">
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
                <li>
                  {{ drink.strIngredient3 }}
                </li>
              </ul>

              <div class="bottom clearfix">
                <el-button type="text" class="button" icon="el-icon-cold-drink">Favorito</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import Firebase from "firebase";
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      drinks: [],
      idDrink: "",
      strDrink: "",
      strDrinkThumb: "",
      strIngredient1: "",
      strIngredient2: "",
      strIngredient3: "",
      strCategory3: "",
    };
  },

  mounted() {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((data) => {
      this.drinks = data.data.drinks;
      console.log(data.data.drinks);
    });
  },

  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$alert("Usuario Deslogueado con éxito", "Vuelve Pronto", {
            confirmButtonText: "OK",
          });
          this.$router.push({ name: "Home" });
        });
    },
  },
};
</script>

<style>
.card {
  margin: 10px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
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
</style>
