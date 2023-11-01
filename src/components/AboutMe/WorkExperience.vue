<template>
  <h2 class="header">Work experience</h2>
  <ul class="flex-container">
    <li>
      <h3 class="subtitle">AC Crowe Ukraine (2021 - 2022)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">Position:</p>
          <p class="text-description">accountant-auditor A2</p>
        </div>
        <div class="container-description">
          <p class="header-description">Description:</p>
          <p class="text-description">
            project work on the preparation of financial statements,
            communication with the client.
          </p>
        </div>
        <div class="container-description">
          <p class="header-description">Achievements:</p>
          <p class="text-description">have trained interns on the project</p>
        </div>
      </div>
    </li>
    <li>
      <h3 class="subtitle">Baker Tilly (2019 - 2021)</h3>
      <div class="description">
        <div class="container-description">
          <p class="header-description">Position:</p>
          <p class="text-description">trainee, accountant-auditor A1</p>
        </div>
        <div class="container-description">
          <p class="header-description">Description:</p>
          <p class="text-description">
            Assistance in preparing financial statements in accordance with
            IFRS. Communication with the client. Teamwork on projects.
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.subtitle {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container-description {
  display: flex;
  gap: 7px;
}

.header-description {
  width: 130px;
}

.text-description {
  width: 400px;
  text-align: justify;
}
</style>
