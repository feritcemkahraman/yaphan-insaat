<template>
  <div class="h-screen flex overflow-hidden bg-gray-800 text-white relative">
    <!-- Overlay Container -->
    <div class="relative w-full h-full">
      <!-- Sol taraf - Başlık ve Açıklama -->
      <div class="text-section">
        <h2 class="text-5xl font-light mb-6">Panorama Evleri</h2>
        <p class="text-lg leading-relaxed opacity-90 mb-12 mt-6">
          Panorama Evleri'nin sunduğu sadece evlerin içindeki konforla sınırlı
          değildi; site içerisinde yürüyüş parkurları, spor alanları ve çocuklar
          için güvenli oyun alanları da bulunuyordu. Komşuluk ilişkileri burada
          dostluklarla taçlanıyor, site sakinleri birbirine destek olan samimi
          bir topluluğun parçası olmanın mutluluğunu yaşıyordu. Akşamları
          terasta oturup yıldızları izlemek ya da sabah kuş sesleri eşliğinde
          kahvenizi yudumlamak, burada sıradan bir gündelik yaşamın parçasıydı.
        </p>
      </div>

      <!-- Ana Görsel Container -->
      <div class="image-section relative flex items-center justify-center">
        <transition name="fade" mode="out-in">
          <img
            :src="selectedImage"
            :alt="`Görsel ${currentIndex + 1}`"
            :class="[
              'transition-all duration-300 ease-in-out',
              isMobile ? 'w-full object-cover' : 'desktop-image',
            ]"
            :key="selectedImage"
          />
        </transition>

        <!-- Ana Görsel Navigation Arrows -->
        <button class="nav-arrow nav-arrow-left" @click="previousImage">
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

        <button class="nav-arrow nav-arrow-right" @click="nextImage">
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
          <button class="thumbnail-nav-btn" @click="previousThumbnail">
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
            class="thumbnail-slider overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory"
            :style="{
              width: isMobile
                ? 'calc(100vw - 100px)'
                : `${visibleThumbnails * 160}px`,
              scrollBehavior: 'smooth',
              '-webkit-overflow-scrolling': 'touch',
            }"
            @scroll="updateActiveThumbnail"
            ref="thumbnailSlider"
          >
            <div class="flex">
              <div
                v-for="(image, index) in displayedImages"
                :key="index"
                class="relative cursor-pointer transition-all duration-300 flex-shrink-0 snap-center"
                :class="[
                  currentIndex === index % images.length
                    ? 'opacity-100'
                    : 'opacity-50',
                  'hover:opacity-80',
                ]"
                @click="selectImage(index)"
                :style="{
                  width: `${thumbnailWidth}px`,
                  height: isMobile ? '35vw' : '96px',
                  marginRight: '16px',
                }"
              >
                <img
                  :src="image"
                  :alt="`Image ${index + 1}`"
                  class="object-cover w-full h-full"
                  :style="{ height: isMobile ? '35vw' : '96px' }"
                />
                <div
                  v-if="currentIndex === index % images.length"
                  class="absolute inset-0 border-2 border-white"
                ></div>
              </div>
            </div>
          </div>

          <!-- Thumbnail Next Button -->
          <button class="thumbnail-nav-btn" @click="nextThumbnail">
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
        "/projeler/tamamlanan/img/yaphan-panorama-kapak.webp",
        "/projeler/tamamlanan/img/yaphan-panorama-n.webp",
        "/projeler/tamamlanan/img/yaphan-panorama-1.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-2.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-3.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-4.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-5.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-6.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-7.jpg",
        "/projeler/tamamlanan/img/yaphan-panorama-8.jpg",
      ],
      currentIndex: 0,
      isMobile: false,
      windowWidth: 0,
      isScrolling: false,
      scrollTimeout: null,
    };
  },

  computed: {
    selectedImage() {
      return this.images[this.currentIndex];
    },
    visibleThumbnails() {
      return this.isMobile ? 2 : Math.min(5, this.images.length);
    },
    thumbnailWidth() {
      if (this.isMobile) {
        return (this.windowWidth - 120) / 2;
      }
      return 144;
    },
    displayedImages() {
      return this.images;
    },
  },

  methods: {
    initializeSlider() {
      if (!this.$refs.thumbnailSlider) return;

      const slider = this.$refs.thumbnailSlider;
      slider.addEventListener("scroll", this.updateActiveThumbnail);

      // Başlangıç pozisyonunu ayarla
      this.currentIndex = 0; // İlk görseli ayarla
      slider.scrollLeft = this.currentIndex * (this.thumbnailWidth + 16);
    },

    updateActiveThumbnail() {
      if (!this.$refs.thumbnailSlider || this.isScrolling) return;

      const slider = this.$refs.thumbnailSlider;
      const scrollLeft = slider.scrollLeft;
      const itemWidth = this.thumbnailWidth + 16;
      const index = Math.round(scrollLeft / itemWidth);

      if (index >= 0 && index < this.images.length) {
        this.currentIndex = index;
      }
    },

    selectImage(index) {
      const normalizedIndex =
        ((index % this.images.length) + this.images.length) %
        this.images.length;
      this.currentIndex = normalizedIndex;

      if (this.$refs.thumbnailSlider) {
        const itemWidth = this.thumbnailWidth + 16;
        const slider = this.$refs.thumbnailSlider;

        if (this.isMobile) {
          const maxScroll = slider.scrollWidth - slider.clientWidth;
          const targetScroll = normalizedIndex * itemWidth;
          const finalScroll = Math.min(targetScroll, maxScroll);

          this.isScrolling = true;
          requestAnimationFrame(() => {
            slider.scrollTo({
              left: finalScroll,
              behavior: "smooth",
            });
            setTimeout(() => {
              this.isScrolling = false;
            }, 300);
          });
        } else {
          requestAnimationFrame(() => {
            slider.scrollTo({
              left: normalizedIndex * itemWidth,
              behavior: "smooth",
            });
          });
        }
      }
    },

    nextThumbnail() {
      if (!this.$refs.thumbnailSlider) return;
      const slider = this.$refs.thumbnailSlider;
      const currentScroll = slider.scrollLeft;
      const itemWidth = this.thumbnailWidth + 16;
      const nextIndex = (this.currentIndex + 1) % this.images.length;

      // Bir sonraki görsele geç
      this.selectImage(nextIndex);
    },

    previousThumbnail() {
      if (!this.$refs.thumbnailSlider) return;
      const slider = this.$refs.thumbnailSlider;
      const currentScroll = slider.scrollLeft;
      const itemWidth = this.thumbnailWidth + 16;
      const prevIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;

      // Bir önceki görsele geç
      this.selectImage(prevIndex);
    },

    handleScroll() {
      if (!this.$refs.thumbnailSlider || this.isMobile) return;

      const slider = this.$refs.thumbnailSlider;
      const scrollLeft = slider.scrollLeft;
      const itemWidth = this.thumbnailWidth + 16;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (this.isScrolling) {
        clearTimeout(this.scrollTimeout);
      }

      this.isScrolling = true;
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 150);
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
      }
    },

    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.selectImage(this.currentIndex);
    },

    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.selectImage(this.currentIndex);
    },

    handleKeyPress(e) {
      if (e.key === "ArrowLeft") {
        this.previousImage();
      } else if (e.key === "ArrowRight") {
        this.nextImage();
      }
    },
  },

  mounted() {
    this.initializeClientSide();
    this.initializeSlider();
    if (process.client) {
      window.addEventListener("keydown", this.handleKeyPress);
    }
  },

  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("resize", this.checkMobile);
      window.removeEventListener("keydown", this.handleKeyPress);
    }
  },
};
</script>

<style scoped>
/* Transition efektleri */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
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
  width: 100%;
  height: auto;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 2rem;
}

.desktop-image {
  width: auto;
  height: auto;
  min-width: 800px;
  max-width: 1400px;
  min-height: 600px;
  max-height: 800px;
  object-fit: contain;
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
  scroll-snap-type: x mandatory;
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

.snap-center {
  scroll-snap-align: center;
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

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.snap-center {
  scroll-snap-align: center;
}
</style>
