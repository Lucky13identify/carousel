<template>
  <h2 class="header">{{ $t("work_header_about") }}</h2>
  <ul class="flex-container">
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("crowe_about") }} (2021 - 2022)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">{{ $t("position") }}:</p>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_position_about") }}
          </p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("description") }}:</p>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_description_about") }}
          </p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("achievements") }}:</p>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_achievements_about") }}
          </p>
        </div>
      </div>
    </li>
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("baker_about") }} (2019 - 2021)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">{{ $t("position") }}:</p>
          <p class="text-description" :style="themeStyles">
            {{ $t("baker_position_about") }}
          </p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("description") }}:</p>
          <p class="text-description" :style="themeStyles">
            {{ $t("baker_description_about") }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    themeStyles() {
      return {
        "--color": this.$store.state.isThemeDark
          ? "rgb(150, 150, 150)"
          : "rgb(110, 110, 110)",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.subtitle {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
}

.header-description {
  text-align: end;
  width: 150px;
}

.text-description {
  color: var(--color);
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.description {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
}

.container-description {
  display: flex;

  gap: 10px;
}

.text-description {
  width: 100%;
  text-align: justify;
}
.flex-element {
  font-size: 16px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
}
.flex-element:not(:last-child) {
  border-bottom: 2px solid #7b7b7b;
  padding-bottom: 30px;
}
</style>
