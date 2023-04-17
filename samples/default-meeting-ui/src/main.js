import { createApp } from "vue";
import App from "./App.vue";
import { defineCustomElements } from "@dytesdk/ui-kit/loader";

// NOTE: this defines components so that we can use them in our code.
defineCustomElements();

createApp(App).mount("#app");
