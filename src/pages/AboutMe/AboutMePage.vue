<template>
  <div class="container-style" :style="themeStyles">
    <section class="about-me">
      <div class="container">
        <AboutMe />
        <div class="video-container">
          <video controls width="640" height="360">
            <source
              src="../../assets/video/Dmytro_Smirnov.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="flex-container">
          <div><EducationExperience /></div>
          <div><WorkExperience /></div>
        </div>
      </div>
    </section>
  </div>
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
.flex-container {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
}
.about-me {
  padding-top: 40px;
  padding-bottom: 40px;
}

.container-style {
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(10px);
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
}
</style>
