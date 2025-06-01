<template>
  <header class="navbar-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- 左侧 logo 区域 -->
      <el-menu-item index="0" class="logo-container">
        <img src="../assets/5898d06b96571856a447e82bcef16fa.png" alt=" Logo" class="logo-img" />
        <span class="logo-text">农遗智慧基因</span>
      </el-menu-item>

      <!-- 中间菜单项 -->
      <el-menu-item index="1">关于农遗</el-menu-item>
      <el-menu-item index="2">农遗数字基因图谱</el-menu-item>
      <el-menu-item index="3">农遗基因AI智鉴</el-menu-item>
      <el-menu-item index="4">数字文创</el-menu-item>

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
  width: 100%;
}

.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
  color: #409EFF;
}
</style>