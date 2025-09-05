<script setup lang="ts">
import { ref } from 'vue';
import FeatherIcon from './FeatherIcon.vue';

const mobileMenu = ref(false)
</script>

<template>
    <div class="fixed bg-white z-50 top-0 left-0 right-0">
        <div class="flex justify-between gap-2 px-2 lg:px-10 py-4 h-20 items-center">
            <div class="judul-search flex w-full lg:w-[65%] gap-2 items-center">
                <h2 class="font-bold text-2xl hidden lg:block mr-4">Wira<span class="text-[#06CAF5]">Kita</span></h2>
                <div class="lg:flex items-center hidden  gap-2 w-60 border-[1.3px] border-gray-300 px-2 py-4 rounded-lg">
                    <FeatherIcon icon="map-pin" width="16" height="16" class="text-gray-600"/>
                    <div class="">
                        <p class="font-md text-xs text-gray-600">SMKN 1 Surabaya</p>
                    </div>
                </div>
                <FeatherIcon icon="menu" width="30" height="30" class="lg:hidden text-gray-500" @click="mobileMenu = !mobileMenu"/>
                <div class="w-full relative">
                <input type="text" placeholder="Cari di WiraKita" class="border border-[#06CAF5] w-full p-2 rounded-lg h-12"/>
                <button class="absolute top-1/2 right-2 -translate-y-1/2 bg-[#06CAF5] py-2 px-3 rounded search-icon">
                    <FeatherIcon icon="search" width="16"/>
                </button>
                </div>

            </div>
            <button class="p-2 rounded-full lg:hidden">
                <FeatherIcon icon="user" width="30" height="30" class="lg:hidden text-gray-500"/>
            </button>
            <div class="lg:flex flex-row gap-2 hidden">
                <button class="border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2">
                    <FeatherIcon icon="user" width="16"/> <span class="font-bold text-md">Masuk</span>
                </button>
                <button class="px-6 py-3 border border-[#06CAF5] rounded-lg bg-[#06CAF5] flex items-center gap-2">
                    <FeatherIcon icon="shopping-bag" width="16"/> <span class="font-bold text-md">Mulai Jualan</span>
                </button>
            </div>
        </div>

        <!-- menu navbar mobile -->
        <transition name="slide">
        <div v-if="mobileMenu" class="absolute top-0 left-0 w-3/4 h-screen bg-white shadow-lg lg:hidden mt-2 p-4 flex flex-col gap-2">
            <div class="flex items-center ">
                <button class=" p-2" @click="mobileMenu = false">
                    <FeatherIcon icon="x" width="30" height="30" class="text-gray-500"/>
                </button>
                <h2 class="font-bold text-2xl block lg:hidden">Wira<span class="text-[#06CAF5]">Kita</span></h2>
            </div>
             <div class="flex items-center border-y mt-4 border-gray-300 gap-4 py-6">
                <FeatherIcon icon="map-pin" width="16" height="16"/>
                <div class="">
                    <p class="text-xs">Lokasi Sekolah</p>
                    <p class="font-semibold text-xs">SMKN 1 Surabaya, Indonesia</p>
                </div>
            </div>
            <div class="flex items-center gap-4 justify-between w-full pt-4">
                <div class="flex gap-2">
                    <FeatherIcon icon="shopping-bag" width="14" height="14" class="text-gray-600"/>
                    <p class="text-xs text-gray-600">Mulai Jualan</p>
                </div>

                <FeatherIcon icon="arrow-right" width="16" height="16" class="text-gray-600"/>
            </div>
            <div class="flex items-center gap-4 justify-between w-full mt-2 border-b border-gray-300 pb-10">
                <div class="flex gap-2">
                    <FeatherIcon icon="book-open" width="14" height="14" class="text-gray-600"/>
                    <p class="text-xs text-gray-600">Artikel</p>
                </div>

                <FeatherIcon icon="arrow-right" width="16" height="16" class="text-gray-600"/>
            </div>

            <div class="flex items-center gap-4 justify-between w-full mt-2">
                <div class="flex gap-2">
                    <FeatherIcon icon="user" width="14" height="14" class="text-gray-600"/>
                    <p class="text-xs text-gray-600">Daftar Akun</p>
                </div>
            </div>
            <div class="flex items-center gap-4 justify-between w-full mt-2">
                <div class="flex gap-2">
                    <FeatherIcon icon="log-in" width="14" height="14" class="text-gray-600"/>
                    <p class="text-xs text-gray-600">Masuk Akun</p>
                </div>
            </div>
        </div>
        </transition>
    </div>
</template>

<style scoped>
    .slide-enter-from {
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-enter-to {
        transform: translateX(0);
        opacity: 1;
    }
    .slide-leave-from {
        transform: translateX(0);
        opacity: 1;
    }
    .slide-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease-in-out;
    }



    .judul-search input::placeholder{
        font-weight: 400;
        font-size: 13px;
        color: #06CAF5;
    }
    .judul-search input:focus::placeholder{
        color: black;
    }
    .judul-search input:focus{
        outline: none;
        border: 0.2px solid black;
    }
    .judul-search input:focus + .search-icon{
        border-radius: 50px 0 0 50px;
        transition: all 0.3s ease-in ;
    }
</style>
