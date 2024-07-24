declare module "antd-message-vue" {
    import { App } from "vue";

    class Message {
        static success(
            content: string,
            timeout?: number,
            callBack?: () => void
        ): () => void;
        static warn(
            content: string,
            timeout?: number,
            callBack?: () => void
        ): () => void;
        static error(
            content: string,
            timeout?: number,
            callBack?: () => void
        ): () => void;
        static loading(
            content: string,
            timeout?: number,
            callBack?: () => void
        ): () => void;
        static info(
            content: string,
            timeout?: number,
            callBack?: () => void
        ): () => void;
    }

    const plugin: {
        install(app: App): void;
    };

    export { Message };
    export default plugin;
}
