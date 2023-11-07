<template>
  <div class="container">
    <button
      type="button"
      class="light"
      :style="themeStyles"
      @click="onChangeTheme"
    >
      <svg class="icon" height="25 " width="25">
        <use :href="icon + '#brightness-contrast'"></use>
      </svg>
    </button>
    <div>
      <button
        type="button"
        class="light"
        :style="themeStyles"
        @click="onChangeLanguage"
      >
        <svg class="icon" height="25 " width="25">
          <use :href="icon + '#language'"></use>
        </svg>
      </button>
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
    onChangeTheme() {
      this.isThemeDark = !this.isThemeDark;
      this.$store.commit("changeTheme", this.isThemeDark);
    },

    onChangeLanguage() {
      this.isLanguageEng = !this.isLanguageEng;
      this.$store.commit("changeLanguage", this.isLanguageEng);
    },
  },
  computed: {
    themeStyles() {
      return {
        "--bg-color": this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "white",
        "--fill-color": this.$store.state.isThemeDark ? "gold" : "darkblue",
        "--color": this.$store.state.isThemeDark ? "gold" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  padding: 0;
  gap: 30px;
  /* margin-left: 200px; */
}

.light {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  fill: var(--color);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--bg-color);
    fill: var(--fill-color);
  }
}
</style>
