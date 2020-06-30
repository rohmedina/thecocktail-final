<!-- eslint-disable -->
<template>
  <div>
    <Header />

    <el-container class="container" :class="{ 'd-none': mostrarBusqueda }">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6">
          <div class="">
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
              </div>
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

export default {
  name: "",
  components: {
    Header,
  },

  created() {},

  methods: {},
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
