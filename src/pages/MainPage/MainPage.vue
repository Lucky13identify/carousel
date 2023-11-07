<template>
  <div class="container-style" :style="themeStyles"><MainComponent /></div>
</template>

<script>
import MainComponent from "../../components/Main/MainComponent";

export default {
  name: "MainPage",
  components: {
    MainComponent,
  },
  computed: {
    themeStyles() {
      return {
        backgroundColor: this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 0.8)"
          : "rgba(255, 255, 255)",
        backdropFilter: "blur(10px)",
        color: this.$store.state.isThemeDark ? "white" : "black",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container-style {
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(10px);
  padding-bottom: 250px;
}
</style>
