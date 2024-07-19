<template>
    <Modal>
        <div>
            <h1>State: {{ state }}</h1>
            <h1>Population: {{ population }}</h1>
            <h1>Area: {{ area }}</h1>
            <h1>Population Density: {{ populationDensity }}</h1>
        </div>
    </Modal>
</template>

<script setup lang="ts">
defineProps({
    state: String,
    population: Number,
    area: Number,
    populationDensity: Number
})
</script>