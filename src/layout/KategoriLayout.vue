<script setup>
import FooterSection from '@/components/FooterSection.vue';
import Navbar from '../components/Navbar.vue';
import feather from 'feather-icons';

const icons = {
  home: feather.icons.home.toSvg({ width: 24, height: 24 }),
  search: feather.icons.search.toSvg({ width: 24, height: 24 })
};
</script>

<template>
  <Navbar/>

  <main class="content">
    <router-view />
  </main>

  <FooterSection/>
</template>