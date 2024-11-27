<template>
  <!-- Banner bölümü başlangıcı -->
  <div class="w-full h-screen">
    <div class="relative h-[calc(100vh-4rem)] overflow-hidden">
      <div
        class="absolute w-full h-[130%] -top-[15%] left-0 parallax-container"
        :style="{
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        }"
      >
        <img
          class="object-cover w-full h-full"
          src="/banner.jpg"
          alt="yapihan banner"
        />
      </div>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center mx-2 md:mx-0 text-white"
      >
        <div class="bg-black/40 backdrop-blur-sm p-8 rounded-lg max-w-6xl">
          <p class="text-lg mb-4 text-center">Y A P I H A N</p>
          <div class="text-center mb-12">
            <span class="text-3xl md:text-5xl font-bold">
              Güven ve Kalite İnşa Ediyoruz.
            </span>
            <br />
            <br />
            <span class="text-xl"
              >Kaliteli ve güvenilir projeler hayata geçirerek, inşaat
              sektöründe sağlam temeller atıyor; her adımda müşteri
              memnuniyetini ön planda tutarak uzun vadeli, güvene dayalı
              ilişkiler üretmeyi amaçlıyoruz.</span
            >
          </div>
          <div class="text-center">
            <NuxtLink
              to="/hakkimizda"
              class="mt-4 px-10 py-2 border-2 rounded hover:backdrop-blur transition-all inline-block"
              >Hakkımızda</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner bölümü sonu -->

  <!--Hakkımızda bölümü başlangıcı-->
  <section class="py-20 md:pb-48 w-full">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Image Section -->
        <div class="relative min-h-[400px]">
          <div class="relative h-full">
            <!-- First Image -->
            <NuxtImg
              src="/serenity-villa.webp"
              alt="About 1"
              class="absolute w-3/5 h-4/5 object-cover will-change-transform"
              :style="{
                transform: firstImageTransform,
                transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
              }"
              loading="lazy"
            />
            <!-- Second Image -->
            <NuxtImg
              src="/yapihan-hakkinda-section.jpg"
              alt="About 2"
              class="absolute w-3/5 h-4/5 object-cover mt-[20%] ml-[40%] will-change-transform"
              :style="{
                transform: secondImageTransform,
                transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
              }"
              loading="lazy"
            />
            <!-- Decorative Border -->
            <div
              class="absolute w-3/5 h-4/5 top-[10%] left-[20%] border-4 border-blue-600 -z-10"
            />
          </div>
        </div>

        <!-- Content Section -->
        <div>
          <h4 class="text-blue-600 font-bold mb-2">Hakkımızda</h4>
          <h1 class="text-4xl md:text-3xl font-bold mb-6">
            Geleceği İnşa Ediyoruz. <br />
            Vizyonumuz doğrultusunda, sektörde kalıcı değerler yaratmayı
            amaçlıyoruz.
          </h1>
          <p class="mb-4">
            YapıHan olarak, belirlediğimiz vizyon ve misyon doğrultusunda
            çalışmalarımıza yön veriyor, sektörde kalıcı ve olumlu izler
            bırakmayı hedefliyoruz. Güçlü ekibimiz ve değerlerimizle, geleceğe
            güvenle bakıyoruz.
          </p>
          <p class="mb-8">
            Yenilikçi çözümlerimiz ve sürdürülebilir projelerimizle, müşteri
            memnuniyetini en üst düzeyde tutmayı, sektörde örnek alınan bir
            marka olmayı ve topluma değer katan çalışmalara imza atmayı
            hedefliyoruz. Güven, kalite ve dürüstlük ilkelerimizle hareket
            ederek, geleceği birlikte inşa ediyoruz.
          </p>

          <!-- Experience Counter -->
          <div class="flex items-center ml-10 md:ml-0 mb-16 md:mb-16">
            <div
              ref="counterRef"
              class="flex items-center justify-center border-4 border-blue-600 w-32 h-32"
            >
              <span class="text-6xl font-bold">{{ counter }}+</span>
            </div>
            <div class="ml-6">
              <h3 class="text-2xl font-bold">{{ text1 }}</h3>
              <h3 class="text-2xl font-bold">{{ text2 }}</h3>
              <h3 class="text-2xl font-bold">{{ text3 }}</h3>
            </div>
          </div>

          <!-- CTA Button -->
          <NuxtLink
            to="/hakkimizda"
            class="bg-blue-600 text-white ml-28 md:ml-0 px-8 py-4 rounded hover:bg-blue-700 transition-colors"
          >
            Daha Fazla
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!--Hakkımızda bölümü sonu-->

  <!-- Planlama bölümü başlangıcı -->
  <div class="relative">
    <!-- Arka plan görseli - height ayarlandı -->
    <div
      class="absolute top-0 left-0 w-full h-[38vh] bg-cover bg-center z-0"
      :style="{
        backgroundImage: `url('/services.webp')`,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }"
    ></div>

    <!-- İçerik -->
    <div class="relative z-10 px-4 py-16 mx-auto max-w-7xl">
      <!-- Üst başlık -->
      <div class="text-center mb-16">
        <p
          class="text-white font-semibold text-sm uppercase tracking-wider mb-4"
        >
          NELER YAPIYORUZ
        </p>
        <h2 class="text-white text-3xl md:text-4xl font-bold">
          Sizlere mükemmeli sunmak için hiçbir detayı atlamıyoruz.
        </h2>
      </div>

      <!-- Kartlar -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Planlama Kartı -->
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
          <div class="text-center">
            <div class="text-4xl mb-4">📝</div>
            <h3 class="text-xl font-bold mb-4">Planlama</h3>
            <p class="text-gray-600 leading-relaxed">
              Başarılı projeler için doğru planlama yapmanın öneminin
              farkındayız. Bu nedenle, her proje öncesinde detaylı analizler ve
              stratejik değerlendirmelerle sağlam bir yapı kuruyoruz.
            </p>
          </div>
        </div>

        <!-- İç Mekan Kartı -->
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
          <div class="text-center">
            <div class="text-4xl mb-4">🛋</div>
            <h3 class="text-xl font-bold mb-4">İç Mekan</h3>
            <p class="text-gray-600 leading-relaxed">
              İç mekan tasarımında, müşterilerimizin ihtiyaçlarını ve yaşam
              tarzlarını en iyi şekilde yansıtacak çözümler sunuyoruz. Konfor ve
              işlevselliği bir araya getirerek, göz alıcı alanlar oluşturuyoruz.
            </p>
          </div>
        </div>

        <!-- Dış Mekan Kartı -->
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
          <div class="text-center">
            <div class="text-4xl mb-4">🏠</div>
            <h3 class="text-xl font-bold mb-4">Dış Mekan</h3>
            <p class="text-gray-600 leading-relaxed">
              Yapılarımızın dış görünüşünde sağlamlık ve zarafeti birleştirerek,
              çevreye değer katan bir mimari yaklaşımı benimsiyoruz. YapHan
              olarak, dış cephedeki her detayla kalıcı izler bırakmayı
              hedefliyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Planlama bölümü sonu -->

  <!-- Son Projeler Bölümü Başlangıcı -->
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <!-- Başlık -->
    <div class="mb-12">
      <p class="text-gray-600 text-sm uppercase tracking-wider mb-2">
        SON PROJELERİMİZ
      </p>
      <h2 class="text-3xl md:text-4xl font-bold">
        Son projelerimizden bazılarına göz atın.
      </h2>
    </div>

    <!-- Projeler -->
    <div class="space-y-20">
      <!-- Lumina Villaları -->
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="md:w-2/3">
          <img
            src="/lumina-villa.jpg"
            alt="Lumina Villaları"
            class="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/3 md:ml-10">
          <h3 class="text-4xl font-bold mb-4">Lumina Villaları</h3>
          <p class="text-gray-600 mb-6">
            Projenin mimarisi, elit yaşamın için tasarlanmış şıklın, estetik
            alanların yanı sıra şık ve davetkar karşılama alanlarından oluşan
            bir villann tamamlayıcı özelliklerini ifade etmektedir.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-black border-2 px-5 py-2 border-gray-600 rounded hover:opacity-75 transition-opacity"
          >
            İncele
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-400 lg:my-8" />

      <!-- Villa Luxoria -->
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="md:w-1/3 md:mr-10">
          <h3 class="text-4xl font-bold mb-4">Villa Luxoria</h3>
          <p class="text-gray-600 mb-6">
            Projenin mimarisi, elit yaşamın için tasarlanmış şıklın, estetik
            alanların yanı sıra şık ve davetkar karşılama alanlarından oluşan
            bir villanın tamamlayıcı özelliklerini ifade etmektedir.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-black border-2 px-5 py-2 border-gray-600 rounded hover:opacity-75 transition-opacity"
          >
            İncele
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div class="md:w-2/3">
          <img
            src="/luxoria-villa.jpg"
            alt="Villa Luxoria"
            class="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-400 lg:my-8" />

      <!-- Serenity Villaları -->
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="md:w-2/3">
          <img
            src="/serenity-villa.webp"
            alt="Serenity Villaları"
            class="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/3 md:ml-10">
          <h3 class="text-4xl font-bold mb-4">Serenity Villaları</h3>
          <p class="text-gray-600 mb-6">
            Projenin mimarisi, elit yaşamın için tasarlanmış şıklın, estetik
            alanların yanı sıra şık ve davetkar karşılama alanlarından oluşan
            bir villanın tamamlayıcı özelliklerini ifade etmektedir.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-black border-2 px-5 py-2 border-gray-600 rounded hover:opacity-75 transition-opacity"
          >
            İncele
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-400 lg:my-8" />
    </div>
  </section>
  <!-- Son Projeler Bölümü Sonu -->

  <!-- Çözüm Ortaklarımız Bölümü Başlangıcı -->

  <section class="relative py-16 px-4 w-full">
    <!-- Arka plan görseli -->
    <div
      class="absolute top-0 left-0 w-full h-[40vh] bg-cover bg-center z-0"
      style="
        background-image: url('/yapihancozumortaklari.jpg');
        background-color: rgba(0, 0, 0, 0.6);
        background-blend-mode: overlay;
      "
    ></div>

    <!-- İçerik -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Başlık -->
      <div class="text-center mb-12">
        <p class="text-gray-300 text-sm uppercase tracking-wider mb-2">
          ÇÖZÜM ORTAKLARIMIZ
        </p>
        <h2 class="text-white text-3xl md:text-4xl font-bold">
          Çözüm ortaklarımızla kurduğumuz güçlü iş birlikleri sayesinde, her
          projede en yüksek kaliteyi ve güveni sunmayı başarıyoruz.
        </h2>
      </div>

      <!-- Logolar -->
      <div class="logo-slider">
        <div class="logo-track">
          <!-- İlk set logolar -->
          <div
            v-for="logo in logos"
            :key="logo.id"
            class="logo-slide bg-white p-4 md:p-3 lg:p-2 rounded-lg shadow-lg flex items-center justify-center"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="w-full h-auto object-contain max-h-24"
            />
          </div>
          <!-- Klonlanmış set logolar -->
          <div
            v-for="logo in logos"
            :key="'clone-' + logo.id"
            class="logo-slide bg-white p-4 md:p-3 lg:p-2 rounded-lg shadow-lg flex items-center justify-center"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="w-full h-auto object-contain max-h-24"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Çözüm Ortaklarımız Bölümü Sonu -->
  <hr class="my-12 border-white" />
</template>

<script setup lang="ts">
import { useSeo } from "../../composables/useSeo";

const { setSeo } = useSeo();

setSeo({
  title:
    "YapHan İnşaat - Güven ve Kalite İnşa Ediyoruz | İstanbul'da Lüx Villa Projeleri ve Lüks Konut Projeleri",
  description:
    "YapHan İnşaat ile hayalinizdeki projeyi gerçeğe dönüştürün. İstanbul'da 20 yılı aşkın tecrübemizle, modern ve lüks konut projeleri, ticari yapılar inşa ediyoruz.",
  keywords:
    "yaphan inşaat, istanbul lüks konut projeleri, güvenilir müteahhit, modern konut projeleri, ticari yapılar, inşaat firması istanbul",
  image: "/banner.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YapHan İnşaat",
    description:
      "İstanbul'da 10 yılı aşkın tecrübesiyle lüks villa projeleri ve lüks konut projeleri ve ticari yapılar inşa eden güvenilir inşaat firması",
    url: "https://yaphan.com.tr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-XXX-XXX-XXXX",
      contactType: "yapihan insaat bilgi",
    },
  },
});

const counter = ref(0);
const counterRef = ref(null);
const text1 = ref("");
const text2 = ref("");
const text3 = ref("");
const targetValue = 10;
const duration = 2000;
const hasAnimated = ref(false);

const typeWriter = async (
  text: string,
  targetRef: Ref<string>,
  delay: number = 100
) => {
  const chars = text.split("");
  for (let i = 0; i < chars.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    targetRef.value += chars[i];
  }
};

const startTypeWriter = async () => {
  text1.value = "";
  text2.value = "";
  text3.value = "";

  await typeWriter("Yıllık", text1);
  await typeWriter("Sektör", text2);
  await typeWriter("Tecrübesiyle", text3);
};

const startCounter = () => {
  if (hasAnimated.value) return;

  const startTime = Date.now();
  const updateCounter = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    counter.value = Math.floor(progress * targetValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
  startTypeWriter();
  hasAnimated.value = true;
};

const logos = [
  { id: 1, src: "/turkuaz-logo.png", alt: "Turkuaz" },
  { id: 2, src: "/segna-logo.png", alt: "Segna" },
  { id: 3, src: "/integral-logo.png", alt: "Integral" },
  { id: 4, src: "/ahlatci-logo.png", alt: "Ahlatci" },
  { id: 5, src: "/ah-enerji-logo.png", alt: "AH Enerji" },
  { id: 6, src: "/uzay-logo.png", alt: "Uzay" },
];

const targetScrollPosition = ref(0);
const scrollPosition = ref(0);

// Smooth scroll position update
const updateScrollPosition = () => {
  const currentScroll = window.scrollY;
  targetScrollPosition.value = currentScroll;

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  scrollPosition.value = lerp(
    scrollPosition.value,
    targetScrollPosition.value,
    0.1
  );

  requestAnimationFrame(updateScrollPosition);
};

const firstImageTransform = computed(() => {
  const maxMove = 30;
  const movement = -scrollPosition.value * 0.02;
  return `translateY(${Math.max(-maxMove, Math.min(movement, maxMove))}px)`;
});

const secondImageTransform = computed(() => {
  const maxMove = 30;
  const movement = scrollPosition.value * 0.02;
  return `translateY(${Math.max(-maxMove, Math.min(movement, maxMove))}px)`;
});

onMounted(() => {
  updateScrollPosition();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  if (counterRef.value) {
    observer.observe(counterRef.value);
  }

  const handleScroll = () => {
    requestAnimationFrame(() => {
      targetScrollPosition.value = window.scrollY;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
.parallax-container {
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.logo-slider {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.logo-track {
  display: inline-flex;
  animation: scroll 20s linear infinite;
}

.logo-track:hover {
  animation-play-state: paused;
}

.logo-slide {
  flex: 0 0 16.66%; /* 100% / 6 logos per row */
  box-sizing: border-box;
  margin: 0 10px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
