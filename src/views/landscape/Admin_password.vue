<template>
  <div class="">
    <div class="content">
      <div class="pwBlock">
        <!-- 左側文字 start -->
        <div class="leftText">
          <div class="text">請輸入六位數館員密碼</div>
          <div class="password">
            <input name="password" :type="passwordShow ? 'password' : 'text'" placeholder="請輸入密碼" title="請輸入數密碼" />
            <button @click="passwordShow = !passwordShow" type="button" :class="['passwordEye', passwordShow ? 'hide' : 'show']">顯示密碼</button>
          </div>
          <div class="btn">
            <a href="2-1.Admin_home.html" class="yellowBtn">確認</a>
            <a href="2-1.Admin_home.html" class="greyBtn">返回</a>
          </div>
        </div>
        <!-- 左側文字 end -->
        <!-- 右側鍵盤 start -->
        <div class="rightKey">
          <div class="keyBoard">
            <button class="key">1</button>
            <button class="key">2</button>
            <button class="key">3</button>
            <button class="key">4</button>
            <button class="key">5</button>
            <button class="key">6</button>
            <button class="key">7</button>
            <button class="key">8</button>
            <button class="key">9</button>
            <button class="key">0</button>
            <button class="key">清除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordShow: true,
    };
  },
  mounted() {
    // 在這裡主動通知父層：不想顯示 member
    this.$emit('set-member-visible', false);
  },
};
</script>

<style></style>
