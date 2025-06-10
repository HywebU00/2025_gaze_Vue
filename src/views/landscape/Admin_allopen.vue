<template>
  <div class="">
    <div v-show="popStatus" class="popup">
      <div class="popupOverlay"></div>
      <div class="popupBlock">
        <div class="close" @click="popStatus = !popStatus">關閉</div>
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
</template>

<script>
export default {
  data() {
    return {
      popStatus: true,
    };
  },
  mounted() {
    // 在這裡主動通知父層：想顯示 member
    this.$emit('set-member-visible', true);
  },
};
</script>

<style></style>

<!-- popup start -->
