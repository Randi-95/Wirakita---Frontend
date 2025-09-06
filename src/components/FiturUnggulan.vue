<template>
    <div class="p-4 lg:p-10 mb-20">
        <div class="flex justify-between">
            <h2 class="text-sm lg:text-2xl font-medium">Fitur <span class="font-bold">Unggulan</span></h2>
        </div>

        <div class="scroll-produk mt-2 lg:mt-10 flex gap-4 overflow-x-auto overflow-y-hidden lg:overflow-hidden lg:justify-evenly">
                <div class="bg-[#ACF0FF] w-50 h-30 md:w-60 md:h-60 rounded-lg relative flex-shrink-0">
                    <div class="flex flex-col items-center justify-center h-full">
                        <h1 class="text-xs md:text-xl text-blue-600 font-bold">Jasa Iklanin</h1>
                        <p class="md:text-xs text-[10px] mb-2 text-blue-600">Mudah dan langsung Tayang</p>
                        <button class="bg-[#06CAF5] font-bold  py-2 px-3 text-xs md:text-sm rounded-sm shadow-md">Iklanin Sekarang!</button>
                    </div>
                    <img src="/public/12.png" alt="" class="w-18 md:w-30 absolute -bottom-5">
                </div>
                <div class="bg-[#ACF0FF] w-50 h-30 md:w-60 md:h-60 rounded-lg relative flex-shrink-0">
                    <div class="flex flex-col items-center justify-center h-full">
                        <h1 class="text-xs md:text-xl  text-blue-600 font-bold">Berjualan</h1>
                        <p class="md:text-xs  text-[10px] mb-2 text-blue-600">Mudah, Nyaman dan Tenang</p>
                        <button class="bg-[#06CAF5] font-bold  py-2 px-3 text-xs md:text-sm rounded-sm shadow-md">Mulai Jualan!</button>
                    </div>
                    <img src="/public/10.png" alt="" class="w-18 md:w-30 absolute -bottom-5">
                </div>
                <div class="bg-[#ACF0FF] w-50 h-30 md:w-60 md:h-60 rounded-lg relative flex-shrink-0">
                    <div class="flex flex-col items-center justify-center h-full">
                        <h1 class="text-xs md:text-xl  text-blue-600 font-bold">Dashboard</h1>
                        <p class="md:text-xs text-[10px] mb-2 text-blue-600">Menarik, Keran dan Elegan.</p>
                        <button class="bg-[#06CAF5] font-bold  py-2 px-3 text-xs md:text-sm rounded-sm shadow-md">Lihat Dashboard!</button>
                    </div>
                    <img src="/public/11.png" alt="" class="w-18 md:w-30 absolute -bottom-5">
                </div>
                 <div class="bg-[#ACF0FF] w-50 h-30 md:w-60 md:h-60 rounded-lg relative flex-shrink-0">
                    <div class="flex flex-col items-center justify-center h-full">
                        <h1 class="text-xs md:text-xl  text-blue-600 font-bold">Pengaturan</h1>
                        <p class="md:text-xs text-[10px] mb-2 text-blue-600">Atur Akun Anda</p>
                        <button class="bg-[#06CAF5] font-bold  py-2 px-3 text-xs md:text-sm rounded-sm shadow-md">Atur Sekarang!</button>
                    </div>
                    <img src="/public/9.png" alt="" class="w-18 md:w-30 absolute -bottom-5">
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