<template>
  <div class="container">
    <button type="button" class="light" @click="onChangeTheme">
      <svg class="icon" height="25 " width="25">
        <use :href="icon + '#brightness-contrast'"></use>
      </svg>
    </button>
    <div>
      <button type="button" @click="onChangeLanguage">
        <svg class="icon" height="15 " width="15">
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
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  padding: 0;
  gap: 60px;
  /* margin-left: 200px; */
}

.light {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
</style>
