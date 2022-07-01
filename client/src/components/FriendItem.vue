<script>
export default {
  props: ["friend"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<template>
  <div class="friend">
    <h1>{{ friend && friend.firstName }}</h1>
    <h2>{{ friend && friend.lastName }}</h2>
    <button
      @mouseleave="hover = false"
      @mouseover="hover = true"
      :class="{ btnHover: hover }"
      class="friend-btn"
    >
      Expand
    </button>
  </div>
</template>


<style>
.friend {
  background: white;
  border-radius: 15px;
  height: 14rem;
  min-width: 10rem;
  margin: 5px;
  text-align: center;
}

.friend-btn {
  background: teal;
  padding: 10px;
  border-radius: 4px;
  border-style: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

.btnHover {
  transform: scale(1.1);
}
</style>