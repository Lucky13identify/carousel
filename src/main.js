import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SkillsPage from "./pages/Skills/SkillsPage.vue";
import ProjectsPage from "./pages/Projects/ProjectsPage.vue";
import MainPage from "./pages/MainPage/MainPage.vue";
import AboutMePage from "./pages/AboutMe/AboutMePage.vue";
import store from "./vuex/store";
import { createI18n } from "vue-i18n";

// import en from "./languages/en.json";
// import ua from "./languages/ua.json";
// console.log(store.state.isThemeDark);

const i18n = createI18n({
  locale: localStorage.getItem("currentLanguage"),
  messages: {
    en: require("./languages/en.json"),
    ua: require("./languages/ua.json"),
  },
});

localStorage.setItem("isThemeDark", JSON.stringify(store.state.isThemeDark));
localStorage.setItem("currentLanguage", i18n.global.locale);

const router = createRouter({
  history: createWebHashHistory(),
  base: "/MyCV/",
  routes: [
    { name: "Home", path: "/", component: MainPage },
    { name: "About", path: "/about", component: AboutMePage },
    { name: "Skills", path: "/skills", component: SkillsPage },
    { name: "Projects", path: "/projects", component: ProjectsPage },
  ],
});

createApp(App).use(router).use(store).use(i18n).mount("#app");
