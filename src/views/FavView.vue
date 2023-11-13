<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import DiningCard from '@/components/DiningCard.vue'
</script>

<template>
  <HeaderNav>お気に入り</HeaderNav>
  <main>
    <div class="dining">
      <DiningCard>
        <template #icon><img src="@/assets/demo/S__49512452_0.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
      </DiningCard>
      <DiningCard>
        <template #icon><img src="@/assets/demo/S__49512453_0.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
      </DiningCard>
      <DiningCard>
        <template #icon><img src="@/assets/demo/S__49512455_0.jpg"></template>
        <template #name>おにぎり食堂</template>
        <template #location>北海道札幌市東区北51条西20丁目1-2</template>
      </DiningCard>
    </div>
  </main>
</template>
<style scoped>
main {
  max-width: 800px;
  margin: auto;
}
</style>