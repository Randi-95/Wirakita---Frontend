<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layout/AuthLayout.vue'; // Siapkan juga untuk halaman login nanti
import MainLayout from './layout/MainLayout.vue';

const layouts = {
  main: MainLayout,
  auth: AuthLayout
};

const route = useRoute();

// Computed property untuk memilih layout secara dinamis
const layoutComponent = computed(() => {
  const layoutName = route.meta.layout || 'main';
  return layouts[layoutName];
});
</script>

<template>
  <component :is="layoutComponent" />
</template>

<style>
/* Hapus <style scoped> dari App.vue. 
  Jika ada style global (untuk seluruh aplikasi), letakkan di sini tanpa 'scoped'.
  Contoh:
  body {
    margin: 0;
    font-family: sans-serif;
  }
*/
</style>