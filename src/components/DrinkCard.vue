<!-- eslint-disable -->
<template>
  <el-col :xs="12" :sm="8" :md="6">
    <div class="grid-content">
      <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="strDrinkThumb" class="image" />
        <div style="padding: 14px;">
          <h3
            ><strong>{{ strDrink }}</strong></h3
          >
          <h5>Ingredientes:</h5>
          <ol>
            <li>
              {{ strIngredient1 }}
            </li>
            <li>
              {{ strIngredient2 }}
            </li>
          </ol>

          <div class="bottom clearfix">
            <el-button class="favorite" round icon="el-icon-cold-drink" @click="favorito(idDrink)">Favorito</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </el-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Drink",

  props: ["idDrink", "strDrink", "strDrinkThumb", "strIngredient1", "strIngredient2", "drinks"],

  computed: {
    ...mapState(["favoritos"]),
  },

  methods: {
    favorito() {
      this.$emit("favorito", this.idDrink);
      // console.log(this.idDrink);
      this.$notify.success({
        title: "Drink Favorita",
        message: "Drink añadida a Favoritos",
        offset: 75,
        position: "top-left",
      });
      let payload = {
        strDrink: this.strDrink,
        strDrinkThumb: this.strDrinkThumb,
        strIngredient1: this.strIngredient1,
        strIngredient2: this.strIngredient2,
        idDrink: this.idDrink,
      };
      this.$store.dispatch("setStateFavoritos", payload);
    },
  },
};
</script>

<style>
ol li {
  text-align: left;
}
h5 {
  text-align: left;
}
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
.card:hover {
  opacity: 0.7;
  scale: 1.07;
}
</style>
