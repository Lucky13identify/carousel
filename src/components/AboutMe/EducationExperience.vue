<template>
  <h2 class="header">{{ $t("education_header_about") }}</h2>
  <ul class="flex-container">
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("goit_about") }} (2022 - 2023)</h3>
      <p class="description">{{ $t("goit_description_about") }}</p>
    </li>
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("franko_about") }} (2021 - 2023)</h3>
      <p class="description">{{ $t("franko_description_about") }}</p>
    </li>
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("krok_about") }} (2018 - 2019)</h3>
      <p class="description">
        {{ $t("krok_description_about") }}
      </p>
    </li>
    <li class="flex-element">
      <h3 class="subtitle">{{ $t("ntu_about") }} (2018 - 2021)</h3>
      <p class="description">{{ $t("ntu_description_about") }}</p>
    </li>
    <li class="flex-element">
      <h3 class="subtitle">
        {{ $t("ktek_about") }}
        (2014 - 2018)
      </h3>
      <p class="description">
        {{ $t("ktek_description_about") }}
      </p>
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
.description {
  color: rgb(90, 90, 90);
}

.subtitle {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  width: 450px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.description {
  width: 450px;
}

.flex-element:not(:last-child) {
  border-bottom: 2px solid #7b7b7b;
  padding-bottom: 30px;
}
</style>
