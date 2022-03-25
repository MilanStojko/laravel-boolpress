<template>
  <header>
    <nav>
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-link :to="{ name: 'about-us' }">about us</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>