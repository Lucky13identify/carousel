<template>
  <section class="projects">
    <div class="container">
      <ul class="flex-container">
        <ListOfProjects />
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
  background-color: red;
}

.flex-container {
  display: flex;
  gap: 30px;
}
</style>
