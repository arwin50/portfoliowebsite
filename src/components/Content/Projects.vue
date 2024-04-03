<template>
  <div class="h-screen" id="projects">
    <main class="flex h-full space-x-16">
      <span
        class="verticalUpright ml-24 text-5xl flex justify-center tracking-widest font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >PROJECTS</span
      >
      <div
        class="overflow-hidden flex flex-col justify-center w-[80%] relative"
      >
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="w-full flex-shrink-0 px-4 relative"
          >
            <div class="p-4 rounded-lg">
              <a :href="project.link">
                <div
                  class="w-full h-96 mb-5 rounded-lg overflow-hidden"
                  @mouseenter="hovered"
                  @mouseleave="hovered"
                >
                  <img
                    :src="project.image"
                    class="w-full h-full object-cover cursor-pointer shadow-button"
                    :class="{
                      'hover:opacity-30 hover:transition-opacity duration-500':
                        isHovered,
                    }"
                  />
                  <div
                    v-if="isHovered"
                    class="absolute pointer-events-none flex items-center gap-2"
                    style="
                      top: 35%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    "
                  >
                    <img
                      src="@/assets/github-mark-white.svg"
                      class="w-16 h-16"
                    />
                    <span class="text-2xl font-link tracking-wide"
                      >Check it out!</span
                    >
                  </div>
                </div>
              </a>

              <h2 class="text-lg font-semibold">{{ project.name }}</h2>
              <p class="text-sm text-[#6c757d]">{{ project.type }}</p>
              <p class="mt-2">{{ project.Description }}</p>
              <div class="mt-2 flex flex-wrap">
                <span
                  v-for="(value, index) in project.TechStack"
                  class="mr-2 mb-2 bg-[#588157] px-2 py-1 rounded"
                  >{{ value }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <button @click="prev" class="absolute left-10 top-64">
          <v-icon name="io-arrow-back-circle-sharp" scale="2" fill="#d6ccc2" />
        </button>
        <button @click="next" class="absolute right-10 top-64">
          <v-icon
            name="io-arrow-forward-circle-sharp"
            scale="2"
            fill="#d6ccc2"
          />
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import UPokemonImage from "@/assets/UPokemon.png";
import StudyfyImage from "@/assets/Studyfy.png";
import WiMovieImage from "@/assets/WiMovie.png";
import YelpCampImage from "@/assets/YelpCamp.png";
import AnonymousLettersImage from "@/assets/AnonymousLetters.png";
const isHovered = ref(false);
const projects = reactive([
  {
    image: UPokemonImage,
    name: "UPokemon",
    type: "School Project",
    Description:
      "An imitation of the popular RPG game, Pokemon, a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best.",
    TechStack: ["C++", "SFML"],
    link: "https://github.com/Loweso/UP-okemon",
  },
  {
    image: YelpCampImage,
    name: "Yelp Camp",
    type: "Web Development Course Project",
    Description:
      "YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.",
    TechStack: ["ExpressJS", "EJS", "MongoDB", "Bootstrap"],
    link: "https://github.com/arwin50/YelpCamp",
  },
  {
    image: AnonymousLettersImage,
    name: "Anonymous Letters",
    type: "Personal Project",
    Description:
      "Anonymous Letters is a platform for sending messages using codenames.",
    TechStack: ["React", "MongoDB", "TailwindCSS", "ExpressJS"],
    link: "https://github.com/arwin50/anonletters",
  },
  {
    image: WiMovieImage,
    name: "WiMovie",
    type: "Personal Project",
    Description:
      "WiMovie is a website for users to rate and save movies to their watchlist.",
    TechStack: ["React", "MongoDB", "TailwindCSS", "ExpressJS"],
    link: "https://github.com/arwin50/WIMovie",
  },
  {
    image: StudyfyImage,
    name: "Studyfy",
    type: "Collaboration Project",
    Description:
      "Studyfy is an online platform where students can ask and share questions about a wide range of subjects, fostering a supportive and interactive learning community.",
    TechStack: ["Vue", "MongoDB", "TailwindCSS", "ExpressJS"],
    link: "https://github.com/arwin50/studyfy",
  },
  /*  {
    name: "Beacon",
    type: "Hackathon Entry App in Collaboration with 4 people",
    Description:
      "Beacon is a career guidance application which utilizes generative artificial intelligence to provide users with personalized visual roadmaps towards their most viable career options based on their provided information",
    TechStack: ["NextJS", "DJango", "Firebase", "TailwindCSS"],
  }, */
]);
let currentIndex = ref(0);
const next = () => {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++;
  } else if (currentIndex.value == projects.length - 1) {
    currentIndex.value = 0;
  }
};
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else if (currentIndex.value == 0) {
    currentIndex.value = projects.length - 1;
  }
};

const hovered = () => {
  isHovered.value = !isHovered.value;
};
</script>

<style scoped>
.verticalUpright {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>

<!-- Projects
    UPokemon
    YelpCamp
    AnonymousLetters
    WiMovie
    Studyfy
-->
