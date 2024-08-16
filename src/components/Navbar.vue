<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about", hash: "#about" },
  { name: "What I do", path: "/#what-i-do", hash: "#what-i-do" },
  { name: "Projects", path: "/#projects", hash: "#projects" },
  { name: "Contact", path: "/#contact", hash: "#contact" },
  { name: "Blog", path: "/blog" },
];

const isDropdownActive = ref(false);

function toggleDropdown() {
  isDropdownActive.value = !isDropdownActive.value;
}
</script>

<template>
  <header
    class="bg-white/[.7] backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50"
  >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <RouterLink class="block text-xl" to="/">✨ mchlsbl</RouterLink>
        <div class="md:flex md:gap-2">
          <nav class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li v-for="item in navbarItems" :key="item.name">
                <RouterLink
                  class="text-base text-black hover:text-gray-700/75"
                  :to="{ path: item.path, hash: item.hash }"
                  >{{ item.name }}</RouterLink
                >
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="block md:hidden">
              <button
                class="rounded bg-gray-200 p-2 text-gray-600 hover:text-gray-600/75"
                @click="toggleDropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isDropdownActive" class="mb-6 space-y-2 md:hidden">
        <RouterLink
          v-for="item in navbarItems"
          :key="item.name"
          class="block text-center text-gray-700 hover:text-gray-500/75"
          :to="{ path: item.path, hash: item.hash }"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
