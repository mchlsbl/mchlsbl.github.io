<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <body class="flex flex-col min-h-screen justify-between">
    <Navbar />
    <main class="flex-grow space-y-80 mb-80">
      <RouterView />
    </main>
    <footer>
      <div class="px-7 pb-8 mx-auto max-w-screen-xl">
        <div
          class="pt-8 my-border-color sm:flex sm:justify-between sm:items-center border-t"
        >
          <ul
            class="flex flex-wrap gap-4 justify-center lg:justify-end text-xs"
          >
            <li class="my-text-color text-sm">Thanks for visiting 👋</li>
          </ul>
          <ul class="flex gap-6 justify-center lg:justify-end mt-8 sm:mt-0">
            <a :href="'mailto:' + $emailAddress" class="my-icon">
              <font-awesome-icon :icon="['fas', 'envelope']" size="xl" />
            </a>
            <a :href="$githubUrl" class="my-icon">
              <font-awesome-icon :icon="['fab', 'github']" size="xl" />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  </body>
</template>
