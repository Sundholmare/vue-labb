

<script>
import FriendsCarousel from "./components/FriendsCarousel.vue";
import MiddleText from "./components/MiddleText.vue";

export default {
  name: "App",
  components: {
    FriendsCarousel,
    MiddleText,
  },
  data() {
    return {
      textFiller: [
        {
          h1: "Laboratory for the purpose of learning and familiarising of Vue.js",
          p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia, neque voluptatibus quod nulla alias quia nobis eveniet! Natus ducimus sit accusamus provident ab facere ipsa nulla tenetur eligendi explicabo? Nobis praesentium odit ipsa deserunt, quas ducimus nam Accusantium error perspiciatis tempore expedita voluptatum sunt quia, earum quasi et voluptate laborum tempora. Molestias inventore eius tenetur sed ipsam hic iure.",
          positionLeft: true
        },
        {
          h1: "Check out these sweet components",
          p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia, neque voluptatibus quod nulla alias quia nobis eveniet! Natus ducimus sit accusamus provident ab facere ipsa nulla tenetur eligendi explicabo? Nobis praesentium odit ipsa deserunt, quas ducimus nam Accusantium error perspiciatis tempore expedita voluptatum sunt quia, earum quasi et voluptate laborum tempora. Molestias inventore eius tenetur sed ipsam hic iure.",
          positionLeft: false
        },
      ],
    };
  },
};
</script>

<template>
  <div class="main">
    <h1>The Vue Laboratory</h1>
    <FriendsCarousel />
    <MiddleText :text="textFiller[0]" />
    <MiddleText :text="textFiller[1]" />
  </div>
</template>


<style>

*{
  font-family: 'Roboto Condensed', sans-serif;
}

.main {
  background: #fff;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
