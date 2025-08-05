<template>
  <div class="toolbox">
    <Navbar />
  </div>
  <div class="container">
    <div class="head-box">
      <hr class="head-hr" style="color: rgb(132, 170, 160);"/>
      <div class="head" style="background-color: rgb(132, 170, 160);"><b style="color: white;font-size: large;">农遗工具箱</b></div>
      <hr class="head-hr" style="color: rgb(132, 170, 160);"/>
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
      <hr class="head-hr" style="color: rgb(180, 195, 191);"/>
      <div class="head" style="background-color: rgb(180, 195, 191);"><b style="color: white">游戏体验</b></div>
      <hr class="head-hr" style="color: rgb(180, 195, 191);"/>
    </div>
  <puzzle />
  <PageFooter />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import puzzle from '../components/puzzle.vue';
import * as images from '@/assets/index/image.js'
import { ref } from 'vue'

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

body {
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
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
.head{
  width: 200px;
  height: 50px;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;

}
.head-hr {
  width: 500px;
  border-top: 3px solid ;
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
</style>