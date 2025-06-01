<template>
  <header class="navbar-header">
    <!-- 左侧 logo -->
    <div class="logo-container">
      <img src="../assets/5898d06b96571856a447e82bcef16fa.png" alt="Logo" class="logo-img" />
      <span class="logo-text">农遗智慧基因</span>
    </div>

    <!-- 中间导航菜单 -->
    <nav class="menu-nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">关于农遗</el-menu-item>
        <el-menu-item index="2">农遗数字基因图谱</el-menu-item>
        <el-menu-item index="3">农遗基因AI智鉴</el-menu-item>
        <el-menu-item index="4">数字文创</el-menu-item>
      </el-menu>
    </nav>

    <!-- 右侧登录/注册按钮 -->
    <div class="auth-buttons">
      <el-button size="small" @click="$router.push('/login')">登录</el-button>
      <el-button size="small" type="primary" @click="$router.push('/register')">注册</el-button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1' // 默认激活的菜单项
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('选中的菜单:', key, keyPath)
    }
  }
}
</script>

<style scoped>
.navbar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.logo-img {
  height: 30px;
  margin-right: 10px;
}

.menu-nav {
  flex: 1;
  text-align: center;
}

.el-menu-demo {
  display: inline-block;
  padding: 0;
  border-bottom: none !important;
  /* 去掉下边框 */
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>