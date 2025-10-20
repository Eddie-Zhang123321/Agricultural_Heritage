import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const DEEPSEEK_KEY = "sk-01d13b25cf0f47bfa2db97cc8c624e04"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*') // 允许所有headers
  res.header('Access-Control-Allow-Methods', '*') // 允许所有方法
  if (req.method === 'OPTIONS') return res.sendStatus(200)
  next()
})
// ✅ DeepSeek 代理接口（使用原生fetch，不需要axios）
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log('收到请求:', message);
  
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{
            role: 'system',
            content: '身份锁定：荻港古镇AI助手荻小渔。专注湖州荻港特色。' // 只增加了这一行
          },
          { role: 'user', content: message }],
        stream: true  // 确保开启流式
      })
    });

    console.log('DeepSeek响应状态:', response.status);
    console.log('响应头:', Object.fromEntries(response.headers));

    // 设置正确的响应头
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      console.log('收到流式数据:', chunk); // 调试用
      
      // 直接转发给前端
      res.write(chunk);
    }

    res.end();

  } catch (err) {
    console.error('DeepSeek调用失败', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'AI接口调用失败' });
    }
  }
});

// ✅ 静态托管你的 Vue 页面
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(8080, () => console.log('✅ 服务运行在 http://localhost:8080'))