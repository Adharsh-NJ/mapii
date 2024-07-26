<template>
    <div
        :class="`absolute right-10 top-20 z-50 p-4 w-full md:w-auto flex flex-col gap-4 items-center border border-slate-400 rounded bg-slate-100 ${bottomRight ? 'bottom-0 md:bottom-10 top-auto right-0 md:right-4' : ''}`">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    bottomRight: {
        type: Boolean,
        default: false
    }
})
</script>
