<script setup>
    import FeatherIcon from './FeatherIcon.vue';
</script>


<template>
    <div class="p-4 lg:p-10 mt-2 mb-20">
        <div class="flex justify-between">
            <h2 class="text-sm lg:text-2xl font-medium">Cek Toko Favorit <span class="font-bold">Wira<span  class="text-[#06CAF5]">Kita</span></span></h2>
            <div class="flex items-center gap-2">
                <h2 class="text-sm lg:text-xl text-[#06CAF5] font-semibold">Lihat Semua</h2>
                <FeatherIcon icon="arrow-right" width="24" height="24" class="text-[#06CAF5]"/>
            </div>
        </div>

        <div class="scroll-produk mt-2 lg:mt-10 flex gap-4 overflow-auto">
            <div class="flex-shrink-0">
                <img src="/public/banner1.webp" alt="" class="w-96 rounded-lg">
            </div>

            <div class="flex-shrink-0">
                <img src="/public/banner2.webp" alt="" class="w-96 rounded-lg">
            </div>

            <div class="flex-shrink-0">
                <img src="/public/banner3.webp" alt="" class="w-96 rounded-lg">
            </div>

            <div class="flex-shrink-0">
                <img src="/public/banner4.webp" alt="" class="w-96 rounded-lg">
            </div>

            <div class="flex-shrink-0">
                <img src="/public/banner1.webp" alt="" class="w-96 rounded-lg">
            </div>
        </div>
    </div>
</template>

<style>
    .scroll-produk{
        -ms-overflow-style: none;
      scrollbar-width: none; 
    }

    .scroll-produk::-webkit-scrollbar{
        display: none;
    }
</style>