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
  <div class="w-full mx-auto max-w-5xl px-5 md:px-10 py-16 md:py-20">
    <div class="flex flex-col items-stretch">
      <h2 class="text-center mb-24 text-4xl font-bold">Featured projects.</h2>
      <div class="gap-12 grid grid-cols-1 md:grid-cols-2">
        <div class="mb-12" v-for="item in projectItems">
          <a :href="item.url">
            <img
              :src="item.img"
              alt=""
              class="rounded-3xl max-h-64 object-cover w-full mb-10 on-hover-scale"
          /></a>
          <h5 class="text-xl mb-3 font-bold">{{ item.name }}</h5>
          <p class="flex-col text-color">{{ item.text }}</p>
          <div class="mb-6 mt-8 flex flex-wrap gap-2">
            <div
              class="text-sm font-semibold uppercase p-2 rounded-3xl bg-color-element text-color"
              v-for="tag in item.tags"
            >
              <p>{{ tag }}</p>
            </div>
          </div>
          <a :href="item.url" class="btn">View project</a>
        </div>
      </div>
    </div>
  </div>
</template>
