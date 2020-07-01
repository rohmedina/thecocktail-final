<!-- eslint-disable -->
<template>
  <div>
    <Header />

    <el-container class="container">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" v-for="(favorito, i) in favoritos" :key="i">
          <div class="grid-content">
            <el-card class="card" :body-style="{ padding: '0px' }" hadow="hover">
              <img :src="favorito.strDrinkThumb" class="image" />
              <div style="padding: 14px;">
                <h3
                  ><strong>{{ favorito.strDrink }}</strong></h3
                >
                <h5>Ingredientes:</h5>
                <ol>
                  <li>
                    {{ favorito.strIngredient1 }}
                  </li>
                  <li>
                    {{ favorito.strIngredient2 }}
                  </li>
                </ol>
              </div>
              <el-button type="danger" round icon="el-icon-delete" @click="elimar(idDrink)">Eliminar</el-button>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../components/Header";
import axios from "axios";
import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "",
  components: {
    Header,
  },

  computed: {
    ...mapState(["favoritos"]),
  },

  mounted() {
    let correo = Firebase.auth().currentUser.email;
    axios.get("https://us-central1-thecocktail-4df3f.cloudfunctions.net/drinks/drinks/" + correo).then((data) => {
      let favs = data.data.drinksFavoritos;
      this.$store.dispatch("setfavoritos", favs);
      console.log(favs[0].strDrink);
      console.log(favs[0].strDrinkThumb);
      console.log(favs[0].strIngredient1);
      console.log(favs[0].strIngredient2);
    });
  },

  methods: {
    elimar() {
      this.eliminarDrink();
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
