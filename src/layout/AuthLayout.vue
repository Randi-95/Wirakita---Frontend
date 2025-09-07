<template>
  <main class="auth-layout">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
/* Style ini untuk membuat form login berada di tengah halaman */
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Setidaknya setinggi layar penuh */
  background-color: #f3f4f6; /* Warna latar belakang abu-abu muda */
}
</style>