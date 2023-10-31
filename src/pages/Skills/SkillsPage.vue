<template>
  <section class="skills">
    <div class="container">
      <h2>Tech skills</h2>
      <div class="flex-container">
        <BuildersSkills />
        <DatabasesSkills />
        <FeaturesSkills />
        <LanguagesSkills />
        <LibrariesForProjectsSkills />
        <LibrariesSkills />
        <TechSkills />
      </div>
      <h2>Soft skills</h2>
      <SoftSkills />
    </div>
  </section>
</template>

<script>
import BuildersSkills from "../../components/Skills/BuildersSkills";
import DatabasesSkills from "../../components/Skills/DatabasesSkills.vue";
import FeaturesSkills from "../../components/Skills/FeaturesSkills.vue";
import LanguagesSkills from "../../components/Skills/LanguagesSkills.vue";
import LibrariesForProjectsSkills from "../../components/Skills/LibrariesForProjectsSkills.vue";
import LibrariesSkills from "../../components/Skills/LibrariesSkills.vue";
import SoftSkills from "../../components/Skills/SoftSkills.vue";
import TechSkills from "../../components/Skills/TechSkills.vue";

export default {
  name: "SkillsPage",
  components: {
    BuildersSkills,
    DatabasesSkills,
    FeaturesSkills,
    LanguagesSkills,
    LibrariesForProjectsSkills,
    LibrariesSkills,
    SoftSkills,
    TechSkills,
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.skills {
  background-color: red;
  padding-top: 40px;
}
</style>
