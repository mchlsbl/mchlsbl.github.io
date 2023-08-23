<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand fixed-top shadow-lg bright blur">
    <ul class="navbar-nav px-2">
      <RouterLink to="/" class="nav-link" active-class="active"
        >🌌 mchlsbl</RouterLink
      >
      <RouterLink to="/about" class="nav-link" active-class="active"
        >Über mich</RouterLink
      >
      <RouterLink to="/tictactoe" class="nav-link" active-class="active"
        >Tic Tac Toe</RouterLink
      >
    </ul>
  </nav>
</template>
