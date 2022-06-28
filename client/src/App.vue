

<script>
import FriendsCarousel from './components/FriendsCarousel.vue'
  export default {
    name: "App",
    components: {
      FriendsCarousel,

    },
  };
</script>

<template>
  <div class="main">
    <h1>The Vue Laboratory</h1>
    <FriendsCarousel />
  </div>
</template>


<style>
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
</style>
