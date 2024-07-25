<template>
    <div
        class="absolute right-10 top-20 z-50 p-4 flex flex-col gap-4 items-center border border-slate-400 rounded bg-slate-100">
        <h1>7 World Wonders</h1>
        <h1 v-if="currentWonder">{{ currentWonder.name }}</h1>
        <div class="flex gap-4">
            <button @click="nextWonderHandler"
                class="px-4 py-2 rounded bg-slate-700 text-white hover:bg-red-400">Next</button>
            <button @click="prevWonderHandler"
                class="px-4 py-2 rounded bg-slate-700 text-white hover:bg-red-400">Prev</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Wonder } from '~/types/worldWonders';


defineProps<{
    currentWonder: Wonder | null;
}>();

const emit = defineEmits<{
    (event: 'next-wonder'): void;
    (event: 'prev-wonder'): void;
}>();
function nextWonderHandler() {
    emit('next-wonder');
}

function prevWonderHandler() {
    emit('prev-wonder');
}
</script>