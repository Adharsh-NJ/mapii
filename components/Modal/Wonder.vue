<template>
  <div class=" w-[300px] py-4">
    <h1 class=" font-extrabold text-center text-2xl py-2">{{ wonder.name }}</h1>
    <NuxtPicture :src="wonder.imgs[0]" class="w-full" height="600" />
    <div class="py-2 font-bold">
      <h1>{{ wonder.desc }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  wonder: {
    //stronger type for wonder
    type: Object,
    required: true
  }
});
</script>