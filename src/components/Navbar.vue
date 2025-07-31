<template>
  <header class="navbar-header">
    <el-menu :default-active="activeIndex" background-color="#e8eceb" active-text-color="black" class="el-menu-demo"
      mode="horizontal" @select="handleSelect">
      <!-- 左侧 logo 区域 -->
      <el-menu-item index="0" class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo-img" />
        <span class="logo-text">农遗探元</span>
      </el-menu-item>

      <!-- 中间菜单项 -->
      <el-menu-item index="1">农遗数字基因</el-menu-item>
      <el-menu-item index="2">农遗智游</el-menu-item>
      <el-menu-item index="3">农遗AI智创</el-menu-item>
      <el-menu-item index="4">农遗素材库</el-menu-item>

      <!-- 右侧登录/注册 -->
      <el-menu-item index="5" class="auth-links">
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.getActiveIndexByRoute(this.$route.path)
    };
  },
  methods: {
    // 根据路由返回对应的菜单 index
    getActiveIndexByRoute(path) {
      switch (path) {
        case '/':
          return '0'; // 首页
        case '/create':
          return '3'; // 农遗智创
        case '/login':
          return '5'; // 登录/注册
        case '/gene':
          return '1'; // 农遗数字基因
        case '/material':
          return '4'
        // 其他路由...
        default:
          return '1'; // 默认选中第一个
      }
    },
    handleSelect(key) {
      this.activeIndex = key; // 更新选中状态
      if (key === '0') {
        this.$router.push('/'); // 跳转到首页
        console.log('跳转到首页');
      }
      if (key === '3') {
        this.$router.push('/create');
      }
      if (key === '4') {
        this.$router.push('/material');
      }
      if (key === '1') {
        this.$router.push('/gene');
      }
    }
  }
};
</script>

<style scoped>
/* 使用深度选择器（:deep）以确保样式能够应用到子组件内部 */
:deep(.el-menu-item) span,
:deep(.el-menu-item) {
  cursor: pointer !important;
  outline: none !important;
  caret-color: transparent !important;
  user-select: none !important;
  color: black !important;
}


.navbar-header {
  position: fixed;
  /* 固定定位 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  /* 确保在页面内容之上 */
  background-color: #e8eceb;
  /* 防止背景透明影响阅读 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* 可选：加个阴影更明显 */
}

.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  /* 调整高度 */
  line-height: 60px;
  /* 垂直居中文字 */
}

.logo-container {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.logo-img {
  height: 50px;
  margin-right: 10px;
}

.auth-links {
  font-size: 14px;
  color: #666;
}

.auth-links a {
  text-decoration: none;
  color: inherit;
  margin: 0 5px;
}

.auth-links a:hover {
  color: #b3c3b8;
}
</style>