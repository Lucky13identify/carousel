<template>
  <header class="header" :style="themeStyles">
    <div class="container" v-if="isWideScreen">
      <button class="open-button" @click="openModalMenu">
        <svg
          class="animate__animated"
          height="40"
          width="40"
          :style="themeStyles"
        >
          <use :href="icon + '#menu'"></use>
        </svg>
      </button>
      <HeaderSettings />
      <button class="open-button" @click="openModalContacts">
        <svg
          class="animate__animated"
          height="40"
          width="40"
          :style="themeStyles"
        >
          <use :href="icon + '#address-book'"></use>
        </svg>
      </button>
    </div>
    <div class="container" v-else>
      <ul class="list">
        <HeaderMenu />
      </ul>
      <HeaderSettings />
      <ContactsComponent />
    </div>
  </header>
</template>

<script>
import ContactsComponent from ".././Contacts/ContactsComponent";
import HeaderSettings from ".././HeaderSettings/HeaderSettings";
import HeaderMenu from ".././HeaderMenu/HeaderMenu";
import icon from "../../assets/icons/symbol-defs.svg";

export default {
  name: "HeaderComponent",
  components: {
    ContactsComponent,
    HeaderSettings,
    HeaderMenu,
  },
  data() {
    return { icon, isWideScreen: window.innerWidth < 768 };
  },
  computed: {
    themeStyles() {
      return {
        "--backgroundColor": this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "radial-gradient(circle, rgba(255, 225, 183, 1) 0%, rgba(194, 137, 60, 1) 67%)",
        "--border": this.$store.state.isThemeDark ? "1px solid grey" : "rnone",
      };
    },
  },
  methods: {
    openModalContacts() {
      this.$store.commit("openModalContacts", true);
    },
    openModalMenu() {
      this.$store.commit("openModalMenu", true);
    },
    handleResize() {
      this.isWideScreen = window.innerWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
  background: var(--backgroundColor);
  backdrop-filter: blur(10px);
  border-bottom: var(--border);
  align-items: baseline;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
}
.list {
  display: flex;
  gap: 20px;
  margin-right: auto;
  width: 400px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
}

.open-button {
  width: 60px;
  height: 60px;
  border: none;
  background: transparent;
}
</style>
