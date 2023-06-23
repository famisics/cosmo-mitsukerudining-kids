<script setup>

</script>
<template>
  <RouterLink to="/@onigiri_lover">
    <div class="card main_button">
      <slot name="icon"></slot>
      <div>
        <h3><slot name="name"></slot></h3>
        <slot name="location"></slot>
      </div>
    </div>
  </RouterLink>
</template>
<style>
.card {
  display: flex;
  margin: 20px 0;
  padding: 20px;
}
.card img {
  display: block;
  height: 80px;
  width: 80px;
  margin-right: 1em;
  border-radius: 40px;
}
.card h3 {
  margin: .1em 0 .4em 0;
  font-size: 1.6em;
}
</style>