<template>
  <!--breadcrumb section start-->
  <div class="bg-gray-800 py-20 px-4 md:px-8">
    <div class="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        <p class="text-gray-400 text-lg mb-4">YapHan İnşaat Hakkında</p>
        Projelerimize, yenilikçi çözümler ve kapsamlı analizlerle yön veriyoruz.
      </h2>
    </div>
  </div>
  <!--breadcrumb section end-->

  <!--misyonumuz section start-->
  <div class="container mx-auto my-16 md:my-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src="/misyon.jpg"
          alt="YapHan İnşaat Misyon ve Vizyon - Lüks ve Modern İnşaat Projeleri"
          class="w-full md:w-4/5 h-auto shadow-lg mx-auto"
        />
      </div>
      <div class="px-4 md:px-0 flex flex-col justify-center">
        <p class="text-gray-600 font-semibold text-md pb-2">MİSYONUMUZ</p>
        <h2 class="text-2xl font-bold mb-4">
          İnşaat Sektöründe Geleceği Şekillendiren Yapılar Oluşturmak
        </h2>
        <p class="text-gray-600 mb-4">
          YapHan olarak vizyonumuz, inşaat sektöründe yenilikçi ve
          sürdürülebilir yaklaşımlarla geleceği şekillendiren lider bir marka
          olmaktır. Yaşam alanlarının sadece birer yapı değil, insanların
          hayatlarına değer katan mekanlar olduğunu bilincindeyiz. Bu nedenle,
          modern mimariye estetik tasarımlarla birleştirerek, fonksiyonel ve
          konforlu villalar inşa etmeyi hedefliyoruz.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-bold mb-2">
              Sürdürülebilir ve Çevre Dostu Projeler
            </h3>
            <p class="text-gray-600">
              Doğaya saygılı ve çevre dostu projeler geliştirerek, geleceği
              nesille yaşanabilir bir dünya bırakmayı amaçlıyoruz. Enerji
              verimliği, yüksek, ekolojik dengesi gözeten yapılarımızla en iyi
              şekilde kullanarak, akıllı ve konforlu standart haline getirmeyi
              planlıyoruz.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">
              Toplumsal Değerlere Katkı Sağlamak
            </h3>
            <p class="text-gray-600">
              Toplumun ihtiyaçlarına duyarlı projeler üretererek, sosyal
              sorumluluk bilinciyie hareket ediyoruz. Eğitimden sağlığa,
              kültürden sanata çeşitli alanlarda destekleyici faaliyetlerde
              bulunarak, toplumsal gelişime katkı sağlamayı vizyonumuzun bir
              parçası olarak görüyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--misyonumuz section end-->

  <!--fullwidth section start-->
  <div class="my-28">
    <div class="relative w-full h-[300px] overflow-hidden parallax-container">
      <div
        class="parallax-bg"
        :style="{ backgroundImage: 'url(/fw.jpg)' }"
      ></div>
      <div
        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <h2 class="text-white text-2xl md:text-4xl font-bold text-center px-4">
          Her projede mükemmelliği hedefleyen bir yaklaşım benimsiyoruz.
        </h2>
      </div>
    </div>
  </div>
  <!--fullwidth section end-->

  <!--vizyonumuz section start-->

  <div class="container mx-auto my-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="px-4 md:px-0 flex flex-col justify-center order-2 md:order-1">
        <p class="text-gray-600 font-semibold text-md pb-2">VİZYONUMUZ</p>
        <h2 class="text-2xl font-bold mb-4">
          Müşteri Memnuniyetini En Üst Seviyeye Çıkarmak
        </h2>
        <p class="text-gray-600 mb-4">
          Misyonumuz, müşterilerimizin beklentilerini aşan kaliteli ve güvenilir
          hizmetler sunmaktır. İhtiyaçlarını doğru analiz ederek, onlara en
          uygun çözümleri profesyonel bir yaklaşımla sağlamayı ilke ediniyoruz.
          Satış öncesi ve sonrası desteklerle, müşteri memnuniyetini sürekli
          kılmayı hedefliyoruz.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-bold mb-2">
              Kaliteden Ödün Vermeden Yenilikçi Çözümler Sunmak
            </h3>
            <p class="text-gray-600">
              İnşaat sektöründeki gelişmeleri yakından takip ederek,
              projelerimize yenilikçi ve yaratıcı çözümler entegre ediyoruz.
              Kaliteden asla ödün vermeden, en son teknolojileri ve malzemeleri
              kullanarak, dayanıklı ve estetik yapılar inşa ediyoruz. Sürekli
              eğitim ve gelişim programlarıyla ekibimizin yetkinliklerini
              artırıyoruz.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">
              Etik Değerlere ve İş Ahlakına Bağlılık
            </h3>
            <p class="text-gray-600">
              Faaliyetlerimizi ulusal ve uluslararası standartlara uygun şekilde
              yürütüyor, etik değerlere ve iş ahlakına sıkı sıkıya bağlı
              kalıyoruz. Şeffaflık, dürüstlük ve sorumluluk prensipleriyle
              hareket ederek, paydaşlarımızın güvenini kazanıyoruz. İş sağlığı
              ve güvenliği konularında titiz davranarak, çalışanlarımızın ve
              toplumun refahını ön planda tutuyoruz.
            </p>
          </div>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img
          src="/vizyonumuz.webp"
          alt="YapHan İnşaat Misyon ve Vizyon - Lüks ve Modern İnşaat Projeleri"
          class="w-full md:w-4/5 h-auto shadow-lg mx-auto"
        />
      </div>
    </div>
  </div>
  <!--vizyonumuz section end-->
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.parallax-container {
  position: relative;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 200%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>

<script setup lang="ts">
const { setSeo } = useSeo({
  title: "Hakkımızda - YapHan İnşaat | Kurumsal",
  description:
    "YapHan İnşaat, 10 yılı aşkın tecrübesiyle modern ve lüks konut projeleri, ticari yapılar inşa eden güvenilir bir inşaat firmasıdır.",
  keywords:
    "yaphan inşaat hakkında, inşaat firması, yaphan kurumsal, yaphan vizyon, yaphan misyon",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "YapHan İnşaat Hakkında",
    description: "YapHan İnşaat kurumsal bilgileri, misyon ve vizyonu",
    url: "https://yaphan.com.tr/hakkimizda",
    isPartOf: {
      "@type": "WebSite",
      name: "YapHan İnşaat",
      url: "https://yaphan.com.tr",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://yaphan.com.tr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hakkımızda",
          item: "https://yaphan.com.tr/hakkimizda",
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "YapHan İnşaat",
      description:
        "YapHan İnşaat, 10 yılı aşkın süredir lüks villa projeleri, modern konut projeleri ve ticari yapılar inşa eden güvenilir inşaat şirketi.",
      url: "https://yaphan.com.tr",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-XXX-XXX-XXXX",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    },
  },
});

setSeo();

const handleParallax = () => {
  const parallaxBg = document.querySelector(".parallax-bg") as HTMLElement;
  if (!parallaxBg) return;

  const container = document.querySelector(".parallax-container");
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  if (rect.top <= viewHeight && rect.bottom >= 0) {
    const scrolled = (viewHeight - rect.top) / (viewHeight + rect.height);
    const translateY = -(scrolled * 150);
    parallaxBg.style.transform = `translateY(${translateY}px)`;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleParallax);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleParallax);
});
</script>
