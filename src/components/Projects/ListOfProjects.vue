<template>
  <li class="project" :style="themeStyles">
    <a class="project-link" :href="project.page_link" target="_blank">
      <div class="img-container">
        <img
          width="350"
          height="210"
          class="project-img"
          :src="project.img"
          alt=""
        /></div
    ></a>
    <div class="info-container">
      <h2 class="project-name">{{ getProjectName(project, $i18n) }}</h2>
      <div class="flex-container">
        <button class="project-button" type="button" @click="openModal">
          {{ $t("button_main") }}
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import ModalWindow from "../Modal/ModalWindow.vue";
import { getProjectName } from "../../utils/translater";

export default {
  data() {
    return {
      ModalWindow,
      getProjectName,
    };
  },

  methods: {
    openModal() {
      this.$store.commit("openModal", true);
      this.$store.dispatch("fetchProjectFromServer", this.project.id);
    },
  },
  props: ["project"],
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "none"
          : "#E0E0E0",
        "--border-color": this.$store.state.isThemeDark
          ? "1px solid grey"
          : "none",
        "--shadow": this.$store.state.isThemeDark
          ? "0 20px 16px -16px rgba(194, 137, 60, 0.8)"
          : "0 20px 16px -16px rgba(0, 0, 0, 0.6)",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  backdrop-filter: blur(10px);
  width: 350px;
  height: 280px;
  border: var(--border-color);
  background-color: var(--background-color);
  border-radius: 15px;
  padding: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: var(--shadow);
  }
}

.project-img {
  border-radius: 10px;
  width: 800px;
}

.info-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
  gap: 10px;
}

.img-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-button {
  color: white;
  width: 110px;
  height: 30px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #c2893c;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;

  &:hover,
  &:focus {
    background: #854f04;
  }
}

.flex-container {
  display: flex;
  justify-content: flex-end;
}
</style>
