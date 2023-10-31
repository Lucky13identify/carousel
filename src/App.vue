<template>
  <HeaderComponent />
  <!-- <AboutMePage /> -->
  <!-- <MainPage /> -->
  <!-- <SkillsPage /> -->
  <ProjectsPage />
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
// import AboutMePage from "./pages/AboutMe/AboutMePage.vue";
// import SkillsPage from "./pages/Skills/SkillsPage.vue";
// import MainPage from "./pages/MainPage/MainPage.vue";
import ProjectsPage from "./pages/Projects/ProjectsPage.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    ProjectsPage,
    // AboutMePage,
    // SkillsPage,
    // MainPage,
  },
};
</script>

<style></style>
