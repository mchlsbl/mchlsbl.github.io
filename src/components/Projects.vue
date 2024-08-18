<script setup lang="ts">
const projectItems = [
  {
    name: "Systolic",
    text: "Systolic is an Android app for tracking your blood pressure and medication usage. You can set measurement reminders, make backups of your measurements, and export your history as a PDF file for easy sharing.",
    url: "https://github.com/mchlsbl/systolic",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    tags: ["APP DEVELOPMENT", "CRUD", "UI / UX"],
  },
  {
    name: "Portfolio website",
    text: "My personal portfolio website that you are currently viewing. Built using Vue and Tailwind CSS.",
    url: "https://github.com/mchlsbl/mchlsbl.github.io",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    tags: ["WEB DEVELOPMENT", "UI / UX"],
  },
];
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-20">
    <div class="flex flex-col items-stretch">
      <h2 class="mb-5 text-center text-3xl font-bold md:text-5xl">Projects</h2>
      <p class="mb-20 text-center text-sm sm:text-base">
        These are some of the projects I have worked on.
      </p>
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div v-for="item in projectItems">
          <img
            :src="item.img"
            alt=""
            class="rounded-3xl max-h-64 object-cover w-full"
          />
          <div class="px-5 py-8 sm:px-6">
            <h5 class="text-xl mb-3 font-bold">{{ item.name }}</h5>
            <p class="flex-col text-gray-500">{{ item.text }}</p>
            <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
              <div
                class="rounded-3xl bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700"
                v-for="tag in item.tags"
              >
                <p>{{ tag }}</p>
              </div>
            </div>
            <a
              :href="item.url"
              class="rounded-3xl bg-black px-6 py-3 text-center font-semibold text-white"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
