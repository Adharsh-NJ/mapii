<template>
  <Map :center="currentWonder.location" :zoom="zoom" ref="mapInstance">
    <LMarker :lat-lng="currentWonder.location" ref="marker">
      <LPopup ref="popup">
        <ModalWonder :wonder="currentWonder" />
      </LPopup>
    </LMarker>
    <LCircle :lat-lng="currentWonder.location" :radius="800" :color="'blue'">
      <LImageOverlay :url="currentWonder.imgs[1]" :bounds="bounds" class-name="rounded-full" />
    </LCircle>
  </Map>

  <ModalWonderControls :currentWonder="currentWonder" @next-wonder="nextWonder" @prev-wonder="prevWonder" />
</template>

<script setup lang="ts">
import { WORLD_WONDERS } from '@/constants/worldWonders'; // Adjust the import based on your actual constants file
import type { Wonder } from '~/types/worldWonders';

// Define reactive variables
const zoom = ref<number>(10);
const currentIndex = ref<number>(0);
const mapInstance = ref<{ getLeafletMap: () => L.Map | null } | null>(null);
const popup = ref<{ leafletObject: L.Popup | null } | null>(null);
const marker = ref<{ leafletObject: L.Marker | null } | null>(null);

// Define computed properties
const currentWonder = computed<Wonder>(() => WORLD_WONDERS[currentIndex.value]);
function closePopup() {
  //remove log
  console.log(popup.value)
  popup.value?.leafletObject?.close();
}

const nextWonder = () => {
  closePopup();
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % WORLD_WONDERS.length;
  }, 50)
};

const prevWonder = () => {
  closePopup();
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + WORLD_WONDERS.length) % WORLD_WONDERS.length;

  }, 500)
};

//type for 'newWonder'
watch(currentWonder, async (newWonder) => {
  await nextTick(); // Wait for DOM updates
  //use const since leafletMap is not reassigned
  const leafletMap = mapInstance.value?.getLeafletMap()

  if (leafletMap) {
    leafletMap.flyTo([newWonder.location.lat, newWonder.location.lng], leafletMap.getZoom(), {
      animate: true,
      duration: 5 // Duration in seconds
    });
    if (marker.value?.leafletObject) {
      marker.value.leafletObject.setLatLng([newWonder.location.lat, newWonder.location.lng]);
    }
  }
});

// Define image dimensions and compute bounds
//better to use snake case for constants
const imageWidth = 500;
const imageHeight = 500;

const bounds = computed<L.LatLngBoundsLiteral>(() => {
  const latLng = currentWonder.value.location;
  const latDiff = imageHeight / 2 / 111320; // Approximate conversion from pixels to degrees latitude
  const lngDiff = imageWidth / 2 / (Math.cos(latLng.lat * Math.PI / 180) * 111320); // Approximate conversion from pixels to degrees longitude

  return [
    [latLng.lat - latDiff, latLng.lng - lngDiff],
    [latLng.lat + latDiff, latLng.lng + lngDiff]
  ];
});
</script>
