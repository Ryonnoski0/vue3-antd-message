import { createApp, h } from "vue";
import GlobalMessage from "./GlobalMessage.vue";
import { messageType } from "./interface.ts";

class Message {
    private static container: HTMLElement | null = null;

    static success(content: string, timeout?: number, callBack?: () => void) {
        return this.message("success", content, timeout, callBack);
    }

    static warn(content: string, timeout?: number, callBack?: () => void) {
        return this.message("warning", content, timeout, callBack);
    }

    static error(content: string, timeout?: number, callBack?: () => void) {
        return this.message("error", content, timeout, callBack);
    }

    static loading(content: string, timeout?: number, callBack?: () => void) {
        return this.message("loading", content, timeout, callBack);
    }

    static info(content: string, timeout?: number, callBack?: () => void) {
        return this.message("info", content, timeout, callBack);
    }

    private static message(
        type: messageType,
        content: string,
        timeout: number = 3000,
        callBack?: () => void
    ): () => void {
        // Create or get the container
        if (!this.container) {
            this.createContainer();
        }

        // Create a new container for the message
        const messageElement = document.createElement("div");
        messageElement.className = "message-item";
        messageElement.style.transition = "all 1s";

        // Add the message to the container
        this.container?.appendChild(messageElement);

        // Create and mount the Vue app
        const app = createApp({
            render() {
                return h(GlobalMessage, { type, content, timeout });
            },
        });

        app.mount(messageElement);

        let closeTimeout: number | undefined;

        const close = () => {
            clearTimeout(closeTimeout);
            app.unmount();
            messageElement.remove();
            if (this.container?.childElementCount === 0) {
                this.container.remove();
                this.container = null;
            }
            if (callBack) {
                callBack();
            }
        };

        if (timeout > 0) {
            closeTimeout = setTimeout(() => {
                setTimeout(() => {
                    close();
                }, 500);
            }, timeout);
        }

        return close;
    }

    private static createContainer() {
        this.container = document.createElement("div");
        this.container.className = "message-container";
        this.container.style.position = "fixed";
        this.container.style.top = "20px";
        this.container.style.left = "50%";
        this.container.style.transform = "translateX(-50%)";
        this.container.style.zIndex = "9999";
        this.container.style.width = "100%";
        this.container.style.display = "flex";
        this.container.style.flexDirection = "column";
        this.container.style.alignItems = "center";
        this.container.style.pointerEvents = "none";
        document.body.appendChild(this.container);
    }
}

export default Message;
