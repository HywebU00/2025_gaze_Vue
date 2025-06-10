<template>
  <div class="">
    <div class="content">
      <div class="subTitle">請選擇要維護的卡片類型</div>
      <div class="nodeBlock center">
        <a href="2-12.Admin_card_reader.html" class="node">讀者卡</a>
        <a href="2-13.Admin_card_librarian.html" class="node">館員卡</a>
      </div>
    </div>
    <div class="btn">
      <a href="2-1.Admin_home.html" class="greyBtn">返回</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 在這裡主動通知父層：想顯示 member
    this.$emit('set-member-visible', true);
  },
};
</script>

<style></style>
