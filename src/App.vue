<template>
  <HeaderCom></HeaderCom>
  <router-view></router-view>
  <FooterCom></FooterCom>
</template>

<script lang="ts" setup>
import HeaderCom from "./components/HeaderCom.vue";
import FooterCom from "./components/FooterCom.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
