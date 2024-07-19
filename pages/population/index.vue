<template>
    <div>
        <Map :center="center" :zoom="zoom">
            <LGeoJson :geojson="geojson" :options-style="geoStyler" :options="{ onEachFeature }" />
        </Map>
        <ModalPopulationInfo v-if="showModal && stateData" :state="stateData.state"
            :populationDensity="stateData.populationDensity" :population="stateData.population"
            :area="stateData.area" />
        <ModalPopulationIndex />
    </div>
</template>

<script lang="ts" setup>
import { POPULATION_DATA } from '~/constants/population';
import type { GeoJsonObject, Feature } from 'geojson';
import type { IPopulationData } from '~/types/population';
import { getColorFromDensity, getDensityFromState, getPopulationData } from '~/utils';

const center = ref({ lat: 20.5937, long: 78.9629 });
const zoom = ref(5);
const showModal = ref(false);
const stateData = ref<IPopulationData | undefined>(undefined)
const geojson = ref<GeoJsonObject | GeoJsonObject[] | undefined>(undefined);

const geoStyler: any = (feature: Feature) => ({
    opacity: 1,
    fillOpacity: 0.7,
    fillColor: feature.properties ? getColorFromDensity(getDensityFromState(feature.properties.NAME_1, POPULATION_DATA)) : '#FFEDA0',
    color: 'white',
    weight: 2,
    dashArray: '3'
});

const onEachFeature = (feature: Feature, layer: any) => {
    layer.on({
        mouseover: (event: any) => {
            if (feature.properties) {
                stateData.value = getPopulationData(feature.properties.NAME_1, POPULATION_DATA);
            }
            showModal.value = !!stateData.value;
            event.target.setStyle({
                weight: 8,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });
        },
        mouseout: (event: any) => {
            showModal.value = false;
            event.target.setStyle({
                weight: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            });
        }
    });
};

onMounted(async () => {
    const response = await fetch('/geojson/india.geojson');
    geojson.value = await response.json();
});
</script>