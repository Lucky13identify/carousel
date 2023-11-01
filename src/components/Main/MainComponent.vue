<template>
  <section class="hero">
    <div class="container hero-container">
      <img
        class="photo"
        src="../../../src/assets/my-photo.jpg"
        width="380"
        alt="Dmytro Smirnov photo"
      />
      <div class="hero-info">
        <p class="hero-name">Dmytro Smirnov</p>
        <p class="hero-work">Fullstack developer</p>
        <p class="hero-description">
          Welcome to my resume website! Here, you can learn more about me and
          get a detailed overview of my skills.
        </p>
        <a class="hero-link" href="">Learn more</a>
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
  padding-top: 80px;
}

.photo {
  border-radius: 50%;
}

.hero-name {
  font-size: 70px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0px;
  margin: 0px;
}

.hero-work {
  font-size: 40px;
  font-weight: 500;
  line-height: 130px;
  letter-spacing: 0px;
  margin: 0px;
}

.hero-info {
  margin-top: 60px;
  margin-left: 60px;
}

.hero-description {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  margin: 0px;
}

.hero-link {
  cursor: pointer;
  color: rgb(0, 255, 145);
  padding: 3px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: red;
  }
}
</style>
