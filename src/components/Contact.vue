<template>
  <section
    class="relative z-10 overflow-hidden bg-white dark:bg-dark lg:py-[120px]"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4 lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
            <h2
              class="text-dark mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]"
            >
              Contact me 🙌
            </h2>
            <p
              class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
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
        </div>
      </div>
    </div>
  </section>
</template>
