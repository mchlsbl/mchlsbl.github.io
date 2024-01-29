<script setup lang="ts" />

<script>
export default {
	name: "locale-changer",
	data() {
		return {
			langs: [
				{ code: "de", text: "Deutsch" },
				{ code: "en", text: "English" },
				{ code: "ja", text: "日本語" },
			],
		};
	},
};
</script>

<template>
	<div class="locale-changer">
		<select v-model="$i18n.locale">
			<option v-for="(lang, i) in langs" :key="'Lang${i}'" :value="lang.code">
				{{ lang.text }}
			</option>
		</select>
	</div>
</template>
