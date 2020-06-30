<template>
  <el-carousel :interval="2000" type="card" height="400px" class="carousel">
    <el-carousel-item v-for="item in 6" :key="item"> </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url(../assets/img/carousel1.jpg);
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url(../assets/img/carousel2.jpg);
}
.el-carousel__item:nth-child(3n + 1) {
  background-image: url(../assets/img/carousel3.jpg);
}
.el-carousel__item:nth-child(4n + 1) {
  background-image: url(../assets/img/carousel4.jpg);
}
.el-carousel__item:nth-child(5n + 1) {
  background-image: url(../assets/img/carousel5.jpg);
}
.el-carousel__item:nth-child(6n + 1) {
  background-image: url(../assets/img/carousel6.jpg);
}

@media (max-width: 750px) {
  .carousel {
    display: none;
  }
}
</style>
