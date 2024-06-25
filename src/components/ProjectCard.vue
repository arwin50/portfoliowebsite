<template>
  <div class="h-56 w-56 xs:w-64 xs:h-52 md:w-80 md:h-56 p-2 rounded-md">
    <div class="h-32 xs:h-32 md:h-40 rounded-md overflow-hidden">
      <img :src="props.project.image" alt="projectimg" class="h-full w-full" />
    </div>
    <h1 class="xs:text-base md:text-lg font-semibold">
      {{ props.project.projectName }}
    </h1>
    <p class="text-sm text-[#6c757d]">{{ props.project.type }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: Object,
});
</script>
