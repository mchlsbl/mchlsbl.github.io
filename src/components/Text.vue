<script setup lang="ts">
defineProps({
  title: String,
  imgUrl: String,
  imgLocation: String,
});
</script>

<template>
  <section>
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          :class="[
            'relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full',
            imgLocation,
          ]"
        >
          <img
            alt=""
            :src="imgUrl"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">{{ title }}</h2>

          <p class="mt-4 text-gray-600">
            <slot />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
