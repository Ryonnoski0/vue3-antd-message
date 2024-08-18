<template>
    <div
        :class="['message-item', cls, { 'fade-out': isFadingOut }]"
        @animationend="handleAnimationEnd">
        <div
            :style="{
                backgroundColor: props.themeColor,
                color: props.fontColor,
            }"
            class="message-content">
            <span
                class="anticon"
                v-html="iconHtml"></span>
            <span class="message-custom-content">{{ props.content }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, onMounted, watch } from "vue";
    import { messageType } from "./interface";
    import { getSvgIcon } from "./icon";

    const props = defineProps<{
        type: messageType;
        content: string;
        timeout: number;
        themeColor: string;
        fontColor: string;
        onRemove: () => void;
        isFadingOut: boolean;
    }>();

    const cls = computed(() => props.type);
    const iconHtml = computed(() => getSvgIcon(props.type));
    const isFadingOut = ref(props.isFadingOut);

    onMounted(() => {
        if (props.timeout > 0) {
            setTimeout(() => {
                isFadingOut.value = true;
            }, props.timeout);
        }
    });

    watch(
        () => props.isFadingOut,
        (newValue) => {
            if (newValue) {
                isFadingOut.value = true;
            }
        },
    );

    const handleAnimationEnd = (event: AnimationEvent) => {
        if (event.animationName.includes("fadeOut")) {
            props.onRemove();
        }
    };
</script>

<style scoped>
    @keyframes messageIn {
        0% {
            opacity: 0;
            padding: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            padding: 6px;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
            max-height: 34px;
            padding: 6px;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            padding: 0;
            max-height: 0;
            transform: translateY(-100%);
        }
    }
    @keyframes loadingCircle {
        100% {
            transform: rotate(360deg);
        }
    }

    .message-item {
        padding: 6px;
        text-align: center;
        animation: messageIn 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86) forwards;
    }

    .message-content {
        display: inline-block;
        padding: 9px 12px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
        pointer-events: all;
    }

    .anticon {
        vertical-align: text-bottom;
        margin-inline-end: 8px;
        font-size: 16px;
        display: inline-flex;
        align-items: center;
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .message-custom-content {
        font-size: 14px;
        flex: 1;
        word-break: break-word;
        line-height: 14px;
    }

    .fade-out {
        animation: fadeOut 0.5s forwards;
    }
    .loading .anticon {
        animation: loadingCircle 1s infinite linear;
    }
</style>
