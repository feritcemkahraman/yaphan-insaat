<template>
  <!-- Banner bölümü başlangıcı -->
  <div class="w-full h-screen">
    <div class="relative">
      <img
        class="object-cover w-full h-[calc(100vh-4rem)]"
        src="/banner.webp"
        alt="yapihan banner"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center mx-2 md:mx-0 text-white"
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
  <div class="flex flex-col md:flex-row mb-32 mx-4 md:mx-0">
    <img
      class="w-full md:w-auto mb-4 md:mt-10 md:ml-96 md:mb-24"
      src="/tec.png"
      alt="tec"
    />
    <div
      class="flex flex-col items-center md:items-start text-center md:text-start md:mt-10 md:ml-24"
    >
      <span class="text-l mb-4">H a k k ı m ı z d a</span>
      <h3 class="text-5xl mb-8">Güven İnşa Ediyoruz...</h3>
      <p class="max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
        veritatis voluptate iste sint nostrum consequuntur blanditiis? At, sit
        soluta, officiis mollitia hic voluptate quibusdam, explicabo obcaecati
        debitis odit quasi distinctio vitae provident et. Aspernatur nesciunt
        necessitatibus quos sunt quidem vitae excepturi, possimus voluptas
        beatae, aliquid adipisci facilis quod quae odio!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        ipsam esse nemo eaque quidem. Delectus deleniti reprehenderit porro
        minus atque saepe consequuntur, placeat cum earum explicabo est eos
        ducimus voluptatem cupiditate esse maiores? Nobis doloribus nihil
        doloremque nostrum suscipit repudiandae expedita porro in laborum,
        reprehenderit molestiae minus quis veniam rerum.
      </p>
      <button
        class="border-2 border-black py-2 px-8 mt-8 hover:bg-black hover:text-white transition-colors"
      >
        Hakkımızda
      </button>
    </div>
  </div>
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
</template>

<script setup lang="ts"></script>
