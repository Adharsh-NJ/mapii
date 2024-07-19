<template>
  <div class=" w-[300px] py-4">
    <h1 class=" font-extrabold text-center text-2xl py-2">{{ wonder.name }}</h1>
    <Carousel :autoplay="2000">
      <Slide v-for="(img, index) in wonder.imgs" :key="index">
        <div class=" rounded overflow-hidden">
          <NuxtPicture :src="img" class="w-full" height="600" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div class="py-2 font-bold">
      <h1>{{ wonder.desc }}</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  wonder: {
    type: Object,
    required: true
  }
});
</script>