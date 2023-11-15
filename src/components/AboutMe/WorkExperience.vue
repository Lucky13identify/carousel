<template>
  <h2 class="header">{{ $t("work_header_about") }}</h2>
  <ul class="flex-container">
    <li>
      <h3 class="subtitle">{{ $t("crowe_about") }} (2021 - 2022)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">{{ $t("position") }}</p>
          <p class="text-description">{{ $t("crowe_position_about") }}</p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("description") }}</p>
          <p class="text-description">
            {{ $t("crowe_description_about") }}
          </p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("achievements") }}</p>
          <p class="text-description">{{ $t("crowe_achievements_about") }}</p>
        </div>
      </div>
    </li>
    <li>
      <h3 class="subtitle">{{ $t("baker_about") }} (2019 - 2021)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">{{ $t("position") }}</p>
          <p class="text-description">{{ $t("baker_position_about") }}</p>
        </div>
        <div class="container-description">
          <p class="header-description">{{ $t("description") }}</p>
          <p class="text-description">
            {{ $t("baker_description_about") }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
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
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container-description {
  display: flex;
  gap: 7px;
}

.header-description {
  width: 130px;
}

.text-description {
  width: 400px;
  text-align: justify;
}
</style>
