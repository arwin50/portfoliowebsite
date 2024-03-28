<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/Navigation/NavigationBar.vue";
</script>

<template>
  <div class="h-full font-main">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style>
body {
  height: 100vh;
  width: 100vw;
  background-color: #212529;
  overflow-x: hidden;
  color: white;
}
#app {
  height: 100%;
}
</style>
