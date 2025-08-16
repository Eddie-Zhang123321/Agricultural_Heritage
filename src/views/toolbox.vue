<template>
  <div class="toolbox">
    <Navbar />
  </div>
  <div class="container">
    <div class="head-box">
      <hr class="head-hr" style="color: rgb(132, 170, 160);" />
      <div class="head" style="background-color: rgb(132, 170, 160);">
        <p style="color: white;font-size: 28px;">农遗工具箱</p>
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
      <p style="color: white;font-size: 28px;">项目展示</p>
    </div>
    <hr class="head-hr" style="color: rgb(180, 195, 191);" />
  </div>
  <section style="background-color: rgb(232, 236, 234);">

  
  <div class="" style="margin-bottom: 50px;padding-top: 20px;">
    <div class="biaoti" style="background-color: white;width: 300px;">
      <p style="color: black;">AI纹样·XFUN智能生成</p>
    </div>
    <img :src="images.tool7" alt="" style="max-width: 1200px; height: auto; margin-top: 10px;">
  </div>
  <div class="" style="padding-bottom: 50px;">
    <div class="biaoti" style="background-color: white;width: 300px;">
      <p style="color: black;">AI包装生成·XFUN智能生成</p>
    </div>
    <img :src="images.tool8" alt="" style="max-width: 1200px; height: auto; margin-top: 10px;">
  </div>
  </section>
  <div class="mini">
    <div class="biaoti" style="background-color: white;">
      <p style="color: black;">小程序·蚕桑大亨</p>
    </div>
    <div class="mini-program-section">
      <!-- 左侧 手机+视频 -->
      <div class="mini-left">
        <div class="">
          <video autoplay loop muted playsinline class="demo-video">
            <source src="@/assets/蚕桑大亨/demo-video.mp4" type="video/mp4" />
          </video>
          <img src="@/assets/蚕桑大亨/left.png" alt="演示图片" class="code" />
        </div>
        <img src="@/assets/蚕桑大亨/qrcode.png" alt="演示图片" class="code1" />
      </div>

      <!-- 右侧 说明文字 + 8 张截图 -->
      <div class="mini-right">
        <div class="screenshot-grid">
          <div class="screenshot" v-for="(img, index) in imageList" :key="index">
            <img :src="img" :alt="`截图${index + 1}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="biaoti" style="background-color: rgb(246, 240, 225);">
      <p style="color: black;">小程序·益智拼图</p>
    </div>
    <puzzle />
  </div>
  <div class="jiemi3">
    <div class="biaoti" style="background-color: white;">
      <p style="color: black;">轻解谜·狄港寻迹</p>
    </div>
    <img :src="images.jiemi3" alt="" style="max-width: 1200px; height: auto; margin-top: 10px;">
  </div>
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
  border-top: 5px solid;
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
  margin-bottom: 0px;
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

.mini{
  background-color: rgb(246, 240, 225);
  padding-top: 20px;
  
}
.mini-program-section {
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 7fr;
  margin: 0 auto 40px;
  gap: 40px;
  max-width: 1200px;
  height: 700px
}

.mini-left {

  position: relative;
}

.code {
  width: auto;
  height: 700px;
  object-fit: cover;
}

.code1 {
  position: absolute;
  left: 0px;
  top: 600px;
  width: 100px;
  height: auto;
}
.demo-video {
  position: absolute;
  top: 16px;
  left: 208px;
  width: 246px;
  height: auto;
  border-radius: 30px;
  object-fit: cover;
}

/* 右侧 */
.mini-right {}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.screenshot img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.biaoti {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 23px;
  border: 2px solid black;
  width: 200px;
  height: 50px;
  line-height: 50px;
  margin-left: 150px;
}

.jiemi3 {
  text-align: center;
  background-color: rgb(246, 240, 225);
  padding: 20px 0;
}
</style>