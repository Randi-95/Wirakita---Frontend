<script setup>
  import HeroSlider from "./components/HeroSlider.vue";
import Kategori from "./components/Kategori.vue";
import Navbar from "./components/Navbar.vue";
import PendatangBaru from "./components/PendatangBaru.vue";

</script>

<template>
  <Navbar/>
  <HeroSlider/>
  <Kategori/>
  <ProdukKhusus/>
  <PendatangBaru/>
  <DariMata/>
  <ProdukFavorit/>
  <TokoFavorit/>
</template>

<style scoped>

</style>

<script>
import feather from "feather-icons";
import ProdukKhusus from "./components/ProdukKhusus.vue";
import DariMata from "./components/DariMata.vue";
import ProdukFavorit from "./components/ProdukFavorit.vue";
import TokoFavorit from "./components/TokoFavorit.vue";

export default {
  setup() {
    return {
      icons: {
        home: feather.icons.home.toSvg({ width: 48, height: 48, stroke: "blue" }),
        search: feather.icons.search.toSvg({ width: 48, height: 48, stroke: "red" })
      }
    };
  }
};
</script>