
<template>
   <div>
    <Header />
    <Cart />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
      </router-view>

  </div>
</template>

  <script setup>
  import { onMounted } from 'vue';
import Header from './components/layouts/Header.vue';
import Cart from './components/Cart.vue';

onMounted(() => {
  // felimationHandler()
})
  </script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
