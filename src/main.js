import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import SkillsPage from "./pages/Skills/SkillsPage.vue";
import ProjectsPage from "./pages/Projects/ProjectsPage.vue";
import MainPage from "./pages/MainPage/MainPage.vue";
import AboutMePage from "./pages/AboutMe/AboutMePage.vue";
import store from "./vuex/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: MainPage },
    { name: "About", path: "/about", component: AboutMePage },
    { name: "Skills", path: "/skills", component: SkillsPage },
    { name: "Projects", path: "/projects", component: ProjectsPage },
  ],
});

createApp(App).use(router).use(store).mount("#app");
