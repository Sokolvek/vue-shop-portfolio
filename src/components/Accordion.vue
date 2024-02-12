<template>
  <section class="questions-and-answers container">
    <h2>Ответы на часто задаваемые вопросы:</h2>

    <dl class="accordion" v-for="item in items" :key="item.title">
      <dt class="accordion-title">
        <h2>{{ item.title }}</h2>
        <div
          class="accordion-btn"
          @click="item.open = !item.open"
          :class="{ active: item.open }"
        ></div>
      </dt>
          <dd class="accordion-content" v-show="item.open">{{ item.content }}</dd>
    </dl>
  </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "Каковы условия доставки и оплаты?",
    content:
      "Мы предлагаем бесплатную доставку на территории города для заказов свыше 100 рулонов туалетной бумаги. Для заказов меньшего объема действует фиксированная плата за доставку. В качестве способов оплаты мы принимаем наличные, банковские переводы и онлайн-платежи через платежные системы.",
    open: false,
  },
  {
    title: "Какие типы туалетной бумаги у вас представлены?",
    content:
      "Мы предлагаем широкий ассортимент туалетной бумаги различных типов и характеристик. У нас вы можете найти однослойную, двухслойную и трехслойную бумагу разной плотности.",
    open: false,
  },
  {
    title: "Каковы сроки обработки и доставки заказа?",
    content:
      "Мы стремимся обрабатывать и отправлять заказы в кратчайшие сроки. Обычно срок обработки заказа занимает 1-2 рабочих дня. Что касается доставки, то она занимает от 3 до 5 рабочих дней в зависимости от вашего местоположения.",
    open: false,
  },
]);
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {

  opacity: 0;

}
.questions-and-answers{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 150px;

    & > h2{
        align-self: baseline;
        font-size: 2.5rem;
    }

}

.questions-and-answers{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 150px;

    & > h2{
        align-self: baseline;
        font-size: 2.5rem;
    }

}

.accordion{
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    max-width: 900px;
    width: 100%;
    overflow: hidden;
    padding: 35px;
}

.accordion-btn{
    position: relative;
    width: 30px;
    height: 30px;
    transition: 0.5s;

    &::before{
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #000000;
        
    }
    &::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #000000;
        transform: rotate(90deg);
        
    }
}

.accordion-btn.active{
    transform: rotate(45deg);
}

.accordion-title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h2{
        font-size: 20px;
        font-weight: 700;

    }
}

.accordion-content{
    padding-top: 10px;
    transition: 1s;
    line-height: 19.2px;
    font-weight: 300;
}

</style>
