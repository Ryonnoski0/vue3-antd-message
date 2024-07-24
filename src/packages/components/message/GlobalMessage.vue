<template>
    <div :class="['message-item', cls, { 'fade-out': isFadingOut }]">
        <i
            class="anticon"
            v-html="iconHtml"></i>
        <p class="message-custom-content">{{ content }}</p>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, onMounted } from "vue";
    import { messageType } from "./interface";
    import { getSvgIcon } from "./icon";

    const props = defineProps<{
        type: messageType;
        content: string;
        timeout: number;
    }>();

    const cls = computed(() => [props.type]);

    const iconHtml = computed(() => getSvgIcon(props.type));

    const isFadingOut = ref(false);

    onMounted(() => {
        if (props.timeout > 0) {
            setTimeout(() => {
                isFadingOut.value = true;
            }, props.timeout);
        }
    });
</script>

<style scoped>
    @keyframes message {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
            max-height: 34px;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            max-height: 0px;
            transform: translateY(-100%);
        }
    }

    .message-item {
        max-height: 34px;
        width: 100%;
        max-width: 400px;
        background-color: #fff;
        border-radius: 8px;
        padding: 0 8px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08),
            0 3px 6px -4px rgba(0, 0, 0, 0.12),
            0 9px 28px 8px rgba(0, 0, 0, 0.05);
        animation-name: message;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .anticon {
        font-size: 15px;
        line-height: 15px;
        margin-right: 8px;
    }

    .message-custom-content {
        font-size: 14px;
        flex: 1;
        word-break: break-word;
        line-height: 14px;
    }

    .success .anticon {
        color: #87d068;
    }

    .warning .anticon {
        color: #ffa500;
    }

    .error .anticon {
        color: rgb(255, 51, 0);
    }
    .loading .anticon,
    .info .anticon {
        color: #1890ff;
    }
    .loading .anticon {
        animation: spin 1.5s linear infinite;
    }

    .fade-out {
        animation: fadeOut 0.5s forwards;
    }
</style>
