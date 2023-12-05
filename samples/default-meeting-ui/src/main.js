import { createApp } from "vue";
import App from "./App.vue";
import { ComponentLibrary, provideDyteDesignSystem } from "@dytesdk/vue-ui-kit";

provideDyteDesignSystem(document.body, {
    theme: 'light'
})

createApp(App).use(ComponentLibrary).mount("#app");
