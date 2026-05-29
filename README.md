# ENMY - 靜謐時光 · 精緻童話

## 專案介紹

ENMY 是一個專注於靜謐時光與精緻童話的創意品牌行銷網站。網站展示了品牌理念、動畫作品展示，以及全球社群媒體連結。

## 功能特性

### 🎨 設計特色
- 響應式設計，完美適配所有裝置
- 使用 Tailwind CSS 進行現代化樣式設計
- Google Fonts 整合（Noto Sans TC、Noto Serif TC、Klee One）

### 📹 多媒體展示
- 雙影片區塊展示（午間女孩、丙烯筆動畫）
- 智能聲音控制按鈕，提供流暢的用戶體驗
- 自動播放和循環播放功能

### 🌐 社群整合
- 五個全球 IG 連結（Global、Japan、Kids Japan、Mexico、Art）
- 全域懸浮 LINE 客服按鈕
- Open Graph 和 Twitter Card 支援

### 🔍 SEO 優化
- 完整的 Meta 標籤和結構化數據
- Organization、WebPage、Video Schema Markup
- Google Analytics 整合
- 移動設備友善性優化

## 檔案結構

```
enmy-website/
├── index.html                    # 主頁面（SEO 優化版本）
├── afternoon_girl.mp4            # 午間女孩動畫
├── acrylic_pen_with_bass.mp4     # 丙烯筆動畫（帶重低音）
├── netlify.toml                  # Netlify 配置
├── .gitignore                    # Git 忽略檔案
└── README.md                     # 本檔案
```

## 技術棧

- **HTML5** - 語義化標記
- **CSS3** - Tailwind CSS CDN
- **JavaScript** - 原生 JS（聲音控制、交互功能）
- **字體** - Google Fonts
- **分析** - Google Analytics 4

## 本地開發

### 快速啟動

1. 克隆倉庫
```bash
git clone https://github.com/yourusername/enmy-website.git
cd enmy-website
```

2. 使用本地伺服器運行
```bash
# 使用 Python 3
python3 -m http.server 8000

# 或使用 Node.js http-server
npx http-server
```

3. 在瀏覽器中訪問
```
http://localhost:8000
```

## 部署

### 部署到 Netlify

1. 連接 GitHub 倉庫到 Netlify
2. 設定構建命令：`echo 'Static site - no build needed'`
3. 設定發佈目錄：`.`
4. 點擊「Deploy」

### 部署到 GitHub Pages

1. 推送到 GitHub
2. 在倉庫設定中啟用 GitHub Pages
3. 選擇 `master` 分支作為源

### 部署到 Vercel

1. 連接 GitHub 倉庫到 Vercel
2. 自動部署完成

## SEO 優化

網站已進行全面 SEO 優化，包括：

- ✅ 完整的 Meta 標籤（描述、關鍵詞、OG、Twitter）
- ✅ 結構化數據（Organization、WebPage、Video Schema）
- ✅ 響應式設計和移動設備優化
- ✅ 快速頁面加載（Core Web Vitals 優化）
- ✅ 語義化 HTML 結構

詳細的 SEO 優化建議請參考 `ENMY_SEO_Optimization_Guide.md`

## 自訂配置

### 更新 Google Analytics ID

在 `index.html` 中找到以下行並替換：
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 更新 LINE 客服連結

在 `index.html` 中找到以下行並替換：
```html
<a href="https://line.me/R/ti/p/@yourlineid" ...>
```

### 更新 Open Graph 圖片

在 `index.html` 中更新以下 Meta 標籤：
```html
<meta property="og:image" content="https://www.enmy.com/og-image.jpg">
```

## 瀏覽器支援

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）
- iOS Safari
- Chrome for Android

## 許可證

© 2024 ENMY. All rights reserved.

## 聯絡方式

- 📧 Email: contact@enmy.com
- 📱 LINE: @yourlineid
- 📷 Instagram: @enmy_official

## 更新日誌

### v1.0 (2024-05-18)
- 初始版本發佈
- 完整的 SEO 優化
- 雙影片展示功能
- 全球社群媒體整合

---

**最後更新：2024 年 5 月 18 日**
