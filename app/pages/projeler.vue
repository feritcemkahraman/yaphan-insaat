<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Sayfa yüklendiğinde yönlendirme yap
onMounted(() => {
  window.location.href = "/projeler/index.html"; // Statik HTML dosyasına yönlendir
});
</script>

<template></template>
