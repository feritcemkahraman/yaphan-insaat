<template>
  <div class="h-screen flex overflow-hidden bg-gray-800 text-white relative">
    <!-- Overlay Container -->
    <div class="relative w-full h-full">
      <!-- Sol taraf - Başlık ve Açıklama -->
      <div class="text-section">
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

      <!-- Ana Görsel Container -->
      <div class="image-section">
        <transition name="fade" mode="out-in">
          <img
            :key="currentIndex"
            :src="selectedImage"
            :alt="`Görsel ${currentIndex + 1}`"
            class="w-full h-full object-cover"
          />
        </transition>

        <!-- Ana Görsel Navigation Arrows -->
        <button
          class="nav-arrow nav-arrow-left"
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
          class="nav-arrow nav-arrow-right"
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
      </div>

      <!-- Thumbnail Slider Container -->
      <div class="thumbnail-section">
        <div class="flex items-center gap-4">
          <!-- Thumbnail Previous Button -->
          <button
            class="thumbnail-nav-btn"
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
            class="thumbnail-slider flex gap-4 overflow-x-auto"
            :style="{ width: isMobile ? 'calc(100vw - 100px)' : `${images.length * 160}px` }"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
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
            class="thumbnail-nav-btn"
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
      touchStartX: 0,
      touchMoveX: 0,
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

    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },

    handleTouchMove(e) {
      this.touchMoveX = e.touches[0].clientX;
      const diff = this.touchMoveX - this.touchStartX;
      
      // Yatay kaydırma mesafesi 50px'den fazlaysa
      if (Math.abs(diff) > 50) {
        if (diff > 0 && this.currentIndex > 0) {
          // Sağa kaydırma
          this.previousImage();
          this.touchStartX = this.touchMoveX;
        } else if (diff < 0 && this.currentIndex < this.images.length - 1) {
          // Sola kaydırma
          this.nextImage();
          this.touchStartX = this.touchMoveX;
        }
      }
    },

    handleTouchEnd() {
      this.touchStartX = 0;
      this.touchMoveX = 0;
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
/* Transition efektleri */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Temel stiller */
.text-section {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.333%;
  padding: 3rem;
  padding-bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  z-index: 10;
}

.image-section {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.thumbnail-section {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  z-index: 20;
}

.thumbnail-nav-btn {
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.thumbnail-nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.thumbnail-slider {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.thumbnail-slider::-webkit-scrollbar {
  display: none;
}

.thumbnail-item {
  flex: 0 0 auto;
  width: calc((100vw - 32rem) / var(--image-count));
  max-width: 144px;
  aspect-ratio: 16/9;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.nav-arrow-left {
  left: 1rem;
}

.nav-arrow-right {
  right: 1rem;
}

/* Mobil görünüm için özel stiller */
@media (max-width: 768px) {
  /* Ana container düzenlemesi */
  .h-screen.flex {
    min-height: 100vh !important;
    height: auto !important;
    flex-direction: column !important;
    overflow-y: auto !important;
  }

  .relative.w-full.h-full {
    position: static !important;
    height: auto !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
  }

  /* Başlık ve açıklama için mobil düzenlemeler */
  .text-section {
    position: static !important;
    width: 100% !important;
    padding: 1rem !important;
    background: #1f2937 !important;
    order: 1 !important;
  }

  /* Ana görsel container için mobil düzenlemeler */
  .image-section {
    position: relative !important;
    height: 50vh !important;
    width: 100% !important;
    order: 2 !important;
  }

  .image-section img {
    position: static !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }

  /* Thumbnail slider için mobil düzenlemeler */
  .thumbnail-section {
    position: relative !important;
    width: 100% !important;
    padding: 1rem !important;
    background: rgba(0, 0, 0, 0.8) !important;
    order: 3 !important;
  }

  .thumbnail-slider {
    width: 100% !important;
    padding-bottom: 0.5rem;
  }

  .thumbnail-item {
    flex: 0 0 auto;
    width: 120px !important;
  }

  .nav-arrow {
    position: absolute;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 30 !important;
  }

  .nav-arrow-left {
    left: 1rem !important;
  }

  .nav-arrow-right {
    right: 1rem !important;
  }
}
</style>
