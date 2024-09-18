<script setup lang="ts">
defineProps({
  title: String,
  imgUrl: String,
});
</script>

<template>
  <section>
    <div class="px-7 mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-24">
        <div
          class="relative h-64 overflow-hidden rounded-3xl sm:h-80 md:h-full md:order-last shadow-2xl my-animate my-on-hover-scale"
        >
          <img
            alt=""
            :src="imgUrl"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div class="py-8 lg:py-24">
          <h2 class="mb-8 font-bold text-4xl">{{ title }}</h2>

          <p class="my-text-color">
            <slot />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
