import "./assets/main.css";
import "vuetify/styles";
import "./fireBase/index";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./router/index.js";
import App from "./App.vue";
import { globalMixinSearchValidation } from "./mixins/globalMixinSearchValidation";

const vuetify = createVuetify({ components, directives });
const pinia = createPinia();
const app = createApp(App);

app.use(router)
    .use(pinia)
    .mixin(globalMixinSearchValidation)
    .directive("tooltip", (el, param) => {
        const span = document.createElement("span");
        span.classList.add("tooltiptext");
        span.innerHTML = param.value;
        el.classList.add("tooltip");
        el.appendChild(span);
    })
    .use(vuetify, {
        iconfont: "mdi",
    })
    .mount("#app");
