<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="text-center">
            <div class="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto">
            </div>
            <p class="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
    </div>
</template>

<style scoped>
/* Ensure the spinner animation is applied correctly */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>