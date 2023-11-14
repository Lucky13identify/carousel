<template>
  <div class="overlay" @click="closeModalOverlay" :style="themeStyles">
    <div class="modal">
      <div class="button-container">
        <button class="close" type="button" @click="closeModalButton">
          <svg class="icon" height="20 " width="20">
            <use :href="icon + '#cross'"></use>
          </svg>
        </button>
      </div>
      <div class="img-container">
        <img class="image" :src="$store.state.oneProject.img" />
      </div>
      <div class="name-container">
        <h2>{{ $store.state.oneProject.name }}</h2>
        <p class="tech-skill">{{ $store.state.oneProject.type }} project</p>
      </div>
      <p class="project-notes">
        <span class="fat-header">Notes: </span
        >{{ $store.state.oneProject.notes }}
      </p>
      <h3>Description:</h3>
      <p class="project-description">
        {{ $store.state.oneProject.description }}
      </p>
      <h3>Tech stack of the project:</h3>
      <ul class="tech-container">
        <li
          class="tech-skill"
          v-for="tech in this.$store.state.oneProject.tech_stack"
          :key="tech.id"
        >
          {{ tech }}
        </li>
      </ul>
      <div class="link-container">
        <a class="link-button" :href="$store.state.oneProject.repo_link"
          >Frontend repository</a
        >
        <a class="link-button" :href="$store.state.oneProject.backend_link"
          >Backend repository</a
        >
        <a class="link-button" :href="$store.state.oneProject.page_link"
          >Live page</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";

export default {
  data() {
    return {
      icon,
    };
  },
  methods: {
    closeModalOverlay(e) {
      if (e.target.className === "overlay") {
        this.$store.commit("openModal", false);
      }
    },
    closeModalButton() {
      this.$store.commit("openModal", false);
    },

    onEscCloseModal(event) {
      if (event.key === "Escape") {
        this.closeModalButton();
      }
    },
  },
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 1)"
          : "#f5f5f5",
        "--color": this.$store.state.isThemeDark ? "white" : "black",
        "--color-tech": this.$store.state.isThemeDark ? "white" : "#303030",
        "--icon": this.$store.state.isThemeDark ? "white" : "black",
        "--overlay": this.$store.state.isThemeDark
          ? "rgba(42, 156, 104, 0.2)"
          : "rgba(18, 20, 23, 0.5)",
      };
    },
  },
  created() {
    window.addEventListener("keydown", this.onEscCloseModal);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onEscCloseModal);
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--overlay);
  backdrop-filter: blur(4px);
  z-index: 100;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  min-height: 600px;
  border-radius: 15px;
  background: var(--background-color);
  padding: 20px;
  color: var(--color);
}

.icon {
  fill: var(--icon);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: #2a9c68;
  }
}

.image {
  border-radius: 20px;
}

.close {
  display: flex;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.name-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.fat-header {
  font-weight: bold;
}
.project-description {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: justify;
}

.tech-container {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
}

.tech-skill {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 156, 104, 0.5);
  color: var(--color-tech);
  padding: 8px;
  border-radius: 20px;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-button {
  text-align: center;
  color: white;
  width: 90px;
  height: 26px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #2a9c68;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;

  &:hover {
    background: #236547;
  }
}

.project-notes {
  margin-bottom: 20px;
}
.link-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
