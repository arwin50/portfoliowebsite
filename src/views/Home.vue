<template>
  
  <div class="h-screen">
    <About class="font-main" />
  </div>
  <div class="">
    <Projects />
  </div>
  <div class="">
    <AllProjects />
  </div>
  <div class="">
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Navigation/Footer.vue";
import AllProjects from "@/components/Content/AllProjects.vue";
import About from "@/components/Content/About.vue";
import Projects from "@/components/Content/Projects.vue";
</script>
