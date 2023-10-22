<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<Navbar />
	<RouterView />
	<Footer />
</template>

<style>
body {
	/* Font */
	font-family: "Figtree", sans-serif;
	color: white;

	/* Scrollbar always visible */
	overflow-y: scroll;

	/* Footer compatibility */
	min-height: 100vh;
	position: relative;

	/* Background */
	background: linear-gradient(145deg, #1f2579, #130025, #783535);
	background-size: 300%, 300%;
	background-attachment: fixed;
	animation: BackgroundGradient 80s ease infinite;
}

@keyframes BackgroundGradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

section {
	text-align: justify;
}

.blur {
	backdrop-filter: blur(7px);
}

.bright {
	background-color: rgba(255, 255, 255, 0.05);
}

/* Page padding */

main {
	padding-block: 150px;
	margin: 0 auto;
	width: 50%;
}

.bar-padding {
	padding-left: 15%;
	padding-right: 15%;
}

@media (max-width: 800px) {
	main {
		padding-block: 150px;
		margin: 0 auto;
		width: 75%;
	}
	.bar-padding {
		padding-left: 10%;
		padding-right: 10%;
	}
}
</style>
