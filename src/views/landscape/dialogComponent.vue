<template>
  <div class="">
    <!-- popup start -->
    <div v-show="popStatus" class="popup">
      <div class="popupOverlay"></div>
      <div class="popupBlock">
        <div class="close" @click="popStatus = !popStatus">關閉</div>
        <div class="popupContent">
          <div class="text">好像哪裡有問題，這裡預留二到三行配合實際情形顯示錯誤原因。好像哪裡有問題，這裡預留二到三行配合實際情形顯示錯誤原因。</div>
        </div>
        <div class="btn">
          <a href="" class="yellowBtn">回主畫面</a>
        </div>
      </div>
    </div>
    <!-- popup end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      popStatus: true,
    };
  },
};
</script>

<style></style>
