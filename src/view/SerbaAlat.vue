<script setup lang="ts">
    import { ref } from 'vue';
    import FeatherIcon from '@/components/FeatherIcon.vue';

    const dropdownHarga = ref(false)
    const dropdownKelas = ref(false)
    const dropdownTransaksi = ref(false)
    const dropdownTerakhir = ref(false)
    const clickFilter = ref(false)

</script>

<template>

    <div class="px-4 md:px-10">
        <div class="mt-20 flex justify-between">
            <div class="flex gap-2">
                <p class="text-sm font-medium text-gray-500">Beranda ></p>
                <p class="text-sm font-semibold text-[#06CAF5]">Alat Tulis</p>
            </div>

            <div class="flex items-center gap-2 mr-4 lg:hidden cursor-pointer" @click="clickFilter = !clickFilter">
                <FeatherIcon icon="filter" width="16" height="16" class="text-gray-500"/>
                <p class="text-sm text-gray-500">Filter</p>    
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-[1fr_4fr] mt-4">
            <div class="lg:flex flex-col hidden">
                <div class="pr-8 flex flex-col gap-6">
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownHarga = !dropdownHarga">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Filter Harga</h2>
                            <div class="">
                                <svg v-if="dropdownHarga" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownHarga">
                            randi
                    </div>
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownKelas = !dropdownKelas">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Filter Kelas</h2>
                            <div class="">
                                <svg v-if="dropdownKelas" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownKelas">
                            randi
                    </div>
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownTransaksi = !dropdownTransaksi">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Tipe Transaksi</h2>
                            <div class="">
                                <svg v-if="dropdownTransaksi" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownTransaksi">
                            randi
                    </div>

                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownTerakhir = !dropdownTerakhir">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Terakhir Ditambahkan</h2>
                            <div class="">
                                <svg v-if="dropdownTerakhir" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownTerakhir">
                            randi
                    </div>
                </div>
            </div>
            <div class="">
                <img src="/public/bannerAlatTulis.png" alt="" class="w-full">
                    <div class="container-scroll grid grid-cols-2 lg:grid-cols-4 gap-x-4 my-4 gap-y-4 overflow-x-auto">
                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>
                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>

                    <div class="lg:w-50 w-auto flex flex-col items-center flex-shrink-0">
                        <div class="">                
                            <img src="/public/contohfoto.png" alt="" class="lg:w-50 w-auto rounded-lg"></img>
                        </div>
                        <div class="">
                            <h2 class="lg:text-md text-sm font-medium leading-[20px] mt-2">Ayam Tepung Roti Spesial</h2>
                            <h2 class="font-bold">Rp. 10.000</h2>
                            <p class="text-xs lg:text-sm font-md text-gray-500">⭐5.0 | Terjual 1239</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-screen bg-black opacity-50 absolute right-0 left-0 top-0 z-42" v-if="clickFilter" @click="clickFilter = false">
            
        </div>

        <transition name="slide">
        <div class="lg:hidden fixed z-50 bottom-0 right-0 left-0 bg-white rounded-xl h-100" v-if="clickFilter">
            <div class="flex gap-2 p-2 items-center px-4">
                <FeatherIcon icon="filter" width="16" height="16" class="text-gray-500"/>
                <h2 class="font-bold text-gray-600">Filter</h2>
            </div>
            <div class="p-4 flex flex-col gap-6">
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownHarga = !dropdownHarga">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Filter Harga</h2>
                            <div class="">
                                <svg v-if="dropdownHarga" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownHarga">
                            randi
                    </div>
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownKelas = !dropdownKelas">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Filter Kelas</h2>
                            <div class="">
                                <svg v-if="dropdownKelas" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownKelas">
                            randi
                    </div>
                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownTransaksi = !dropdownTransaksi">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Tipe Transaksi</h2>
                            <div class="">
                                <svg v-if="dropdownTransaksi" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownTransaksi">
                            randi
                    </div>

                    <div class="flex flex-col justify-center cursor-pointer gap-2  w-full  h-8 border-l-2 border-[#06CAF5]" @click="dropdownTerakhir = !dropdownTerakhir">
                        <div class="flex justify-between">
                            <h2 class="text-gray-800 text-sm ml-2">Terakhir Ditambahkan</h2>
                            <div class="">
                                <svg v-if="dropdownTerakhir" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="dropdownTerakhir">
                            randi
                    </div>
                </div>
        </div>
        </transition>
    </div>
</template>


<style>

    .slide-enter-from {
        transform: translatey(100%);
        opacity: 0;
    }
    .slide-enter-to {
        transform: translatey(0);
        opacity: 1;
    }
    .slide-leave-from {
        transform: translatey(0);
        opacity: 1;
    }
    .slide-leave-to {
        transform: translatey(100%);
        opacity: 0;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease-in-out;
    }


      .container-scroll{
     -ms-overflow-style: none;
      scrollbar-width: none; 
  }
  .container-scroll::-webkit-scrollbar{
    display: none;
  }
</style>