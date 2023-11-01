<template>
  <section class="skills">
    <div class="container">
      <h2 class="skills-header">Tech skills</h2>
      <div class="flex-container">
        <BuildersSkills />
        <DatabasesSkills />
        <FeaturesSkills />

        <LibrariesForProjectsSkills />
        <LibrariesSkills />
        <TechSkills />
      </div>
      <div class="soft-container">
        <div>
          <h2 class="skills-header">Soft skills</h2>
          <SoftSkills />
        </div>
        <div>
          <h2 class="skills-header">Languages</h2>
          <LanguagesSkills />
        </div>
      </div>
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
  padding-top: 40px;
  padding-bottom: 40px;
}

.skills-header {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.soft-container {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
</style>
