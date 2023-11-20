<template>
  <div class="flex-container">
    <h1 class="header">{{ $t("header_about") }}</h1>
    <div>
      <p class="text">{{ $t("text_about_partOne") }}</p>
      <p class="text">{{ $t("text_about_partTwo") }}</p>
      <p class="text">{{ $t("text_about_partThree") }}</p>
      <p class="text">{{ $t("text_about_partFour") }}</p>
    </div>
  </div>
</template>

<script>
export default { name: "AboutMe" };
</script>

<style lang="scss" scoped>
.header {
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.text {
  width: 540px;
  margin: 0;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: justify;
}
</style>
