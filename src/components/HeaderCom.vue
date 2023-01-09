<template>
  <div>
    <el-row>
      <el-col :span="24">
        <ul>
          <li>
            <el-link :underline="false">登录</el-link>
          </li>
          <li>
            <el-link :underline="false">注册</el-link>
          </li>
          <li>
            <el-link :underline="false">张三</el-link>
          </li>
          <li>
            <el-link :underline="false" href="/personcenter">个人中心</el-link>
          </li>
          <li>
            <el-link :underline="false">注销</el-link>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-link :underline="false" href="/">
          <el-image
            style="width: 200px; height: 100px"
            src="/images/logo.png"
            fit="contain"
          />
        </el-link>
      </el-col>
      <el-col :span="8">
        <!-- 
            :prefix-icon="Search"  搜索图标在文本框的前面
            :suffix-icon="Search"  搜索图标在文本框的后面
         -->
        <el-input
          v-model="input1"
          class="w-50 m-2"
          style="margin-top: 30px"
          size="large"
          placeholder="商品搜索"
          :suffix-icon="Search"
        />
      </el-col>
      <el-col :span="8">
        <div class="service-item">
          <a id="header-chat" href="javascript:void(0);">
            <el-icon><Headset /></el-icon>
            <span class="icon icon-headset"></span>
            <span class="service-item-info">在线客服</span>
           
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <!-- 导航： 菜单栏控件 el-menu -->
        <el-menu
          default-active=""
          class="el-menu-header"
          mode="horizontal"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/loveflower">爱情鲜花</el-menu-item>
          <el-menu-item index="/birthdayflower">生日鲜花</el-menu-item>
          <el-menu-item index="/friendflower">友情鲜花</el-menu-item>
          <el-menu-item index="/weddingflower">婚庆鲜花</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input1 = ref('')
</script>

<style lang="scss">
ul {
  list-style: none;
  padding-left: 80%;
  li {
    float: left;
    margin-left: 20px;
  }
}
.service-item {
  display: inline-block;
  font-size: 14px;
  color: #71797f;
  vertical-align: top;
  line-height: 47px;
  margin-top: 25px;
  margin-left: -200px;
  a {
    text-decoration: none;
    color: inherit;
  }
}
.el-menu-header {
  margin-left: 30% !important;
  border-bottom: 0px !important;
  .el-menu-item {
    width: 170px !important;
  }
}
</style>