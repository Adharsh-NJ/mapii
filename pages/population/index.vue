<template>
    <div>
        <Map :center="center" :zoom="zoom">
            <LPolygon v-for="(polygon, index) in polygons" :key="index" :lat-lngs="polygon.latLngs"
                :options="polygon.options" @mouseover="(e) => handleMouseOver(e, index)"
                @mouseout="(e) => handleMouseOut(e, index)" class-name=" hover:translate-x-1" />
        </Map>
        <ModalPopulationInfo v-if="showModal && stateData" :state="stateData.state"
            :populationDensity="stateData.populationDensity" :population="stateData.population"
            :area="stateData.area" />
        <ModalPopulationIndex />
    </div>
</template>

<script lang="ts" setup>
import { POPULATION_DATA } from '~/constants/population';
import type { IPopulationData } from '~/types/population';
import { getPopulationData } from '~/utils';
import type { GeoJsonObject } from 'geojson';
const center = ref({ lat: 20.5937, lng: 78.9629 });
const zoom = ref(5);
const showModal = ref(false);
const stateData = ref<IPopulationData | undefined>(undefined);
const polygons = ref<any[]>([]);

const handleMouseOver = (event: any, index: number) => {
    const polygon = polygons.value[index];
    stateData.value = getPopulationData(polygon.name, POPULATION_DATA);
    showModal.value = !!stateData.value;

    event.target.setStyle({
        fillColor: "#666",
        fillOpacity: 0.9,

    });
};

const handleMouseOut = (event: any, index: number) => {
    const polygon = polygons.value[index];
    showModal.value = false;
    // Reset the polygon style
    event.target.setStyle({
        ...polygon.options
    });
};

onMounted(async () => {
    const response = await fetch('/geojson/india.geojson');
    const geojson: GeoJsonObject = await response.json();
    const data = await loadPolygonsFromGeoJson(POPULATION_DATA, geojson)
    polygons.value = data;
});
</script>