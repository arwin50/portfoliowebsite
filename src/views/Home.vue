<template>
  <div class="h-[90%]">
    <particles class="absolute z-[-50] top-0 left-0 right-0 bottom-0" />
    <About class="font-main" />
  </div>
  <div class="">
    <Projects />
  </div>
</template>

<script setup>
import About from "@/components/Content/About.vue";
import Projects from "@/components/Content/Projects.vue";
import particles from "@/components/particles.vue";
</script>
