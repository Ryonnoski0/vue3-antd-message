<template>
    <div><button @click="onClick">点击</button></div>
</template>
<script setup lang="ts">
    import { Message } from "antd-message-vue";
    import "antd-message-vue/style.css";
    const onClick = () => {
        Message.info("onClick");
    };
</script>

<style scoped></style>
