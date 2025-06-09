<template>
  <div class="indexWrap">
    <h2>租借者畫面</h2>
    <table>
      <tr>
        <th>頁面名稱</th>
        <th>橫式</th>
        <th>直式</th>
      </tr>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.title }}</td>
        <td>
          <a :href="`${item.fileLandscape}`">{{ item.name }}</a>
        </td>
        <td>
          <!-- <a :href="`portrait/${item.filePortrait}`">{{ item.name }}</a> -->
        </td>
      </tr>
    </table>

    <h2>管理者畫面</h2>
    <table>
      <tr>
        <th>頁面名稱</th>
        <th>橫式</th>
        <th>直式</th>
      </tr>
      <tr v-for="(item, index) in data2" :key="index">
        <td>{{ item.title }}</td>
        <td>
          <a :href="`https://hywebu00.github.io/2025_gaza_Vue/#/portrait/${item.fileLandscape}`">{{ item.name }}</a>
        </td>
        <td>
          <!-- <a :href="`portrait/${item.filePortrait}`">{{ item.name }}</a> -->
        </td>
      </tr>
    </table>
    <h2>共用畫面</h2>
    <table>
      <tr>
        <th>頁面名稱</th>
        <th>橫式</th>
        <th>直式</th>
      </tr>
      <tr>
        <td>3-1.對話視窗</td>
        <td><a href="landscape/3-1.dialog.html">3-1.dialog.html</a></td>
        <td><a href="portrait/3-1.dialog.html">3-1.dialog.html</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: '1-1.使用者_歡迎使用',
          name: '1-1.User_welcome.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '1-2.使用者_款式選擇',
          name: '1-2.User_select.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/select',
          filePortrait: '',
        },
        {
          title: '1-3.使用者_款式選擇',
          name: '	1-3.User_scan.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/scan',
          filePortrait: '',
        },
        {
          title: '1-4.使用者_服務條款',
          name: '1-4.User_terms.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/terms',
          filePortrait: '',
        },
        {
          title: '1-5.使用者_取出閱讀器',
          name: '	1-5.User_loan.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
      ],
      data2: [
        {
          title: '2-0.管理者_館員模式靠卡後輸入密碼',
          name: '	2-0.Admin_password.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/dmin_password',
          filePortrait: '',
        },
        {
          title: '2-1.管理者_首頁',
          name: '	2-1.Admin_home.html	',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/Admin_home',
          filePortrait: '',
        },
        {
          title: '2-2.管理者_上架1(全灰)',
          name: '2-2.Admin_launched1.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-3.管理者_上架2(亮燈)',
          name: '2-3.Admin_launched2.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-4.管理者_上架3(提示)',
          name: '	2-4.Admin_launched3.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-5.管理者_上架明細',
          name: '	2-5.Admin_launched_detail.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-6.管理者_模擬借閱',
          name: '	2-6.Admin_simulation.html	',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-7.管理者_櫃門全開',
          name: '	2-7.Admin_allopen.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-8.管理者_指定櫃門開啟1',
          name: '2-8.Admin_open1.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-9.管理者_指定櫃門開啟2',
          name: '2-9.Admin_open2.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-10.管理者_櫃位啟用設定',
          name: '2-10.Admin_setting.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-11.管理者_卡片維護',
          name: '2-11.Admin_card.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-12.管理者_卡片維護-讀者卡列表',
          name: '2-12.Admin_card_reader.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-13.管理者_卡片維護-館員卡列表',
          name: '2-13.Admin_card_librarian.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
        {
          title: '2-14.管理者_卡片維護-點擊新增卡片畫面',
          name: '2-14.Admin_card_add.html',
          fileLandscape: 'https://hywebu00.github.io/2025_gaza_Vue/#/',
          filePortrait: '',
        },
      ],
    };
  },
};
</script>

<style>
.indexWrap {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}
.index_title {
  display: flex;
  justify-content: space-between;
}
h2 {
  color: #53402b;
}
table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #e5dbc8;
}
th {
  padding: 0.5rem 1rem;
  background: #e5dbc8;
  color: #53402b;
}
td {
  padding: 0.5rem 1rem;
  border-bottom: 2px solid #e5dbc8;
}
td:first-child {
  width: 40%;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  color: #53402b;
  text-decoration: underline;
}
</style>
