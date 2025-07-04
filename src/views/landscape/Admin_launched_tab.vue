<template>
  <div class="">
    <div class="content">
      <div class="caseBlock">
        <!-- 左側文字 start -->
        <div class="leftText launch">
          <div class="hand"><img src="~@/images/landscape/hand5.png" alt="" /></div>
          <div class="text">
            感應閱讀器設備條碼<br />
            系統將指示對應櫃位
          </div>
          <div class="btn">
            <a href="2-1.Admin_home.html" class="greyBtn">返回</a>
            <a href="2-1.Admin_home.html" class="yellowBtn">確認</a>
          </div>
        </div>
        <!-- 左側文字 end -->
        <!-- 右側機器 start -->

        <div class="rightCase tabCase">
          <div class="caseTab">
            <!-- 頁籤 -->
            <div class="tabs">
              <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: currentTab === index }" tabindex="0" @click="currentTab = index">
                {{ tab }}
              </div>
            </div>
            <!-- 頁籤內容 -->
            <div :class="['tabContent', { active: currentTab === 0 }]">
              <div class="caseInfo">
                <div class="caseName">直立式48格</div>
                <div class="caseCount">本日已借出<em>19</em>台次</div>
              </div>
              <div class="caseContent">
                <!-- 48格 -->
                <div class="case48">
                  <div class="caseGroup group1">
                    <div class="case available">01</div>
                    <div class="case available">02</div>
                    <div class="case available">03</div>
                    <div class="case available">04</div>
                    <div class="case available">05</div>
                    <div class="case available">06</div>
                    <div class="case empty">07</div>
                    <div class="case available">08</div>
                    <div class="case empty">09</div>
                    <div class="case available">10</div>
                    <div class="case available">11</div>
                    <div class="case available">12</div>
                  </div>
                  <div class="caseGroup group2">
                    <div class="case available">13</div>
                    <div class="case available">14</div>
                    <div class="case empty">15</div>
                    <div class="case empty">16</div>
                    <div class="case empty">17</div>
                    <div class="case empty">18</div>
                    <div class="case empty">19</div>
                    <div class="case available">20</div>
                    <div class="case available">21</div>
                    <div class="case available">22</div>
                    <div class="case available">23</div>
                    <div class="case available">24</div>
                  </div>
                  <div class="caseGroup group3">
                    <div class="case empty">25</div>
                    <div class="case available">26</div>
                    <div class="case empty">27</div>
                    <div class="case available">28</div>
                    <div class="case available">29</div>
                    <div class="case available">30</div>
                    <div class="case available">31</div>
                    <div class="case available">32</div>
                    <div class="case available">33</div>
                    <div class="case available">34</div>
                    <div class="case available">35</div>
                    <div class="case available">36</div>
                  </div>
                  <div class="caseGroup group4">
                    <div class="case available">37</div>
                    <div class="case empty">38</div>
                    <div class="case available">39</div>
                    <div class="case available">40</div>
                    <div class="case available">41</div>
                    <div class="case available">42</div>
                    <div class="case disable">43</div>
                    <div class="case disable">44</div>
                    <div class="case disable">45</div>
                    <div class="case disable">46</div>
                    <div class="case disable">47</div>
                    <div class="case disable">48</div>
                  </div>
                  <div class="caseBg">
                    <img src="@/images/landscape/case48.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div :class="['tabContent', { active: currentTab === 1 }]">
              <div class="caseInfo">
                <div class="caseName">桌上型8格</div>
                <div class="caseCount">本日已借出<em>19</em>台次</div>
              </div>
              <div class="caseContent">
                <div class="case8">
                  <div class="caseGroup">
                    <div class="case available">01</div>
                    <div class="case available">02</div>
                    <div class="case available">03</div>
                    <div class="case available">04</div>
                    <div class="case available">05</div>
                    <div class="case available">06</div>
                    <div class="case empty">07</div>
                    <div class="case available">08</div>
                  </div>
                  <div class="caseBg">
                    <img src="@/images/landscape/case8.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div :class="['tabContent', { active: currentTab === 2 }]">
              <div class="caseInfo">
                <div class="caseName">桌上型8+12格</div>
                <div class="caseCount">本日已借出<em>19</em>台次</div>
              </div>
              <div class="caseContent">
                <div class="case8">
                  <div class="caseGroup">
                    <div class="case available">01</div>
                    <div class="case available">02</div>
                    <div class="case available">03</div>
                    <div class="case available">04</div>
                    <div class="case available">05</div>
                    <div class="case available">06</div>
                    <div class="case empty">07</div>
                    <div class="case available">08</div>
                  </div>
                  <div class="caseBg">
                    <img src="@/images/landscape/case8.svg" alt="" />
                  </div>
                </div>
                <div class="case12">
                  <div class="caseGroup">
                    <div class="case empty">09</div>
                    <div class="case available">10</div>
                    <div class="case available">11</div>
                    <div class="case available">12</div>
                    <div class="case empty">13</div>
                    <div class="case empty">14</div>
                    <div class="case available">15</div>
                    <div class="case available">16</div>
                    <div class="case available">17</div>
                    <div class="case available">18</div>
                    <div class="case empty">19</div>
                    <div class="case empty">20</div>
                  </div>
                  <div class="caseBg">
                    <img src="@/images/landscape/case12.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="caseLegend">
            <div class="legend empty">空櫃</div>
            <div class="legend available">可使用</div>
            <div class="legend disable">停用</div>
          </div> -->
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
      currentTab: 0,
      tabs: ['直立式48格', '桌上型8格', '桌上型8+12格'],
    };
  },
  mounted() {
    // 在這裡主動通知父層：想顯示 member
    this.$emit('set-member-visible', true);
  },
};
</script>

<style></style>
