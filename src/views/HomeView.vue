<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>
  <HeaderNav>みつけるダイニング</HeaderNav>
  <main>
    <div class="_inner">
      <RouterLink class="header_home" to="/find"><span class="material-symbols-rounded _search">search</span>さがす</RouterLink>
      <div>
        <RouterLink class="header_home" to="/list">開催予定</RouterLink>
        <RouterLink class="header_home" to="/fav">お気に入り</RouterLink>
      </div>
      <div class="_settings">
        <RouterLink class="header_home" to="/guide">つかい方</RouterLink>
        <RouterLink class="header_home" to="/settings"><span class="material-symbols-rounded">settings</span></RouterLink>
      </div>
    </div>
    <p>
      CLOSED ALPHA(demo)<br>
      一般向けは<a style="text-decoration: underline;" href="https://cosmo.stnfy.com">こちら</a>
    </p>
    <footer>2023 ©みつけるダイニング</footer>
  </main>
</template>
<style scoped>
._inner {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px auto 0 auto;
  width: 300px;
}
._inner a {
  display: block;
  color: #000000;
  font-weight: bold;
  background: #ffc387;
  height: 100px;
  margin: 10px;
  text-align: center;
  line-height: 100px;
  font-size: 2em;
  border-radius: 10px;
}
._inner a ._search {
  font-size: 1.3em;
  transform: translateY(10px);
  font-variation-settings:'FILL' 0,'wght' 600,'GRAD' 0,'opsz' 48;
}
._inner a:hover {
  opacity: .5;
}
._inner div {
  display: flex;
  justify-content: space-between;
}
._inner div>a {
  width: calc(50% - 20px);
  font-size: 1.3em;
  background: #59ff90;
}
._inner div>a:last-of-type {
  background: #ffa6a6;
}
._inner ._settings a {
  height: 70px;
  border-radius: 35px;
  line-height: 70px;
  background: #72d7ff;
}
._inner ._settings a:first-of-type {
  width: calc(70% - 20px);
}
._inner ._settings a:last-of-type {
  width: calc(30% - 20px);
  background: #ffb5fe;
}
._inner ._settings a:last-of-type .material-symbols-rounded {
  display: block;
  font-size: 50px;
  text-align: center;
  height: 70px;
  line-height: 70px;
}
</style>