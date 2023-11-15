<template>
  <h1 class="header">{{ $t("header_about") }}</h1>
  <div class="flex-container">
    <p>
      {{ $t("text_about") }}
    </p>
  </div>
</template>

<script>
export default { name: "AboutMe" };
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

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: justify;
}
</style>
