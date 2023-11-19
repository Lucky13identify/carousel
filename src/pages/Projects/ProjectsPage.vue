<template>
  <div class="container-style" :style="themeStyles">
    <div v-if="this.$store.state.projects.length > 0" class="container">
      <ContainerOfProjects />
    </div>
    <div v-else class="flex-container"><PulseLoader /></div>
  </div>
</template>

<script>
import ContainerOfProjects from "../../components/Projects/ContainerOfProjects";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "ProjectsPage",
  components: { ContainerOfProjects, PulseLoader },
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

<style lang="scss" scoped>
.container-style {
  height: 100%;
  /* backdrop-filter: blur(10px); */
}

.flex-container {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 80px;
}
</style>
