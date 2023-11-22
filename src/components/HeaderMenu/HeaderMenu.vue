<template>
  <li class="list-item">
    <RouterLink :style="themeStyles" class="link" to="/">{{
      $t("home_navigation")
    }}</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink :style="themeStyles" class="link" to="/about">{{
      $t("about_navigation")
    }}</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink :style="themeStyles" class="link" to="/skills">{{
      $t("skills_navigation")
    }}</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink :style="themeStyles" class="link" to="/projects">{{
      $t("projects_navigation")
    }}</RouterLink>
  </li>
</template>

<script>
export default {
  computed: {
    themeStyles() {
      return {
        "--color": this.$store.state.isThemeDark ? "#c2893c" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 8px;
  font-size: 30px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.2;
    margin-top: 0;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 0;
  }
}
.link {
  position: relative;
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--color);
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;

    border-radius: 2px;

    background-color: var(--color);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
