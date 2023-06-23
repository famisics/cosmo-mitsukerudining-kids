<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import DiningListCard from '@/components/DiningListCard.vue'
</script>

<template>
  <HeaderNav>予定</HeaderNav>
  <main>
    <div class="cal">
      <h2>2月の開催予定</h2>
      <table>
        <tr><td><span class="lit">月</span></td><td><span class="lit">火</span></td><td><span class="lit">水</span></td><td><span class="lit">木</span></td><td><span class="lit">金</span></td><td><span class="lit">土</span></td><td><span class="lit">日</span></td></tr>
        <tr><td><span class="lit">1</span></td><td><span class="lit">2</span></td><td><span class="lit">3</span></td><td><span class="lit">4</span></td><td><span class="lit">5</span></td><td><span class="lit">6</span></td><td><span class="lit">7</span></td></tr>
        <tr><td><span class="lit">8</span><RouterLink to="/@onigiri_lover" class="red">おにぎり食堂<br>15:00 - 17:00</RouterLink></td><td><span class="lit">9</span></td><td><span class="lit">10</span></td><td><span class="lit">11</span></td><td><span class="lit">12</span></td><td><span class="lit">13</span></td><td><span class="lit">14</span></td></tr>
        <tr><td><span class="lit">15</span></td><td><span class="lit">16</span></td><td><span class="lit">17</span></td><td><span class="lit">18</span></td><td><span class="lit">19</span></td><td><span class="lit">20</span></td><td><span class="lit">21</span></td></tr>
        <tr><td><span class="lit">22</span></td><td><span class="lit">23</span></td><td><span class="lit">24</span></td><td><span class="lit">25</span></td><td><span class="lit">26</span></td><td><span class="lit">27</span></td><td><span class="lit">28</span></td></tr>
        <tr><td><span class="lit">29</span></td><td><span class="lit">30</span></td><td><span class="lit">31</span></td><td><span class="lit"></span></td><td><span class="lit"></span></td><td><span class="lit"></span></td><td><span class="lit"></span></td></tr>
      </table>
    </div>
    <div class="list">
      <DiningListCard>
        <template #icon><img src="@/assets/demo/usericon.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
        <template #datetime>2月8日 15:00 - 17:00</template>
      </DiningListCard>
      <DiningListCard>
        <template #icon><img src="@/assets/demo/usericon.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
        <template #datetime>2月8日 15:00 - 17:00</template>
      </DiningListCard>
      <DiningListCard>
        <template #icon><img src="@/assets/demo/usericon.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
        <template #datetime>2月8日 15:00 - 17:00</template>
      </DiningListCard>
    </div>
  </main>
</template>
<style scoped>
main {
  max-width: 800px;
  margin: auto;
}
.cal {
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0px 0px 10px #00000062;
}
.cal h2 {
  margin: 0 10px 10px 10px;
}
table {
  width: 100%;
}
table tr {
  display: flex;
}
table tr:first-of-type {
  font-weight: bold;
  height: 30px;
}
table td {
  width: calc(100% / 7);
  height: 80px;
}
table td .lit {
  display: block;
  width: 20px;
  text-align: center;
}
table tr:first-of-type .lit {
  width: 100%;
}
table .red {
  display: block;
  color: #000;
  background: #ffc7ab;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
@media (max-width: 830px) {
  table td .red {
    position: relative;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    color: var(--bg);
    height: 0;
  }
  table td .red::after {
    color: #000;
    content: "予定日";
    font-size: .75em;
    line-height: 1.7em;
    background: #ffc7ab;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 20px;
  }
}
</style>