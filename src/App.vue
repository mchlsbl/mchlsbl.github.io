<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <body class="min-h-screen flex flex-col justify-between">
    <main class="flex-grow mt-16">
      <RouterView />
    </main>
    <Footer />
  </body>
</template>
