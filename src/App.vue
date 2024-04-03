<script setup>
import { RouterView } from "vue-router";
import Particles from "./components/particles.vue";
import NavigationBar from "./components/Navigation/NavigationBar.vue";
</script>

<template>
  <div class="h-full font-main relative">
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
html {
  scroll-behavior: smooth;
}
</style>
