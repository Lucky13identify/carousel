<template>
  <div class="button-container">
    <button
      type="button"
      class="button-slider"
      @click="prevImage"
      :disabled="isFirstImage"
    >
      <svg height="30 " width="30">
        <use :href="icon + '#circle-left'"></use>
      </svg>
    </button>
    <button
      type="button"
      class="button-slider"
      @click="nextImage"
      :disabled="isLastImage"
    >
      <svg height="30 " width="30">
        <use :href="icon + '#circle-right'"></use>
      </svg>
    </button>
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
  props: {
    prevImage: {
      type: Function,
      required: true,
    },
    nextImage: {
      type: Function,
      required: true,
    },
    isFirstImage: {
      type: Boolean,
      required: true,
    },
    isLastImage: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 5px;
  margin-bottom: 70px;
}

.button-slider {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;

  background-color: transparent;
  cursor: pointer;
  fill: white;

  &:disabled {
    cursor: not-allowed;
    fill: grey;
    &:hover {
      fill: grey;
    }
    &:active {
      transform: scale(1);
    }
  }

  &:hover {
    fill: #8a2be2;
  }

  &:active {
    transform: scale(0.8);
  }
}
</style>
