<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layout/AuthLayout.vue';
import MainLayout from './layout/MainLayout.vue';
import KategoriLayout from './layout/KategoriLayout.vue';

const layouts = {
  main: MainLayout,
  auth: AuthLayout,
  kategori: KategoriLayout
};

const route = useRoute();
const layoutComponent = computed(() => {
  const layoutName = route.meta.layout || 'main';
  return layouts[layoutName];
});
</script>

<template>
  <component :is="layoutComponent" />
</template>
