import "./index.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faEnvelope, faGithub);

const app = createApp(App);

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $githubUrl: string;
    $emailAddress: string;
  }
}

app.config.globalProperties.$emailAddress = "mchldev@proton.me";
app.config.globalProperties.$githubUrl = "https://github.com/mchlsbl";

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
