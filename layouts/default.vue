<template>
  <div>
    <div v-if="loading">
      <!-- Preloader Kısmı -->
      <div class="preloader-container">
        <div class="preloader-text-wrapper">
          <!-- Arka Planda Genişleyen Border -->
          <div class="preloader-border"></div>
          <!-- Loading Yazısı -->
          <h1 class="preloader-text">Y a p H a n</h1>
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
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHead } from "#imports";

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

// Sadece serenity ve mavi-ufuklar sayfalarında footer'ı gizlemek için computed property
const isProjelerPage = computed(
  () =>
    route.path.includes("serenity") ||
    route.path.includes("mavi-ufuklar") ||
    route.path.includes("gecenin-isigi") ||
    route.path.includes("sultan-kosku") ||
    route.path.includes("panorama")
);

// Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YapHan İnşaat',
  description: 'YapHan İnşaat, Han Holding iştiraki olan, kaliteli ve güvenilir inşaat hizmetleri sunan bir şirkettir.',
  url: 'https://yaphan.com.tr',
  logo: 'https://yaphan.com.tr/favicon.svg',
  sameAs: [
    'https://www.instagram.com/',
  ],
  potentialAction: {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': 'https://yaphan.com.tr/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'YapHan İnşaat Projeleri',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Tamamlanan Projeler',
        url: 'https://yaphan.com.tr/projeler/tamamlanan'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Devam Eden Projeler',
        url: 'https://yaphan.com.tr/projeler/devameden'
      }
    ]
  },
  department: [
    {
      '@type': 'Organization',
      name: 'Hakkımızda',
      url: 'https://yaphan.com.tr/hakkimizda',
      description: 'YapHan İnşaat hakkında detaylı bilgi'
    },
    {
      '@type': 'Organization',
      name: 'İletişim',
      url: 'https://yaphan.com.tr/bize-ulasin',
      description: 'YapHan İnşaat iletişim bilgileri'
    }
  ]
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
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
