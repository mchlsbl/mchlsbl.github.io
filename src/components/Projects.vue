<script setup lang="ts">
const projectItems = [
  {
    name: "Systolic",
    text: "Systolic is an Android app for tracking your blood pressure and medication usage. You can set measurement reminders, make backups of your measurements, and export your history as a PDF file for easy sharing.",
    url: "/systolic",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1",
    tags: ["APP DEVELOPMENT", "CRUD", "UI / UX"],
  },
  {
    name: "Portfolio website",
    text: "My personal portfolio website that you are currently viewing. Built using Vue and Tailwind CSS.",
    url: "/mchlsbl.github.io",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1",
    tags: ["WEB DEVELOPMENT", "UI / UX"],
  },
];
</script>

<template>
  <div class="px-7 mx-auto max-w-5xl w-full">
    <div class="flex flex-col items-stretch">
      <h2 class="mb-24 text-center text-4xl font-bold">Featured projects.</h2>
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
        <div class="mb-12" v-for="item in projectItems">
          <a :href="$githubUrl + item.url">
            <img
              :src="item.img"
              alt=""
              class="mb-8 rounded-3xl shadow-2xl max-h-64 object-cover w-full my-animate my-on-hover-scale"
          /></a>
          <h5 class="text-xl mb-3 font-bold">{{ item.name }}</h5>
          <p class="flex-col my-text-color">{{ item.text }}</p>
          <div class="mb-6 mt-8 flex flex-wrap gap-2">
            <div
              class="p-2 text-sm font-semibold uppercase rounded-3xl my-bg-color-element my-text-color"
              v-for="tag in item.tags"
            >
              <p>{{ tag }}</p>
            </div>
          </div>
          <a :href="item.url" class="my-btn">View project</a>
        </div>
      </div>
    </div>
  </div>
</template>
