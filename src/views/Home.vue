<template>
  <div class="home">
    <Navbar />
    <div style="height: 55px;"></div>

    <!-- 顶部轮播图 -->
    <header>
      <div class="carousel-container">
        <el-carousel :interval="3000" arrow="always" height="400px">
          <el-carousel-item v-for="(item, index) in banners" :key="index">
            <img :src="item.imageUrl" alt="Banner" class="carousel-bg" />
            <div class="mask"></div>
            <div class="corner-icon">
              <img :src="images.locationIcon" class="icon-img" />
              <img :src="images.locationText" class="location" />
            </div>
            <div class="center-content">
              <img :src="images.mainLogo" class="center-logo" />
              <img :src="images.titleImg" class="center-img" />
              <img :src="images.startBtn" class="start-btn" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </header>

    <main>
      <!-- 农遗介绍 -->
      <section class="about-agricultural-heritage">
        <div class="container">

          <h2>农遗数字基因</h2>
          <p>农业文化遗产是指人类与其所处环境长期协同发展中创造并传承的独特农业生产系统。全球重要农业文化遗产是由与其领土关
            系错综复杂的社区居住的农业生态系统。这些不断进化的遗产地是具有复原力的系统，它们特点是显著的农业生物多样性、传统知
            识、宝贵的文化和景观，由农民、牧民、渔民和森林居民以有助于他们生计和粮食安全的方式进行可持续管理。截至2025年，中国
            全球重要农业文化遗产增至25项，数量保持世界首位。</p>


          <!-- 专家介绍 -->
          <el-card class="experts-card" shadow="always">
            <el-row :gutter="0">
              <el-col :span="24" v-for="expert in experts" :key="expert.name">
                <el-card class="expert-card">
                  <el-row :gutter="0">
                    <el-col :span="6">
                      <el-avatar :src="expert.avatar" size="large" />
                    </el-col>
                    <el-col :span="18">
                      <h3>{{ expert.name }}</h3>
                      <p>{{ expert.title }}</p>
                      <p>{{ expert.desc }}</p>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </el-card>

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

      <!-- 其他模块预留 -->
      <section class="agricultural-heritage-digital-gene-map">
        <p>农业文化遗产作为一种复合型遗产，包括的自然景观、景观人文、景观聚落、农业景观、以及支撑景观运作的景观生态系统
          对中国传统景观基因的研究具有重要的示范价值。运用扎根理论与图谱研究法分析客观赋权获得5类景观基因因子:聚落景观基因
          自然景观基因、农业景观基因、景观人文基因、生态系统基因。</p>
        <img :src="images.digitalGeneMap" alt="农遗数字基因图谱" />
      </section>
      <section class="agricultural-heritage-AI-intelligence"></section>
      <section class="digital-cultural-creativity-library"></section>
      <section class="new-team-of-agricultural-heritage"></section>
    </main>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'
import * as images from '@/assets/index/image.js'

const banners = ref([
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
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 40px;
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
section.about-agricultural-heritage {
  position: relative;
  background-image: url("@/assets/矩形 1460.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: #fff;
}

/* 背景遮罩增强文字可读性 */
.about-agricultural-heritage::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
  border-radius: 12px;
}

.about-agricultural-heritage .container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  color: #fff;
}

.intro-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  color: #333;
}

.intro-card h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  color: #222;
}

.intro-card p {
  line-height: 1.8;
  font-size: 16px;
  text-align: justify;
  color: #444;
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
</style>