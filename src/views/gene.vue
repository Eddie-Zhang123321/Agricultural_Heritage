<template>
    <div class="gene">
        <Navbar />
    </div>
    <div class="container">
        <div class="cards-container">
            <div class="card" v-for="(item, index) in geneItems" :key="index">
                <div class="card-image">
                    <img :src="item.image" alt="农遗基因图片" class="card-img" />
                </div>
            </div>
        </div>
    </div>
    <PageFooter />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import * as images from '@/assets/image.js'
import { ref } from 'vue'

const geneItems = ref([
    { image: images.g1 },
    { image: images.g2 },
    { image: images.g3 },
    { image: images.g4 },
    { image: images.g5 },
    { image: images.g6 },
    { image: images.g7 },
    { image: images.g8 },
    { image: images.g9 },
    { image: images.g10 },
    { image: images.g11 },
    { image: images.g12 }
])
</script>

<style scoped>
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
    padding: 20px;
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
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>