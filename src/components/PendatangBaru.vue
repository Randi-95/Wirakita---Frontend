<script setup>
    import FeatherIcon from './FeatherIcon.vue';
</script>


<template>
    <div class="p-4 lg:p-10 mt-2">
        <div class="flex justify-between">
            <h2 class="text-sm lg:text-2xl font-medium">Pendatang <span class="font-bold">Baru</span></h2>
            <div class="flex items-center gap-2">
                <h2 class="text-sm lg:text-xl text-[#06CAF5] font-semibold">Lihat Semua</h2>
                <FeatherIcon icon="arrow-right" width="24" height="24" class="text-[#06CAF5]"/>
            </div>
        </div>

        <div class="scroll-produk mt-2 lg:mt-10 flex gap-4 overflow-auto">
            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
            </div>

            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
            </div>

            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
            </div>

            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
            </div>

            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
            </div>

            <div class="lg:w-50 w-34 flex flex-col items-center flex-shrink-0">
                <div class="">                
                    <img src="/public/image 7.png" alt="" class="lg:w-50 w-34 rounded-lg"></img>
                </div>
                <div class="">
                    <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                    <h2 class="font-bold">Rp. 10.000</h2>
                    <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                </div>
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