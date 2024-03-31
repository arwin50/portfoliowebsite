<template>
  <div class="h-screen">
    <main class="flex h-full space-x-16">
      <span
        class="verticalUpright ml-24 text-5xl flex justify-center tracking-widest font-bold"
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
              <div class="w-full h-96">
                <img
                  :src="project.image"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h2 class="text-lg font-semibold">{{ project.name }}</h2>
              <p class="text-sm text-gray-600">{{ project.type }}</p>
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
          <v-icon name="io-arrow-back-circle-sharp" scale="2" />
        </button>
        <button @click="next" class="absolute right-10 top-64">
          <v-icon name="io-arrow-forward-circle-sharp" scale="2" />
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
const projects = reactive([
  {
    image: UPokemonImage,
    name: "UPokemon",
    type: "School Project",
    Description:
      "An imitation of the popular RPG game, Pokemon, a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best.",
    TechStack: ["C++", "SFML"],
  },
  {
    image: YelpCampImage,
    name: "Yelp Camp",
    type: "Web Development Course Project",
    Description:
      "YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.",
    TechStack: ["Node.js", "ExpressJS", "EJS", "MongoDB", "Bootstrap"],
  },
  {
    image: AnonymousLettersImage,
    name: "Anonymous Letters",
    type: "Personal Project",
    Description:
      "Anonymous Letters is a platform for sending messages using codenames.",
    TechStack: ["React", "MongoDB", "TailwindCSS", "ExpressJS"],
  },
  {
    image: WiMovieImage,
    name: "WiMovie",
    type: "Personal Project",
    Description:
      "WiMovie is a website for users to rate and save movies to their watchlist.",
    TechStack: ["React", "MongoDB", "TailwindCSS", "ExpressJS"],
  },
  {
    image: StudyfyImage,
    name: "Studyfy",
    type: "Collaboration Project",
    Description:
      "Studyfy is an online platform where students can ask and share questions about a wide range of subjects, fostering a supportive and interactive learning community.",
    TechStack: ["Vue", "MongoDB", "TailwindCSS", "ExpressJS"],
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
