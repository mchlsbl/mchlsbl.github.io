<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ path: '/' }">Home</RouterLink>
      <RouterLink :to="{ path: '/#about', hash: '#about' }">About</RouterLink>
      <RouterLink :to="{ path: '/#projects', hash: '#projects' }"
        >Projects</RouterLink
      >
      <RouterLink :to="{ path: '/#contact', hash: '#contact' }"
        >Contact</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
