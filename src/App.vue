<template>
  <HeaderComponent />
  <RouterView />
  <!-- <AboutMePage /> -->
  <!-- <MainPage /> -->
  <!-- <SkillsPage /> -->
  <teleport to="#modal">
    <ModalWindow v-if="$store.state.isModalOpen" />
  </teleport>
  <!-- <ProjectsPage /> -->
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
// import AboutMePage from "./pages/AboutMe/AboutMePage.vue";
// import SkillsPage from "./pages/Skills/SkillsPage.vue";
// import MainPage from "./pages/MainPage/MainPage.vue";
// import ProjectsPage from "./pages/Projects/ProjectsPage.vue";
import ModalWindow from "./components/Modal/ModalWindow";

export default {
  name: "App",
  components: {
    HeaderComponent,
    // ProjectsPage,
    // AboutMePage,
    // SkillsPage,
    // MainPage,
    ModalWindow,
  },
};
</script>

<style></style>
