<template>
  <div class="w-80 h-56 p-2 rounded-md">
    <div class="h-40 rounded-md overflow-hidden">
      <img
        :src="props.project.image"
        alt="project-image"
        class="h-full w-full"
      />
    </div>
    <h1 class="text-lg font-semibold">{{ props.project.projectName }}</h1>
    <p class="text-sm text-[#6c757d]">{{ props.project.type }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: Object,
});
</script>
