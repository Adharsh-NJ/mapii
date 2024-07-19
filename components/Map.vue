<template>
    <Loading v-if="isLoading" />
    <div class="h-screen w-screen relative">
        <LMap :zoom="zoom" :center="[center.lat, center.long]" :use-global-leaflet="false" class="z-10"
            @ready="handleReady">
            <LTileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base" name="OpenStreetMap" v-if="!isLoading" />
            <slot v-if="!isLoading" />
        </LMap>
    </div>
</template>

<script setup>
// Define props with default values
function handleReady() {
    isLoading.value = false;
}
defineProps({
    zoom: { type: Number, default: 10 },
    center: { type: Object, required: true }
});

const isLoading = ref(true);
</script>
