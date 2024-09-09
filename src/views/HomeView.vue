<script setup lang="ts">
import Text from "@/components/Text.vue";
import WhatIDo from "@/components/WhatIDo.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <section>
    <div class="h-screen mb-16">
      <img
        alt=""
        src="../assets/bg.jpg"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="flex flex-col items-center justify-center h-full text-white">
        <VueWriter
          class="mb-4 text-xl"
          :array="[
            'App developer',
            'Linux enthusiast',
            'Rust developer',
            'Hobby gamer',
            'Hardware tinkerer',
            'Language lover',
          ]"
          :typeSpeed="60"
          :eraseSpeed="30"
          :caret="'underscore'"
        />
        <h2 class="mb-16 text-3xl">Hi, I'm mchlsbl 🤝</h2>
        <p>
          Welcome to my personal website. I am a 20-year-old software developer
          from Germany who enjoys coding and tinkering with electronics.
        </p>
      </div>
    </div>
  </section>

  <section id="about">
    <Text
      title="About."
      img-url="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </Text>
  </section>

  <section id="what-i-do">
    <WhatIDo />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"
        >
          <form>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full p-3 transition border rounded border-primary bg-primary hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div class="mb-12 max-w-[570px] lg:mb-0">
          <h2
            class="text-dark mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            Contact me 🙌
          </h2>
          <p
            class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
