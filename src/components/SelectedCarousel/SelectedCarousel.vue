<template>
  <ul class="image-container">
    <transition-group name="fade">
      <SelectedCarouselImage
        v-for="(image, index) in visibleSelectedImages"
        :key="image.id"
        :image="image"
        :is-last-image="index !== visibleSelectedImages.length - 1"
        class="animate__animated animate__slideInDown"
    /></transition-group>
  </ul>

  <ButtonsSlider
    :prevImage="prevSelectedImage"
    :nextImage="nextSelectedImage"
    :isFirstImage="isFirstSelectedImage"
    :isLastImage="isLastSelectedImage"
  />
</template>

<script>
import SelectedCarouselImage from "../SelectedCarouselImage/SelectedCarouselImage";
import ButtonsSlider from "../ButtonsSlider/ButtonsSlider.vue";
import { calculateImagesPerPage } from "../../utils/calculateImagesPerPage";

export default {
  components: { SelectedCarouselImage, ButtonsSlider },

  data() {
    return {
      selectedCarousel: {
        currentImageIndex: 0,
        imagesPerPage: this.calculateImagesPerPage(),
      },
    };
  },

  computed: {
    visibleSelectedImages() {
      const start = this.selectedCarousel.currentImageIndex;
      const end = start + this.selectedCarousel.imagesPerPage;

      return this.$store.state.selectedImages.slice(start, end);
    },

    isFirstSelectedImage() {
      return this.selectedCarousel.currentImageIndex === 0;
    },

    isLastSelectedImage() {
      const lastIndex = this.$store.state.selectedImages.length - 1;
      const lastVisibleIndex =
        this.selectedCarousel.currentImageIndex +
        this.selectedCarousel.imagesPerPage -
        1;

      return lastVisibleIndex >= lastIndex;
    },
  },

  methods: {
    calculateImagesPerPage,

    updateSelectedImagesPerPage() {
      this.selectedCarousel.imagesPerPage = this.calculateImagesPerPage();
    },

    prevSelectedImage() {
      this.selectedCarousel.currentImageIndex =
        (this.selectedCarousel.currentImageIndex -
          1 +
          this.$store.state.selectedImages.length) %
        this.$store.state.selectedImages.length;
    },
    nextSelectedImage() {
      this.selectedCarousel.currentImageIndex =
        (this.selectedCarousel.currentImageIndex + 1) %
        this.$store.state.selectedImages.length;
    },
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.updateSelectedImagesPerPage();
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", () => {
      this.updateSelectedImagesPerPage();
    });
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  height: 200px;
}
</style>
