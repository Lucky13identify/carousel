<!-- App.vue -->

<template>
  <div v-if="$store.state.images.length > 0" class="container">
    <MainCarousel />
    <div v-if="$store.state.selectedImages.length !== 0">
      <SelectedCarousel />
    </div>
    <div v-else class="selected-text">
      <p>There will be a list of your favorite images.</p>
    </div>
  </div>
  <div v-else class="loader"><PulseLoader /></div>
</template>
<!-- sdds -->
<script>
import "animate.css";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import SelectedCarousel from "./components/SelectedCarousel/SelectedCarousel";

export default {
  components: {
    MainCarousel,
    SelectedCarousel,
    PulseLoader,
  },

  mounted() {
    this.$store.dispatch("fetchData");
    window.addEventListener("resize", () => {});
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  margin-top: 300px;
  height: 200px;
}

.selected-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  border: 1px solid grey;
  border-radius: 20px;

  font-weight: 700;

  color: white;
}
</style>
