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
    route.path.includes("panorama") ||
    route.path.includes("zephyros-villa") ||
    route.path.includes("kristal-dusler-konagi") ||
    route.path.includes("yaphan-apartman") ||
    route.path.includes("yaphan-site") ||
    route.path.includes("yaphan-tower") ||
    route.path.includes("villa-elysium-ankara") ||
    route.path.includes("dosemealti-villalari")
);

// Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YapHan İnşaat",
  alternateName: "YapHan İnşaat | Geleceği Güvenle İnşa Ediyoruz",
  url: "https://yaphan.com.tr",
  description:
    "YapHan İnşaat, Han Holding iştiraki olan, kaliteli ve güvenilir inşaat hizmetleri sunan bir şirkettir.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yaphan.com.tr/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YapHan İnşaat",
  url: "https://yaphan.com.tr",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
};

const siteNavigationLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Ana Sayfa",
      description:
        "YapHan İnşaat - Han Holding güvencesiyle prestijli konut projeleri, kaliteli yaşam alanları ve modern mimari.",
      url: "https://yaphan.com.tr",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Hakkımızda",
      description:
        "10+ yılı aşkın tecrübesiyle, Han Holding İştiraki olan YapHan İnşaat'ın kurumsal değerleri, misyonu ve vizyonu hakkında detaylı bilgi edinin.",
      url: "https://yaphan.com.tr/hakkimizda",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Tamamlanan Projeler",
      description:
        "Tamamlamış olduğumuz prestijli konut projelerimizi inceleyin. Güven ve kalite söz konusu olduğunda tercih YapHan İnşaat.",
      url: "https://yaphan.com.tr/projeler/tamamlanan",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Devam Eden Projeler",
      description:
        "YapHan İnşaat'ın yeni nesil yaşam projeleri ve devam eden prestijli konut projelerimiz hakkında bilgi alın.",
      url: "https://yaphan.com.tr/projeler/devameden",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "İletişim",
      description:
        "Projelerimiz hakkında detaylı bilgi almak için bize ulaşın. Ofisimizi ziyaret edin veya telefon ile iletişime geçin.",
      url: "https://yaphan.com.tr/bize-ulasin",
    },
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(organizationLd),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(siteNavigationLd),
    },
  ],
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
