<template>
  <li class="image-list">
    <div class="image-container animate__animated animate__slideInRight">
      <img
        class="image-element"
        :class="{ 'dark-image': isLastImage }"
        width="300"
        :src="image.download_url"
        :alt="image.author"
        loading="lazy"
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

  props: {
    image: {
      type: Object,
      required: true,
    },
    isLastImage: {
      type: Boolean,
      required: true,
    },
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

      if (isAlreadySelected) {
        this.$store.commit("removeFromSelectedImages", this.image);
      } else {
        this.$store.commit("addToSelectedImages", this.image);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-element {
  border-radius: 20px;
}

.image-element:not(.dark-image) {
  transform: scale(1.2);
}

.dark-image {
  filter: grayscale(100%) blur(1px);
}

.image-container {
  position: relative;

  width: 100%;
  height: 200px;

  border-radius: 20px;

  background-color: grey;
}

.image-button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 2%;
  left: 2%;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: none;

  fill: white;
  background-color: transparent;
  cursor: pointer;

  &.selected {
    fill: red;
  }

  &:hover {
    fill: red;
    animation-name: heartBeat;
  }
}
</style>
