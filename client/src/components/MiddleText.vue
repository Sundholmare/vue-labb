
<script>
export default {
  props: ["text"],
};
</script>

<template>
  <div :class="text.positionLeft ? 'middleTextLeft' : 'middleTextRight'">
    <h1>{{ text.h1 }}</h1>
    <p>{{ text.p }}</p>
  </div>
</template>


<style scoped>
.middleTextLeft {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  background: linear-gradient(
    90deg,
    rgba(66, 184, 131, 1) 32%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
}

.middleTextRight {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(66, 184, 131, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  text-align: end;
}

/* .middleTextRight{
    background: linear-gradient(90deg, rgba(255,255,255,1) 32%, rgba(66,184,131,1) 100%, rgba(0,212,255,1) 100%);
} */

h1 {
  width: 70%;
  color: darkslategray;
  font-weight: bold;
}

p {
  width: 90%;
  font-weight: 500;
  color: darkslategray;
  font-size: 18px;
}
</style>