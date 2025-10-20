<template>
    <div class="ai-guide-page">
        <!-- 顶部问候区 -->
        <header class="ai-header-card">
            <img src="../assets/dilsey.png" alt="荻小渔头像" class="ai-avatar" />
            <div class="ai-header-text">
                <h2>Hi，我是荻小渔 👋</h2>
                <p>欢迎光临，亲爱的游客朋友们 ❤️ 我是荻小渔，您的智慧小向导。</p>
            </div>
        </header>

        <!-- 猜你想问 -->
        <section class="ai-suggest-box">
            <h3>猜你想问</h3>
            <div class="suggest-list">
                <div v-for="q in suggestedQuestions" :key="q" class="suggest-item" @click="handleGuessQuestionClick(q)">
                    <el-icon>
                        <ChatLineRound />
                    </el-icon>
                    <span>{{ q }}</span>
                </div>
            </div>
        </section>

        <!-- 聊天展示区 -->
        <main class="ai-chat-area" ref="chatContainer">
            <div v-for="(msg, i) in messages" :key="i" class="chat-message" :class="msg.role">
                <!-- 🔥 关键修改：使用 v-html 而不是 {{ }} -->
                <div class="bubble" v-if="!msg.loading" v-html="msg.content"></div>
                <div v-else class="loading-dots">
                    <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                </div>
            </div>
        </main>

        <!-- 输入框 -->
        <footer class="ai-input-bar">
            <el-input v-model="userQuery" placeholder="有什么想问我的嘛~" size="large" clearable @keyup.enter="handleSend"
                :disabled="isLoading" />
            <el-button type="primary" :loading="isLoading" :disabled="!userQuery.trim()" @click="handleSend"
                class="send-btn">
                <el-icon>
                    <Promotion />
                </el-icon>
            </el-button>
        </footer>
    </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { ChatLineRound, Promotion } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { marked } from 'marked';

const suggestedQuestions = [
    "荻港古镇有什么特色小吃？",
    "一元茶馆的历史由来？",
    "荻港有哪些好玩的景点？",
    "荻港夜游推荐路线？",
];

const messages = ref([]);
const userQuery = ref("");
const isLoading = ref(false);
const chatContainer = ref(null);

const scrollToBottom = () => {
    nextTick(() => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    });
};

const fetchAIAnswer = async (query) => {
    try {
        const response = await fetch('http://150.158.7.109/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: query })
            // 不再需要传stream参数，后端强制开启流式
        });

        if (!response.body) {
            throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.slice(6));
                        const token = data.choices[0]?.delta?.content || '';
                        accumulatedText += token;

                        // 实时更新当前消息内容
                        const lastMsgIndex = messages.value.length - 1;
                        if (messages.value[lastMsgIndex]) {
                            messages.value[lastMsgIndex].content = marked.parse(accumulatedText);
                            scrollToBottom();
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            }
        }

        return accumulatedText;
    } catch (error) {
        console.error('API调用失败:', error);
        return "抱歉，服务暂时不可用，请稍后再试~";
    }
};

const handleGuessQuestionClick = (q) => {
    userQuery.value = q;
    handleSend();
};

const handleSend = async () => {
    const query = userQuery.value.trim();
    if (!query) return;

    messages.value.push({ role: "user", content: query });
    userQuery.value = "";
    isLoading.value = true;
    scrollToBottom();

    // 创建初始的AI消息（空内容）
    const aiIndex = messages.value.length;
    messages.value.push({ role: "ai", content: "", loading: false });

    try {
        await fetchAIAnswer(query);
    } catch (err) {
        messages.value[aiIndex].content = "抱歉，网络或服务器异常。";
        ElMessage.error("发送失败");
    } finally {
        isLoading.value = false;
        scrollToBottom();
    }
};
</script>

<style scoped>
.ai-guide-page {
    background: linear-gradient(to bottom, #e8f3ff 0%, #ffffff 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue", Arial, sans-serif;
}

/* 顶部自我介绍卡片 */
.ai-header-card {
    background: #ffffff;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 25px 20px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 15px;
}

.ai-avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #cfe8ff;
}

.ai-header-text h2 {
    font-size: 20px;
    color: #1a4f8b;
    margin: 0;
}

.ai-header-text p {
    font-size: 14px;
    color: #555;
    margin-top: 6px;
}

/* 猜你想问 */
.ai-suggest-box {
    background: #fff;
    margin: 15px 10px;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.ai-suggest-box h3 {
    font-size: 16px;
    color: #1a4f8b;
    margin-bottom: 10px;
}

.suggest-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.suggest-item {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f3f8ff;
    border-radius: 8px;
    padding: 10px;
    color: #1a4f8b;
    cursor: pointer;
    transition: 0.2s;
}

.suggest-item:hover {
    background: #dceeff;
}

/* 聊天展示 */
.ai-chat-area {
    flex: 1;
    overflow-y: auto;
    padding: 10px 15px;
}

.chat-message {
    margin-bottom: 10px;
    display: flex;
}

.chat-message.user {
    justify-content: flex-end;
}

.chat-message.ai {
    justify-content: flex-start;
}

.bubble {
    max-width: 75%;
    padding: 10px 14px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.chat-message.user .bubble {
    background: linear-gradient(120deg, #6fb4ff, #3b8ef3);
    color: white;
    border-bottom-right-radius: 4px;
}

.chat-message.ai .bubble {
    background: #ffffff;
    border: 1px solid #d9e7ff;
    color: #333;
    border-bottom-left-radius: 4px;
}

/* 简洁的HTML内容样式 */
.bubble :deep(strong) {
    font-weight: 600;
    color: #1a4f8b;
}

.bubble :deep(h3) {
    margin: 16px 0 8px 0;
    color: #1a4f8b;
    font-size: 16px;
    font-weight: 600;
}

.bubble :deep(ul) {
    margin: 8px 0;
    padding-left: 0;
    list-style: none;
    /* 移除所有列表符号 */
}

.bubble :deep(li) {
    margin: 6px 0;
    padding-left: 0;
    list-style: none;
}

.bubble :deep(p) {
    margin: 8px 0;
    line-height: 1.6;
    list-style: none;
}

/* 输入框 */
.ai-input-bar {
    background: #fff;
    border-top: 1px solid #e0e0e0;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.send-btn {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 加载动画 */
.loading-dots {
    display: flex;
    align-items: center;
    height: 20px;
}

.dot {
    width: 6px;
    height: 6px;
    background-color: #888;
    border-radius: 50%;
    margin: 0 2px;
    animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
    animation-delay: -0.32s;
}

.dot:nth-child(2) {
    animation-delay: -0.16s;
}

@keyframes bounce {

    0%,
    80%,
    100% {
        transform: scale(0);
    }

    40% {
        transform: scale(1);
    }
}
</style>
