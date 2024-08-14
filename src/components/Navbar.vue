<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const navbarItems = [
  { name: "About", path: "/#about", hash: "#about" },
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
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <RouterLink class="block text-lg" to="/">✨ mchlsbl</RouterLink>
        </div>

        <div class="md:flex md:items-center md:gap-3">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li v-for="item in navbarItems" :key="item.name">
                <RouterLink
                  class="text-gray-500 transition hover:text-gray-500/75"
                  :to="{ path: item.path, hash: item.hash }"
                  >{{ item.name }}</RouterLink
                >
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="block md:hidden">
              <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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
      <div
        v-if="isDropdownActive"
        class="mt-2 space-y-2 place-content-center md:hidden"
      >
        <RouterLink
          v-for="item in navbarItems"
          :key="item.name"
          class="block text-gray-700 transition hover:text-gray-500/75"
          :to="{ path: item.path, hash: item.hash }"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
