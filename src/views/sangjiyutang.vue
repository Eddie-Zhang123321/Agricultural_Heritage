<template>
    <div class="sangjiyutang">
        <Navbar />

        <div class="container">
            <div>
                <div class="title-container">
                    <h1 class="biaoti">农业文化遗产系统遗产地评估五项标准 ：</h1>
                    <p style="display: block;width: fit-content;">————出自联合国粮食及农业组织（FAO）</p>
                </div>

                <div class="title-container1">
                    <h2 class="biaoti1">粮食和生计安全</h2>
                    <h2 class="biaoti1">当地和传统知识系统</h2>
                    <h2 class="biaoti1">文化、价值体系和社会组织</h2>
                    <h2 class="biaoti1">景观风貌特征</h2>
                    <h2 class="biaoti1">农业生物多样性</h2>
                </div>
            </div>
            <img :src="images.digitalGeneMap" alt="农遗数字基因图谱"  style="max-width: 800px;height: auto;"/>
            <div class="">
                <h2 class="biaoti">粮食和生计安全</h2>
                <div class="">
                    <main class="card">
                        <div class="gallery-container" ref="container1" 
                            @mousedown="(e) => startDrag(e, 1)"
                            @touchstart.passive="(e) => startDrag(e, 1)" 
                            @mousemove="(e) => handleDrag(e, 1)"
                            @touchmove.passive="(e) => handleDrag(e, 1)" 
                            @mouseup="(e) => endDrag(e, 1)"
                            @mouseleave="(e) => endDrag(e, 1)" 
                            @touchend="(e) => endDrag(e, 1)">
                            <div class="gallery-track" ref="track1"
                                :style="{ transform: `translateX(${position1}px)` }">
                                <div v-for="(item, index) in galleryImages" :key="index" class="gallery-item">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="">
                <h2 class="biaoti">当地和传统知识系统</h2>
                <div class="">
                    <main class="card">
                        <div class="gallery-container" ref="container2" 
                            @mousedown="(e) => startDrag(e, 2)"
                            @touchstart.passive="(e) => startDrag(e, 2)" 
                            @mousemove="(e) => handleDrag(e, 2)"
                            @touchmove.passive="(e) => handleDrag(e, 2)" 
                            @mouseup="(e) => endDrag(e, 2)"
                            @mouseleave="(e) => endDrag(e, 2)" 
                            @touchend="(e) => endDrag(e, 2)">
                            <div class="gallery-track" ref="track2"
                                :style="{ transform: `translateX(${position2}px)` }">
                                <div v-for="(item, index) in galleryImages1" :key="index" class="gallery-item">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="">
                <h2 class="biaoti">文化、价值体系和社会组织</h2>
                <div class="">
                    <main class="card">
                        <div class="gallery-container" ref="container3" 
                            @mousedown="(e) => startDrag(e, 3)"
                            @touchstart.passive="(e) => startDrag(e, 3)" 
                            @mousemove="(e) => handleDrag(e, 3)"
                            @touchmove.passive="(e) => handleDrag(e, 3)" 
                            @mouseup="(e) => endDrag(e, 3)"
                            @mouseleave="(e) => endDrag(e, 3)" 
                            @touchend="(e) => endDrag(e, 3)">
                            <div class="gallery-track" ref="track3"
                                :style="{ transform: `translateX(${position3}px)` }">
                                <div v-for="(item, index) in galleryImages2" :key="index" class="gallery-item">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="">
                <h2 class="biaoti">景观风貌特征</h2>
                <div class="">
                    <main class="card">
                        <div class="gallery-container" ref="container4" 
                            @mousedown="(e) => startDrag(e, 4)"
                            @touchstart.passive="(e) => startDrag(e, 4)" 
                            @mousemove="(e) => handleDrag(e, 4)"
                            @touchmove.passive="(e) => handleDrag(e, 4)" 
                            @mouseup="(e) => endDrag(e, 4)"
                            @mouseleave="(e) => endDrag(e, 4)" 
                            @touchend="(e) => endDrag(e, 4)">
                            <div class="gallery-track" ref="track4"
                                :style="{ transform: `translateX(${position4}px)` }">
                                <div v-for="(item, index) in galleryImages3" :key="index" class="gallery-item">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="">
                <h2 class="biaoti">农业生物多样性</h2>
                <div class="">
                    <main class="card">
                        <div class="gallery-container" ref="container5" 
                            @mousedown="(e) => startDrag(e, 5)"
                            @touchstart.passive="(e) => startDrag(e, 5)" 
                            @mousemove="(e) => handleDrag(e, 5)"
                            @touchmove.passive="(e) => handleDrag(e, 5)" 
                            @mouseup="(e) => endDrag(e, 5)"
                            @mouseleave="(e) => endDrag(e, 5)" 
                            @touchend="(e) => endDrag(e, 5)">
                            <div class="gallery-track" ref="track5"
                                :style="{ transform: `translateX(${position5}px)` }">
                                <div v-for="(item, index) in galleryImages4" :key="index" class="gallery-item">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import * as images from '@/assets/index/image.js'
import { ref, onMounted, nextTick } from 'vue'

// 图片数据
const galleryImages = ref([
    { image: images.food11, },
    { image: images.food12, },
    { image: images.food13, },
    { image: images.food14, },
    { image: images.food15, }
]);

const galleryImages1 = ref([
    { image: images.food16, },
    { image: images.food17, },
    { image: images.food18, },
    { image: images.food19, },
    { image: images.food20, }
]);

const galleryImages2 = ref([
    { image: images.food21, },
    { image: images.food22, },
    { image: images.food23, },
    { image: images.food24, },
    { image: images.food25, },
    { image: images.food26, },
    { image: images.food27, }
]);

const galleryImages3 = ref([
    { image: images.food28, },
    { image: images.food29, },
    { image: images.food30, },
    { image: images.food31, },
    { image: images.food32, }
]);

const galleryImages4 = ref([
    { image: images.food33, },
    { image: images.food34, },
    { image: images.food35, },
    { image: images.food36, }
]);

// 为每个画廊创建独立的状态
const position1 = ref(0);
const position2 = ref(0);
const position3 = ref(0);
const position4 = ref(0);
const position5 = ref(0);

const isDragging1 = ref(false);
const isDragging2 = ref(false);
const isDragging3 = ref(false);
const isDragging4 = ref(false);
const isDragging5 = ref(false);

const startX1 = ref(0);
const startX2 = ref(0);
const startX3 = ref(0);
const startX4 = ref(0);
const startX5 = ref(0);

const startPosition1 = ref(0);
const startPosition2 = ref(0);
const startPosition3 = ref(0);
const startPosition4 = ref(0);
const startPosition5 = ref(0);

const containerWidth1 = ref(0);
const containerWidth2 = ref(0);
const containerWidth3 = ref(0);
const containerWidth4 = ref(0);
const containerWidth5 = ref(0);

const trackWidth1 = ref(0);
const trackWidth2 = ref(0);
const trackWidth3 = ref(0);
const trackWidth4 = ref(0);
const trackWidth5 = ref(0);

// 引用DOM元素
const container1 = ref(null);
const container2 = ref(null);
const container3 = ref(null);
const container4 = ref(null);
const container5 = ref(null);

const track1 = ref(null);
const track2 = ref(null);
const track3 = ref(null);
const track4 = ref(null);
const track5 = ref(null);

// 获取客户端X坐标
const getClientX = (e) => {
    return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
};

// 开始拖拽
const startDrag = (e, galleryId) => {
    e.preventDefault(); // 添加这行防止默认行为
    const clientX = getClientX(e);

    switch (galleryId) {
        case 1:
            isDragging1.value = true;
            startX1.value = clientX;
            startPosition1.value = position1.value;
            break;
        case 2:
            isDragging2.value = true;
            startX2.value = clientX;
            startPosition2.value = position2.value;
            break;
        case 3:
            isDragging3.value = true;
            startX3.value = clientX;
            startPosition3.value = position3.value;
            break;
        case 4:
            isDragging4.value = true;
            startX4.value = clientX;
            startPosition4.value = position4.value;
            break;
        case 5:
            isDragging5.value = true;
            startX5.value = clientX;
            startPosition5.value = position5.value;
            break;
    }
};

// 处理拖拽
const handleDrag = (e, galleryId) => {
    e.preventDefault(); // 添加这行防止默认行为
    const clientX = getClientX(e);

    switch (galleryId) {
        case 1:
            if (!isDragging1.value) return;
            const diff1 = clientX - startX1.value;
            let newPosition1 = startPosition1.value + diff1;
            const maxPosition1 = 0;
            const minPosition1 = -(trackWidth1.value - containerWidth1.value);
            newPosition1 = Math.max(minPosition1, Math.min(maxPosition1, newPosition1));
            position1.value = newPosition1;
            break;

        case 2:
            if (!isDragging2.value) return;
            const diff2 = clientX - startX2.value;
            let newPosition2 = startPosition2.value + diff2;
            const maxPosition2 = 0;
            const minPosition2 = -(trackWidth2.value - containerWidth2.value);
            newPosition2 = Math.max(minPosition2, Math.min(maxPosition2, newPosition2));
            position2.value = newPosition2;
            break;

        case 3:
            if (!isDragging3.value) return;
            const diff3 = clientX - startX3.value;
            let newPosition3 = startPosition3.value + diff3;
            const maxPosition3 = 0;
            const minPosition3 = -(trackWidth3.value - containerWidth3.value);
            newPosition3 = Math.max(minPosition3, Math.min(maxPosition3, newPosition3));
            position3.value = newPosition3;
            break;

        case 4:
            if (!isDragging4.value) return;
            const diff4 = clientX - startX4.value;
            let newPosition4 = startPosition4.value + diff4;
            const maxPosition4 = 0;
            const minPosition4 = -(trackWidth4.value - containerWidth4.value);
            newPosition4 = Math.max(minPosition4, Math.min(maxPosition4, newPosition4));
            position4.value = newPosition4;
            break;

        case 5:
            if (!isDragging5.value) return;
            const diff5 = clientX - startX5.value;
            let newPosition5 = startPosition5.value + diff5;
            const maxPosition5 = 0;
            const minPosition5 = -(trackWidth5.value - containerWidth5.value);
            newPosition5 = Math.max(minPosition5, Math.min(maxPosition5, newPosition5));
            position5.value = newPosition5;
            break;
    }
};

// 结束拖拽
const endDrag = (e, galleryId) => {
    switch (galleryId) {
        case 1:
            isDragging1.value = false;
            break;
        case 2:
            isDragging2.value = false;
            break;
        case 3:
            isDragging3.value = false;
            break;
        case 4:
            isDragging4.value = false;
            break;
        case 5:
            isDragging5.value = false;
            break;
    }
};

// 初始化容器和轨道
const initContainers = () => {
    // 初始化第一个画廊
    if (container1.value && track1.value) {
        containerWidth1.value = container1.value.offsetWidth;
        trackWidth1.value = track1.value.scrollWidth;
    }

    // 初始化第二个画廊
    if (container2.value && track2.value) {
        containerWidth2.value = container2.value.offsetWidth;
        trackWidth2.value = track2.value.scrollWidth;
    }

    // 初始化第三个画廊
    if (container3.value && track3.value) {
        containerWidth3.value = container3.value.offsetWidth;
        trackWidth3.value = track3.value.scrollWidth;
    }

    // 初始化第四个画廊
    if (container4.value && track4.value) {
        containerWidth4.value = container4.value.offsetWidth;
        trackWidth4.value = track4.value.scrollWidth;
    }

    // 初始化第五个画廊
    if (container5.value && track5.value) {
        containerWidth5.value = container5.value.offsetWidth;
        trackWidth5.value = track5.value.scrollWidth;
    }
};

// 生命周期钩子
onMounted(() => {
    window.addEventListener('resize', initContainers);
    nextTick(() => {
        initContainers();
    });
});
</script>

<style scoped>
.container {
    margin: 30px auto;
    padding: 20px;
}

.biaoti {
    background-color: rgb(132, 170, 160);
    color: black;
    display: block;
    width: fit-content;
    padding: 0 20px;
}

.biaoti1 {
    background-color: rgb(172, 188, 180);
    color: black;
    display: block;
    width: fit-content;
    padding: 0 20px;

}

.title-container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
}

.title-container1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
}

.container {
    max-width: 1200px;
    width: 100%;
    padding: 20px;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
}

.card {
    overflow: hidden;
    padding: 30px;
}

.gallery-container {
    position: relative;
    height: 200px;
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;
    touch-action: none;
    cursor: grab;
    margin-top: -30px;
}

.gallery-container:active {
    cursor: grabbing;
}

.gallery-track {
    gap: 10px;
    display: flex;
    height: 200px;
    will-change: transform;
}

.gallery-item {
    flex: 0 0 auto;
    height: 100%;
    position: relative;
    user-select: none;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
}
</style>