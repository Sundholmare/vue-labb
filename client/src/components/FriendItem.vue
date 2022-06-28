<script>
export default {
    props: ['friend']
};
</script>

<template>
  <div>{{friend && friend.firstName}}</div>
</template>


<style>
</style>