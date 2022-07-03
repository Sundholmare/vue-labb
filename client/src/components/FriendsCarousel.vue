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
    <h1 class="title">Friends</h1>
    <div class="friends">
      <FriendItem
        v-for="(friend, index) in friends"
        :key="index"
        :friend="friend"
      />
    </div>
  </div>
</template>

<style>
.hero {
  padding: 10px;
  background: #42b883;
  width: 50%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 18px 16px 25px 10px #ccc;
}

.title{
  font-size: 44px;
  color: white;
  font-style: italic;
}

.friends {
  display: flex;
  flex-direction: row;
  max-width: 32rem;
  overflow-x: scroll;
}
</style>