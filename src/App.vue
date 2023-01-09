<template>
  <hr />
  <ProductView />
  <hr />
</template>

<script setup lang="ts">
import ProductView from "./views/ProductView.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --background: #2d2e32;
  /* colors: #00c4ff #eec32c */
  --primary-color: #eec32c;
  --text-color: #7d7e82;
  --title-color: #ffffff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: "Poppins", sans-serif;
  color: var(--text-color);
  background: var(--background);
}

a {
  text-decoration: none;
}

hr {
  margin: 0;
  border: 1px solid #38393c;
}

.container {
  max-width: 1200px;
  margin-inline: auto;

  @media (max-width: 1280px) {
    max-width: 900px;
  }

  @media (max-width: 960px) {
    max-width: 100%;
    padding-inline: 1rem;
  }
}
</style>
