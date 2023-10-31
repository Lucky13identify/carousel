<template>
  <header class="header">
    <div class="container">
      <ul class="list">
        <li class="list-item"><a>Main</a></li>
        <li class="list-item"><a>About me</a></li>
        <li class="list-item"><a>Skills</a></li>
        <li class="list-item"><a>Portfolio</a></li>
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
  background-color: blue;
  border-radius: 0 0 15px 15px;
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
