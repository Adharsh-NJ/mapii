<template>
    <Loading v-if="isLoading" />
    <div class="h-screen w-screen relative">
        <LMap :zoom="zoom" :center="[initialCenter.lat, initialCenter.lng]" :use-global-leaflet="false" class="z-10"
            @ready="handleMapReady" ref="map">
            <LTileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base" name="OpenStreetMap" v-if="!isLoading" />
            <slot v-if="!isLoading" />
        </LMap>
    </div>
</template>

<script setup lang="ts">

// Define props with default values
const props = defineProps({
    zoom: { type: Number, default: 10 },
    center: { type: Object, default: { lat: 40, lng: 70 } }
});

const map = ref<{ leafletObject: L.Map | null } | null>(null);
const isLoading = ref(true);
const hasInitialized = ref(false);
const initialCenter = ref({ lat: props.center.lat, lng: props.center.lng });

function handleMapReady() {
    isLoading.value = false;
    hasInitialized.value = true;
    emit('mapReady')
}
const emit = defineEmits(["mapReady"])
function getLeafletMap() {
    //use optional chaining since map can be null (not sure)
    return map.value ? map.value.leafletObject : null;
}
// Expose the map ref
defineExpose({
    getLeafletMap,
})
</script>