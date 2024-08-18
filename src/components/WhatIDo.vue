<script setup lang="ts">
const skillItems = [
  {
    name: "Systolic",
    text: "Systolic is an Android app for tracking your blood pressure and medication usage.",
  },
  {
    name: "Portfolio website",
    text: "My personal portfolio website that you are currently viewing.",
  },
];
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
    <div class="mb-12 flex flex-col md:flex-row">
      <h2
        class="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16"
      >
        What I do
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div
        v-for="item in skillItems"
        class="bg-gray-100 rounded-3xl py-10 px-5 flex flex-col justify-between h-80"
      >
        <div class="text-xl text-center font-semibold">
          <h3>{{ item.name }}</h3>
        </div>
        <p class="text-sm text-center mt-4">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
