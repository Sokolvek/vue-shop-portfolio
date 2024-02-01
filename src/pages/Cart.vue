<template>
    <section class="container">
        <h2>Корзина</h2>
        <TransitionGroup tag="ul" name="fade" class="cart-list">
            <li v-for="(product, i) in store.cart" :key="product.id" class="cart-item">
                <img :src="product.img" alt="">
                <h3>{{ product.price }}</h3>
                <FButton @click="store.deleteFromCart(i)">Удалить из корзины</FButton>
            </li>
        </TransitionGroup>
    </section>
</template>

<script  setup>
import FButton from '../components/FButton.vue';
import { useCounterStore } from '../stores/counter';
const store = useCounterStore()

</script>

<style scoped>
img{
    width: 150px;
}

.cart-list{
    margin-top: 50px;
}
.cart-item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
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