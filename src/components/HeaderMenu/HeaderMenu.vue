<template>
  <li class="list-item">
    <RouterLink class="link" to="/">Main</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink class="link" to="/about">About me</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink class="link" to="/skills">Skills</RouterLink>
  </li>
  <li class="list-item">
    <RouterLink class="link" to="/projects">Projects</RouterLink>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  width: 100%;
  cursor: pointer;
  padding: 3px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: red;
  }
}
</style>
