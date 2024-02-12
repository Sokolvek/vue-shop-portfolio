<template>
  <section class="container">
    <h2>catalog</h2>

    <ul class="product-list" felimotion="appearance">
      <li v-for="(product, i) in displayedProducts" @click="gotoProductPage(product.id)" :key="i" class="product-item">
        <!-- <img :src="product.img" alt="">
         -->
         <img src="../assets/imgs/join-us-3.png" alt="">
        <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <span class="product-price">{{ product.price }}</span>
            <span class="product-weight">{{ product.weight }}</span>
        </div>
      </li>
    </ul>
    <footer class="catalog-footer">
      <div class="pages-counter">
        <p>{{ currentPage+1 }}</p>
        <span> - </span>
        <p>{{ totalPages }}</p>
      </div>

        <ArrowIcon @click="prev" class="left-arrow"/>
        <ArrowIcon @click="next" class="right-arrow"/>

    </footer>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import ArrowIcon from "../components/ArrowIcon.vue"; 
import { useRouter } from "vue-router";

const router = useRouter()
const products = ref([]);
const itemPerPage = 4;
let currentPage = 0;



const totalPages = computed(() =>
  Math.ceil(products.value.length / itemPerPage)
);
let displayedProducts = computed(() =>
  products.value.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  )
);

function gotoProductPage(id){
  router.push(`product-page/${id}`)
}

function fetchData() {
  fetch(`https://658dd70d7c48dce94739c5f9.mockapi.io/api/products`)
    .then((text) => text.json())
    .then((data) => (products.value = data));
}

function next() {
  if (currentPage == totalPages.value-1) {
    return;
  }
  currentPage++;
  products.value = [...products.value];
}

function prev() {
  if (currentPage == 0) {
    return;
  }
  currentPage--;
  products.value = [...products.value];
}

onMounted(() => {
  fetchData();
});
watchEffect(() => {
  fetchData();
});
</script>

<style scoped>

img{
  max-width: 300px;
}

/* h3,span{
  color: white;
} */

.left-arrow{
  position: absolute;
  right: 60px;
  transform: rotate(-90deg);
}

.right-arrow{
  position: absolute;
  right: 10px;
  transform: rotate(90deg);
}
.product-list{
    display: flex;
    justify-content: space-between;
}

.product-item{
    position: relative;
}



.catalog-footer{
  position: relative;
  display: flex;
  /* justify-content: flex-end; */
}

.pages-counter{
  display: flex;
  position: absolute;
  /* top: 50%; */
  left: 50%;
  transform: translateX(-50%);
}

.arrows{
  align-self: flex-end;
}

.product-weight{
    position: absolute;
    bottom: 10px;
    right: 20px;
}

.product-price{
    position: absolute;
    bottom: 30px;
    right: 20px;
}
.product-name{
    position: absolute;
    bottom: 30px;
    left: 20px;
}

</style>
