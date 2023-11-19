<template>
  <div class="flex-container">
    <h1 class="header">{{ $t("header_about") }}</h1>
    <p class="text">{{ $t("text_about") }}</p>
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
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: justify;
}
</style>
