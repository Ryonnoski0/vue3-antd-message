<template>
    <div><button @click="onClick">点击</button></div>
</template>
<script setup lang="ts">
    // import { Message } from "antd-message-vue";
    // import "antd-message-vue/style.css";
    import { Message } from "./packages";
    const onClick = () => {
        const close = Message.info("This is a normal message", { timeout: 10000, themeColor: "#000", callBack: () => console.log("callBack"), fontColor: "#fff" });
        setTimeout(() => {
            close();
        }, 100);
    };
</script>

<style scoped></style>
