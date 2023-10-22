import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TicTacToeView from "../views/TicTacToeView.vue";
import ErrorView from "../views/ErrorView.vue";
// import LegalView from "../views/LegalView.vue";

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
		// {
		//   path: "/legal-notice",
		//   component: LegalView,
		// },
	],
});

export default router;
