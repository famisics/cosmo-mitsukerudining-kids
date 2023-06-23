<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import Swal from 'sweetalert2'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({ kana: false, simple: false, location: true, mic: false, lock: true })
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true
})
function settings_delete() {
  if(state.lock) {
    Toast.fire(
      'アカウントロックが有効です',
      '',
      'error'
    )
  } else {
    Swal.fire({
      title: 'アカウントを削除',
      text: "アカウントを削除するとお気に入りや設定などの情報が全て削除されます",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#29ceae',
      confirmButtonText: '削除する',
      cancelButtonText: 'キャンセル',
    }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire({
        title: 'アカウントを削除',
        text: "この操作は取り消せません、本当に削除しますか？",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#29ceae',
        confirmButtonText: '削除する',
        cancelButtonText: 'キャンセル',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'アカウントを削除しました',
            'あなたのアカウントは削除されました、ホーム画面に移動します',
            'success'
          ).then((result) => {
            router.push('/')
          })
        }
      })
      }
    })
  }
  
}
function settings_reg() {
  Toast.fire(
    '通っている小学校を登録',
    '登録しました',
    'success'
  )
}
</script>

<template>
  <HeaderNav>設定</HeaderNav>
  <main>
    <h2>表示</h2>
    <div class="switch">
      <p>シンプルな食堂情報<span class="material-symbols-rounded" style="transform: translateY(5px);">info</span></p>
      <div class="toggle" @click="state.simple = !state.simple" :class="{'checked': state.simple}">
        <input type="checkbox" name="check" />
      </div>
    </div>
    <div class="switch">
      <p>ひらがなモード<span class="material-symbols-rounded" style="transform: translateY(5px);">closed_caption</span></p>
      <div class="toggle" @click="state.kana = !state.kana" :class="{'checked': state.kana}">
        <input type="checkbox" name="check" />
      </div>
    </div>
    <h2>通っている小学校を登録</h2>
    <p>通っている小学校を登録すると、『さがす<span class="material-symbols-rounded">search</span>』画面で校区内の子ども食堂を検索できます</p>
    <p>※地図上の吹き出しを長押しでも登録可能です</p>
      <select name="" id="">
        <option value="">都道府県を選択</option>
        <option value="">北海道</option>
        <option value="">青森県</option>
        <option value="">岩手県</option>
      </select>
      <select name="" id="">
        <option value="">都市を選択</option>
        <option value="">札幌市</option>
        <option value="">江別市</option>
        <option value="">旭川市</option>
        <option value="">小樽市</option>
      </select>
      <select name="" id="">
        <option value="s">区を選択</option>
        <option value="s">北区</option>
        <option value="s">東区</option>
        <option value="s">南区</option>
        <option value="s">西区</option>
        <option value="s">中央区</option>
        <option value="s">清田区</option>
        <option value="s">手稲区</option>
        <option value="s">厚別区</option>
        <option value="s">豊平区</option>
        <option value="s">白石区</option>
      </select>
      <select name="" id="">
        <option value="">校区を選択</option>
        <option value="">たまねぎ小学校</option>
      </select>
    <div class="switch" style="margin: 40px auto;">
      <a href="javascript:void(0)" class="button" @click="settings_reg()">登録する<span class="material-symbols-rounded">check</span></a>
    </div>
    <h2>プライバシー</h2>
    <div class="switch">
      <p>位置情報サービス<span class="material-symbols-rounded" style="transform: translateY(5px);">near_me</span></p>
      <div class="toggle" @click="state.location = !state.location" :class="{'checked': state.location}">
        <input type="checkbox" name="check" />
      </div>
    </div>
    <div class="switch">
      <p>マイク<span class="material-symbols-rounded" style="transform: translateY(5px);">mic</span></p>
      <div class="toggle" @click="state.mic = !state.mic" :class="{'checked': state.mic}">
        <input type="checkbox" name="check" />
      </div>
    </div>
    <h2>アカウント</h2>
    <div class="switch">
      <p>アカウントロック<span class="material-symbols-rounded" style="transform: translateY(5px);">lock</span></p>
      <div class="toggle" @click="state.lock = !state.lock" :class="{'checked': state.lock}">
        <input type="checkbox" name="check" />
      </div>
    </div>
    <p>アカウントロックを解除すると『アカウントを削除』ボタンが押せるようになります</p>
    <div class="switch" style="margin: 40px auto;">
      <a href="javascript:void(0)" class="button delete" :class="{'grayout': state.lock}" @click="settings_delete()">アカウントを削除<span class="material-symbols-rounded">delete</span></a>
    </div>
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
.switch {
  display: flex;
  justify-content: right;
  font-size: 1.4em;
}
.switch p {
  margin: 18px 0;
}
.toggle {
  position: relative;
  width: 70px;
  height: 36px;
  margin: 18px 0 5px 20px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
}
.toggle input[type=checkbox] {
  display: none;
}
.toggle:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #f45e55;
  transition: 0.2s ease-out;
}
.toggle:after {
  content: "OFF";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 9px 28px -6px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-out;
  text-align: center;
  padding: 9px 0 0;
  line-height: 1;
  font-size: 13px;
  font-weight: bold;
  color: #df4c43;
  letter-spacing: .5px;
  box-sizing: border-box;
}
.toggle.checked:before {
  background: #2ae69e;
}
.toggle.checked:after {
  content: "ON";
  left: 37px;
  box-shadow: 0 9px 28px -6px rgba(0, 0, 0, 0.5);
  color: #16d088;
  padding: 9px 0 0 1px;
}
.switch .button {
  font-weight: bold;
  border-radius: 10px;
  padding: 3px 8px 8px 8px;
  margin: auto;
  color: #1faf86;
  border: solid 3px #1faf86;
}
.switch .button .material-symbols-rounded {
  font-size: 1.3em;
  margin-left: 10px;
  transform: translateY(7px);
}
.switch .delete {
  color: #df4c43;
  border: solid 3px #df4c43;
}
.switch .delete.grayout {
  color: #bbb;
  border: solid 3px #bbb;
}

select {
  font-size: 1.5em;
  display: block;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
}
</style>