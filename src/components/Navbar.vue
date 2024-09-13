<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about", hash: "#about" },
  { name: "What I do", path: "/#what-i-do", hash: "#what-i-do" },
  { name: "Projects", path: "/#projects", hash: "#projects" },
  { name: "Contact", path: "/#contact", hash: "#contact" },
];

const isDropdownActive = ref(false);

function toggleDropdown() {
  isDropdownActive.value = !isDropdownActive.value;
}
</script>

<template>
  <header
    class="my-bg-color-navbar backdrop-blur-md fixed top-0 left-0 right-0 z-50"
  >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <RouterLink
          class="my-text-color-navbar text-xl block my-animate my-on-hover-scale"
          to="/"
          >✨ mchlsbl</RouterLink
        >
        <div class="md:flex md:gap-2">
          <nav class="hidden md:block">
            <ul class="flex items-center gap-6 text-lg">
              <li v-for="item in navbarItems" :key="item.name">
                <RouterLink
                  class="text-base my-text-color-navbar my-animate my-on-hover-opacity"
                  :to="{ path: item.path, hash: item.hash }"
                  >{{ item.name }}</RouterLink
                >
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="block md:hidden">
              <button
                class="w-8 h-8 rounded-xl my-bg-color-element my-text-color my-animate my-on-hover-opacity"
                @click="toggleDropdown"
              >
                <font-awesome-icon :icon="['fas', 'bars']" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isDropdownActive"
        class="mb-6 space-y-2 md:hidden transition-all duration-300 ease-in-out transform"
      >
        <RouterLink
          v-for="item in navbarItems"
          :key="item.name"
          class="block text-center my-text-color-navbar my-animate my-on-hover-opacity"
          :to="{ path: item.path, hash: item.hash }"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
