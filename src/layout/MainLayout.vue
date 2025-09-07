<script setup>
// 1. Impor semua yang dibutuhkan di sini
import Navbar from '../components/Navbar.vue'; // Path disesuaikan karena file pindah folder
import feather from 'feather-icons';

// 2. Logika untuk feather-icons dibuat sebagai konstanta biasa
//    Di <script setup>, semua yang ada di sini otomatis bisa diakses di template
const icons = {
  home: feather.icons.home.toSvg({ width: 24, height: 24 }),
  search: feather.icons.search.toSvg({ width: 24, height: 24 })
};
</script>

<template>
  <!-- 3. Template visual tetap sama seperti di App.vue lama kamu -->
  <Navbar/>

  <main class="content">
    <router-view />
  </main>

  <!-- 4. Footer kamu, sekarang kita gunakan iconnya di sini -->
  <footer class="app-footer">
    <p>Ini footer</p>
    <div class="footer-icons">
      <!-- Cara menggunakan icon dari script setup -->
      <span v-html="icons.home"></span>
      <span v-html="icons.search"></span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: 1rem;
  background-color: #f5f5f5;
}
.footer-icons span {
  margin: 0 10px;
}

/* Penting! Style untuk SVG dari Feather Icons */
.footer-icons span >>> svg {
  stroke: #333; /* Warna default icon */
  vertical-align: middle;
}
</style>