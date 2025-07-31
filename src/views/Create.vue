<template>
    <div class="create-page">
        <!-- 顶部导航栏 -->
        <Navbar />
        <main>
            <!-- AI智能创作区域 -->
            <div class="creation-header">
                <div class="section-title">AI智能创作</div>
            </div>
            <div class="ai-creation" @click="gotoCoze">

                <div class="search-section">
                    <div class="btn">
                        <div class="creation-buttons">
                            <el-button :class="['creation-btn', activeTab === 'poster' ? 'active' : '']"
                                @click="activeTab = 'poster'">风格海报/插画</el-button>
                            <el-button :class="['creation-btn', activeTab === 'product' ? 'active' : '']"
                                @click="activeTab = 'product'">文创品创作</el-button>
                        </div>
                    </div>
                    <div class="search">
                        <div class="search-row">
                            <span class="user-label">用户</span>
                            <el-input v-model="searchQuery1" placeholder="将创作需求输入框中（如 '设计某个元素包装海报'）" />
                        </div>
                        <div class="search-row">
                            <span class="user-label">用户</span>
                            <el-input v-model="searchQuery2" placeholder="继续优化 ..." />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 作品展示区域 -->
            <div class="products-section">
                <div class="products-header">
                    <div class="section-title">作品广场</div>
                </div>
                <div class="cards-container">
                    <div class="card" v-for="(item, index) in Items" :key="index">
                        <router-link :to="item.link" class="card-link">
                            <div class="card-image">
                                <img :src="item.image" alt="创作图片" class="card-img" />
                            </div>
                            <div class="card-footer">
                                <span class="user-label">用户</span> 用户12345
                            </div>
                        </router-link>
                    </div>
                </div>
                <el-button class="load-more-btn">加载更多</el-button>
            </div>
        </main>
        <!-- 页脚 -->
        <PageFooter />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import * as images from '@/assets/index/image.js';
import { ref } from 'vue';

const searchQuery1 = ref('');
const searchQuery2 = ref('');
const activeTab = ref('poster');

const gotoCoze = () => {
    window.open('https://www.coze.cn/store/agent/7530074368895254571?bot_id=true', '_blank');
};

const Items = ref([
    { image: images.work1, link: '' },
    { image: images.work2, link: '' },
    { image: images.work3, link: '' },
    { image: images.work4, link: '' },
    { image: images.work5, link: '' },
    { image: images.work6, link: '' },
    { image: images.work7, link: '' }
]);
</script>

<style scoped>
main {
    background-color: #fffdf9;
    flex: 1;
    padding: 0 20px;
    max-width: 1280px;
    margin: 100px auto;
}

.section-title {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #4b6a5e;
    background-color: #e0ece6;
    padding: 4px 20px;
    border-radius: 20px;
    text-align: center;
}

.creation-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

.ai-creation {
    background: url('@/assets/AI智创/组 83.png') no-repeat center center;
    background-size: contain;
    width: 1240px;
    height: 331px;
    min-width: 1240px;
    min-height: 331px;
    padding: 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    padding: 0 0 0 10px;
    cursor: pointer;
}

.btn {
    display: inline-block;
    height: 120px;
}

.creation-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f4f8;
    border-radius: 50px;
    max-width: 280px;
    margin: 40px 20px 20px;
    padding: 4px;
}

.creation-btn {
    border-radius: 30px;
    padding: 8px 20px;
    background: transparent;
    color: #333;
    border: none;
    font-weight: bold;
    cursor: pointer;
}

.creation-btn.active {
    background: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    color: #000;
}

.search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    gap: 10px;
}

.search-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.search-row {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    max-width: 560px;
}

.user-label {
    padding: 6px 12px;
    background: #e8f0ec;
    color: #333;
    border-radius: 8px;
    font-weight: bold;
    white-space: nowrap;
}

.el-input {
    flex: 1;
}

.products-section {
    background: #fff;
    margin-top: 40px;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    .section-title {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        color: #4b6a5e;
        background-color: #e0ece6;
        padding: 4px 20px;
        border-radius: 20px;
        margin-left: 10px;
        margin: 20px;
    }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.card {
    border-radius: 12px;
    background: #fff;
    border: 5px solid #9a9b9a;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
}

.card-link {
    text-decoration: none;
}

.card-image {
    width: 100%;
    height: 160px;
    margin-top: 10px;
    background-color: #f4f4f4;
    overflow: hidden;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-footer {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px;
    font-size: 14px;
    color: #333;
}

.load-more-btn {
    display: block;
    margin: 40px auto 0;
    background: #d3dcd6;
    color: #333;
    padding: 10px 30px;
    border-radius: 20px;
    font-weight: bold;
    border: none;
}

@media (max-width: 1024px) {
    .cards-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .cards-container {
        grid-template-columns: 1fr;
    }
}
</style>