<script setup lang="ts">
import Text from "@/components/Text.vue";
import WhatIDo from "@/components/WhatIDo.vue";
import Projects from "@/components/Projects.vue";

import GlitchedWriter from "vue-glitched-writer";
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center h-full h-screen">
      <div class="px-7 mx-auto max-w-5xl">
        <p class="absolute font-mono text-xl">
          <glitched-writer
            :text="[
              'App developer',
              'Linux enthusiast',
              'Hardware tinkerer',
              'Hobby gamer',
              'Language lover',
            ]"
            preset="typewriter"
            mode="erase"
            :queue="{
              loop: true,
            }"
          />
        </p>
        <h2 class="my-12 text-4xl font-bold">Hi, I'm mchlsbl 🤝</h2>
        <p>Welcome to my personal website.</p>
        <p>
          I am a software developer from Germany who enjoys coding and tinkering
          with electronics.
        </p>
      </div>
    </div>
  </section>

  <section id="about">
    <Text
      title="About."
      img-url="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1"
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
    <div class="w-full px-7 mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="m-auto">
          <h2 class="text-dark mb-6 text-4xl font-bold">Contact.</h2>
          <div class="mb-12">
            <p>Do you have questions or want to send a request?</p>
            <p>Just send me a quick e-mail 🙌</p>
          </div>
        </div>
        <div class="p-8 relative rounded-3xl shadow-xl my-bg-color-element">
          <form>
            <div class="mb-3">
              <input
                type="text"
                placeholder="Your name"
                class="p-3 border rounded-3xl outline-none w-full"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your e-mail"
                class="p-3 border rounded-3xl outline-none w-full"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your message"
                class="p-3 border rounded-3xl outline-none resize-none w-full"
              ></textarea>
            </div>
            <button type="submit" class="my-btn w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
