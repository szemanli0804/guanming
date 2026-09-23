觀命｜GitHub 上線版 v1.4

這一版已改為：Google Forms → PayMe → Google Forms 付款截圖 → Email 命書。

檔案
- index.html：主網站
- style.css：網站樣式
- script.js：導覽、動畫及 Google Forms / PayMe 連結
- logo.svg：正式 Logo
- hero-cinematic.jpg：cinematic hero 圖

上線前只需設定 2 個 Google Form 網址

在 index.html 找到：
window.GUANMING_CONFIG = {
  formA: "REPLACE_WITH_GOOGLE_FORM_A_URL",
  formB: "REPLACE_WITH_GOOGLE_FORM_B_URL",
  payme: "https://payme.hsbc/54133b3b6b3c4ee1ae4799cac9e422af"
};

把：
1. formA 換成「觀命｜專屬命書資料登記」Google Form 網址
2. formB 換成「觀命｜付款確認」Google Form 網址

PayMe 已經設定為你的付款連結，不需要再修改。

建議 Google Form A 欄位
姓名、Email、性別、出生日期、出生時間、出生地點、最想了解的一個問題、其他補充。

建議 Google Form B 欄位
Email、姓名、PayMe 付款截圖、確認已完成 HK$388 付款。

GitHub Pages 部署
1. 建立 GitHub repository。
2. 把本資料夾內所有檔案上載到 repository 根目錄。
3. Settings → Pages → Deploy from a branch → main / root。
4. 儲存後等待 GitHub Pages 建立網站。

注意
Google Forms 的「檔案上傳」通常要求填表者登入 Google 帳戶；正式上線前請自行測試客人是否能順利上載付款截圖。


LIVE LINKS
PayMe: https://payme.hsbc/54133b3b6b3c4ee1ae4799cac9e422af
Google Form A: https://docs.google.com/forms/d/e/1FAIpQLSdYcsVUM39lPTp09rwEYg7tvn-UEJwAFDQDktXY8nHGcjvNJQ/viewform?usp=dialog
Google Form B: https://docs.google.com/forms/d/e/1FAIpQLSdtsGtBjJb8FqyRc-zksdSUmloNGoxCjT1Zw_yxDqy5y5oieQ/viewform?usp=publish-editor
