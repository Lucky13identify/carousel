<template>
  <div class="overlay" :style="themeStyles" @click="closeModalOverlay">
    <div class="modal">
      <div class="button-container">
        <button class="close" type="button" @click="closeModalButton">
          <svg class="icon" height="20 " width="20">
            <use :href="icon + '#cross'"></use>
          </svg>
        </button>
      </div>
      <ul class="list">
        <HeaderMenu />
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderMenu from ".././HeaderMenu/HeaderMenu";
import icon from "../../assets/icons/symbol-defs.svg";
export default {
  data() {
    return {
      icon,
    };
  },
  components: { HeaderMenu },
  methods: {
    closeModalOverlay(e) {
      if (e.target.className === "overlay animate__animated") {
        this.$store.commit("openModalMenu", false);
      }
    },
    closeModalButton() {
      this.$store.commit("openModalMenu", false);
    },
  },
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 1)"
          : "#c2893c",
      };
    },
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
  position: relative;
  top: 52%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background: var(--background-color);
  padding: 20px;
  color: white;
  overflow-y: auto;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.close {
  display: flex;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.icon {
  fill: var(--icon);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: white;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1200px) {
      fill: #2a9c68;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: auto;
  width: 200px;
}
</style>
