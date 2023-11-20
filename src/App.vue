<template>
  <HeaderComponent />
  <RouterView />
  <!-- <AboutMePage /> -->
  <!-- <MainPage /> -->
  <!-- <SkillsPage /> -->
  <teleport to="#modal">
    <transition name="fade">
      <ModalWindow v-if="$store.state.isModalOpen"
    /></transition>
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
