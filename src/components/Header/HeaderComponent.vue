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
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "#2a9c68",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid grey",
        alignItems: "baseline",
        color: "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid grey;
  align-items: baseline;
}
.list {
  display: flex;
  gap: 20px;
  margin-right: auto;
}

.container {
  display: flex;
  align-items: center;
}
</style>
