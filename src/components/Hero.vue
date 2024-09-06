<template>
  <div class="h-screen mb-16">
    <img
      alt=""
      src="../assets/bg.jpg"
      class="absolute inset-0 object-cover w-full h-full"
    />
    <div
      class="relative flex flex-col items-center justify-center h-full text-white text-center"
    >
      <span class="block mb-4 text-xl font-semibold text-primary">
        <VueWriter
          :array="[
            'App developer',
            'Linux enthusiast',
            'Rust developer',
            'Hobby gamer',
            'Hardware tinkerer',
            'Language lover',
          ]"
          :typeSpeed="50"
          :eraseSpeed="25"
        />
      </span>
      <h2 class="mb-12 text-3xl font-bold text-dark sm:text-[40px]">
        Hi, I'm mchlsbl 🤝
      </h2>
      <p class="mb-5 text-base text-body-color dark:text-dark-6">
        My name is mchlsbl and I welcome you to my personal website. I am a
        software developer from Germany.
      </p>
    </div>
  </div>
</template>
