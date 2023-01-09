<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel height="150px" v-if="isShow">
      <el-carousel-item v-for="item in images" :key="item">
        <el-link :href="item.courseUrl" target="_blank">
          <el-image :src="item.imageUrl"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getBanners } from "../http/index";

// ref() 获取响应式的值
const images = ref();
const isShow = ref(false);

// 静态数据
/* images.value = [
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
]; */

onMounted(async () => {
  // 动态数据
  const res = await getBanners();
  // console.log(res);
  images.value = res.data;
  isShow.value = true;
});
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