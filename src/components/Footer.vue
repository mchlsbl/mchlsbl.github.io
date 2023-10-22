<script setup lang="ts" />

<script>
import LocaleChanger from "./LocaleChanger.vue";
</script>

<template>
	<footer class="p-3 bright blur shadow-lg">
		<div class="bar-padding">
			<!-- <RouterLink to="/legal-notice" class="link-light">Impressum</RouterLink> -->
			<LocaleChanger />
			<div style="float: right">Michael, 2023</div>
		</div>
	</footer>
</template>

<style>
footer {
	bottom: 0;
	width: 100%;
	position: absolute;
}
</style>
