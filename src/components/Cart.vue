<template>
  <div>
    <Transition>
      <div
        v-show="store.cartPopup"
        @click="store.cartPopup = false"
        class="shadow-layer"
      ></div>
    </Transition>
    <Transition>
      <aside v-show="store.cartPopup">
        <div class="cart-title">
          <h3>Корзина</h3>
          <img @click="store.cartPopup = false" src="../assets/imgs/cross-svgrepo-com.svg" alt="">
        </div>
        <TransitionGroup tag="ul" name="list" class="cart-list">
          <li
            v-for="(product, i) in store.cart"
            :key="product.id"
            class="cart-item"
          >
            <img :src="product.img" alt="" />
            <span>{{ product.name }}</span>
            <h3>{{ product.price }}</h3>
            <FButton to="" @click="store.deleteFromCart(i)"
              >Удалить из корзины</FButton
            >
          </li>
        </TransitionGroup>
      </aside>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
import FButton from "../components/FButton.vue"
const store = useCounterStore();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  background-color: white;
  z-index: 5;
  padding: 10px;
}

.cart-title{
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.cart-title > img{
  width: 30px;
  cursor: pointer;
}

img{
    width: 120px;
}

.cart-list{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
}
.cart-item{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 30px;
}
.shadow-layer {
  position: fixed;
  width: 100%;
  top: 0;
  height: 100vh;
  background: rgba(67, 87, 121, 0.6);
  z-index: 4;
}

@media (max-width: 1000px) {
  aside{
    width: 100%;
  }
}
</style>
