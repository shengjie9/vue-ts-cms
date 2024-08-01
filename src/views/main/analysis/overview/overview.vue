<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
interface ITest {
  userId: string
  id: string
  name: string
}
function asyncFn() {
  return new Promise<ITest>((reslove, reject) => {
    setTimeout(() => {
      reslove({ userId: '9', id: '8', name: 'jerome' })
    }, 2000)
  })
}

const { state, isLoading, isReady } = useAsyncState<ITest>(asyncFn(), {
  userId: 'null',
  id: 'null',
  name: 'null'
})
</script>
<template>
  <div class="overview">
    <h2>overview</h2>
    <div>
      {{ isLoading }}
      {{ isReady }}
    </div>
    {{ state.userId }}
  </div>
</template>

<style scoped>
.overview {
}
</style>
