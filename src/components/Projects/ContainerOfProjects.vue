<template>
  <section class="projects">
    <div class="container">
      <ul class="flex-container">
        <ListOfProjects
          v-for="project in this.$store.state.projects"
          :key="project.id"
          :project="project"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import ListOfProjects from "./ListOfProjects";

export default {
  name: "ContainerOfProjects",
  components: { ListOfProjects },
};
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 40px;
  padding-bottom: 40px;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
}
</style>
