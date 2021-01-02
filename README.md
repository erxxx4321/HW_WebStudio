# HW Web Studio 一頁式網站

### 參考普遍Portfolio的架構，分成五個區塊Intro, About, Works, Contact, footer，色系以yellow, white, gray為主，細部透過css微調。以下依照區塊順序，介紹使用的技術，像是JavaScripts、jQuery運用及細節處理。

**Intro**

* delay延遲分行文字fadeIn時點，button使用animate製造回彈效果。
* 使用JavaScript產生popup modal box，彈出後點擊box外區塊即消失
* 漢堡選單運用slideToggle製造向下滑出效果。

**About**

* 運用grid做響應式排版，Desktop雙欄、Mobile單欄
* 標題隨scroll fade in

**Works**

* 使用JavaScript做簡易的書籤頁
* 運用flex讓書籤頁內圖片自適應畫面寬度來做排版。
* 標題隨scroll fade in

**Contact** 

* 運用grid做三階段響應式排版。
* 電話,郵箱及sns icon有加入連結，方便使用者聯繫。
* 標題隨scroll fade in

**Footer** 

* 用flex的space-between 分成左右兩區塊。
* 使用jQuery製作回頂端的按鈕
