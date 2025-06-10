<template>
  <div class="">
    <!-- popup start -->
    <div class="popup" v-show="popStatus">
      <div class="popupOverlay"></div>
      <div class="popupBlock">
        <div class="close" @click="popStatus = !popStatus">關閉</div>
        <div class="popupContent">
          <div class="number">24</div>
          <div class="text">號櫃門已開啟 ! <br />檢查完畢後請確保櫃門已關閉</div>
        </div>
        <div class="btn">
          <a href="2-1.Admin_home.html" class="greyBtn">結束</a>
          <a href="2-8.Admin_open1.html" class="yellowBtn">繼續指定</a>
        </div>
      </div>
    </div>
    <!-- popup end -->
    <div class="content">
      <div class="caseBlock">
        <!-- 左側文字 start -->
        <div class="leftText open">
          <div class="text">點擊你要開啟的櫃門數字</div>
          <div class="btn">
            <a href="2-9.Admin_open2.html" class="yellowBtn">確認</a>
          </div>
        </div>
        <!-- 左側文字 end -->
        <!-- 右側機器 start -->
        <div class="rightCase click">
          <div class="caseGroup group1">
            <div class="case">01</div>
            <div class="case">02</div>
            <div class="case">03</div>
            <div class="case">04</div>
            <div class="case">05</div>
            <div class="case">06</div>
            <div class="case">07</div>
            <div class="case">08</div>
            <div class="case">09</div>
            <div class="case">10</div>
            <div class="case">11</div>
            <div class="case">12</div>
          </div>
          <div class="caseGroup group2">
            <div class="case empty">13</div>
            <div class="case">14</div>
            <div class="case">15</div>
            <div class="case">16</div>
            <div class="case">17</div>
            <div class="case">18</div>
            <div class="case">19</div>
            <div class="case">20</div>
            <div class="case">21</div>
            <div class="case">22</div>
            <div class="case">23</div>
            <div class="case">24</div>
          </div>
          <div class="caseGroup group3">
            <div class="case">25</div>
            <div class="case">26</div>
            <div class="case">27</div>
            <div class="case">28</div>
            <div class="case">29</div>
            <div class="case">30</div>
            <div class="case">31</div>
            <div class="case">32</div>
            <div class="case">33</div>
            <div class="case">34</div>
            <div class="case">35</div>
            <div class="case">36</div>
          </div>
          <div class="caseGroup group4">
            <div class="case">37</div>
            <div class="case">38</div>
            <div class="case">39</div>
            <div class="case">40</div>
            <div class="case">41</div>
            <div class="case">42</div>
            <div class="case">43</div>
            <div class="case">44</div>
            <div class="case">45</div>
            <div class="case">46</div>
            <div class="case">47</div>
            <div class="case">48</div>
          </div>
        </div>
        <!-- 右側機器 end -->
      </div>
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
