<template>
  <li class="project" :style="themeStyles">
    <a class="project-link" href="">
      <img
        class="project-img"
        src="https://res.cloudinary.com/dici0468p/image/upload/v1698775438/noutbuk_klavishi_svechenie_170138_1920x1200_iibdhn.jpg"
        alt=""
    /></a>
    <div class="info-container">
      <h2 class="project-name">Project 1</h2>
      <div class="flex-container">
        <button class="project-button" type="button" @click="openModal">
          Learn more
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.commit("openModal", true);
    },
  },
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "none"
          : "#d3d3d3",
        "--border-color": this.$store.state.isThemeDark
          ? "1px solid grey"
          : "none",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  backdrop-filter: blur(10px);
  width: 350px;
  height: 300px;
  border: var(--border-color);
  background-color: var(--background-color);
  border-radius: 15px;
  padding: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 7px 8px 5px 0px rgba(55, 186, 46, 0.74);
  }
}

.project-img {
  border-radius: 10px;
}

.info-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
  gap: 10px;
}

.project-button {
  color: white;
  width: 110px;
  height: 30px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgb(52, 112, 255);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;

  &:hover {
    background: rgb(11, 68, 205);
  }
}

.flex-container {
  display: flex;
  justify-content: flex-end;
}
</style>
