import "./assets/main.css";

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "oh-vue-icons/icons";

addIcons(IoArrowBackCircleSharp, IoArrowForwardCircleSharp);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);
app.use(Particles, {
  init: async (engine) => {
    /* await loadFull(engine);*/
    await loadSlim(engine);
  },
});

app.mount("#app");
