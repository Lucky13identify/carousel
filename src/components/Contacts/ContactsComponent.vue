<template>
  <ul class="flex-container">
    <li>
      <a href="https://www.linkedin.com/in/smirnov-dmytro/" class="contact">
        <svg
          class="animate__animated"
          height="32 "
          width="32"
          :style="themeStyles"
        >
          <use :href="icon + '#linkedin'"></use></svg
      ></a>
    </li>
    <li>
      <a href="https://github.com/Lucky13identify" class="contact">
        <svg
          class="animate__animated"
          height="32 "
          width="32"
          :style="themeStyles"
        >
          <use :href="icon + '#github'"></use></svg
      ></a>
    </li>
    <li>
      <a href="https://t.me/D_Smirnov0113" class="contact">
        <svg
          class="animate__animated"
          height="32 "
          width="32"
          :style="themeStyles"
        >
          <use :href="icon + '#telegram'"></use></svg
      ></a>
    </li>
    <li>
      <a href="mailto:d.smirnov0113@gmail.com" class="contact">
        <svg
          class="animate__animated"
          height="32 "
          width="32"
          :style="themeStyles"
        >
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
        "--fill-color": this.$store.state.isThemeDark ? "#2a9c68" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  gap: 20px;
}

.animate__animated {
  fill: white;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: var(--fill-color);
    animation-name: heartBeat;
  }
}
</style>
