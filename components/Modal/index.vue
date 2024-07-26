<template>
    <div
        :class="` absolute top-20 z-50 w-full md:w-auto p-4 flex flex-col gap-4 items-center border border-slate-400 rounded bg-slate-100 right-0 md:right-10 ${bottomRight ? 'bottom-0 md:bottom-10 top-auto' : ''}`">
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
