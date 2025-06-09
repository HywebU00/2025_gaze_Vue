<template>
  <div class="">
    <!-- popup start -->
    <div class="popup">
      <div class="popupOverlay"></div>
      <div class="popupBlock">
        <div class="close">關閉</div>
        <div class="popupContent">
          <div class="text">請靠卡感應卡片以進行卡片登錄</div>
        </div>
        <div class="btn">
          <a href="" class="yellowBtn">返回</a>
        </div>
      </div>
    </div>
    <!-- popup end -->
    <div class="content">
      <div class="subTitle">館員卡列表</div>
      <div class="btn">
        <a href="2-14.Admin_card_add.html" class="yellowBtn">新增卡片</a>
      </div>
      <div class="detailBlock">
        <table class="detail">
          <thead>
            <tr>
              <th>編號</th>
              <th>卡號</th>
              <th>備註</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td class="tdLeft">0129401924<span class="newCard">NEW</span></td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
            <tr>
              <td>02</td>
              <td class="tdLeft">0129401924<span class="newCard">NEW</span></td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
            <tr>
              <td>03</td>
              <td class="tdLeft">0129401924</td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
            <tr>
              <td>04</td>
              <td class="tdLeft">0129401924</td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
            <tr>
              <td>05</td>
              <td class="tdLeft">0129401924</td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
            <tr>
              <td>06</td>
              <td class="tdLeft">0129401924</td>
              <td>李Ｏ榮</td>
              <td><a href="" class="deleteCard">刪除</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="btn">
      <div class="total">卡片總數：10</div>
      <a href="2-11.Admin_card.html" class="greyBtn">返回</a>
    </div>
  </div>
</template>

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

<style></style>
