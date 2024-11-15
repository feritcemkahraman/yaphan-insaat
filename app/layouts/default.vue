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
      <BaseFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const loading = ref(false);
const router = useRouter();

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
  }, 3000); // 3 saniyelik preloader gösterim süresi
});
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
  z-index: 9999; /* Diğer içeriklerin üzerinde yer alması için yüksek z-index değeri */
}

.preloader-text-wrapper {
  position: relative; /* İçerideki öğeleri konumlandırmak için relative pozisyon */
  text-align: center; /* Metni ortalamak için */
}

.preloader-text {
  font-size: 4rem; /* Yazı boyutu */
  color: white;
  letter-spacing: 2px;
  margin: 0;
  position: relative; /* z-index için pozisyon vermemiz gerektiği için relative */
  z-index: 3; /* Yazının üstte kalması için yüksek bir z-index değeri */
}

.preloader-border {
  position: absolute;
  top: -20px; /* Yazının biraz üstünden başlatılması */
  left: -20px; /* Yazının biraz solundan başlatılması */
  right: -20px; /* Yazının biraz sağından çıkması */
  bottom: -20px; /* Yazının biraz altına kadar inmesi */
  background: black; /* Dolu bir arka plan yap */
  z-index: -1; /* Loading yazısının arkasında kalacak */
  animation: loading-animation 3s ease-in-out forwards;
}

.preloader-subtext {
  font-size: 2rem; /* Yazı boyutunu artırdık */
  font-weight: bold; /* Kalın font */
  color: white; /* Yazı rengini siyah yaptık, görünür olması için */
  text-transform: uppercase; /* Büyük harflerle yazı */
  margin-top: 10px; /* Üstten biraz boşluk */
  z-index: 4; /* Yazının üstte kalması için daha yüksek bir z-index değeri */
}

@keyframes loading-animation {
  0% {
    clip-path: inset(0 100% 0 0); /* Sol baştan başla */
  }
  50% {
    clip-path: inset(0 0% 0 0); /* Tam dolduğunda tüm alanı göster */
  }
  100% {
    clip-path: inset(0 0% 0 100%); /* Sol taraftan itibaren kaybol */
  }
}
</style>
