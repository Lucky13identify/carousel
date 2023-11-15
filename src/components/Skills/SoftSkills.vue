<template>
  <div>
    <ul class="flex-container">
      <li>
        <p>{{ $t("strong_soft") }}</p>
      </li>
      <li>
        <p>{{ $t("goal_soft") }}</p>
      </li>
      <li>
        <p>{{ $t("team_soft") }}</p>
      </li>
      <li>
        <p>{{ $t("deadline_soft") }}</p>
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
