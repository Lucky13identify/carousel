<template>
  <div class="overlay">
    <div class="modal">
      <div class="button-container">
        <button class="close" type="button">
          <svg class="icon" height="20 " width="20">
            <use :href="icon + '#cross'"></use>
          </svg>
        </button>
      </div>
      <slot></slot>>
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
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  z-index: 100;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 469px;
  min-height: 500px;
  border-radius: 15px;
  background: #fff;
  padding: 15px 37px 40px 35px;
}

.close {
  display: flex;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: blue;
  }
}

.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
