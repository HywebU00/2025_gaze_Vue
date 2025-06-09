<template>
  <div class="loginWrap">
    <div class="login">
      <div class="logo">
        <img src="~@/images/cms/logo.svg" alt="新竹縣政府文化局" />
      </div>
      <div class="loginBlock">
        <div class="title">閱讀器充電櫃管理平台</div>
        <form action="">
          <div class="form">
            <div class="formGrp">
              <div class="username">
                <input name="username" type="text" placeholder="請輸入帳號" title="請輸入帳號" class="error" />
              </div>
              <div class="notice error">您輸入的帳號有誤！</div>
            </div>
            <div class="formGrp">
              <div class="password">
                <input name="password" type="password" placeholder="請輸入密碼" title="請輸入密碼" />
                <button type="button" class="passwordEye hide">顯示密碼</button>
              </div>
              <div class="notice error">您輸入的密碼有誤！</div>
            </div>

            <div class="formGrp">
              <div class="verification">
                <input type="text" id="verification" value="" placeholder="輸入驗證碼" title="輸入驗證碼" />
                <img src="~@/images/cms/captcha.png" alt="" class="captcha" />
                <button type="button">更換驗證碼</button>
              </div>
              <div class="notice error">您輸入的驗證碼有誤！</div>
            </div>
            <div class="btnGrp">
              <button type="button" class="btn">清除</button>
              <button type="button" class="btn submit" onclick="window.location.href='02.status.html'">登入</button>
            </div>
            <div class="forgerPW">
              <a href="01-1.forget_pw1.html">忘記密碼？</a>
            </div>
          </div>
        </form>
      </div>
      <div class="copyright">新竹縣政府文化局 © 2024 All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import '@/scss/cms/style.scss';
</script>
