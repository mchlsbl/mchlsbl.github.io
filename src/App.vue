<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="bg"></div>
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

.bg {
    background: linear-gradient(170deg, #a84300, #030053, #000000);
    background-size: 500% 200%;
    animation: BackgroundGradient 20s ease-in-out infinite;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
}

body {
    overflow-y: scroll;
    font-family: "Figtree", sans-serif;
    color: white;
}

main {
    width: 50%;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 150px;
}

section {
    text-align: justify;
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

    section {
        text-align: left;
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
