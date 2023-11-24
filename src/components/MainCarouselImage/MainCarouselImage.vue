<template>
  <li class="image-list">
    <div class="image-container">
      <img
        class="image-element"
        :class="{ 'dark-image': isLastImage }"
        width="300"
        :src="image.download_url"
        :alt="image.author"
      />
      <button
        v-if="$store.state.images.length > 0"
        type="button"
        :class="{ selected: isSelected }"
        class="image-button animate__animated"
        @click="addToFavorites"
      >
        <svg height="20 " width="20">
          <use :href="icon + '#heart'"></use>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";

export default {
  data() {
    return {
      icon,
    };
  },

  computed: {
    isSelected() {
      return this.$store.state.selectedImages.some(
        (selectedImage) => selectedImage.id === this.image.id
      );
    },
  },

  methods: {
    addToFavorites() {
      const isAlreadySelected = this.$store.state.selectedImages.some(
        (selectedImage) => selectedImage.id === this.image.id
      );
      console.log(isAlreadySelected);
      if (isAlreadySelected) {
        // Image is already in selectedImages, remove it
        this.$store.commit("removeFromSelectedImages", this.image);
      } else {
        // Image is not in selectedImages, add it
        this.$store.commit("addToSelectedImages", this.image);
      }
    },
  },

  props: ["image", "isLastImage"],
};
</script>

<style lang="scss" scoped>
.image-element {
  border-radius: 20px;
}
.dark-image {
  filter: grayscale(100%) blur(1px);
}

.image-element:not(.dark-image) {
  transform: scale(1.2);
}

.image-container {
  position: relative;
  background-color: grey;
  border-radius: 20px;
  width: 100%;
  height: 200px;
}

.image-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;
  left: 2%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  fill: white;
  cursor: pointer;
  background-color: transparent;

  &.selected {
    fill: red;
  }

  &:hover,
  &:focus {
    fill: red;
    animation-name: heartBeat;
  }
}
</style>
