<template>
  <div class="container-style" :style="themeStyles">
    <div class="container"><ContainerOfProjects /></div>
  </div>
</template>

<script>
import ContainerOfProjects from "../../components/Projects/ContainerOfProjects";

export default {
  name: "ProjectsPage",
  components: { ContainerOfProjects },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchDataFromServer");
    },
  },
  computed: {
    themeStyles() {
      return {
        backgroundColor: this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 0.8)"
          : "rgba(255, 255, 255)",
        color: this.$store.state.isThemeDark ? "white" : "black",
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
