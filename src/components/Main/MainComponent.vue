<template>
  <section class="hero">
    <div class="container hero-container">
      <img
        class="photo"
        src="../../../src/assets/my-photo.jpg"
        width="380"
        alt="Dmytro Smirnov photo"
      />
      <div>
        <p>Dmytro Smirnov</p>
        <p>Fullstack developer</p>
        <p>
          Welcome to my resume website! Here, you can learn more about me and
          get a detailed overview of my skills.
        </p>
        <a href="">Learn more</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  gap: 20px;
}
.hero {
  background-color: red;
  padding-top: 40px;
}

.photo {
  border-radius: 50%;
}
</style>
