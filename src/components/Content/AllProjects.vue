<template>
  <div class="w-full" id="projects">
    <main class="h-full">
      <h1
        class="text-center text-3xl mb-5 tracking-widest font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        Other Projects
      </h1>
      <div class="grid grid-cols-3 grid-rows-2 place-items-center gap-y-5">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import ProjectCard from "../ProjectCard.vue";
import UPokemonImage from "@/assets/UPokemon.png";
import StudyfyImage from "@/assets/Studyfy.png";
import WiMovieImage from "@/assets/WiMovie.png";
import YelpCampImage from "@/assets/YelpCamp.png";
import AnonymousLettersImage from "@/assets/AnonymousLetters.png";

const projects = [
  {
    projectName: "Doorm",
    type: "school project",
    image: "./images/doorm.png",
    techstack: [],
  },
  {
    projectName: "Rain De Luca in Action",
    type: "school project",
    image: "./images/rain.png",
    techstack: [],
  },
  {
    projectName: "Anonletters",
    type: "personal project",
    image: AnonymousLettersImage,
    techstack: [],
  },
  {
    projectName: "Beacon",
    type: "collaboration project",
    image: "./images/beacon.png",
    techstack: [],
  },
  {
    projectName: "PersonalWebsite",
    type: "personal project",
    image: "./images/portfolio.png",
    techstack: [],
  },
  {
    projectName: "WiMovie",
    type: "personal project",
    image: WiMovieImage,
    techstack: [],
  },
];
</script>
