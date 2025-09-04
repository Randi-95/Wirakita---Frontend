<template>
  <div class="w-full mt-10">
    <div class="container-scroll flex gap-4 px-4 overflow-x-auto md:justify-evenly md:overflow-visible">
      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/1.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2">Makanan</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/2.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2">Minuman</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/3.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2">Alat Tulis</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/5.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2">Jasa</h2>
      </div>

      <div class="flex flex-col justify-center items-center flex-shrink-0">
          <img src="/public/4.png" alt="" class="w-20 md:w-25 object-cover">
        <h2 class="text-gray-500 font-semibold text-sm mt-2">Barang/Produk</h2>
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
