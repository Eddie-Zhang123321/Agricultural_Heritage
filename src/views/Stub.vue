<template>
    <div class="stubs-container">
        <div class="container">
            <div class="hezi" :class="{ loading: isLoading }">
                <img src="@/assets/images/ai二维码.png" alt="二维码" class="erweima" @load="handleQrCodeLoad"
                    @error="handleQrCodeError">
                <p class="time-display">{{ timeText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stubs',
    data() {
        return {
            timeText: '正在加载时间...',
            isLoading: true,
            backgroundImage: null
        }
    },
    mounted() {
        this.preloadBackgroundImage();
        this.updateTime();

        // 防止双击缩放（针对移动端）
        this.preventDoubleTapZoom();
    },
    methods: {
        updateTime() {
            const now = new Date();
            // 格式化为 YYYY-MM-DD HH:MM:SS
            const timeString = now.getFullYear() + '-' +
                String(now.getMonth() + 1).padStart(2, '0') + '-' +
                String(now.getDate()).padStart(2, '0') + ' ' +
                String(now.getHours()).padStart(2, '0') + ':' +
                String(now.getMinutes()).padStart(2, '0') + ':' +
                String(now.getSeconds()).padStart(2, '0');

            this.timeText = '打卡时间: ' + timeString;
        },

        preloadBackgroundImage() {
            const img = new Image();
            img.src = 'https://pic1.imgdb.cn/item/68f20dc3c5157e1a887d6b8b.jpg';
            img.onload = this.handleImageLoad;
            img.onerror = this.handleImageError;
            this.backgroundImage = img;
        },

        handleImageLoad() {
            this.isLoading = false;
            // 设置背景图片
            const heziElement = document.querySelector('.hezi');
            if (heziElement) {
                heziElement.style.backgroundImage = `url('${this.backgroundImage.src}')`;
            }
        },

        handleImageError() {
            this.timeText = '图片加载失败，请检查网络';
            this.isLoading = false;
        },

        handleQrCodeLoad() {
            console.log('二维码加载成功');
        },

        handleQrCodeError() {
            console.error('二维码加载失败');
        },

        preventDoubleTapZoom() {
            let lastTouchEnd = 0;
            document.addEventListener('touchend', (event) => {
                const now = Date.now();
                if (now - lastTouchEnd <= 300) {
                    event.preventDefault();
                }
                lastTouchEnd = now;
            }, false);
        }
    }
}
</script>

<style scoped>
.stubs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: white;
    color: white;
    min-height: 100vh;
    padding: 20px;
    /* 防止用户缩放页面 */
    touch-action: manipulation;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
}

.container {
    width: 100%;
    max-width: 400px;
    /* 限制最大宽度 */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hezi {
    width: 100%;
    max-width: 300px;
    /* 图片容器最大宽度 */
    height: auto;
    aspect-ratio: 11/20;
    /* 保持11:20的比例 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    /* 更现代的圆角 */
    position: relative;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    /* 更立体的阴影 */
    overflow: hidden;
    /* 确保内容不溢出圆角 */
}

.time-display {
    font-size: 15px;
    /* 适配手机的字号 */
    font-weight: 600;
    color: white;
    position: absolute;
    bottom: 10px;
    /* 使用相对定位，适配不同屏幕 */
    left: 0;
    right: 0;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    padding: 8px 12px;
    margin: 0 auto;
    width: 90%;
    /* 宽度适应容器 */
    border-radius: 8px;
}

.erweima {
    width: 70px;
    height: auto;
    position: absolute;
    bottom: 100px;
    /* 使用相对定位，适配不同屏幕 */
    right: 50px;
}

/* 加载状态样式 */
.loading {
    opacity: 0.7;
}

/* 响应式调整 */
@media (max-width: 360px) {
    .hezi {
        max-width: 280px;
    }

    .time-display {
        font-size: 14px;
        bottom: 10px;
    }
}

@media (min-width: 414px) {
    .hezi {
        max-width: 320px;
    }

    .time-display {
        font-size: 16px;
        bottom: 10px;
    }
}
</style>