
<script>
export default {
  props: ['text'],
};
</script>

<template>
  <div class="middleText">
    <h1>{{text.h1}}</h1>
    <p>{{text.p}}</p>
  </div>
</template>


<style scoped>
.middleText{
    width: 50%;
    background: linear-gradient(90deg, rgba(66,184,131,1) 32%, rgba(255,255,255,1) 100%, rgba(0,212,255,1) 100%);
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}

/* .middleTextRight{
    background: linear-gradient(90deg, rgba(255,255,255,1) 32%, rgba(66,184,131,1) 100%, rgba(0,212,255,1) 100%);
} */

h1{
    width: 70%;
}

p{
    width: 90%;
}
</style>