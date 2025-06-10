<template>
  <div class="">
    <div class="content">
      <div class="title">請選擇想借閱的款式</div>
      <!-- 選擇機型 start -->
      <div class="selectBlock">
        <!-- Slider main container -->
        <Swiper :modules="[Navigation]" :slides-per-view="1" :navigation="swiperNavigation" class="">
          <SwiperSlide>
            <div class="slide">
              <!-- gaze -->
              <div class="gaze">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">7.8吋</div>
                    <img src="~@/images/portrait/gaze7_8.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 24台</div>
              </div>
              <!-- gaze 全數出借加empty -->
              <div class="gaze empty">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">7.8吋</div>
                    <img src="~@/images/portrait/gaze7_8.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 0台</div>
              </div>
              <!-- gaze -->
              <div class="gaze">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">10.7吋</div>
                    <img src="~@/images/portrait/gaze10_7.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 10台</div>
              </div>
              <!-- gaze 全數出借加empty -->
              <div class="gaze empty">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">10.7吋</div>
                    <img src="~@/images/portrait/gaze10_7.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 0台</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide">
              <!-- gaze -->
              <div class="gaze">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">7.8吋</div>
                    <img src="~@/images/portrait/gaze7_8.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 24台</div>
              </div>
              <!-- gaze 全數出借加empty -->
              <div class="gaze empty">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">7.8吋</div>
                    <img src="~@/images/portrait/gaze7_8.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 0台</div>
              </div>
              <!-- gaze -->
              <div class="gaze">
                <div class="pic">
                  <a href="1-3.User_scan.html">
                    <div class="size">10.7吋</div>
                    <img src="~@/images/portrait/gaze10_7.png" alt="" />
                    <div class="text">全數出借</div>
                  </a>
                </div>
                <div class="info">剩餘: 10台</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev custom-nav"></div>
        <div class="swiper-button-next custom-nav"></div>
      </div>

      <!-- 選擇機型 end -->
    </div>
    <div class="btn">
      <a href="1-1.User_welcome.html" class="greyBtn">離開</a>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
const swiperNavigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};
</script>

<style></style>
