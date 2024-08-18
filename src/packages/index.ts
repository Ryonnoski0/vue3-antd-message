import { App } from "vue";
import Message from "./components/message/message";
import type { ThemeOptions, MessageOptions } from "./components/message/message";

const install = (app: App) => {
    app.config.globalProperties.$message = Message;
};

export { install, Message };
export type { ThemeOptions, MessageOptions };
