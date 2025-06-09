<template></template>

<script>
export default {};
</script>

<style></style>

<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-7.管理者_櫃門全開</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- popup start -->
    <div class="popup">
      <div class="popupOverlay"></div>
      <div class="popupBlock">
        <div class="close">關閉</div>
        <div class="popupContent">
          <div class="text">
            櫃門已全開<br />
            完成巡櫃後請確保所有櫃門已關閉
          </div>
        </div>
        <div class="btn">
          <a href="2-1.Admin_home.html" class="yellowBtn">確認完畢</a>
        </div>
      </div>
    </div>
    <!-- popup end -->
    <div class="wrap">
      <header class="header">
        <div class="logo"><img src="images/logo.svg" alt="" /></div>
        <div class="member">館員姓名：林O倫</div>
      </header>
      <div class="content">
        <div class="nodeBlock">
          <a href="2-2.Admin_launched1.html" class="node">閱讀器上架</a>
          <a href="2-6.Admin_simulation.html" class="node">模擬借閱</a>
          <a href="2-7.Admin_allopen.html" class="node">櫃門全開</a>
          <a href="2-8.Admin_open1.html" class="node">指定櫃門開啟</a>
          <a href="2-10.Admin_setting.html" class="node">櫃位啟用設定</a>
          <a href="2-11.Admin_card.html" class="node">卡片維護</a>
        </div>
        <div class="btn"><a href="" class="yellowBtn">登出</a></div>
      </div>
    </div>
    <script>
      const overlay = document.querySelector('.popupOverlay');
      const popup = document.querySelector('.popup');
      const close = document.querySelector('.popup .close');
      // 點擊 overlay 時隱藏 popup
      overlay.addEventListener('click', function () {
        popup.style.display = 'none';
      });

      // 點擊 close 按鈕時隱藏 popup
      close.addEventListener('click', function () {
        popup.style.display = 'none';
      });
    </script>
  </body>
</html>
