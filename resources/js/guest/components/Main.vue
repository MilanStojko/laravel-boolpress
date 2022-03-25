<template>
  <div>
    <Header />
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Main",
  components: {
    Header,
  },
};
</script>
