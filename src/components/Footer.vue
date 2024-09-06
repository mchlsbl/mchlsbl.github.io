<script setup lang="ts"></script>

<template>
  <footer>
    <div
      class="mx-auto max-w-screen-xl pb-8 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
    >
      <div
        class="border-color sm:flex sm:justify-between sm:items-center border-t pt-8 mt-16 lg:mt-24"
      >
        <ul class="flex flex-wrap gap-4 justify-center lg:justify-end text-xs">
          <li class="text-color text-sm">Thanks for visiting 👋</li>
        </ul>

        <ul class="flex gap-6 justify-center lg:justify-end mt-8 sm:mt-0">
          <a
            :href="'mailto:' + $emailAddress"
            rel="noreferrer"
            target="_blank"
            class="icon"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" size="xl" />
          </a>
          <a :href="$githubUrl" rel="noreferrer" target="_blank" class="icon">
            <font-awesome-icon :icon="['fab', 'github']" size="xl" />
          </a>
        </ul>
      </div>
    </div>
  </footer>
</template>
