<template>
  <div class="wrap">
    <header class="header">
      <div class="logo"><img src="~@/images/landscape/logo.svg" alt="" /></div>
      <div v-if="showMember" class="member">館員姓名：林O倫</div>
    </header>
    <pageView @set-member-visible="setMemberVisible" />
  </div>
</template>

<script>
import '@/scss/landscape/style.scss';
import pageView from '@/views/layout/pageView.vue';

export default {
  data() {
    return {
      showMember: false, // 預設顯示
    };
  },
  methods: {
    setMemberVisible(val) {
      this.showMember = val;
    },
  },
  components: {
    pageView,
  },
};
</script>

<style></style>
