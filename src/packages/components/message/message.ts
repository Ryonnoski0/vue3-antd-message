import { createApp, h, ref } from "vue";
import GlobalMessage from "./GlobalMessage.vue";
import { messageType } from "./interface";

interface ThemeOptions {
    themeColor?: string;
    fontColor?: string;
}

interface MessageOptions extends ThemeOptions {
    timeout?: number;
    callBack?: () => void;
}

const containerStyles = {
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    color: "rgba(0, 0, 0, 0.88)",
    fontSize: "14px",
    lineHeight: "1.5714285714285714",
    listStyle: "none",
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    pointerEvents: "none",
    zIndex: "1010",
};

class Message {
    private static container: HTMLElement | null = null;
    private static globalThemeColor: string = "#fff"; // 默认的全局主题颜色
    private static globalFontColor: string = "#000"; // 默认的全局字体颜色

    // 设置全局主题颜色
    static setGlobalTheme(options: ThemeOptions = {}) {
        if (options.themeColor) {
            this.globalThemeColor = options.themeColor;
        }
        if (options.fontColor) {
            this.globalFontColor = options.fontColor;
        }
    }

    static success(content: string, options: MessageOptions = {}) {
        return this.showMessage("success", content, options);
    }

    static warn(content: string, options: MessageOptions = {}) {
        return this.showMessage("warning", content, options);
    }

    static error(content: string, options: MessageOptions = {}) {
        return this.showMessage("error", content, options);
    }

    static loading(content: string, options: MessageOptions = {}) {
        return this.showMessage("loading", content, options);
    }

    static info(content: string, options: MessageOptions = {}) {
        return this.showMessage("info", content, options);
    }

    private static showMessage(type: messageType, content: string, options: MessageOptions): () => void {
        const { timeout = 3000, callBack, themeColor, fontColor } = options;
        const finalThemeColor = themeColor || this.globalThemeColor;
        const finalFontColor = fontColor || this.globalFontColor;

        if (!this.container) {
            this.createContainer();
        }

        const messageElement = document.createElement("div");
        messageElement.className = "message-item";
        this.container?.appendChild(messageElement);

        const isFadingOut = ref(false);

        const app = createApp({
            render: () =>
                h(GlobalMessage, {
                    type,
                    content,
                    timeout,
                    themeColor: finalThemeColor,
                    fontColor: finalFontColor,
                    isFadingOut: isFadingOut.value,
                    onRemove: () => this.handleRemove(messageElement, callBack),
                }),
        });

        app.mount(messageElement);

        const close = () => {
            isFadingOut.value = true;
        };

        if (timeout > 0) {
            setTimeout(close, timeout);
        }

        return close;
    }

    private static handleRemove(messageElement: HTMLElement, callBack?: () => void) {
        console.log("进入删除方法");
        setTimeout(() => {
            messageElement.remove();

            if (this.container?.childElementCount === 0) {
                this.container.remove();
                this.container = null;
            }
            if (callBack) {
                callBack();
            }
        }, 500);
    }

    private static createContainer() {
        this.container = document.createElement("div");
        Object.assign(this.container.style, containerStyles);
        document.body.appendChild(this.container);
    }
}

export default Message;
export type { ThemeOptions, MessageOptions };
