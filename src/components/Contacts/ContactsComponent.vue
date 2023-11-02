<template>
  <ul class="flex-container">
    <li>
      <a href="" class="contact">
        <svg class="icon" height="32 " width="32">
          <use :href="icon + '#linkedin'"></use></svg
      ></a>
    </li>
    <li>
      <a href="" class="contact">
        <svg class="icon" height="32 " width="32">
          <use :href="icon + '#github'"></use></svg
      ></a>
    </li>
    <li>
      <a href="" class="contact">
        <svg class="icon" height="32 " width="32">
          <use :href="icon + '#telegram'"></use></svg
      ></a>
    </li>
    <li>
      <a href="" class="contact">
        <svg class="icon" height="32 " width="32">
          <use :href="icon + '#mail'"></use></svg
      ></a>
    </li>
  </ul>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";

export default {
  data() {
    return {
      icon,
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  gap: 20px;
}

.icon {
  fill: white;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: blue;
  }
}
</style>
