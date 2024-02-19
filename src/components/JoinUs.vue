<template>
  <section class="join-us container">
    <article class="imgs-wrapper" felimotion="left">
      <img src="../assets/imgs/join-us-img-1.png" alt="" />
      <img src="../assets/imgs/join-us-img-2.png" alt="" />
      <img src="../assets/imgs/join-us-img-3.png" alt="" />
      <img src="../assets/imgs/join-us-img-4.png" alt="" />
      <img src="../assets/imgs/join-us-img-5.png" alt="" />
      <img src="../assets/imgs/join-us-img-6.png" alt="" />
    </article>
    <div class="text-wrapper" felimotion="appearance">
      <h2>Присоединяйтесь к нам</h2>
      <p>
        Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
        первыми
      </p>
      <FButton path="#">Подписаться</FButton>
    </div>
  </section>
</template>

<script setup>
import FButton from './FButton.vue';
</script>

<style scoped>

img{
  max-width: 233px;
  height: 100%;
}
.join-us {
  display: flex;
}

section{
  overflow: hidden;
}
.imgs-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.text-wrapper {
  margin: auto 0;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 1000px) {
  .imgs-wrapper{
    grid-template-columns: 1fr 1fr;
  }
  .imgs-wrapper > img:nth-child(2) {
    display: none;
  }
  .imgs-wrapper > img:nth-child(5) {
    display: none;
  }
}

@media (max-width: 750px) {
  .imgs-wrapper > img{
    width: 150px;
  }
}

@media (max-width: 600px) {
  .join-us{
    flex-direction: column;
  }
  .imgs-wrapper{
    width: auto;
    margin: 0 auto;
    margin-bottom: 50px;
  }
}

@media (max-width: 400px) {
  .imgs-wrapper{
    width: auto;
  }
}

</style>
