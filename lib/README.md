# antd-message-vue

`antd-message-vue` 是一个 Vue 插件，模仿了 Ant Design 的 `message` 组件，提供全局消息通知功能，支持成功、警告、错误、加载和信息消息类型。它允许你在应用中方便地显示各种类型的消息，
并可以自定义消息的显示时间和回调函数。

## 安装

使用 npm 安装插件：

```bash
npm install antd-message-vue
```

或者使用 yarn：

```bash
yarn add antd-message-vue
```

## 使用

### 在 Vue 应用中注册插件

在你的 Vue 应用的入口文件（如 `main.ts` 或 `main.js`）中，注册插件并导入 CSS：

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { install as messagePlugin } from "antd-message-vue";
import "antd-message-vue/style.css";

const app = createApp(App);
app.use(messagePlugin);
app.mount("#app");
```

### 直接使用 Message 类

你也可以直接导入 `Message` 类并调用其方法：

```ts
import { Message } from "antd-message-vue";
import "antd-message-vue/style.css";

Message.success("This is a success message!");

Message.error("This is an error message!", {
    timeout: 5000,
    callBack: () => {
        console.log("Error message closed");
    },
});
```

### 设置全局主题

你可以设置全局的主题颜色和字体颜色：

```ts
import { Message } from "antd-message-vue";
import "antd-message-vue/style.css";

// 设置全局主题颜色和字体颜色
Message.setGlobalTheme({ themeColor: "#1890ff", fontColor: "#ffffff" });

Message.success("This is a success message with global theme!");
```

## API

### `Message`

`Message` 类提供了以下静态方法：

-   `setGlobalTheme(options: ThemeOptions): void`

    设置全局的主题颜色和字体颜色。 `options` 是一个包含 `themeColor` 和 `fontColor` 的对象。

-   `success(content: string, options?: MessageOptions): () => void`

    显示成功消息。 `options` 是可选参数，用于设置消息显示的时间、回调函数、主题颜色和字体颜色。

-   `warn(content: string, options?: MessageOptions): () => void`

    显示警告消息。 `options` 参数与 `success` 方法相同。

-   `error(content: string, options?: MessageOptions): () => void`

    显示错误消息。 `options` 参数与 `success` 方法相同。

-   `loading(content: string, options?: MessageOptions): () => void`

    显示加载消息。 `options` 参数与 `success` 方法相同。

-   `info(content: string, options?: MessageOptions): () => void`

    显示信息消息。 `options` 参数与 `success` 方法相同。

### `install`

`install` 方法用于将插件安装到 Vue 应用中：

-   `install(app: App): void`

    将插件安装到 Vue 应用中。

### `interface`

```ts
interface ThemeOptions {
    themeColor?: string;
    fontColor?: string;
}

interface MessageOptions extends ThemeOptions {
    timeout?: number;
    callBack?: () => void;
}
```

## 贡献

欢迎提交 issue 和 pull request。如果你有任何问题或建议，请在 GitHub 上报告。

## 许可证

该项目使用 MIT 许可证。
