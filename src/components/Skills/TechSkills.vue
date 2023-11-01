<template>
  <div>
    <h3 class="header">The main programming languages</h3>
    <ul class="flex-container">
      <li><p>HTML5</p></li>
      <li><p>CSS3</p></li>
      <li><p>JavaScript</p></li>
      <li><p>TypeScript</p></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
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
  gap: 6px;
}
</style>
