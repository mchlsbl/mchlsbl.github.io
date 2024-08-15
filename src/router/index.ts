import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/blog",
      component: BlogView,
    },
    {
      path: "/404",
      component: NotFoundView,
    },
    {
      path: "/:notFound",
      redirect: "/404",
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (to.path === "/") {
      return { top: 0, behavior: "smooth" };
    }

    return { top: 0, behavior: "instant" };
  },
});

export default router;
