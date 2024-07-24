import { createApp } from "vue";
import App from "./App.vue";
import message from "./packages";

const app = createApp(App);
message.install(app);
app.mount("#app");
