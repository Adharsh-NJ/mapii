<template>
    <Modal :bottomRight="true">
        <div class="rounded">
            <ul>
                <li v-for="(color, range) in data" :key="range" class="flex gap-2 justify-between items-center">
                    {{ range }}: <div :style="{ backgroundColor: color }" class="w-6 h-3"></div>
                </li>
            </ul>
        </div>
    </Modal>
</template>

<script setup lang="ts">
const data = {
    "0-10": "#FFEDA0",
    "10-20": "#FED976",
    "20-50": "#FEB24C",
    "50-100": "#FD8D3C",
    "100-200": "#FC4E2A",
    "200-500": "#E31A1C",
    "500-1000": "#BD0026",
    "1000+": "#800026"
};
</script>
