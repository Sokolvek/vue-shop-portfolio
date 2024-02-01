<template>
  <section class="container" v-if="product">
    <img :src="product.img" alt="" />
    <article>
      <h2>{{ product.name }}</h2>
      <p>
        Увлажняющий крем идеально подходит для повседневного ухода за молодой
        кожей.<br /><br />
        Крем равномерно распределяется по поверхности благодаря легкой текстуре,
        обеспечивает глубокое увлажнение, регенерацию клеток.
      </p>
      <!-- <dl>
        <dt class="accordion" :class="{active : table == 1}" @click="table = 1">Информация о зачёте:</dt>
        <Transition name="list">
            <dl v-show="table == 1">info 1</dl>
        </Transition>
        <dt class="accordion" :class="{active : table == 2}" @click="table = 2">Информация о зачёте:</dt>
        <Transition name="list">
            <dl v-show="table == 2">info 1</dl>
        </Transition>
      </dl> -->
      <footer>
        <h3>{{ product.price }} ₽</h3>
        <FButton @click="store.addToCart(product)" path="#">Добавить в корзину</FButton>
      </footer>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {useCounterStore} from "../stores/counter"
import FButton from "../components/FButton.vue";
import { onMounted } from "vue";
const route = useRoute();
const store = useCounterStore()

const table =  ref(0)



const product = ref(null);
async function getProductName() {
  fetch(`https://658dd70d7c48dce94739c5f9.mockapi.io/api/products/${route.params.id}`)
    .then((text) => text.json())
    .then((data) => (product.value = data));
}


onMounted(() => {
  console.log(route.params);
  getProductName();
});
</script>

<style scoped>
section {
  display: flex;
}

img {
  width: 500px;
}

h2 {
  font-weight: 500;
}

article {
    position: relative;
  margin-left: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

footer {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* .accordion{
    position: relative;
    border-top: 1px solid black;
}

.accordion::before, ::after {
		position: absolute;
		bottom: 0;
        right: 0;
		width: .125em; height: 20px;
		border-radius: .125em;
		transform: rotate(90deg);
		background: black;
		content: ''
}

.accordion::after{
    transform: rotate(-180deg);
} */



.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media (max-width: 850px) {
  section{
    flex-direction: column;
    align-items: center;
  }

  section > article{
    margin-left: 0;
    margin-top: 40px;
  }
}
</style>
