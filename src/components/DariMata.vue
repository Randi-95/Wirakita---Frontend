<script setup>
    import FeatherIcon from './FeatherIcon.vue';
</script>


<template>
  <div class="w-full mt-10 px-4 lg:px-10 mb-10">
    <div class="flex justify-between">
            <h2 class="text-sm lg:text-2xl font-medium">Dipilih Khusus <span class="font-bold">Untukmu</span></h2>
            <div class="flex items-center gap-2">
                <h2 class="text-sm lg:text-xl text-[#06CAF5] font-semibold">Lihat Semua</h2>
                <FeatherIcon icon="arrow-right" width="24" height="24" class="text-[#06CAF5]"/>
            </div>
    </div>
    <div class="container-scroll flex gap-4 px-4 overflow-x-auto justify-evenly lg:justify-start md:overflow-visible">
      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/paket1.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2 w-24 text-center">Yang Bikin Kamu Ngiler!</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/paket3.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2 w-24 text-center">Bahan Serba Ada!</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/paket4.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2 w-24 text-center">Trend Outfit Terkini!</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/paket2.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2 w-24 text-center">Serba Alat!</h2>
      </div>
    </div>
  </div>
</template>


<style>
  .container-scroll{
     -ms-overflow-style: none;
      scrollbar-width: none; 
  }
  .container-scroll::-webkit-scrollbar{
    display: none;
  }
</style>
