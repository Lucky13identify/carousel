<template>
  <h2 class="header">Education</h2>
  <ul class="flex-container">
    <li>
      <h3 class="subtitle">IT School GoIT (2022 - 2023)</h3>
      <p class="description">Fullstack Developer - my сertificate</p>
    </li>
    <li>
      <h3 class="subtitle">
        Ivan Franko National University of Lviv (2021 - 2023)
      </h3>
      <p class="description">Master of accounting and taxation.</p>
    </li>
    <li>
      <h3 class="subtitle">
        Project Management in «KROK» University (2018 - 2019)
      </h3>
      <p class="description">
        Project planning and execution. Practical lessons in Microsoft Project.
      </p>
    </li>
    <li>
      <h3 class="subtitle">Kiev National Transport University (2018 - 2021)</h3>
      <p class="description">Bachelor of logistics specialty.</p>
    </li>
    <li>
      <h3 class="subtitle">
        "Kiev Transport and Economic College" of National Transport University
        (2014 - 2018)
      </h3>
      <p class="description">
        Junior Specialist, organization of transportation services on automobile
        transport, Red Diploma
      </p>
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
  width: 450px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.description {
  width: 450px;
}
</style>
