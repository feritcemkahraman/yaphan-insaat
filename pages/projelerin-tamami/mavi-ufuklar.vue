<template>
  <div class="h-screen flex overflow-hidden bg-gray-800 text-white relative">
    <!-- Ana Görsel Container -->
    <div class="absolute inset-0 w-full h-full">
      <transition name="fade" mode="out-in">
        <img
          :key="currentIndex"
          :src="selectedImage"
          :alt="`Görsel ${currentIndex + 1}`"
          class="w-full h-full object-cover"
        />
      </transition>
    </div>

    <!-- Overlay Container -->
    <div class="relative w-full h-full">
      <!-- Sol taraf - Başlık ve Açıklama -->
      <div
        class="absolute left-0 bottom-0 w-1/3 p-12 pb-0 bg-gradient-to-t from-black/80 to-transparent"
      >
        <h2 class="text-5xl font-light mb-6">
          Mavi Ufuklar Villası – Konfora Açılan Bir Yaşam Alanı
        </h2>
        <p class="text-lg leading-relaxed opacity-90 mb-12 mt-6">
          Mavi Ufuklar Villası, adından aldığı ilhamla gökyüzü ve denizle
          bütünleşen bir huzur vahanız olacak. Doğayla iç içe, engin ufuklara
          açılan bu özel villa, sakinliğin ve lüksün eşsiz bir uyumla bir araya
          geldiği bir yaşam deneyimi sunar. Villanın geniş ve ferah odaları,
          doğal ışığın bolca içeri girmesine olanak tanırken, modern tasarım
          çizgileriyle göz doldurur. Mavi tonlarının hakim olduğu ince detaylar,
          mekâna dingin bir atmosfer kazandırır. Villanın geniş terası, gün
          batımının keyfini çıkarabileceğiniz, unutulmaz manzaralar sunan bir
          seyir alanıdır. Mavi Ufuklar Villası, şehirden uzaklaşarak doğanın
          kollarında konfor ve zarafeti en yüksek düzeyde deneyimlemenizi
          sağlıyor.
        </p>
      </div>

      <!-- Ana Görsel Navigation Arrows -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors z-20"
        @click="previousImage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors z-20"
        @click="nextImage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Thumbnail Slider Container -->
      <div class="absolute bottom-0 right-0 bg-black/60 p-6 z-20">
        <div class="flex items-center gap-4">
          <!-- Thumbnail Previous Button -->
          <button
            class="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            @click="previousThumbnail"
            :disabled="thumbnailStartIndex === 0"
            :class="{
              'opacity-50 cursor-not-allowed': thumbnailStartIndex === 0,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Thumbnails -->
          <div
            class="flex gap-4 overflow-hidden"
            :style="{ width: isMobile ? 'calc(100vw - 100px)' : '784px' }"
          >
            <div
              class="flex gap-4 transition-transform duration-300 ease-in-out"
              :style="{
                transform: `translateX(-${
                  thumbnailStartIndex * thumbnailOffset
                }px)`,
              }"
            >
              <div
                v-for="(image, index) in images"
                :key="index"
                class="relative cursor-pointer transition-all duration-300 flex-shrink-0"
                :class="[
                  currentIndex === index ? 'opacity-100' : 'opacity-50',
                  'hover:opacity-80',
                ]"
                @click="selectImage(index)"
                :style="{
                  width: isMobile ? 'calc((100vw - 120px) / 2)' : '144px',
                }"
              >
                <img
                  :src="image"
                  :alt="`Thumbnail ${index + 1}`"
                  class="object-cover w-full"
                  :style="{ height: isMobile ? '35vw' : '96px' }"
                />
                <div
                  v-if="currentIndex === index"
                  class="absolute inset-0 border-2 border-white"
                ></div>
              </div>
            </div>
          </div>

          <!-- Thumbnail Next Button -->
          <button
            class="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            @click="nextThumbnail"
            :disabled="thumbnailStartIndex >= images.length - visibleThumbnails"
            :class="{
              'opacity-50 cursor-not-allowed':
                thumbnailStartIndex >= images.length - visibleThumbnails,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/projeler/tamamlanan/img/yaphan-mavi-ufuklar-villa.webp",
        "/projeler/tamamlanan/img/yaphan-mavi-ufuklar-villa-2.webp",
      ],
      currentIndex: 0,
      thumbnailStartIndex: 0,
      isMobile: false,
      windowWidth: 0,
    };
  },

  computed: {
    selectedImage() {
      return this.images[this.currentIndex];
    },
    visibleThumbnails() {
      return this.isMobile ? 2 : 5;
    },
    thumbnailOffset() {
      if (process.client) {
        return this.isMobile ? (this.windowWidth - 120) / 2 + 16 : 144 + 16;
      }
      return 144 + 16;
    },
  },

  methods: {
    selectImage(index) {
      this.currentIndex = index;
    },

    previousImage() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.images.length - 1
          : this.currentIndex - 1;
      this.ensureCurrentImageVisible();
    },

    nextImage() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1
          ? 0
          : this.currentIndex + 1;
      this.ensureCurrentImageVisible();
    },

    previousThumbnail() {
      if (this.thumbnailStartIndex > 0) {
        this.thumbnailStartIndex--;
      }
    },

    nextThumbnail() {
      if (
        this.thumbnailStartIndex <
        this.images.length - this.visibleThumbnails
      ) {
        this.thumbnailStartIndex++;
      }
    },

    ensureCurrentImageVisible() {
      if (this.currentIndex < this.thumbnailStartIndex) {
        this.thumbnailStartIndex = this.currentIndex;
      } else if (
        this.currentIndex >=
        this.thumbnailStartIndex + this.visibleThumbnails
      ) {
        this.thumbnailStartIndex = Math.max(
          0,
          this.currentIndex - (this.visibleThumbnails - 1)
        );
      }
    },

    handleKeyPress(e) {
      if (e.key === "ArrowLeft") {
        this.previousImage();
      } else if (e.key === "ArrowRight") {
        this.nextImage();
      }
    },

    checkMobile() {
      if (process.client) {
        this.isMobile = window.innerWidth <= 768;
        this.windowWidth = window.innerWidth;
      }
    },

    initializeClientSide() {
      if (process.client) {
        this.checkMobile();
        window.addEventListener("resize", this.checkMobile);
        window.addEventListener("keydown", this.handleKeyPress);
      }
    },
  },

  mounted() {
    this.initializeClientSide();
  },

  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("keydown", this.handleKeyPress);
      window.removeEventListener("resize", this.checkMobile);
    }
  },
};
</script>

<style scoped>
/* Masaüstü görünümü için mevcut stiller korunuyor */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Mobil görünüm için özel stiller */
@media (max-width: 768px) {
  /* Ana görsel container için mobil düzenlemeler */
  .absolute.inset-0 {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .absolute.inset-0 img {
    height: 55vh !important;
    object-fit: contain !important;
    width: 100% !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  /* Başlık ve açıklama için mobil düzenlemeler */
  .absolute.left-0.bottom-0 {
    width: 100% !important;
    padding: 1rem !important;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2),
      transparent
    ) !important;
    bottom: auto !important;
    top: 0 !important;
    z-index: 20;
  }

  .absolute.left-0.bottom-0 h2 {
    font-size: 2rem !important;
    margin-bottom: 0.5rem !important;
  }

  .absolute.left-0.bottom-0 p {
    font-size: 1rem !important;
    margin-bottom: 1rem !important;
  }

  /* Thumbnail slider için mobil düzenlemeler */
  .absolute.bottom-0.right-0 {
    width: 100%;
    padding: 1rem !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }

  .flex.gap-4.overflow-hidden {
    width: calc(100vw - 100px) !important;
  }

  .flex.gap-4.overflow-hidden .flex.gap-4 > div {
    width: calc((100vw - 120px) / 2) !important;
    flex: 0 0 auto;
  }

  .flex.gap-4.overflow-hidden img {
    width: 100% !important;
    height: 35vw !important;
  }

  /* Thumbnail görsel hover ve aktif durumları */
  .flex.gap-4.overflow-hidden .flex.gap-4 > div {
    opacity: 0.7;
    transition: opacity 0.1s ease;
  }

  .flex.gap-4.overflow-hidden .flex.gap-4 > div:hover,
  .flex.gap-4.overflow-hidden .flex.gap-4 > div.active {
    opacity: 1;
  }
}
</style>
