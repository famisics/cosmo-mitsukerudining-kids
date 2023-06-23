<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import { reactive } from 'vue'
const state = reactive({ fav: false })
</script>
<template>
  <HeaderNav>食堂情報</HeaderNav>
  <main>
    <div class="header">
      <img src="@/assets/demo/usericon.jpg">
      <div>
        <h2>おにぎり食堂 <span class="material-symbols-rounded" :class="{'fill heart': state.fav}" @click="state.fav = !state.fav">favorite</span></h2>
        <p class="sid">@{{ $route.params.sid }}</p>
      </div>
    </div>
    <div class="line"></div>
    <h3>基本情報</h3>
    <p>　　住所：</p>
    <p>電話番号：</p> 
    <p>開催予定：各月３日、１２日、２３日</p>
    <p>　　料金：こども100円<span class="material-symbols-rounded">offline_pin</span></p>
    <div class="line"></div>
    <h3>開催レポート</h3>
    <div class="report">
      <section>
        <div class="head">
          <h4>初ボランティアで感じたこと</h4>
          <div>
            <p class="writer">さやか</p>
            <p class="datetime">2022/12/04 19:20</p>
          </div>
        </div>
        <p>
          今回配膳のボランティアに参加させていただきました。
          私は初めてのお手伝いでしたが、分からないことは都度教えていただけたので、戸惑うことはありませんでした。食堂の皆さんはとても暖かく、積極的に話しかけてくださるので、私も楽しんで活動できました。<br>
          ボランティアの方々の年齢層は広く、運営の主体は主婦の皆さまでしたが、お仕事を引退された方や大学生の方もいらっしゃいました。<br>
          地域とのつながりを感じられた、とても良い体験でした。ぜひ、またお手伝いさせていただきたいと思います。<br>
        </p>
      </section>
      <section>
        <div class="head">
          <h4>おにぎり食堂にお邪魔しました！</h4>
          <div>
            <p class="writer">さやか</p>
            <p class="datetime">2022/11/17 23:41</p>
          </div>
        </div>
        <p>
          初めて来たのですが、和気藹々とした雰囲気で、<br>
          小学1年生の子供も楽しんで食べていました！
        </p>
      </section>
      <section>
        <div class="head">
          <h4>2022年6月19日</h4>
          <div>
            <p class="writer">おにぎり食堂</p>
            <p class="datetime">2022/06/19 23:41</p>
          </div>
        </div>
        <p>
          今日は初めて来て下さった方が多く、いつもに増して和気藹々としていました！<br>
          是非またいらっしゃってください！<br>
          <br>
          次回の開催は22日水曜日を予定しています！
        </p>
      </section>
    </div>
  </main>
</template>
<style scoped>
main {
  margin: auto;
  padding: 20px;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000062;
}
main .header {
  display: flex;
}
main .header img {
  display: block;
  height: 80px;
  width: 80px;
  margin-right: 1em;
  border-radius: 40px;
}
main h2 {
  margin: 0;
  font-size: 2em;
}
main .sid {
  margin: 0;
  font-size: 1.2em;
}
main .material-symbols-rounded {
  font-size: 1.1em;
  transform: translateY(6px);
}
main h2 .material-symbols-rounded {
  cursor: pointer;
}
main p .material-symbols-rounded {
  transform: translateY(3px);
  margin: 0 2px;
}
main .line {
  width: 100%;
  border: solid 1px #aeaeae;
  margin: 10px 0;
}
main .report section {
  border: solid 2px #aeaeae;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0;
}
main .report section h4 {
  margin: 0;
  font-size: 1.4em;
  margin-bottom: 10px;
}
main .report section .head {
  margin-bottom: 10px;
}
main .report section .head p {
  margin: 0;
}
main .report section .datetime {
  color: #aaaaaa;
}
@media (min-width: 850px) {
  main .report section .head {
    display: flex;
    justify-content: space-between;
  }
  main .report section .head p {
    text-align: right;
  }
}

.heart {
  transition: .2s;
  color: #ff4444;
}
</style>