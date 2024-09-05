import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
        top: 32,
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
