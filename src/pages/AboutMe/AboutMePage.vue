<template>
  <section class="about-me">
    <div class="container">
      <AboutMe />
      <div class="flex-container">
        <div><EducationExperience /></div>
        <div><WorkExperience /></div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMe from "../../components/AboutMe/AboutMe.vue";
import EducationExperience from "../../components/AboutMe/EducationExperience.vue";
import WorkExperience from "../../components/AboutMe/WorkExperience.vue";

export default {
  name: "AboutMePage",
  components: {
    AboutMe,
    EducationExperience,
    WorkExperience,
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
}
.about-me {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
