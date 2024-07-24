import { App } from "vue";
import Message from "./components/message/message";

const message = {
    install(app: App) {
        app.config.globalProperties.$message = Message;
    },
};
export default message;
export { Message };
