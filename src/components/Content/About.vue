<template>
  <particles class="absolute z-[-50] top-0 left-0 right-0 bottom-0" />
  <div
    class="w-full h-full flex flex-col mt-10 sm:flex-row space-y-[-40px] sm:space-y-0 justify-evenly items-center"
    id="about"
  >
    <div
      class="w-72 h-72 xs:w-80 xs:h-80 lg:w-[30rem] lg:h-[30rem] flex rounded-full overflow-hidden items-center shadow-custom"
    >
      <img class="object-cover" alt="prof-pic" src="@/assets/myphoto.jpg" />
    </div>
    <div
      class="w-[85%] flex flex-col sm:block justify-center items-center sm:w-[38%] space-y-4"
    >
      <p
        class="text-center sm:text-start xs:text-lg sm:text-xl md:text-xl lg:text-3xl tracking-wide lg:tracking-widest"
      >
        Hello, I am
        <span class="font-semibold">Arwin Delasan</span>, an aspiring
        <span class="font-semibold">Fullstack Developer</span> and a
        <span class="font-semibold">Cybersecurity Enthusiast</span>.
      </p>
      <div class="flex space-x-3">
        <a href="https://github.com/arwin50"
          ><img
            alt="githublogo"
            src="@/assets/github-mark-white.svg"
            class="w-8 h-8 rounded-full hover:shadow-button"
        /></a>
        <a href="https://www.linkedin.com/in/arwin-delasan-8b4333255/"
          ><img
            alt="linkedinlogo"
            src="@/assets/LinkedIn.png"
            class="w-8 h-8 rounded-sm hover:shadow-button"
        /></a>
      </div>
    </div>
  </div>
</template>
<script setup>
import particles from "@/components/particles.vue";
</script>
