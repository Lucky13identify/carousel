<template>
  <section class="hero">
    <div class="container hero-container animate__animated">
      <div class="img-container">
        <img
          class="photo"
          src="../../../src/assets/imges/my-photo.jpg"
          width="380"
          alt="Dmytro Smirnov photo"
        />
      </div>
      <div class="hero-info">
        <p class="hero-name">
          {{ $t("name_main") }}
        </p>
        <p class="hero-work">
          {{ $t("post_main") }}
        </p>
        <p class="hero-description">
          {{ $t("title_main") }}
        </p>
        <router-link class="hero-link" to="/about">
          {{ $t("button_main") }}
        </router-link>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
    animation-name: fadeIn;
    animation-duration: 1.5s;
  }
  @media screen and (min-width: 1200px) {
    /* gap: 20px; */
    gap: 0;
    display: flex;
    flex-direction: row;

    animation-name: fadeIn;
    animation-duration: 1.5s;
  }
}
.hero {
  padding-top: 80px;
}

.photo {
  border-radius: 50%;
}

.hero-name {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 70px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0px;
    margin: 0px;
  }
}

.hero-work {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 500;
    line-height: 130px;
    letter-spacing: 0px;
    margin: 0px;
  }
  /* animation-delay: 1s; */
}

.hero-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: block;
    text-align: left;
    margin-top: 0px;
    width: 720px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    /* margin-right: 60px; */
    /* justify-content: center; */
    width: 50%;
  }
}

.hero-description {
  padding-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  margin: 0px;
  /* animation-delay: 2s; */
}

.hero-link {
  cursor: pointer;
  background-color: #c2893c;
  color: white;
  padding: 10px;
  border-radius: 12px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #854f04;
  }
}
</style>
