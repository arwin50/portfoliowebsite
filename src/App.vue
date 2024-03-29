<script setup>
import { RouterView } from "vue-router";
import Particles from "./components/particles.vue";
import NavigationBar from "./components/Navigation/NavigationBar.vue";
</script>

<template>
  <div class="h-full font-main relative">
    <Particles class="absolute z-[-50] top-0 left-0 right-0 bottom-0" />
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
