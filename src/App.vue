<template>
  <b-container fluid>
    <div v-if="$route.path != '/utilizadores' && $route.path != '/admin' && $route.path != '/registocaes' && $route.path != '/utilizadoreseditar'">
    <NavBar></NavBar>
  </div>
    <router-view />
  </b-container>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>
