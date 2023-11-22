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
  <teleport to="#modal">
    <transition name="fade-left" class="animate__animated">
      <ModalMenu v-if="$store.state.isModalPhoneOpen"
    /></transition>
  </teleport>
  <teleport to="#modal">
    <transition name="fade-right" class="animate__animated">
      <ModalContact v-if="$store.state.isModalPhoneContactsOpen"
    /></transition>
  </teleport>
  <!-- <ProjectsPage /> -->
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import ModalContact from "./components/ModalContacts/ModalContact";
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
    ModalMenu,
    ModalContact,
  },
};
</script>

<style lang="scss" scoped>
.fade-right-enter-active {
  animation-name: fadeInRight;
}
.fade-right-leave-active {
  animation-name: fadeOutRight;
}

.fade-left-enter-active {
  animation-name: fadeInLeft;
}
.fade-left-leave-active {
  animation-name: fadeOutLeft;
}
</style>
