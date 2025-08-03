<template>
  <div class="container">
    <div class="game-area">
      <!-- 图片池区域 -->
      <div class="image-container">
        <h3>待拼图片</h3>
        <div class="pieces-grid">
          <div v-for="image in availableImages" :key="image.id" class="puzzle-piece" @click="handleImageClick(image)"
            draggable="true" @dragstart="handleDragStart($event, image)">
            <div class="puzzle-image-wrapper" :class="`piece-${image.id}`">
              <img :src="image.image" :alt="image.title" />
            </div>
          </div>
        </div>
        
      </div>

      <!-- 拼图板区域 -->
      <div class="puzzle-board">
        <h3>拼图区域</h3>
        <div class="board-grid" :style="boardGridStyle">
          <div v-for="(position, index) in boardPositions" :key="index" class="board-slot"
            :class="{ filled: position.filled }" @dragover.prevent @drop="handleDrop($event, index)"
            :style="getSlotPosition(index)">
            <div v-if="position.image" class="placed-piece" :class="`piece-${position.image.id}`">
              <img :src="position.image.image" :alt="position.image.title" />
            </div>
            
          </div>
        </div>
        <p style="margin-top: 20px;">桑基鱼塘系统</p>
      </div>
    </div>

    <div class="message-area" :class="messageClass">
      {{ message }}
    </div>
  </div>

</template>

<script>
import * as images from '@/assets/index/image.js'

export default {
  name: 'PuzzleGame',
  data() {
    return {
       backgroundImage: images.puzzle_z,
      images: [
        { id: 1, image: images.puzzle1, title: '塘泥养桑树' },
        { id: 2, image: images.puzzle2, title: '桑叶养蚕' },
        { id: 3, image: images.puzzle3, title: '收获蚕砂' },
        { id: 4, image: images.puzzle4, title: '蚕沙养鱼' },
        { id: 5, image: images.puzzle5, title: '鱼产生肥料' },
        { id: 6, image: images.puzzle6, title: '获得塘泥' }
      ],
      boardPositions: Array(6).fill().map(() => ({ filled: false, image: null })),
      shuffledImages: [],
      gameState: {
        currentPosition: 1,
        attempts: 0,
        startTime: null,
        timerInterval: null,
        completed: false
      },
      message: "请按顺序放置图片（1-6号）",
      messageClass: "",
      timer: 0,
      draggedImage: null
    };
  },
  computed: {
    boardGridStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    },
    availableImages() {
      return this.shuffledImages.filter(image => !this.isImagePlaced(image.id));
    },
    formattedTime() {
      const minutes = Math.floor(this.timer / 60).toString().padStart(2, '0');
      const seconds = (this.timer % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }
  },
  methods: {
    initGame() {
      this.gameState.currentPosition = 1;
      this.gameState.attempts = 0;
      this.gameState.completed = false;
      this.message = "请按顺序放置图片（1-6号）";
      this.messageClass = "";

      // 重置拼图板
      this.boardPositions = Array(6).fill().map(() => ({ filled: false, image: null }));

      // 清除计时器
      if (this.gameState.timerInterval) {
        clearInterval(this.gameState.timerInterval);
      }

      // 开始计时
      this.gameState.startTime = new Date();
      this.gameState.timerInterval = setInterval(this.updateTimer, 1000);
      this.updateTimer();

      // 创建随机顺序的图片
      this.shuffledImages = [...this.images].sort(() => Math.random() - 0.5);
    },

    handleImageClick(image) {
      // 找到第一个空位置
      const emptyPositionIndex = this.boardPositions.findIndex(pos => !pos.filled);
      if (emptyPositionIndex === -1) return;

      this.processImagePlacement(image, emptyPositionIndex);
    },

    handleDragStart(event, image) {
      this.draggedImage = image;
      event.dataTransfer.setData('text/plain', image.id);
    },

    handleDrop(event, positionIndex) {
      event.preventDefault();
      if (!this.draggedImage || this.boardPositions[positionIndex].filled) return;

      this.processImagePlacement(this.draggedImage, positionIndex);
      this.draggedImage = null;
    },

    processImagePlacement(image, positionIndex) {
      const clickedId = image.id;

      // 检查是否按正确顺序放置
      if (clickedId === this.gameState.currentPosition) {
        // 正确顺序
        this.placeImage(image, positionIndex);
        this.gameState.currentPosition++;

        this.message = `正确！${image.title} 放入位置`;
        this.messageClass = "";

        // 检查是否完成
        if (this.gameState.currentPosition > 6) {
          this.completeGame();
        } else {
          // 如果游戏未完成，更新提示信息
          this.message = `请继续放置第${this.gameState.currentPosition}张图片`;
        }
      } else {
        // 错误顺序
        this.handleWrongPlacement(image);
      }
    },

    handleWrongPlacement(image) {
      this.gameState.attempts++;
      this.message = `顺序错误！${image.title} 不是第${this.gameState.currentPosition}张图片`;
      this.messageClass = "error";

      // 1.5秒后清除错误消息
      setTimeout(() => {
        if (!this.gameState.completed) {
          this.message = `请继续放置第${this.gameState.currentPosition}张图片`;
          this.messageClass = "";
        }
      }, 1500);
    },

    completeGame() {
      this.message = "恭喜！您已完成拼图！";
      this.messageClass = "success";
      this.gameState.completed = true;
      if (this.gameState.timerInterval) {
        clearInterval(this.gameState.timerInterval);
      }
    },

    placeImage(image, positionIndex) {
      // 将图片放入对应位置
      if (positionIndex >= 0 && positionIndex < this.boardPositions.length) {
        this.boardPositions[positionIndex].filled = true;
        this.boardPositions[positionIndex].image = image;
      }
    },

    isImagePlaced(imageId) {
      return this.boardPositions.some(position => position.image && position.image.id === imageId);
    },

    updateTimer() {
      const now = new Date();
      this.timer = Math.floor((now - this.gameState.startTime) / 1000);
    },

    getSlotPosition(index) {
      const positions = [
        { left: 2.5, top: 0 },
        { left: 100, top: 0 },
        { left: 185, top: 0 },
        { left: 2.5, top: 86 },
        { left: 89, top: 86 },
        { left: 186, top: 86 }
      ];

      const pos = positions[index] || { left: 0, top: 0 };

      // 确保不会超出右边界和下边界
      const maxLeft = 300 - 112.5; // 父容器宽度 - 子元素宽度
      const maxTop = 200 - 112.5;  // 父容器高度 - 子元素高度

      return {
        left: `${Math.min(pos.left, maxLeft)}px`,
        top: `${Math.min(pos.top, maxTop)}px`
      };
    }
  },
  mounted() {
    this.initGame();
  },
  beforeUnmount() {
    if (this.gameState.timerInterval) {
      clearInterval(this.gameState.timerInterval);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.puzzle-game {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.container {
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: #040404 0 2px 10px rgba(0, 0, 0, 0.1)  ;
  overflow: hidden;
}

.game-area {
  display: flex;
  padding: 15px;
  gap: 15px;
}

.image-container,
.puzzle-board {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.image-container h3,
.puzzle-board h3 {
  margin-bottom: 10px;
  color: #2c3e50;
  font-size: 1.1rem;
}

.pieces-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 300px;
}

.puzzle-piece {
  height: 112.5px;
  width: 112.5px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  
}

.puzzle-piece:hover {
  transform: translateY(-2px);
  
}

.puzzle-piece img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.puzzle-image-wrapper {
  width: 112.5px;
  height: 112.5px;
  position: relative;
  overflow: hidden;
}

.board-grid {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  
  overflow: hidden;
  margin-top: 20px;
}

.board-slot {
  position: absolute;
  width: 112.5px;
  height: 112.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease;
}

.empty-slot {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
}

.placed-piece {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 4px;
  overflow: hidden;
  
  z-index: 2;
  animation: snapIntoPlace 0.5s ease;
}

.placed-piece img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* 当拼图块被放置时，添加动画效果 */
@keyframes snapIntoPlace {
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.message-area {
  background: #fff8e1;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 12px 15px;
  min-height: 15px;
  transition: all 0.3s ease;
}

.message-area.success {
  background: #e8f5e9;
  color: #2e7d32;
  animation: pulse 1.5s infinite;
}

.message-area.error {
  background: #ffebee;
  color: #c62828;
  animation: shake 0.5s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-3px);
  }

  75% {
    transform: translateX(3px);
  }
}

@media (max-width: 768px) {
  .game-area {
    flex-direction: column;
    align-items: center;
  }

  .image-container,
  .puzzle-board {
    width: 100%;
    margin-bottom: 15px;
  }

  .pieces-grid,
  .board-grid {
    max-width: 100%;
  }

  .puzzle-piece {
    height: 70px;
  }

  .board-slot {
    width: 90px;
    height: 90px;
  }

  .board-grid {
    width: 270px;
    height: 180px;
  }
}
</style>