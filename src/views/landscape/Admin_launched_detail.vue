<template>
  <div class="">
    <div class="content">
      <div class="subTitle">上架完成，本次上架明細如下：</div>
      <div class="detailBlock">
        <table class="detail">
          <thead>
            <tr>
              <th>時間</th>
              <th>設備條碼</th>
              <th>上架櫃位</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2024/6/15 09:02:02</td>
              <td>AD4592349</td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="btn">
      <div class="total">上架總數：5</div>
      <a href="" class="greyBtn">回主選單</a>
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
