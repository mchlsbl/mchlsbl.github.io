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
    <nav class="navbar navbar-dark navbar-expand-lg">
        <ul class="navbar-nav">
            <li class="nav-item" v-for="lang in langs" :key="lang.code">
                <a
                    class="nav-link"
                    style="cursor: pointer"
                    @click="$i18n.locale = lang.code"
                    :class="{ active: $i18n.locale === lang.code }"
                >
                    {{ lang.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>
