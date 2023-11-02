<template>
  <li class="list-item"><a class="link">Main</a></li>
  <li class="list-item"><a class="link">About me</a></li>
  <li class="list-item"><a class="link">Skills</a></li>
  <li class="list-item"><a class="link">Portfolio</a></li>
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
