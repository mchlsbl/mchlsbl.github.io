<template>
  <footer>
    <div
      class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div
        class="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
      >
        <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li class="text-gray-600 text-sm">Designed by mchlsbl.</li>
        </ul>

        <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <a
            href="mailto:92347868+mchlsbl@users.noreply.github.com"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 hover:opacity-75"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" size="xl" />
          </a>
          <a
            href="https://github.com/mchlsbl"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 hover:opacity-75"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="xl" />
          </a>
        </ul>
      </div>
    </div>
  </footer>
</template>
