<template>
    <Map v-if="lat && long" :center="{ lat, long }" :zoom="zoom">
        <LMarker :lat-lng="[lat, long]" />
    </Map>
</template>

<script lang="ts" setup>
const lat = ref(null)
const long = ref(null)
const isLoading = ref(true)
const zoom = ref(10);


onMounted(async () => {
    const location: any = await getLocation()

    if (location.lat && location.long) {
        lat.value = location.lat;
        long.value = location.long;
        isLoading.value = false
    }
})
</script>