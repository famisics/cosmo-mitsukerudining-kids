<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>
  <HeaderNav>つかい方</HeaderNav>
  <main>
    <h2>ちゅうい</h2>
    <p>子ども食堂に行くときは、必ずおうちの人と相談しましょう。</p>
    <h2>子ども食堂をさがしたいとき</h2>
    <p>ホームにある『さがす』ボタンを押します</p>
    <ul>
      <li>近くの子ども食堂が表示されます</li>
      <li>吹き出しを押すと『食堂情報』が表示されます</li>
      <li>吹き出しの食堂を長押しで、お気に入りに登録することができます</li>
      <li>吹き出しの小学校を長押しで、自分の小学校に登録することができます</li>
      <li>キーワードを入力して検索ができます（食堂の名前／小学校の名前など）</li>
      <li>マイクのボタンを押すと、音声検索ができます</li>
    </ul>
    <h2>子ども食堂の開催予定を見たいとき</h2>
    <p>ホームにある『開催予定』ボタンを押します</p>
    <ul><li>お気に入り登録した子ども食堂の開催予定日がカレンダーに表示されます</li></ul>
    <h2>お気に入り登録した子ども食堂を見たいとき</h2>
    <p>ホームにある『お気に入り』ボタンを押します</p>
    <ul>
      <li>お気に入り登録した子ども食堂が表示されます</li>
      <li>ハートマークを押してお気に入り登録／解除ができます</li>
    </ul>
    <h2>設定を変更したいとき</h2>
    <p>ホームにある『歯車<span class="material-symbols-rounded">settings</span>』ボタンを押します</p>
    <ul>
      <li>自分の通っている小学校の登録ができます</li>
      <li>ひらがなモード／漢字モードの切り替えができます</li>
    </ul>
  </main>
</template>
<style scoped>
main {
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000062;
  padding: 5px 20px;
}
</style>