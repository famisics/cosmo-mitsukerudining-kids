<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import Swal from 'sweetalert2'
import { reactive } from 'vue';
const state = reactive({ text: ''})
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true
})

function showAlert() {
  if(state.text=='') {
    Toast.fire(
      'キーワードがありません',
      '',
      'error'
    )
  } else {
    Toast.fire(
      state.text+'を検索中…',
      '',
      'success'
    )
  }
}
function mic() {
  Toast.fire(
    'マイク入力は未対応です',
    '',
    'warning'
  )
}
</script>

<template>
  <HeaderNav>さがす</HeaderNav>
  <main>
    <div class="asps">
      <RouterLink class="dining" to="/@onigiri_lover"><div class="inner">おにぎり食堂</div></RouterLink>
      <div class="search">
        <span class="button_mic" @click="mic()">
          <span class="material-symbols-rounded">mic</span>
        </span>
        <span class="inputarea">
          <input type="text" id="" placeholder="子ども食堂をさがす" v-model="state.text">
        </span>
        <span class="button" @click="showAlert()">
          <span class="material-symbols-rounded">search</span>
        </span>
      </div>
    </div>
  </main>
</template>
<style scoped>
.asps {
  position: relative;
  margin-top: 10px;
  height: calc(100vh - 200px);
  background: url('@/assets/demo/map.png') center no-repeat;
  background-size: cover;
}
.search {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 800px;
  box-shadow: 0px 0px 10px #00000099;
  border-radius: 10px;
}
.search .inputarea {
  width: calc(100% - 40px)
}
.search > span {
  height: 50px;
}
.search input {
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 1.2em;
  box-sizing: border-box;
  border: none;
}
.search input::selection {
    background: #ffdc7c;
}
.search .button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  background: #ffd7aa;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}
.search .button_mic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  background: #fff;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
}
main .dining {
  display: inline;
  position: absolute;
  top: 300px;
  left: 200px;
  padding: 5px 10px;
  background: #3b3835;
  color: #fff;
  border-radius: 10px;
}
main .dining .inner {
  display: inline;
  position: relative;
  text-align: center;
}
main .dining .inner:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid #3b3835;
}
main .material-symbols-rounded {
  font-size: 1.6em;
  transform: translateY(1px);
  margin: 0 2px;
}
</style>