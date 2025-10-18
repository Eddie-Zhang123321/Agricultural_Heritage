<template>
  <div class="home">
    <Navbar />
    <div style="height: 20px;"></div>

    <!-- 顶部轮播图 -->
    <header>
      <div class="carousel-container">
        <el-carousel :interval="carouselInterval" arrow="always" height="700px" ref="carouselRef"
          @change="handleCarouselChange">
          <el-carousel-item v-for="(item, index) in banners" :key="index">
            <template v-if="item.type === 'video'">
              <video :src="item.videoUrl" class="carousel-bg" autoplay muted playsinline @ended="onVideoEnded"
                @play="onVideoPlay" ref="videoRefs"></video>

            </template>
            <template v-else>
              <img :src="item.imageUrl" alt="Banner" class="carousel-bg" />
              <div class="mask"></div>
              <div class="corner-icon">
                <img :src="images.locationIcon" class="icon-img" />
                <img :src="images.locationText" class="location" />
              </div>
              <div class="center-content">
                <img :src="images.mainLogo" class="center-logo" />
                <img :src="images.titleImg" class="center-img" />
                <img :src="images.startBtn" class="start-btn" style="margin-top: 50px;" />
              </div>
            </template>

          </el-carousel-item>
        </el-carousel>
      </div>
    </header>

    <main>
      <!-- 农遗介绍 -->
      <section class="about-agricultural-heritage">
        <h2 class="biaoti1">板块一：农遗数字基因</h2>
        <div class="container">

          <p style="color: black;">农业文化遗产是指人类与其所处环境长期协同发展中创造并传承的独特农业生产系统。全球重要农业文化遗产是由与其领土关
            系错综复杂的社区居住的农业生态系统。这些不断进化的遗产地是具有复原力的系统，它们特点是显著的农业生物多样性、传统知
            识、宝贵的文化和景观，由农民、牧民、渔民和森林居民以有助于他们生计和粮食安全的方式进行可持续管理。截至2025年，中国
            全球重要农业文化遗产增至25项，数量保持世界首位。</p>
          <!-- 遗产图卡 -->
          <el-row :gutter="20" class="card-area">
            <el-col :span="8" v-for="item in items" :key="item.title">
              <router-link :to="item.link || '#'" class="card-link">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="card-img" />
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </div>
      </section>

    
      <section class="agricultural-heritage-AI-trip">
        <h2 class="biaoti1">部分二：农遗工具箱</h2>

        <div class="jigsaw" >
          <div class="biaoti" style="background-color: rgb(246, 240, 225);">
              <p style="color: black;margin: 0;">趣游·益智拼图</p>
            </div>
          <div style="min-width: 1200px;">
            <puzzle />
          </div>
        </div>
        <div class="jigsaw">
          
            <div class="biaoti" style="background-color: white;">
              <p style="color: black;margin: 0;">小程序·蚕桑大亨</p>
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
      </section>
      <section class="digital-cultural-creativity">
        <h2 class="biaoti1">板块三：农遗AI智创</h2>
        <div class="biaoti" style="background-color:rgb(211, 231, 196); margin-left: 18px;margin-bottom: 20px;width: 400px;">
              <p style="color: black;margin: 0;">案例1-桑基鱼塘AI生成风格插画</p>
            </div>
        <img :src="images.zhichuang" alt="" class="new-img" />
      </section>
      <section class="new-team-of-agricultural-heritage">
        <h2 class="biaoti1">板块四：农遗素材库</h2>
         <div class="section-title" style="margin-top: 20px; margin-left: 150px;"><p style="margin-bottom: 0;">地理纹样素材</p></div>
        <div class="wenyang">
            <img :src="images.wenyang1" alt="">
            <img :src="images.wenyang2" alt="">
            <img :src="images.wenyang3" alt="">
            <img :src="images.wenyang4" alt="">
        </div>
        <h2 class="section-title" style="margin-top: 20px; margin-left: 150px;"><p style="margin-bottom: 0;">插画风格素材</p></h2>

            <!-- 轮播图 -->

            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="(item, index) in newExplorationItems" :key="item">
                    <div class="carousel-image1">
                        <img :src="item.image" alt="{{ item.title }}" class="carousel-img1" />
                        <div class="mask1">
                            <span class="mask-text">{{ item.content }}</span> <!-- 遮罩层上的文字 -->
                        </div>
                    </div>

                </el-carousel-item>
            </el-carousel>


        
      </section>
    </main>

    <PageFooter />

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'
import * as images from '@/assets/index/image.js'
import puzzle from '@/components/puzzle.vue'

const carouselRef = ref(null)
const videoRefs = ref([])
const isVideoPlaying = ref(false)
const carouselInterval = ref(3000) // 使用响应式数据控制轮播间隔
const imageModules = import.meta.glob('@/assets/蚕桑大亨/图像 *.png', { eager: true });
const imageList = Object.values(imageModules).map(module => module.default);

const newExplorationItems = ref([
    { image: images.ty1, content: '【遗产新生】荻港古建' },
    { image: images.ty2, content: '【遗产新生】荻港古建' },
    { image: images.ty3, content: '【遗产新生】荻港古建' },
    { image: images.ty4, content: '【遗产新生】荻港古建' },
    { image: images.ty5, content: '【遗产新生】荻港古建' },
    { image: images.ty6, content: '【遗产新生】荻港古建' },
    { image: images.ty7, content: '【遗产新生】荻港古建' }
])
const handleCarouselChange = (currentIndex) => {
  // 当轮播图切换时，如果之前有视频在播放，需要暂停它
  const prevVideo = videoRefs.value.find((video, index) => index !== currentIndex && video);
  if (prevVideo) {
    prevVideo.pause();
    isVideoPlaying.value = false;
  }

  // 如果当前是视频项，禁用自动播放
  if (banners.value[currentIndex] && banners.value[currentIndex].type === 'video') {
    carouselInterval.value = 0; // 禁用自动播放
  } else {
    carouselInterval.value = 3000; // 恢复自动播放
  }
}

const onVideoPlay = () => {
  // 视频开始播放时，禁用轮播图自动播放
  isVideoPlaying.value = true;
  carouselInterval.value = 0;
}

const onVideoEnded = () => {
  // 视频播放结束后，手动切换到下一张，并恢复轮播图自动播放
  isVideoPlaying.value = false;
  carouselInterval.value = 3000;
  nextTick(() => {
    if (carouselRef.value) {
      carouselRef.value.next();
    }
  });
}

const banners = ref([
  { type: 'video', videoUrl: images.bannerVideo },
  { imageUrl: images.banner1 },
  { imageUrl: images.banner2 },
  { imageUrl: images.banner3 }

])

const experts = [
  {
    name: "曹幸穗",
    avatar: images.expert1,
    title: "农业农村部全球重要农业文化遗产专家委员会副主任、中国农业博物馆研究员",
    desc: "曹幸穗告诉记者，全球重要农业文化遗产的评选工作已形成了一套较为完善的评审标准，其主要包括五个方面：具有独特的传统生产方式和知识体系；在食物与生计安全方面占有重要地位；包含有丰富的农业生物多样性和环境生物多样性；拥有突出的社会价值、文化价值和生态价值；拥有独特的农牧业景观。需要在这些方面都具有显著特点和全球重要性。"
  },
  {
    name: "阎长武",
    avatar: images.expert2,
    title: "农业农村部全球重要农业文化遗产专家委员会委员、中国科学院地理科学与资源研究所研究员",
    desc: "传统农业在生态保护方面具有独特优势。比如，通过间作套种等多样性种植提高农产品的数量和质量，通过稻田养鱼实现“一地多用、一水多用”和生物互利共生，通过游牧获得畜牧产品，还减少对放牧地的高强度利用，提高草原承载力。提出全球重要农业文化遗产保护倡议，目的就是发掘、保护、利用、传承那些为推动农业可持续发展的“鲜活”样板。"
  }
]

const items = [
  { title: "浙江湖州桑基鱼塘系统", image: images.g1, link: '/sangjiyutang' },
  { title: "浙江绍兴会稽山古香榧群", image: images.g2, link: '#' },
  { title: "福建安溪铁观音茶文化系统", image: images.g3, link: '#' },
  { title: "闽侯稻鱼鸭系统", image: images.g4, link: '#' },
  { title: "中国南方稻作梯田", image: images.g5, link: '#' },
  { title: "查看更多", image: images.more1, link: '/gene' }
]

const createItems = [
  { title: "农遗新生", image: images.nongyi, link: '/nongyi' },
  { title: "农遗智创", image: images.aibg, link: '/aibg' },
  { title: "农遗潮品", image: images.work1, link: '/work1' },
  { title: "农遗智游", image: images.puzzle, link: '/puzzle' }
]
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #f9f9f9;
}

header {
  width: 100%;
  position: relative;
}

.carousel-container {
  position: relative;
  height: 700px;
  overflow: hidden;
  margin-bottom: 0px;

}

.carousel-bg {
  width: auto;
  height: 500px;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 0;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  pointer-events: none;
  z-index: 1;
}

.corner-icon {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 2;
}

.icon-img {
  width: 32px;
  height: 32px;
}

.location {
  width: 100px;
}

.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  width: 80%;
  max-width: 600px;
}

.center-logo {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.center-img {
  max-width: 100%;
  max-height: 180px;
  margin-bottom: 20px;
}

.start-btn {
  width: 220px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.start-btn:hover {
  transform: scale(1.05);
}

main {
  flex: 1;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
}

/* 背景图全覆盖 section */
.about-agricultural-heritage {
  margin-top: 0;
  background-image: url("@/assets/矩形 1460.png");
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

/* 背景遮罩增强文字可读性 */

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;
  padding: 20px;

}

.intro-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  color: black;
}

.intro-card h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  color: black;
}

.intro-card p {
  line-height: 1.8;
  font-size: 16px;
  text-align: justify;
  color: black;
}

/* 卡片区域样式 */
.section {
  padding-bottom: 50px;
  margin-bottom: -12px;
}

.section-title {
  font-size: 24px;
  margin:0;
  margin-bottom: 20px;
  font-weight: bold;
  color: #1a1a1a;
  position: relative;
  display: flex;
  align-items: center;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 专家卡片外部容器 */
.experts-card {
  width: 100%;
  background: white;
  border-radius: 12px;
  margin-bottom: 40px;
  margin-top: 50px;
  border: transparent;
}

.experts-card .expert-card {
  background-color: #e8eceb;
  border-radius: 12px;
  margin-top: 15px;
  padding: 0px;
}

.experts-card .el-avatar {
  width: 120px;
  height: 120px;
  margin-top: 0px;
  border-radius: 50%;
}

.experts-card h3 {
  font-size: 18px;
  margin: 0;
  font-weight: bold;
  text-align: left;
}

.experts-card p {
  margin: 4px 0;
  color: #666;
  font-size: 14px;
  text-align: left;
}

.experts-card p:last-of-type {
  color: #000;
}

/* 遗产图卡样式 */
.card-area .el-card {
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.el-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.el-card h3 {
  font-size: 18px;
  margin: 0;
  font-weight: bold;
}

.el-card p {
  margin: 4px 0;
  color: #666;
  font-size: 14px;
}

/* 遗产卡片图集部分 */
.card-area {
  margin-top: 30px;
}

.card-area .el-col {
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-area .el-card {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-img:hover {
  transform: scale(1.05);
}

.card-area .el-card::after {
  content: attr(data-title);
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
}

.agricultural-heritage-digital-gene-map .container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  color: #fff;
}

.new-img {
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 20px;
  gap: 0px 20px;
}

.agricultural-heritage-digital-gene-map {
  p {
    margin: 30px 100px;
  }

  img {
    width: 50%;
    height: auto;
    display: block;
    margin: 20px auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}

.agricultural-heritage-AI-trip {
  background-color: #edeaea;
  margin: 0px -100px;
  /* 负边距抵消父容器的padding */
  padding: 20px 100px;
  /* 保持内容的内边距 */
  align-items: center;
}

.jigsaw {
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  align-items: flex-start;
  background-color: white;
   border-radius: 20px;
}

.jigsaw-img {
  width: auto;
  height: 40px;
  margin-bottom: 20px;

}

.puzzle-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-left: 70px;
}

.puzzle-container img {
  width: 100%;
  height: auto;

}

.new-team-of-agricultural-heritage {
  margin: 50px -150px;
  background-color: rgb(246, 240, 225);
  margin-bottom: 0px;

}

.digital-cultural-creativity {
  margin: 20px 0px;
  text-align: center;
}

/* 修复文字区域出现 I 型光标的问题 */
.about-agricultural-heritage,
.about-agricultural-heritage p,
.about-agricultural-heritage h2,
.experts-card,
.expert-card,
.expert-card p,
.expert-card h3,
.card-area,
.card-area .el-card,
.card-area .el-card p {
  cursor: default;
}

.carousel-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.carousel-bg[type="video"] {
  object-fit: cover;
}

.biaoti1 {
  font-size: 40px;
  color: black;
  margin-top: 0;
  padding-top: 10px;
}

.mini{
  background-color: white;
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
  height: 35px;
  line-height: 35px;
  margin-left: 50px;
  margin-top: 20px;
}
.section-title {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #1a1a1a;
    position: relative;
    padding-left: 15px;
    display: flex;
    align-items: center;
}

.wenyang {
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
}
.wenyang img {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-section {
    background-color: #f5f7fa;
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 50px;
}

.el-carousel_container {
    width: 300px !important;
}



.el-carousel {
    padding: 50px 0px;
    padding-top: 20px;
    
}

.carousel-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
}

.carousel-image1 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f2f5;
}

.carousel-image1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 图片铺满容器 */
}

.mask1 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    /* 覆盖下1/3部分 */
    background-color: rgba(179, 203, 201, 0.5);
    /* 半透明黑色遮罩 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    /* 确保遮罩在背景上方但在主文字下方 */
}

</style>