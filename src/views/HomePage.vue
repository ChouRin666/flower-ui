<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in images" :key="item">
        <el-link :href="item.courseUrl" target="_blank">
          <el-image :src="item.imageUrl"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const images = ref();

images.value = [
  {
    imageUrl: "/images/banners/21_birthday_banner_pc.jpg",
    courseUrl: "https://www.baidu.com",
  },
  {
    imageUrl: "/images/banners/21_brand_banner_pc.jpg",
    courseUrl: "https://www.baidu.com",
  },
  {
    imageUrl: "/images/banners/21_syz_banner_pc.jpg",
    courseUrl: "https://www.baidu.com",
  },
];
</script>

<style lang="scss">
.el-carousel__container {
  height: 480px !important;
  margin-top: 10px;
}

// 增加透明度
.el-carousel__item a {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
</style>