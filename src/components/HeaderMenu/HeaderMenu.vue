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
        "--color": this.$store.state.isThemeDark ? "#2a9c68" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
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
