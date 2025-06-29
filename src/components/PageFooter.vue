<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">
                <img src="../assets/main-logo.png" alt="Logo" class="logo-img" />
                <h2>农遗新生团队</h2>
            </div>

            <div class="footer-columns">
                <div class="footer-column">
                    <h4>相关信息</h4>
                    <ul>
                        <li><a href="#">我们的联系方式</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">条款和条件</a></li>
                        <li><a href="#">常见问题</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>支持与帮助</h4>
                    <ul>
                        <li><a href="#">文档中心</a></li>
                        <li><a href="#">反馈和建议中心</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>相关链接</h4>
                    <ul>
                        <li><a href="#">博客</a></li>
                        <li><a href="#">我们的联系方式</a></li>
                        <li><a href="#">服务列表</a></li>
                        <li><a href="#">支持</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>关于农遗新生团队</h4>
                    <p>浙江省杭州市临平区威泰路8号<br />浙江理工大学临平校区/艺术与设计学院</p>
                    <p>Tel: +86 18107033082</p>
                </div>

                <div class="footer-column follow-us">
                    <h4>关注我们</h4>
                    <img :src="images.qrcode" alt="公众号二维码" class="qrcode" />
                    <p>城乡融合设计研究所<br />公众号</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import * as images from '@/assets/image.js' // 包含 footerLogo 和 qrcode
</script>

<style scoped>
.footer {
    background-color: #2f3a33;
    color: #fff;
    padding: 50px 20px;
    font-family: "Helvetica Neue", Arial, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.logo-img {
    height: 40px;
}

.footer-columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
}

.footer-column {
    flex: 1 1 160px;
    min-width: 160px;
}

.footer-column h4 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #d1d1d1;
}

.footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column ul li a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
}

.footer-column ul li a:hover {
    color: #fff;
    text-decoration: underline;
}

.footer-column p {
    font-size: 14px;
    line-height: 1.6;
    color: #ccc;
}

.qrcode {
    width: 90px;
    height: 90px;
    margin-top: 8px;
    border-radius: 4px;
}
</style>
