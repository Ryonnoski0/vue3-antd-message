// index.d.ts

// 全局主题选项接口
export interface ThemeOptions {
    themeColor?: string;
    fontColor?: string;
}

// 消息选项接口
export interface MessageOptions extends ThemeOptions {
    timeout?: number;
    callBack?: () => void;
}

// 消息类型
export type messageType = "success" | "warning" | "error" | "loading" | "info";
export default class Message {
    // 设置全局主题颜色
    static setGlobalTheme(options?: ThemeOptions): void;

    // 不同类型的消息方法
    static success(content: string, options?: MessageOptions): () => void;
    static warn(content: string, options?: MessageOptions): () => void;
    static error(content: string, options?: MessageOptions): () => void;
    static loading(content: string, options?: MessageOptions): () => void;
    static info(content: string, options?: MessageOptions): () => void;

    // 私有方法不需要在 d.ts 文件中声明，但这里为了完整性和参考，也包括在内
    private static showMessage(type: messageType, content: string, options: MessageOptions): () => void;
    private static handleRemove(messageElement: HTMLElement, callBack?: () => void): void;
    private static createContainer(): void;
}
