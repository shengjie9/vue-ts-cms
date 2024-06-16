<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

const changeCounter = () => {
  counterStore.changeCounterAction(999)
}
</script>

<template>
  <div class="container">
    <div class="">mian {{ counterStore.counter }} - {{ counterStore.doubleCounter }}</div>
    <button @click="changeCounter()">change counter</button>
  </div>
</template>

<style scoped lang="less"></style>
