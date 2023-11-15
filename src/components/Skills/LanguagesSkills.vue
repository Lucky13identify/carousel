<template>
  <div>
    <ul class="flex-container">
      <li>
        <p>{{ $t("eng_language") }}</p>
      </li>
      <li>
        <p>{{ $t("ua_language") }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
