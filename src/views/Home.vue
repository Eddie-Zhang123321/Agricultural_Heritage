<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <Navbar />


    <!-- 主要内容区域 -->
    <main>
      <!-- 关于农遗 -->
      <section class="about-agricultural-heritage">
        关于农遗
      </section>

      <!-- 农遗数字基因图谱 -->
      <section class="agricultural-heritage-digital-gene-map">
        农遗数字基因图谱
      </section>

      <!-- 农遗基因AI智鉴 -->
      <section class="agricultural-heritage-AI-intelligence">
        <!-- 内容 -->
      </section>

      <!-- 数字文创库 -->
      <section class="digital-cultural-creativity-library">
        <!-- 内容 -->
      </section>

      <!-- 农遗新生团队 -->
      <section class="new-team-of-agricultural-heritage">
        <!-- 内容 -->
      </section>
    </main>

    <!-- 底部信息 -->
    <footer>
      底部信息
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
/* 样式 */
</style>
