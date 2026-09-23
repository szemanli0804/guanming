# 觀命 v1

這是一個純 HTML + CSS + JavaScript 的 Landing Page。

## 檔案

- index.html：網站內容與結構
- style.css：完整視覺設計、Responsive、動畫
- script.js：手機選單、Scroll reveal、WhatsApp、年份等互動

## 開始使用

直接雙擊 `index.html` 即可在瀏覽器預覽。

## 上線前必改

### 1. Stripe

在 `index.html` 搜尋：

`REPLACE_WITH_YOUR_PAYMENT_LINK`

換成你的 Stripe Payment Link。

### 2. WhatsApp

在 `script.js` 搜尋：

`const WHATSAPP_NUMBER = "852XXXXXXXX";`

換成你的香港 WhatsApp 號碼，例如：

`const WHATSAPP_NUMBER = "85291234567";`

不要加入 `+`、空格或括號。

### 3. Hero 圖片

v1 目前採用 CSS cinematic hero，沒有依賴外部圖片，所以下載後可以直接運作。

如果之後你想用第一版 banner 那種「人物＋城市／窗邊」照片，可以把 Hero 改成背景圖片，建議檔案放在：

`images/hero.jpg`

然後在 `style.css` 的 `.hero` 加入：

`background-image: linear-gradient(...), url("images/hero.jpg");`

## 建議下一步

1. 買 domain
2. 設定 Stripe
3. 設定 WhatsApp
4. 加入正式 Logo SVG
5. 加入真正 Hero 圖片
6. 建立付款後出生資料表格
7. 加入 Google Analytics / Meta Pixel
8. 部署到 Vercel 或 Netlify
