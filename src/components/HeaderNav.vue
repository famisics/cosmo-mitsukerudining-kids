<script setup>
// import { reactive } from 'vue';
// const header = reactive({ title: 'みつけるダイニング'})
</script>
<template>
<header>
  <RouterLink class="header_home main_button" to="/"><span class="material-symbols-rounded">cottage</span><span>ホーム</span></RouterLink>
  <h2><slot></slot></h2>
</header>
</template>
<style scoped>
header {
  display: flex;
  color: var(--text);
  margin-bottom: 20px;
}
header h2 {
  font-size: 1.8em;
  line-height: 1.8em;
  flex-grow: 1;
  text-align: center;
  margin: .6em 80px 0 0;
}
@media (max-width: 450px) {
  header h2 {
  font-size: 1.6em;
    margin: .6em 0;
  }
}
.header_home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  padding-top: 5px;
  font-weight: bold;
}
.header_home .material-symbols-rounded {
  font-size: 2.5em;
  font-variation-settings:'FILL' 0,'wght' 800,'GRAD' 0,'opsz' 48;
}
</style>