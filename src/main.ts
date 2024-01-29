import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import de from "../locales/de.json";
import en from "../locales/en.json";
import ja from "../locales/ja.json";

const i18n = createI18n({
    locale: "de",
    messages: { de, en, ja },
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.component("LocaleSwitcher", LocaleSwitcher);

app.mount("#app");
