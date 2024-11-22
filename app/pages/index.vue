<template>
   <!-- Banner bölümü başlangıcı -->
   <div class="w-full h-screen">
    <div class="relative h-[calc(100vh-4rem)] overflow-hidden">
      <div
        class="absolute w-full h-[130%] -top-[15%] left-0 parallax-container"
      >
        <img
          class="object-cover w-full h-full"
          src="/banner.webp"
          alt="yapihan banner"
        />
      </div>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center mx-2 md:mx-0 text-white"
        :style="{
          transform: `translateY(${-scrollPosition * 0.3}px)`,
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
        }"
      >
        <p class="text-lg mb-4">Y A P I H A N</p>
        <div class="text-center max-w-6xl mb-12">
          <span class="text-3xl md:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <br />
          <br />
          <span class="text-l"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quo suscipit eos esse quod! Excepturi praesentium veniam eligendi
            incidunt perferendis rem vitae neque voluptatem, sint deserunt?
            Expedita reiciendis voluptatum, tenetur dolores ea vero illo
            exercitationem magnam vel similique accusantium atque.</span
          >
        </div>
        <NuxtLink
          to="/hakkimizda"
          class="mt-4 px-10 py-2 border-2 rounded hover:backdrop-blur transition-all"
          >Hakkımızda</NuxtLink
        >
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
              class="absolute w-3/5 h-4/5 object-cover"
              loading="lazy"
            />
            <!-- Second Image -->
            <NuxtImg
              src="/banner.webp"
              alt="About 2"
              class="absolute w-3/5 h-4/5 object-cover mt-[20%] ml-[40%]"
              loading="lazy"
            />
            <!-- Decorative Border -->
            <div class="absolute w-3/5 h-4/5 top-[10%] left-[20%] border-4 border-blue-600 -z-10" />
          </div>
        </div>

        <!-- Content Section -->
        <div>
          <h4 class="text-blue-600 font-bold mb-2">Hakkımızda</h4>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            A Creative Architecture Agency For Your Dream Home
          </h1>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <p class="mb-8">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. 
            Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
          </p>

          <!-- Experience Counter -->
          <div class="flex items-center mb-16 md:mb-24">
            <div class="flex items-center justify-center border-4 border-blue-600 w-32 h-32">
              <span class="text-6xl font-bold">10+</span>
            </div>
            <div class="ml-6">
              <h3 class="text-2xl font-bold">Yıllık</h3>
              <h3 class="text-2xl font-bold">Sektör</h3>
              <h3 class="text-2xl font-bold">Tecrübesiyle</h3>
            </div>
          </div>

          <!-- CTA Button -->
          <NuxtLink 
            to="/hakkimizda" 
            class="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
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
              çevreye değer katan bir mimari yaklaşımı benimsiyoruz. Yapılfan
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
const logos = [
  { id: 1, src: "/turkuaz-logo.png", alt: "Turkuaz" },
  { id: 2, src: "/segna-logo.png", alt: "Segna" },
  { id: 3, src: "/integral-logo.png", alt: "Integral" },
  { id: 4, src: "/ahlatci-logo.png", alt: "Ahlatci" },
  { id: 5, src: "/ah-enerji-logo.png", alt: "AH Enerji" },
  { id: 6, src: "/uzay-logo.png", alt: "Uzay" },
];
const scrollPosition = ref(0)

onMounted(() => {
  const handleScroll = () => {
    requestAnimationFrame(() => {
      scrollPosition.value = window.scrollY
    })
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
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
