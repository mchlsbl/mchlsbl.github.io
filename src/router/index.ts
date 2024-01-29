import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import TicTacToeView from "../views/TicTacToeView.vue";
import ErrorView from "../views/ErrorView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/about",
            component: AboutView,
        },
        {
            path: "/projects",
            component: ProjectsView,
        },
        {
            path: "/contact",
            component: ContactView,
        },
        {
            path: "/tictactoe",
            component: TicTacToeView,
        },
        {
            path: "/404",
            component: ErrorView,
        },
        {
            path: "/:notFound",
            redirect: "/404",
        },
    ],
});

export default router;
