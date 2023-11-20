<template>
  <header class="header" :style="themeStyles">
    <div class="container">
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

export default {
  name: "HeaderComponent",
  components: {
    ContactsComponent,
    HeaderSettings,
    HeaderMenu,
  },
  computed: {
    themeStyles() {
      return {
        "--backgroundColor": this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "radial-gradient(circle, rgba(255, 225, 183, 1) 0%, rgba(194, 137, 60, 1) 67%)",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
  background: var(--backgroundColor);
  backdrop-filter: blur(10px);

  align-items: baseline;
}
.list {
  display: flex;
  gap: 20px;
  margin-right: auto;
  width: 500px;
}

.container {
  display: flex;
  align-items: center;
}
</style>
