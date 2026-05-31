# ENMY. 官方形象網站

> **線上網址：** https://enmytaiwan-create.github.io/enmy-website/
> **GitHub Repository：** https://github.com/enmytaiwan-create/enmy-website
> **部署平台：** GitHub Pages（免費靜態網站托管）

---

## 網站架構

本網站為純靜態 HTML/CSS/JavaScript 網站，無需後端伺服器，所有頁面皆可直接在瀏覽器開啟。

```
enmy-website/
├── index.html              # 首頁（品牌形象主頁）
├── products.html           # 產品系列總覽
├── black-box.html          # 小黑盒壓克力麥克筆 + 加購筆袋
├── rainbow-markers.html    # 爆閃筆 Outshiner
├── liner-pens.html         # 彩虹丙烯勾線筆（12 色系）
├── paper.html              # ENMY 勻彩紙（8K/16K/32K）
├── story.html              # 品牌故事
├── global.html             # 全球市場（8 個地區）
├── og-image.jpg            # Open Graph 社群分享縮圖（1200×630px）
├── products-images/        # 所有產品圖片與影片
└── README.md               # 本說明文件
```

---

## 各頁面說明

### `index.html` — 首頁
- Hero 全屏區：品牌主視覺 + 粒子動畫 + 主標語
- 品牌數字：80色 / 12色系 / 全球 6+ 市場
- 產品卡片：小黑盒、爆閃筆、勻彩紙三大產品
- 品牌故事預覽：連結至 story.html
- 全球市場預覽：連結至 global.html
- Open Graph 標籤：LINE/Facebook 分享時顯示縮圖

### `products.html` — 產品系列總覽
- 三大產品系列橫向介紹
- 各產品特色比較表
- 連結至各產品獨立頁面

### `black-box.html` — 小黑盒壓克力麥克筆
- **主商品**：黑色塑膠掀蓋盒，24/36/48/60/80 色可選
- **嵌入影片**：`products-images/bb-video-80.mp4`（80色英文字幕橫式）
- 品牌認證：JWS 台灣官方總代理 + SAFETY ALWAYS 安全認證
- **加購配件區**：馬克筆收納包（另售，明確標示不含於主商品）
- CTA：LINE 客服 + 蝦皮購買

### `rainbow-markers.html` — 爆閃筆 Outshiner
- 12 種璀璨主題色系展示
- **嵌入影片**：`products-images/glitter-video.mp4`（爆閃12色英文）
- 產品規格 + 使用方法

### `liner-pens.html` — 彩虹丙烯勾線筆
- 12 大色系下拉展開圖卡（點擊展開雙圖 + 文案）
- **嵌入影片**：`products-images/liner-video.mp4`（新款彩虹勾線筆英文）
- 創作展示 Gallery

### `paper.html` — ENMY 勻彩紙
- 三種尺寸：8K（380×260mm）/ 16K（260×180mm）/ 32K（180×125mm）
- 四大特色：不起毛球 / 棉漿鎖水 / 雙面可用 / 攜帶方便
- 完整規格表
- AI 生成創作成品 Gallery（4 張）

### `story.html` — 品牌故事
- ENMY 品牌起源與理念
- 創辦人故事

### `global.html` — 全球市場
- 台灣代表「米唐」Reel 精選區塊
- 8 個地區官方 IG 卡片：台灣/日本/韓國/墨西哥/英國/菲律賓/馬來西亞/Global
- 全球 25 位插畫家社群展示

---

## 技術規格

### 前端技術
- **HTML5** — 語意化標籤結構
- **CSS3** — 純 CSS 動畫、Flexbox、Grid 排版
- **JavaScript** — 輕量原生 JS（粒子動畫、下拉展開、Intersection Observer）
- **無框架依賴** — 不使用 React/Vue/Angular，純靜態網頁

### 字體（Google Fonts CDN）
- `Playfair Display` — 英文標題（優雅襯線體）
- `Noto Serif TC` — 中文內文（傳統中文襯線）
- `Inter` — 英文內文（現代無襯線）

### 色彩系統
| 色彩 | HEX | 用途 |
|------|-----|------|
| 深黑底色 | `#0d0a06` | 頁面主背景 |
| 深棕底色 | `#1a1208` | 區塊背景 |
| 金色主色 | `#c9a96e` | 強調色、按鈕、標籤 |
| 淺金文字 | `#e8d5a3` | 主要文字 |
| 暗金文字 | `rgba(232,213,163,0.6)` | 次要文字 |

### 響應式設計
- 桌面（>1200px）：雙欄/三欄網格
- 平板（768-1200px）：雙欄
- 手機（<768px）：單欄，字體自動縮放（`clamp()`）

---

## 圖片資源說明

### `products-images/` 目錄

#### 小黑盒系列（`bb-` 前綴）
| 檔名 | 說明 |
|------|------|
| `bb-hero-brand.png` | AI 品牌視覺主圖 |
| `bb-open-top.jpg` | 小黑盒開蓋俯視 |
| `bb-tip-closeup.jpg` | 筆尖特寫 |
| `bb-artwork.jpg` | 創作示範 |
| `bb-jws-cert.jpg` | JWS 台灣官方授權認證 |
| `bb-safety.jpg` | SAFETY ALWAYS 安全認證 |
| `bb-dessert-art.jpg` | AI 生成甜點插畫（Hero 圖） |
| `bb-video-80.mp4` | 80色英文字幕橫式影片 |

#### 加購筆袋系列（`bag-` 前綴）
| 檔名 | 說明 |
|------|------|
| `bag-main.jpg` | 筆袋正面外觀 |
| `bag-inside.jpg` | 翻開內部收納 |
| `bag-specs.jpg` | 四大重點 infographic |
| `bag-features.jpg` | 四大特點圖文卡 |

#### 爆閃筆系列
| 檔名 | 說明 |
|------|------|
| `glitter-video.mp4` | 爆閃12色英文影片 |
| `rainbow-01~09.jpg` | 爆閃筆產品圖 |
| `theme-01~12.jpg` | 12色系主題縮圖 |

#### 勾線筆系列（`liner-pens/` 子目錄）
- `恩米彩虹丙烯勾線筆01~08.jpg` — 產品展示圖
- `恩米彩虹丙烯勾線筆10-01玫瑰花園.jpg` ~ `10-12高頻黑白.jpg` — 各色系雙圖
- `liner-video.mp4` — 新款彩虹勾線筆英文影片

#### 勻彩紙系列（`paper-` 前綴）
| 檔名 | 說明 |
|------|------|
| `paper-sizes.png` | 官方規格尺寸圖（8K/16K/32K） |
| `paper-showcase.jpg` | AI 生成三尺寸展示圖 |
| `paper-artwork-1.jpg` | AI 生成：熱帶植物插畫 |
| `paper-artwork-2.jpg` | AI 生成：極光風景插畫 |
| `paper-artwork-3.jpg` | AI 生成：人物插畫 |
| `paper-video.mp4` | 勻彩紙影片 |

#### AI 生成甜點插畫系列（`dessert-` 前綴）
| 檔名 | 用途頁面 |
|------|----------|
| `dessert-blackbox-main.jpg` | products.html 小黑盒主圖 |
| `dessert-glitter-main.jpg` | products.html 爆閃筆主圖 |
| `dessert-lifestyle.jpg` | products.html 生活場景 |
| `dessert-anywhere.jpg` | products.html 任何媒材 |
| `dessert-paper-art.jpg` | paper.html Gallery |

---

## 外部連結

| 用途 | 連結 |
|------|------|
| LINE 客服 | https://lin.ee/t8mMUCh |
| 全球官方 IG | https://www.instagram.com/enmy__official/ |
| 日本 IG | https://www.instagram.com/enmy_official_jp/ |
| 韓國 IG | https://www.instagram.com/enmy_kr/ |
| 墨西哥 IG | https://www.instagram.com/enmy_official_mx/ |
| 英國 IG | https://www.instagram.com/enmy_uk/ |
| 菲律賓 IG | https://www.instagram.com/enmy_official_ph/ |
| 馬來西亞 IG | https://www.instagram.com/enmy_malaysia/ |
| 台灣代表米唐 Reel | https://www.instagram.com/reel/DY6EpzFBdeA/ |

---

## 部署說明

### GitHub Pages 部署流程
1. 所有程式碼推送至 `master` 分支
2. GitHub Pages 自動從 `master` 根目錄部署
3. 每次 `git push` 後約 1-3 分鐘生效

### 本地預覽方式
```bash
# Python 內建伺服器
cd enmy-website
python3 -m http.server 8080
# 開啟 http://localhost:8080
```

### 更新網站步驟
```bash
cd enmy-website
git add .
git commit -m "說明修改內容"
git push origin master
```

---

## 注意事項

1. **影片檔案較大**：`paper-video.mp4`（20MB）、`glitter-video.mp4`（11MB）、`bb-video-80.mp4`（9.2MB）、`liner-video.mp4`（6.2MB），首次載入需要時間
2. **字體依賴網路**：Google Fonts 需要網路連線，離線時會 fallback 至系統字體
3. **圖片路徑**：所有圖片使用相對路徑，移動目錄時需注意路徑一致性
4. **`rainbow-markers-old.html`**：舊版爆閃筆頁面備份，可安全刪除

---

## 版本記錄

| 日期 | 更新內容 |
|------|----------|
| 2026-05-29 | 初版上線，首頁、產品系列、品牌故事 |
| 2026-05-29 | 新增全球市場頁面，含台灣米唐 Reel |
| 2026-05-29 | 新增勾線筆系列頁面（12色系下拉展開） |
| 2026-05-29 | 修正 og:image 縮圖（LINE 分享預覽） |
| 2026-05-30 | 移除「按壓式丙烯筆」（無此商品） |
| 2026-05-30 | 全面重建小黑盒頁面，加入影片、加購筆袋區 |
| 2026-05-30 | 修正所有「透明盒」→「黑色盒」描述 |
| 2026-05-30 | 生成甜點插畫系列，替換各頁面錯誤圖片 |
| 2026-05-30 | 永久移除舊 IG 連結 @enmy_official |
| 2026-05-31 | 全新 paper.html 勻彩紙頁面 |
| 2026-05-31 | 三支影片全部嵌入對應產品頁面 |

---

© 2026 ENMY. All rights reserved.
