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
      <b style="color: white;font-size: large;">项目展示</b>
    </div>
    <hr class="head-hr" style="color: rgb(180, 195, 191);" />
  </div>
  <div class="mini">
    <img src="@/assets/蚕桑大亨/组 111.png" class="project_name" />
  </div>
  <!-- 小程序展示 -->
  <div class="mini-program-section">
    <!-- 左侧 手机+视频 -->
    <div class="mini-left">
      <div class="phone-video-container">
        <div class="screen">
          <video autoplay loop muted playsinline class="demo-video">
            <source src="@/assets/蚕桑大亨/demo-video.mp4" type="video/mp4" />
          </video>
        </div>
        <img src="@/assets/蚕桑大亨/phone-frame.png" class="phone-frame" alt="手机边框" />
      </div>
      <img src="@/assets/蚕桑大亨/qrcode.png" alt="演示图片" class="code" />
    </div>

    <!-- 右侧 说明文字 + 8 张截图 -->
    <div class="mini-right">
      <div class="description-box">
        <p class="description-text">
          <span class="highlight">电商</span> ● 电商消费深度绑定游戏，在趣味交互中自然转化消费行为，构建“寓教于购”的产业新生态
        </p>
        <p class="description-text">
          <span class="highlight">游戏</span> ● 以桑基鱼塘生态循环为元素，进行游戏化虚拟模拟农场
        </p>
      </div>
      <div class="screenshot-grid">
        <div class="screenshot" v-for="(img, index) in imageList" :key="index">
          <img :src="img" :alt="`截图${index + 1}`" />
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
    <img :src="images.jiemi3" alt="" style="max-width: 1200px; height: auto;">
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
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 40px;
  background-color: antiquewhite;
  max-width: 1200px;
}

.mini-program-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 40px;
  gap: 40px;
  background-color: antiquewhite;
  max-width: 1200px;
}

/* 项目名称 */
.project_name {
  width: auto;
  height: 50px;
  display: block;
  margin-left: 70px;
  margin-bottom: 0;
}

/* 左侧 */
.mini-left {
  flex: 1;
  max-width: 350px;
}

.phone-video-container {
  position: relative;
  --phone-w: 320px;
  width: var(--phone-w);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  isolation: isolate;
}

.screen {
  position: absolute;
  inset: 6% 29% 6% 29%;
  overflow: hidden;
  border-radius: 18px;
  z-index: 1;
}

.demo-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.phone-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
}

.code {
  display: block;
  width: 100px;
  margin-top: 10px;
}

/* 右侧 */
.mini-right {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 100px;
}

.description-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.description-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.description-text {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

.highlight {
  color: rgb(132, 170, 160);
  font-weight: bold;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.screenshot img {
  width: 80%;
  height: 90%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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