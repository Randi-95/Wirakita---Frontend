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
</template>

<style scoped>

</style>

<script>
import feather from "feather-icons";
import ProdukKhusus from "./components/ProdukKhusus.vue";

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