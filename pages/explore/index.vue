<template>
    <Map ref="mapInstance" :zoom="zoom" @mapReady="onMapReady">
        <LMarker v-if="location" :lat-lng="[location.lat, location.lng]" ref="marker" />
        <LMarker v-if="tlLocation" :lat-lng="[tlLocation.lat, tlLocation.lng]" :draggable="true"
            @dragend="updateMarkerAfterDrag" />
        <LPolyline v-if="tlLocation && location"
            :lat-lngs="[[location.lat, location.lng], [tlLocation.lat, tlLocation.lng]]" />
        <LRectangle v-if="location" :bounds="createBounds(location)" :opacity="0.6" />
        <LRectangle v-if="tlLocation" :bounds="createBounds(tlLocation)" :opacity="0.6" />
    </Map>
    <Modal :bottom-right="true">
        <button @click="setMarkerToTalkingLands" class="hover:bg-blue-400 border p-4 bg-slate-300 rounded">Check
            distance to Talking Lands</button>
        <h1 v-if="distanceInKm">Distance: {{ distanceInKm }} km</h1>
        <p v-if="distanceInKm">You can check other locations by dragging the marker.</p>
    </Modal>
</template>

<script setup lang="ts">
import type { ILocation } from '~/types/common';

const location = ref<ILocation | null>(null);
const tlLocation = ref<ILocation | null>(null);
const zoom = ref(3);
const mapInstance = ref<{ getLeafletMap: () => L.Map | null } | null>(null);
const distanceInKm = ref<string | null>(null);
const isLoading = ref(true);

const setMarkerToTalkingLands = () => {
    tlLocation.value = {
        lat: 12.941518596158481,
        lng: 77.58469289834727
    };
    flyToLocation(tlLocation.value);
    calculateDistanceToLocation();
};

const updateMarkerAfterDrag = (e: L.DragEndEvent) => {
    const latLng = e.target.getLatLng();
    tlLocation.value = latLng;
    calculateDistanceToLocation();
};

const onMapReady = () => {
    isLoading.value = false;
};

const createBounds: (loc: ILocation) => L.LatLngExpression[] = (loc: ILocation) => [
    [loc.lat - 0.01, loc.lng - 0.01],
    [loc.lat + 0.01, loc.lng + 0.01]
];

const calculateDistanceToLocation = () => {
    if (tlLocation.value && location.value) {
        distanceInKm.value = calculateDistance(tlLocation.value, location.value).toFixed(3);
    }
};

const flyToLocation = (loc: ILocation) => {
    const leafletMap = mapInstance.value?.getLeafletMap();
    if (leafletMap) {
        leafletMap.flyTo([loc.lat, loc.lng], 12);
    }
};

onMounted(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        location.value = { lat: position.coords.latitude, lng: position.coords.longitude };
    });
});

watch([location, isLoading], async ([newLocation, newLoading]) => {
    await nextTick(); // Wait for DOM updates
    if (!newLoading && newLocation) {
        flyToLocation(newLocation);
    }
});
</script>
