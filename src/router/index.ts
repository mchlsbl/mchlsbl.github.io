import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 24,
        behavior: "smooth",
      };
    }

    return { top: 0, behavior: "smooth" };
  },
});

export default router;
