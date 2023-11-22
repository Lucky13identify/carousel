<template>
  <ul class="flex-container">
    <li>
      <a
        href="https://www.linkedin.com/in/smirnov-dmytro/"
        target="_blank"
        class="contact"
      >
        <svg class="animate__animated" :style="themeStyles">
          <use :href="icon + '#linkedin'"></use></svg
      ></a>
    </li>
    <li>
      <a
        href="https://github.com/Lucky13identify"
        target="_blank"
        class="contact"
      >
        <svg class="animate__animated" :style="themeStyles">
          <use :href="icon + '#github'"></use></svg
      ></a>
    </li>
    <li>
      <a href="https://t.me/D_Smirnov0113" target="_blank" class="contact">
        <svg class="animate__animated" :style="themeStyles">
          <use :href="icon + '#telegram'"></use></svg
      ></a>
    </li>
    <li>
      <a href="mailto:d.smirnov0113@gmail.com" target="_blank" class="contact">
        <svg class="animate__animated" :style="themeStyles">
          <use :href="icon + '#mail'"></use></svg
      ></a>
    </li>
  </ul>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";
import "animate.css";

export default {
  data() {
    return {
      icon,
    };
  },
  computed: {
    themeStyles() {
      return {
        "--fill-color": this.$store.state.isThemeDark ? "#c2893c" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  width: 100px;

  @media screen and (min-width: 768px) {
    margin: 0;
    gap: 10px;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    gap: 20px;
    flex-wrap: nowrap;
    width: 200px;
  }
}
.animate__animated {
  width: 80px;
  height: 80px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1200px) {
    width: 32px;
    height: 32px;
  }
}
.animate__animated {
  fill: white;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: var(--fill-color);
    animation-name: heartBeat;
  }
}
</style>
