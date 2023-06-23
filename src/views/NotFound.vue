<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>
  <HeaderNav>Error!</HeaderNav>
  <main>
    <h2>Not Found :(<br><br>{{ $route.path }}</h2>
  </main>
</template>
<style scoped>
h2 {
  display: block;
  width: 300px;
  margin: 100px auto 0 auto;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  border: solid 2px black;
}
</style>