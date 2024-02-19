<template>
    <section class="seasonal-product">
        <div class="empty" ></div>
        <article felimotion="appearance">
            <h2>Встречайте весну<br> вместе с нами</h2>
            <p>Мы разработали уникальные продукты, которые помогут вам чувствовать себя свежо и комфортно, обеспечивая одновременно надежную защиту.</p>
            <FButton path="/">Подробнее</FButton>
        </article>
    </section>    
</template>

<script setup>
import FButton from './FButton.vue';


</script>

<style scoped>
.seasonal-product{
    background-image: url("../assets/imgs/seasonal-product-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 400px;
    display: flex;
    position: relative;
  
}

h2{
    font-size: 2rem;
    font-weight: normal;
}

.seasonal-product > article{

}
.empty{
    width: 55%;
    height: 100%;
}
article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 15%;
}

article > button{
    width: fit-content;
    height: fit-content;
    
}

@media (max-width: 1000px) {
    .empty{
        display: none;
    }
    article{
        text-align: center;
        width: 100%;
        max-width: none;
    }

    article > button{
        margin: 0 auto;
    }
}
</style>