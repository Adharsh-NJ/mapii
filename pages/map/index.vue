<template>
  <Map :center="currentWonder.location" :zoom="zoom">
    <LMarker :lat-lng="[currentWonder.marker.lat, currentWonder.marker.long]">
      <LPopup>
        <ModalWonder :wonder="currentWonder" />
      </LPopup>
    </LMarker>
  </Map>

  <ModalWonderControls :currentWonder="currentWonder" @next-wonder="nextWonder" @prev-wonder="prevWonder" />
</template>

<script setup>
import { WORLD_WONDERS } from '@/constants/worldWonders';

const zoom = ref(10);
const currentIndex = ref(0);

const currentWonder = computed(() => WORLD_WONDERS[currentIndex.value]);

const nextWonder = () => {
  currentIndex.value = (currentIndex.value + 1) % WORLD_WONDERS.length;
};

const prevWonder = () => {
  currentIndex.value = (currentIndex.value - 1 + WORLD_WONDERS.length) % WORLD_WONDERS.length;
};
</script>
