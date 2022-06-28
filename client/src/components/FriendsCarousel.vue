<script>
import axios from "axios";
import FriendItem from "./FriendItem.vue";

export default {
  components: {
    FriendItem,
  },
  data() {
    return {
      friends: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/friends")
      .then((response) => (this.friends = response.data));
  },
};
</script>

<template>
  <div class="hero">
    <h1>Hello Friends</h1>
    <div v-for="(friend, index) in friends" :key="index">
        <FriendItem :friend="friend" />
    </div>
    <!-- <FriendItem v-bind:friend="friends[0]" /> -->
  </div>
</template>

<style>
.hero {
  background: teal;
  width: 50%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 18px 16px 25px 10px #ccc;
}
</style>