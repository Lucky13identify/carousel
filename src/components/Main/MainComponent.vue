<template>
  <section class="hero">
    <div class="container hero-container">
      <img
        class="photo"
        src="../../../src/assets/imges/my-photo.jpg"
        width="380"
        alt="Dmytro Smirnov photo"
      />
      <div class="hero-info">
        <p class="hero-name animate__animated animate__backInRight">
          {{ $t("name_main") }}
        </p>
        <p class="hero-work animate__animated animate__backInRight">
          {{ $t("post_main") }}
        </p>
        <p class="hero-description animate__animated animate__backInRight">
          {{ $t("title_main") }}
        </p>
        <router-link
          class="hero-link animate__animated animate__backInRight"
          to="/about"
        >
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
  animation-delay: 1s;
}

.hero-info {
  margin-top: 60px;
  margin-left: 60px;
}

.hero-description {
  padding-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  margin: 0px;
  animation-delay: 2s;
}

.hero-link {
  cursor: pointer;
  background-color: #2a9c68;
  color: white;
  padding: 10px;
  border-radius: 12px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0; // Начальное состояние элемента
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) 4s forwards; // 4s задержка перед анимацией

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background-color: #236547;
  }
}
</style>
