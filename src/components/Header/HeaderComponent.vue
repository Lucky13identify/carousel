<template>
  <header class="header">
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
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
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
