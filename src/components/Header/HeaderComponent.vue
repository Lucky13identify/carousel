<template>
  <header class="header">
    <div class="container">
      <ul class="list">
        <li class="list-item"><a class="link">Main</a></li>
        <li class="list-item"><a class="link">About me</a></li>
        <li class="list-item"><a class="link">Skills</a></li>
        <li class="list-item"><a class="link">Portfolio</a></li>
      </ul>
      <ContactsComponent />
    </div>
  </header>
</template>

<script>
import ContactsComponent from ".././Contacts/ContactsComponent";
export default { name: "HeaderComponent", components: { ContactsComponent } };
</script>

<style lang="scss" scoped>
.header {
  padding-top: 40px;
  padding-bottom: 40px;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid grey;
}
.list {
  display: flex;
  gap: 40px;
  margin-right: auto;
}

.container {
  display: flex;
}
</style>
