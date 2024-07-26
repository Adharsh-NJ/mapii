<template>
    <div class=" w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white flex justify-between p-4">
        <NuxtLink to="/" class=" hover:scale-x-95">
            <h1>MapD</h1>
        </NuxtLink>
        <div class=" flex gap-4">
            <NuxtLink to="/map" class=" hover:scale-x-95">Wonders</NuxtLink>
            <NuxtLink to="/population" class=" hover:scale-x-95">Population</NuxtLink>
            <NuxtLink to="/explore" class=" hover:scale-x-95">Explore </NuxtLink>
        </div>
    </div>
</template>