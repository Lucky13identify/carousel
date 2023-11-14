import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import SkillsPage from "./pages/Skills/SkillsPage.vue";
import ProjectsPage from "./pages/Projects/ProjectsPage.vue";
import MainPage from "./pages/MainPage/MainPage.vue";
import AboutMePage from "./pages/AboutMe/AboutMePage.vue";
import store from "./vuex/store";
import { createI18n } from "vue-i18n";

// import en from "./languages/en.json";
// import ua from "./languages/ua.json";

const i18n = createI18n({
  locale: "ua",
  messages: {
    en: require("./languages/en.json"),
    ua: require("./languages/ua.json"),
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: MainPage },
    { name: "About", path: "/about", component: AboutMePage },
    { name: "Skills", path: "/skills", component: SkillsPage },
    { name: "Projects", path: "/projects", component: ProjectsPage },
  ],
});

createApp(App).use(router).use(store).use(i18n).mount("#app");
