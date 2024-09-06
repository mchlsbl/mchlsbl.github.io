import "./index.css";

import { createApp, type Plugin } from "vue";

import App from "./App.vue";
import router from "./router";

import VueWriter from "vue-writer";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const app = createApp(App);

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $emailAddress: string;
    $githubUrl: string;
  }
}

app.config.globalProperties.$emailAddress = "mchldev@proton.me";
app.config.globalProperties.$githubUrl = "https://github.com/mchlsbl";

library.add(faBars, faEnvelope, faGithub);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(VueWriter as unknown as Plugin);
app.mount("#app");
