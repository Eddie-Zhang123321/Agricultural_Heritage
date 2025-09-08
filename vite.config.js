import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue(),
    // gzip压缩
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于阈值会被压缩，单位b，默认为10kb
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: false // 是否删除原文件
    }),
    // 图片优化
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: true,
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境去除console和debugger
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 代码分割配置
    rollupOptions: {
      output: {
        // 静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 拆分代码，使用动态导入的组件会被拆分为单独的chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将node_modules中的模块拆分成单独的chunk
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 设置chunk大小警告的限制
    chunkSizeWarningLimit: 1500,
    // 禁用源码映射以减小体积
    sourcemap: false
  }
})