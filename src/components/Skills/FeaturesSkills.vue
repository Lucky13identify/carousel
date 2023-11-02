<template>
  <div>
    <h3 class="header">Additional features</h3>
    <ul class="flex-container">
      <li class="item">
        <svg height="30 " width="30">
          <use :href="icon + '#git'"></use>
        </svg>
        <p>Git</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#ruler'"></use>
        </svg>
        <p>Responsive/Adaptive design</p>
      </li>
      <li class="item">
        <svg class="icon" height="30 " width="30">
          <use :href="icon + '#data'"></use>
        </svg>
        <p>REST API</p>
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
