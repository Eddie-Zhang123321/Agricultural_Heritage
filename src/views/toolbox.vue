<template>
  <div class="toolbox">
    <Navbar />
  </div>
  <div class="container">
    <div class="head-box">
      <hr class="head-hr" style="color: rgb(132, 170, 160);" />
      <div class="head" style="background-color: rgb(132, 170, 160);">
        <b style="color: white;font-size: large;">农遗工具箱</b>
      </div>
      <hr class="head-hr" style="color: rgb(132, 170, 160);" />
    </div>
    <div class="cards-container">
      <div class="card" v-for="(item, index) in toolboxItems" :key="index">
        <router-link :to="item.link" class="card-link">
          <div class="card-image">
            <img :src="item.image" alt="农遗基因图片" class="card-img" />
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="head-box">
    <hr class="head-hr" style="color: rgb(180, 195, 191);" />
    <div class="head" style="background-color: rgb(180, 195, 191);">
      <b style="color: white">项目展示</b>
    </div>
    <hr class="head-hr" style="color: rgb(180, 195, 191);" />
  </div>
  <div class="mini">
    <img src="@/assets/蚕桑大亨/组 111.png" class="project_name" />
  </div>
  <!-- 小程序展示 -->
  <div class="mini-program-section">
    <!-- 左侧 手机+文字 -->
    <div class="mini-left">
      <img src="@/assets/蚕桑大亨/left.png" alt="演示视频" class="phone" />
      <img src="@/assets/蚕桑大亨/qrcode.png" alt="演示图片" class="code" />
    </div>
    <!-- 右侧 8 张截图 -->
    <div class="mini-right">
      <div class="screenshot" v-for="(img, index) in imageList" :key="index">
        <img :src="img" :alt="`截图${index + 1}`" />
      </div>
    </div>
  </div>

  <puzzle />
  <PageFooter />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import puzzle from '../components/puzzle.vue';
import * as images from '@/assets/index/image.js';
import { ref } from 'vue';

const imageModules = import.meta.glob('@/assets/蚕桑大亨/图像 *.png', { eager: true });
const imageList = Object.values(imageModules).map(module => module.default);

const toolboxItems = ref([
  { image: images.tool1, link: '/toolbox/tool1' },
  { image: images.tool2, link: '/toolbox/tool2' },
  { image: images.tool3, link: '/toolbox/tool3' },
  { image: images.tool4, link: '/toolbox/tool4' },
  { image: images.tool5, link: '/toolbox/tool5' },
  { image: images.tool6, link: '/toolbox/tool6' }
]);
</script>

<style scoped>
* {
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.container {
  margin: 20px auto;
  padding: 20px;
}

.head-box {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

.head {
  width: 200px;
  height: 50px;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
}

.head-hr {
  width: 500px;
  border-top: 3px solid;
}

.card-link {
  display: block;
  text-decoration: none;
}

.card:hover .card-img {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
}

.cards-container {
  margin: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  margin: 12px;
}

.card-image {
  width: 100%;
  height: 300px;
}

.card-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* 小程序展示部分 */
.mini {
  background-color: antiquewhite;
}

.mini-program-section {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: space-between;
  margin: 0px auto 40px;
  gap: 60px;
  background-color: antiquewhite;
}

.project_name {
  width: 10%;
  display: block;
  /* 已经有这个，但要确保它生效 */
  margin-left: 70px;
  margin-bottom: 0;
  /* 去掉原来的 20px */
}


/* 左侧 */
.mini-left {
  width: 40%;
}



.phone {
  width: 100%;
  height: 150%;
  border-radius: 20px;
  background: transparent;
}

.code {
  display: block;
  width: 20%;
  margin: 0px 0px 10px 60px;
  border-radius: 50%;
  background-color: transparent;
}

.mini-text {
  text-align: left;
  font-size: 14px;
  max-width: 300px;
  line-height: 1.6;
}

.mini-text h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0 6px;
  color: #333;
}

.mini-text p {
  margin-bottom: 10px;
  color: #555;
}

/* 右侧截图网格 */
.mini-right {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-right: 100px;
}

.mini-right img {
  width: 80%;
  height: 90%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
