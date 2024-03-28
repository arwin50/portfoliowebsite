import "./assets/main.css";

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
app.use(Particles, {
  init: async (engine) => {
    /* await loadFull(engine);*/
    await loadSlim(engine);
  },
});
