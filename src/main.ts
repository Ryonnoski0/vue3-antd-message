import { createApp } from "vue";
import App from "./App.vue";
import { install as messagePlugin } from "./packages";

const app = createApp(App);
messagePlugin(app);
app.mount("#app");
