<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="footer-spacing">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style>
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

body {
    background: linear-gradient(170deg, #a84300, #030053, #000000);
    animation: BackgroundGradient 20s ease-in-out infinite;
    background-size: 500% 200%;
    background-attachment: fixed;

    overflow-y: scroll;
    font-family: "Figtree", sans-serif;
    color: white;
}

section {
    text-align: justify;
}

main {
    width: 50%;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 150px;
}

.bar-padding {
    padding-left: 15%;
    padding-right: 15%;
}

@media (max-width: 991px) {
    main {
        width: 75%;
        padding-top: 150px;
        padding-bottom: 100px;
    }
    .bar-padding {
        padding-left: 8%;
        padding-right: 8%;
    }
    .navbar-margin-top {
        margin-top: 0.5rem;
    }
}

.footer-spacing {
    display: grid;
    grid-template-rows: 1fr;
    min-height: 100vh;
}

.blur {
    backdrop-filter: blur(7px);
    background-color: rgba(255, 255, 255, 0.05);
}
</style>
