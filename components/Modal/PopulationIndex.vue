<template>
    <Modal :bottomRight="true">
        <div class="rounded ">
            <ul class="">
                <li class="flex gap-2 justify-between items-center">0-10: <div class="bg-[#FFEDA0] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">10-20: <div class="bg-[#FED976] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">20-50: <div class="bg-[#FEB24C] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">50-100: <div class="bg-[#FD8D3C] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">100-200: <div class="bg-[#FC4E2A] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">200-500: <div class="bg-[#E31A1C] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">500-1000: <div class="bg-[#BD0026] w-6 h-3"></div>
                </li>
                <li class="flex gap-2 justify-between items-center">1000+: <div class="bg-[#800026] w-6 h-3"></div>
                </li>
            </ul>
        </div>
    </Modal>
</template>