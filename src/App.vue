<script setup>
  import HeroSlider from "./components/HeroSlider.vue";
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <Navbar/>
  <HeroSlider/>
</template>

<style scoped>

</style>

<script>
import feather from "feather-icons";

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