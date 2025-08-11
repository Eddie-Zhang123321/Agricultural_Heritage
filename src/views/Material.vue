<template>
    <div class="material">
        <Navbar />


    </div>
    <div class="main-content container">
        <div class="kaitou" :style="{ backgroundImage: 'url(' + images.nongyi + ')' }">
            <h1 class="page-title" style="font-size: 50px;">文创素材库</h1>

            <!-- 搜索栏 -->
            <div class="search-container">
                <el-input v-model="searchQuery" placeholder="请输入关键词搜索素材" clearable prefix-icon="Search"
                    style="padding: 5px ; padding-bottom: 0px;">
                    <template #append>
                        <el-button>搜索</el-button>
                    </template>
                </el-input>
            </div>
        </div>

        <div class="">
        <div class="section-title" style="margin-top: 20px; margin-left: 120px;"><p>地理纹样素材</p></div>
        <div class="wenyang">
            <img :src="images.wenyang1" alt="">
            <img :src="images.wenyang2" alt="">
            <img :src="images.wenyang3" alt="">
            <img :src="images.wenyang4" alt="">
        </div>
        <img :src="images.wenyang" alt="" style="max-width: 1200px;height: auto;">
    </div>
        <div class="section" style="padding-bottom: 0px;">
            <h2 class="section-title" style="margin-top: 20px; margin-left: 120px;">插画风格素材</h2>

            <!-- 轮播图 -->

            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="(item, index) in newExplorationItems" :key="item">
                    <div class="carousel-image">
                        <img :src="item.image" alt="{{ item.title }}" class="carousel-img" />
                        <div class="mask">
                            <span class="mask-text">{{ item.content }}</span> <!-- 遮罩层上的文字 -->
                        </div>
                    </div>

                </el-carousel-item>
            </el-carousel>

            <div style="margin: 120px; margin-bottom: 50px;margin-top:0px;">
        <!-- 特色项目 -->
        <div class="exploration-grid">
            <div style="background-color:#D8E5DF; border-radius: 12px;">
                <h3 class="hezi">粮食与生计农遗转译</h3>
                <div class="zhuti">

                    <div class="card" v-for="(item, index) in featuredItems" :key="index">

                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>
                        <div class="card-content">
                            <div class="card-title">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background-color:#D8E0E6; border-radius: 12px;">
                <h3 class="hezi">建筑风貌基因转译</h3>
                <div class="zhuti">

                    <div class="card" v-for="(item, index) in featuredItemsa" :key="index">

                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>
                        <div class="card-content">
                            <div class="card-title">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background-color:#DFD9CA; border-radius: 12px;">
                <h3 class="hezi">知识系统基因转译</h3>
                <div class="zhuti">

                    <div class="card" v-for="(item, index) in featuredItemsb" :key="index">

                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>
                        <div class="card-content">
                            <div class="card-title">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background-color:#E3E3CC; border-radius: 12px;">
                <h3 class="hezi">LOGO设计</h3>
                <div class="zhuti">

                    <div class="card" v-for="(item, index) in featuredItemsc" :key="index">

                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>
                        <div class="card-content">
                            <div class="card-title">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


        </div>
    </div>

    
    

    <!-- 线稿设色区域 -->
    <div style="background-color:antiquewhite;margin: 120px;margin-top: 50px;border-top-left-radius: 12px;
border-top-right-radius: 12px;">
        <div style="margin: 20px;">
            <div class="section">
                <h2 class="section-title" style="margin-left: -10px; padding-top: 30px; margin-bottom: 30px;">线稿设色</h2>
                <div class="cards-container">
                    <div class="card" v-for="(item, index) in lineArtItems" :key="index">
                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>

                    </div>
                </div>
            </div>

            <!-- 平面设计区域 -->
            <div class="section">
                <h2 class="section-title" style="margin-left: -10px; margin-bottom: 30px;">平面设计</h2>
                <div class="cards-container">
                    <div class="card" v-for="(item, index) in designItems" :key="index">
                        <div class="card-image">
                            <img :src="item.image" alt="{{ item.title }}" class="card-img" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <PageFooter />
</template>


<script setup>
import * as images from '@/assets/index/image.js'
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'

// 数据定义保持不变
const searchQuery = ''

// 新生·探元轮播图数据
const newExplorationItems = ref([
    { image: images.ty1, content: '【遗产新生】荻港古建' },
    { image: images.ty2, content: '【遗产新生】荻港古建' },
    { image: images.ty3, content: '【遗产新生】荻港古建' },
    { image: images.ty4, content: '【遗产新生】荻港古建' },
    { image: images.ty5, content: '【遗产新生】荻港古建' },
    { image: images.ty6, content: '【遗产新生】荻港古建' },
    { image: images.ty7, content: '【遗产新生】荻港古建' }
])

// 新生·主题数据
const featuredItems = ref([
    { title: '乾隆面', image: images.food1 },
    { title: '桑叶面', image: images.food2 }

])
const featuredItemsa = ref([
    { title: '一元茶馆', image: images.yx1 },
    { title: '摇摇渔舟', image: images.yx2 }
])
const featuredItemsb = ref([
    { title: '农遗知识体验', image: images.yt1 },
    { title: '手工教具门票', image: images.yt2 }
])
const featuredItemsc = ref([

    { title: '遗产LOGO', image: images.tb1 },
    { title: '地方LOGO', image: images.tb2 }
])
// 线稿设色数据
const lineArtItems = ref([
    { image: images.xg1 },
    { image: images.xg2 },
    { image: images.xg3 },
    { image: images.xg4 },
    { image: images.xg5 },
    { image: images.xg6 }
])

// 平面设计数据
const designItems = ref([
    { image: images.pm1 },
    { image: images.pm2 },
    { image: images.pm3 },
    { image: images.pm4 },
    { image: images.pm5 },
    { image: images.pm6 }
])


</script>

<style scoped>
/* 原有样式保持不变 */
* {
    margin: 0;
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

}

/* 主要内容样式 */


.page-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: 600;
    color: #1a1a1a;
    position: relative;
}




/* 卡片区域样式 */
.section {
    padding-bottom: 50px;
    margin-bottom: -12px;
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



.cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 992px) {
    .cards-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .cards-container {
        grid-template-columns: 1fr;
    }
}

.kaitou {
    width: 100%;
    height: 500px;
    /* 可根据需求调整 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -8px;
    margin-top: 50px;
    margin-bottom: 40px;
}

.card {


    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card-image {
    border-radius: 12px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-image img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.card-content {
    text-align: center;
    margin-top: 10px;
    background-color: #fff;
}

.card-title {
    border: 1px solid #333;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    color: #513502;
    text-align: center;
    margin: 0;
    padding: 0;
}

.card-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(64, 158, 255, 0.8);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 10;
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
    background-color: rgb(246, 240, 225);
}

.carousel-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
}

.carousel-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f2f5;
}

.carousel-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 图片铺满容器 */
}

.mask {
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

.carousel-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
}

.placeholder-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f5f5f5 25%, #e0e0e0 25%, #e0e0e0 50%,
            #f5f5f5 50%, #f5f5f5 75%, #e0e0e0 75%, #e0e0e0);
    background-size: 40px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 14px;
}

.exploration-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
}



.exploration-grid .card {
    margin-bottom: 20px;
}

.theme-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.theme-grid .card {
    height: 250px;
}

.zhuti {
    border-radius: 12px;
    padding: 20px;
    display: flex;
    gap: 20px;
}

.group-title {
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 10px;
    padding-left: 10px;
    border-left: 3px solid #409EFF;
}

.el-carousel-container {
    margin: auto 50px !important;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.search-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 50px;
    border: #595a58 0.1px solid;
    background-color: white;
    border-radius: 25px;
}

.el-input {
    --el-input-border-radius: 30px;
    --el-input-border-color: #D9D9D9;
    --el-input-focus-border-color: #D9D9D9;
    --el-input-padding-left: 40px;
    --el-input-padding-right: 0;
    --el-input-placeholder-color: #999;
    --el-input-placeholder-font-size: 16px;
    --el-input-font-size: 16px;
}

.el-input__wrapper {
    padding: 0 40px 0 52px !important;
    background-color: #FFFFFF !important;
    box-shadow: none !important;
}

.el-button {
    border-top-right-radius: 30px;
    color: white !important;
    border-bottom-right-radius: 30px;
    background-color: #69baac82 !important;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 5px;
    height: 40px;
}

.el-input-group__append .el-button {
    padding: 0 20px !important;
}

.el-input__icon {
    color: #080c04 !important;
    font-size: 18px !important;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.hezi {
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 22px;

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
</style>