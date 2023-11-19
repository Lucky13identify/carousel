<template>
  <div>
    <h3 class="header">{{ $t("work_skills") }}</h3>
    <ul class="flex-container">
      <li class="item">
        <svg height="30 " width="30">
          <use :href="icon + '#firebase'"></use>
        </svg>
        <p>Firebase</p>
      </li>
      <li class="item">
        <svg height="30 " width="30">
          <use :href="icon + '#styled-components'"></use>
        </svg>
        <p>Styled Component</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#socket-io'"></use>
        </svg>
        <p>Socket.io</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#sass'"></use>
        </svg>
        <p>Sass</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#xing2'"></use>
        </svg>
        <p>Axios</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#cloud-rain'"></use>
        </svg>
        <p>Cloudinary</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#document-file-css'"></use>
        </svg>
        <p>Animate.css</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#earth'"></use>
        </svg>
        <p>i18next</p>
      </li>
    </ul>
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
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
