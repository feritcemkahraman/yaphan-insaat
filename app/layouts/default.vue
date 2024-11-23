<template>
  <div>
    <div v-if="loading">
      <!-- Preloader Kısmı -->
      <div class="preloader-container">
        <div class="preloader-text-wrapper">
          <!-- Arka Planda Genişleyen Border -->
          <div class="preloader-border"></div>
          <!-- Loading Yazısı -->
          <h1 class="preloader-text">Y a p ı H a n</h1>
          <h3 class="preloader-subtext">HAN HOLDING KURULUŞUDUR</h3>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Asıl İçerik -->
      <BaseNavigation />
      <slot />
      <BaseFooter v-if="!isProjelerPage" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Sayfa geçişlerini dinlemek için router kullanımı
router.beforeEach((to, from, next) => {
  // Sayfa değişimi başlarken preloader'ı aktif et
  loading.value = true;
  next();
});

router.afterEach(() => {
  // Sayfa değişimi tamamlandığında belirli bir süre sonra preloader'ı kaldır
  setTimeout(() => {
    loading.value = false;
  }, 3000); // 3 saniyelik preloader süresi
});

// Sadece serenity sayfasında footer'ı gizlemek için computed property
const isProjelerPage = computed(() => route.path.includes('serenity'));
</script>

<style scoped>
.preloader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 9999;
}

.preloader-text-wrapper {
  position: relative;
  text-align: center;
}

.preloader-text {
  font-size: 4rem;
  color: white;
  letter-spacing: 2px;
  margin: 0;
  position: relative;
  z-index: 3;
}

.preloader-border {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: black;
  z-index: -1;
  animation: loading-animation 3s ease-in-out forwards;
}

.preloader-subtext {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  margin-top: 10px;
  z-index: 4;
}

@keyframes loading-animation {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  50% {
    clip-path: inset(0 0% 0 0);
  }
  100% {
    clip-path: inset(0 0% 0 100%);
  }
}
</style>
