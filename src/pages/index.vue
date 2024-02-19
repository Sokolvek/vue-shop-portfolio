<template>
  <div>
    <section class="main-section">
      <img
        class="main-img"
        src="../assets/imgs/main-img-1.png"
        alt=""
        felimotion="top"
      />
      <div felimotion="appearance">
        <h1 class="text-center">MAROON</h1>
        <p class="text-center">
          Натуральная косметика <br/>
для бережного ухода за кожей
        </p>
        <FButton class="m-auto" path="/catalog">Подробнее</FButton>
      </div>
      <img
        class="main-img"
        src="../assets/imgs/main-img-2.png"
        alt=""
        felimotion="top"
      />
    </section>
   
    <SeasonalProduct />
    <section class="individual container">
      <article felimotion="appearance">
        <h2 felimotion="appearance">Индивидуальный уход</h2>
        <p felimotion="appearance">
          Мы понимаем, что каждый человек уникален, и для достижения
          оптимального состояния кожи необходим индивидуальный подход. Наш
          продукт предлагает инновационный подход к уходу за кожей, учитывая
          ваши уникальные потребности и предпочтения.<br /><br />
          Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая
          ваш образ жизни, место жительства и другие факторы.
        </p>
        <FButton path="#">Заполнить анкету</FButton>
      </article>
      <img
        src="../assets/imgs/individual-img.png"
        alt=""
        felimotion="appearance"
      />
    </section>
    <!-- <section class="our-history">
      <h2>
        “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для
        всех, кто хочет заботиться о себе и своем теле”
      </h2>
      <button>Наша история</button>
    </section> -->
    <!-- <Accordion /> -->
    <JoinUs />
  </div>
</template>

<script setup>
import FButton from "../components/FButton.vue";
import JoinUs from "../components/JoinUs.vue";
import SeasonalProduct from "../components/SeasonalProduct.vue";
import Accordion from "../components/Accordion.vue";
import { onMounted } from "vue";
function felimationHandler() {
  const sections = document.querySelectorAll("section");
  const animsList = new Map([
    ["top", "felimotion-top"],
    ["bottom", "felimotion-bottom"],
    ["left", "felimotion-left"],
    ["right", "felimotion-right"],
    ["appearance", "felimotion-appearance"],
    // ["scale", scaleAnim],
    // ["top", "felimotion-top"]
  ]);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;
      target.style.position = "relative";

      if (entry.isIntersecting) {
        target.querySelectorAll("[felimotion]").forEach((item) => {
          console.log(item);
          // resetStyle(item);
          item.classList.add("felimotion-reset");
        });
      } else {
        target.querySelectorAll("[felimotion]").forEach((item) => {
          if (item.getAttribute("felimotion")[0] == "{") {
            // animsList.get(JSON.parse(item.getAttribute("felimotion")).anim)(
            //   item
            // );
          } else {
            // animsList.get(item.getAttribute("felimotion"))(item)
            if (item.classList.contains("felimotion-reset")) {
              item.classList.remove("felimotion-reset");
            }
            item.classList.add(animsList.get(item.getAttribute("felimotion")));
          }
        });
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
    const elementsWithAttr = section.querySelectorAll("[felimotion]");
    elementsWithAttr.forEach((item) => {
      if (item.getAttribute("felimotion")[0] == "{") {
        console.log("dwad ");
      } else {
        // animsList.get(item.attributes.felimotion.value)(item);
        item.classList.add(animsList.get(item.getAttribute("felimotion")));
      }
    });
  });

  function positionController(el, posDirection) {
    const style = el.style;
    style.opacity = "0";
    if (posDirection == "top" || posDirection == "bottom") {
      style.transform = "translateY(100%)";
    } else {
      style.transform = "translateX(100%)";
    }
  }

  function topAnim(el) {
    el.style.transition = "1s ease";
    requestAnimationFrame(() => {
      positionController(el, "top");
    });
  }

  function bottomAnim(el) {
    el.style.transition = "2s";
    requestAnimationFrame(() => {
      positionController(el, "bottom");
    });
  }

  function leftAnim(el) {
    el.style.transition = "2s";
    requestAnimationFrame(() => {
      positionController(el, "left");
    });
  }

  function rightAnim(el) {
    el.style.transition = "1s ease";
    requestAnimationFrame(() => {
      positionController(el, "right");
    });
  }

  function scaleAnim(el) {
    const style = el.style;
    style.transition = "2s";
    requestAnimationFrame(() => {
      style.transform = "scale(0.1)";
    });
  }

  function resetStyle(el) {
    const style = el.style;
    style.opacity = "1";
    console.log(parseInt(style.left));
    if (parseInt(style.left) > 0) {
      style.left = "0px";
    }
    if (parseInt(style.right) > 0) {
      style.right = "0px";
    }
    if (parseInt(style.bottom) > 0) {
      style.bottom = "0px";
    }
    if (parseInt(style.top) > 0) {
      style.top = "0px";
    }
    requestAnimationFrame(() => {
      style.transform = "scale(1)";
    });
  }
}
onMounted(() => {
  felimationHandler();
});
</script>

<style scoped>
.main-img {
  max-width: 400px;
  /* max-height: 330px; */
}
.main-section {
  display: flex;
  justify-content: space-between;
  max-width: 1030px;
  margin: 0 auto;
}

h1 {
  font-size: 50px;
  font-weight: normal;
}

.main-section > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  margin-top: 150px;
}
.individual {
  display: flex;
}

h2 {
  font-size: 32px;
  font-weight: normal;
}
.individual > article {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #f4f1ed;
  gap: 10px;
  padding: 60px 120px;
}


.individual > img {
  max-width: 60%;
}
.our-history {
  background-image: url("@/assets/imgs/our-history-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
}

@media (max-width: 1000px) {
  .main-section {
    flex-direction: column;
    justify-content: center;
  }

  .main-section > div {
    order: -1;
  }

  .main-section img:nth-child(1) {
    display: none;
  }

  .main-section > img {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .individual {
    flex-direction: column;
  }

  .individual > img {
    max-width: none;
  }
}

@media (max-width: 500px) {
  .individual > article{
    padding: 40px 10px;
  }
}
</style>
