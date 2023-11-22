<template>
  <div class="container-style" :style="themeStyles">
    <section class="about-me">
      <div class="container animate__animated">
        <div class="about-container">
          <AboutMe />
          <div class="video-container">
            <video v-if="isWideScreen" controls width="520" height="320">
              <source
                src="../../assets/video/Dmytro_Smirnov.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video v-else controls width="380" height="340">
              <source
                src="../../assets/video/Dmytro_Smirnov.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="info-container">
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
  data() {
    return { isWideScreen: window.innerWidth > 768 };
  },
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
.info-container {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 200px;
  }
}
.about-me {
  padding-top: 40px;
  padding-bottom: 40px;
}

.animate__animated {
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

.container-style {
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(10px);
}

.about-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;

    justify-content: space-between;
    width: 100%;
  }
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
</style>
