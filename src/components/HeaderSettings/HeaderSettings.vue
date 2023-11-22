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
    <div class="flag-container">
      <button
        type="button"
        class="flag"
        :style="themeStyles"
        @click="changeLanguage('en')"
      >
        <span class="fi fi-gb"></span>
      </button>
      <button
        type="button"
        class="flag"
        :style="themeStyles"
        @click="changeLanguage('ua')"
      >
        <span class="fi fi-ua"></span>
      </button>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      icon,
      isThemeDark: JSON.parse(localStorage.getItem("isThemeDark")) || false,
    };
  },
  methods: {
    onChangeTheme() {
      this.isThemeDark = !this.isThemeDark;
      this.$store.commit("changeTheme", this.isThemeDark);
      localStorage.setItem("isThemeDark", JSON.stringify(this.isThemeDark));
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang;
      // запись текущего языка в локальное хранилище
      localStorage.setItem("currentLanguage", lang);
    },

    created() {
      // установка текущего языка из локального хранилища при создании компонента
      const storedLanguage = localStorage.getItem("currentLanguage");
      if (storedLanguage) {
        this.$i18n.locale = storedLanguage;
      }
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
  width: 200px;
  padding: 0;
  gap: 30px;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    width: 120px;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
  }
  /* margin-left: 200px; */
}

.flag {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
}

.flag-container {
  display: flex;
  gap: 1px;
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

  &:hover,
  &:focus {
    background-color: var(--bg-color);
    fill: var(--fill-color);
  }
}
</style>
