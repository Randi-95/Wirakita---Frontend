<template>
  <div class="px-4 sm:px-6 md:px-10 pt-20">
    <div class="w-full mt-6 relative"> <swiper
        :modules="[Autoplay, Pagination, Navigation]" :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true" :centered-slides="true"
        :slides-per-view="'auto'"
        :space-between="10"
        class="pb-10"
      >
        <swiper-slide
          v-for="(banner, i) in banners"
          :key="i"
          class="!w-10/12 md:!w-[45%]"
        >
          <img
            :src="banner.src"
            class="w-full h-auto md:h-60 object-cover rounded-2xl shadow-lg"
            alt="Banner Image"
          />
        </swiper-slide>
      </swiper>
      
      </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

const banners = [
    { src: "/banner1.webp"},
    { src: "/banner2.webp"},
    { src: "/banner3.webp"},
    { src: "/banner4.webp"},
    { src: "/banner1.webp"},
    { src: "/banner2.webp"},
    { src: "/banner3.webp"},
    { src: "/banner4.webp"},
    
];
</script>

<style>
.swiper-pagination-bullet {
  background-color: #ffffff;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background-color: #06CAF5; 
  opacity: 1;
}


.swiper-button-prev,
.swiper-button-next {
  color: #ffffff; 
  background-color: #06CAF5;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  --swiper-navigation-size: 24px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>