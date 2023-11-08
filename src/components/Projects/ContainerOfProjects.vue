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
  flex-wrap: wrap;
  gap: 30px;
}
</style>
