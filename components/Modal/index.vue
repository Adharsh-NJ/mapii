<template>
    <div
        :class="`absolute right-10 top-20 z-50 p-4 flex flex-col gap-4 items-center border border-slate-400 rounded bg-slate-100 ${bottomRight ? 'bottom-0 top-auto' : ''}`">
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
