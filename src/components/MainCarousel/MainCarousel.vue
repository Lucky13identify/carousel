<template>
  <ul class="image-container" v-if="$store.state.images.length > 0">
    <transition-group name="fade">
      <MainCarouselImage
        v-for="(image, index) in visibleMainImages"
        :key="image.id"
        :image="image"
        :is-last-image="index !== visibleMainImages.length - 1"
        class="animate__animated animate__slideInDown"
      />
    </transition-group>
  </ul>

  <ButtonsSlider
    v-if="$store.state.images.length > 0"
    :prevImage="prevMainImage"
    :nextImage="nextMainImage"
    :isFirstImage="isFirstImage"
    :isLastImage="isLastImage"
  />
</template>

<script>
import MainCarouselImage from "../MainCarouselImage/MainCarouselImage";
import ButtonsSlider from "../ButtonsSlider/ButtonsSlider.vue";
import { calculateImagesPerPage } from "../../utils/calculateImagesPerPage";

export default {
  components: { MainCarouselImage, ButtonsSlider },

  data() {
    return {
      mainCarousel: {
        currentImageIndex: 0,
        imagesPerPage: this.calculateImagesPerPage(),
      },
    };
  },

  methods: {
    calculateImagesPerPage,

    updateMainImagesPerPage() {
      this.mainCarousel.imagesPerPage = this.calculateImagesPerPage();
    },

    prevMainImage() {
      if (!this.isFirstImage) {
        this.mainCarousel.currentImageIndex =
          (this.mainCarousel.currentImageIndex -
            1 +
            this.$store.state.images.length) %
          this.$store.state.images.length;
      }
    },
    nextMainImage() {
      this.mainCarousel.currentImageIndex =
        (this.mainCarousel.currentImageIndex + 1) %
        this.$store.state.images.length;
    },

    mounted() {
      window.addEventListener("resize", () => {
        this.updateMainImagesPerPage();
      });
    },

    beforeUnmount() {
      window.removeEventListener("resize", () => {
        this.updateMainImagesPerPage();
      });
    },
  },

  computed: {
    visibleMainImages() {
      const startIndex = this.mainCarousel.currentImageIndex;
      const endIndex = startIndex + this.mainCarousel.imagesPerPage;

      return this.$store.state.images.slice(startIndex, endIndex);
    },

    isFirstImage() {
      return this.mainCarousel.currentImageIndex === 0;
    },

    isLastImage() {
      const lastIndex = this.$store.state.images.length - 1;
      const lastVisibleIndex =
        this.mainCarousel.currentImageIndex +
        this.mainCarousel.imagesPerPage -
        1;

      return lastVisibleIndex >= lastIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 200px;
}
</style>
