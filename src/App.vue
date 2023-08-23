<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />

  <RouterView class="justify" style="padding-block: 150px" />

  <Footer />
</template>

<style>
body {
  color: white;

  min-height: 100vh;
  position: relative;

  background: linear-gradient(145deg, #1f2579, #130025, #783535, #d9aa73);
  background-size: 300%, 300%;
  background-attachment: fixed;

  animation: BackgroundGradient 80s ease infinite;
}

@keyframes BackgroundGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1 {
  text-align: left;
}

.blur {
  backdrop-filter: blur(8px);
}

.bright {
  background-color: rgba(255, 255, 255, 0.05);
}

.highlight {
  box-shadow: 0px 0px 100px 20px rgba(255, 255, 255, 0.2);
}

.justify {
  text-align: justify;
  margin: 0 auto;
  width: 50%;
}

@media (max-width: 800px) {
  .justify {
    text-align: justify;
    margin: 0 auto;
    width: 70%;
  }
}
</style>
