<template>
  <div :class="$style.root">
    <div :class="$style.header"/>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
@import "../css/variables.scss";
.root {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'Header' 'Content' 'Footer';
  background-color: $main-bg-color;
}

.header {
  height: 71px;
}

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer {
  height: 226px;
}
</style>

<style lang="scss">
@import "../css/variables.scss";

:root {
  font-size: 62.5%;
}

#app,
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  // height: 100%;
  width: 100%;
}

body {
  background-color: $main-bg-color;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
}

h1 {
  font-size: 1.8rem;
  font-weight: 600;
}

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
