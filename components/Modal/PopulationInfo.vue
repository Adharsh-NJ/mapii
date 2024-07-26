<template>
    <Modal>
        <div>
            <h2 v-for="(item, name, index) in props" :key="index">{{ name }}: {{ item }}</h2>
        </div>
    </Modal>
</template>

<script setup lang="ts">
const props = defineProps({
    state: String,
    population: Number,
    area: Number,
    populationDensity: Number
})
</script>