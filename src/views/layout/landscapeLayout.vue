<template>
  <div class="wrap">
    <header class="header">
      <div class="logo"><img src="~@/images/landscape/logo.svg" alt="" /></div>
    </header>
    <pageView />
  </div>
</template>

<script>
import '@/scss/landscape/style.scss';
import pageView from '@/views/layout/pageView.vue';

export default {
  components: {
    pageView,
  },
};
</script>

<style></style>
