# antd-message-vue

`antd-message-vue` 是一个 Vue 插件，模仿了antd的message组件，提供了全局消息通知功能，支持成功、警告、错误、加载和信息消息类型。它允许你在应用中方便地显示各种类型的消息，并可以自定义消息的显示时间和回调函数。

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

在你的 Vue 应用的入口文件（如 `main.ts` 或 `main.js`）中，注册插件：

```ts
import { createApp } from 'vue';
import App from './App.vue';
import messagePlugin from 'antd-message-vue';
import "antd-message-vue/style.css";

const app = createApp(App);
app.use(messagePlugin);
app.mount('#app');
```

### 直接使用 Message 类

你也可以直接导入 `Message` 类并调用它的方法：

```ts
import { Message } from 'antd-message-vue';
import "antd-message-vue/style.css";

Message.success('This is a success message!');
Message.error('This is an error message!', 5000, () => {
  console.log('Error message closed');
});
```

## API

### `Message`

`Message` 类提供了以下静态方法：

**`success(content: string, timeout?: number, callBack?: () => void): () => void`**

显示成功消息。`timeout` 参数可选，指定消息显示的时间（以毫秒为单位）。`callBack` 参数可选，消息关闭后的回调函数。

**`warn(content: string, timeout?: number, callBack?: () => void): () => void`**

显示警告消息。`timeout` 和 `callBack` 参数与 `success` 方法相同。

**`error(content: string, timeout?: number, callBack?: () => void): () => void`**

显示错误消息。`timeout` 和 `callBack` 参数与 `success` 方法相同。

**`loading(content: string, timeout?: number, callBack?: () => void): () => void`**

显示加载消息。`timeout` 和 `callBack` 参数与 `success` 方法相同。

**`info(content: string, timeout?: number, callBack?: () => void): () => void`**

显示信息消息。`timeout` 和 `callBack` 参数与 `success` 方法相同。

### `plugin`

`plugin` 对象包含一个 `install` 方法，用于将插件安装到 Vue 应用中：

- **`install(app: App): void`**

  将插件安装到 Vue 应用中。

## 贡献

欢迎提交 issue 和 pull request。如果你有任何问题或建议，请在 GitHub 上报告。

## 许可证

该项目使用 MIT 许可证。