<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel height="150px" v-if="isShow">
      <el-carousel-item v-for="item in images" :key="item">
        <el-link :href="item.linkUrl" target="_blank">
          <el-image :src="item.imageUrl"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- Container 布局容器  -->
  <HomeContent></HomeContent>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
// import { getBanners } from "../http/index";
// import { getBanners2 } from "../http/index";
import { getBanners3 } from "../http/index";
import HomeContent from "../components/HomeContent.vue";

// ref() 获取响应式的值
const images = ref();
const isShow = ref(false);

onMounted(async () => {
  // 动态数据
  /* const res = await getBanners();
  // console.log(res);
  images.value = res.data; */

  // CORS 跨域问题
  /*  
    Access to XMLHttpRequest at 'https://localhost:7296/api/Image/GetImages' 
    from origin 'http://localhost:8080' has been blocked by 
    CORS policy: No 'Access-Control-Allow-Origin' header is 
    present on the requested resource. 
  */
  /* const res2 = await getBanners2();
  // console.log(res2);
  images.value = res2.data; */

  const res3 = await getBanners3();
  // console.log(res3);
  images.value = res3.data;

  isShow.value = true;
});

// 静态数据
/* images.value = [
  {
    imageUrl: "/images/banners/21_birthday_banner_pc.jpg",
    linkUrl: "https://www.baidu.com",
  },
  {
    imageUrl: "/images/banners/21_brand_banner_pc.jpg",
    linkUrl: "https://www.baidu.com",
  },
  {
    imageUrl: "/images/banners/21_syz_banner_pc.jpg",
    linkUrl: "https://www.baidu.com",
  },
]; */
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