<script setup>

</script>
<template>
  <RouterLink to="/@onigiri_lover">
    <div class="card main_button">
      <slot name="icon"></slot>
      <div class="inner">
        <div class="prof">
          <h3><slot name="name"></slot></h3>
          <slot name="location"></slot><br>
        </div>
        <div class="datetime">
          開催予定：<slot name="datetime"></slot>
        </div>
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
.card .inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.card .datetime {
  font-size: 1.5em;
}
@media (max-width: 830px) {
  .card {
    padding: 10px;
  }
  .card img {
    display: block;
    height: 105px;
    width: 5px;
    margin-right: 10px;
    border-radius: 10px;
    opacity: .8;
  }
  .card .inner {
    flex-direction: column;
  }
  .card .datetime {
    font-size: 1.2em;
  }
}
</style>