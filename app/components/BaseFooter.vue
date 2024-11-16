<template>
  <footer class="relative w-full text-white">
    <!-- Arka Plan Görseli ve Örtücü -->
    <div class="absolute inset-0 z-0">
      <img
        src="/footer-bg.jpg"
        alt="Footer background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/80"></div>
    </div>

    <!-- Footer İçeriği -->
    <div class="relative z-10 container mx-auto px-4 md:px-8">
      <!-- Ana Footer İçeriği -->
      <div class="py-8">
        <div class="flex flex-col md:flex-row md:justify-between">
          <!-- Sol Bölüm - Logo & Açıklama -->
          <div class="md:w-1/2 mb-8 md:mb-0 footer-left">
            <!-- Güncellenmiş Logo Yazısı -->
            <div class="logo-section">
              <span class="text-2xl text-gold font-semibold whitespace-nowrap">
                Y A P I H A N
              </span>
              <span class="text-2xl whitespace-nowrap text-gold mt-1 ml-2">
                İ N Ş A A T
              </span>
            </div>
            <!-- Açıklama -->
            <p class="text-sm leading-relaxed opacity-90 max-w-lg mt-4">
              YapıHan İnşaat olarak, işimizin temelinde kolektif bir tasarım
              anlayışı yatmaktadır. İlk günden bu yana, fikirlerin
              paylaşılmasının, ortak emeğin, bilgi alışverişinin ve tutkunun
              projelerimizi mükemmelleştirdiğine inanıyoruz.
            </p>
          </div>

          <!-- Sağ Bölüm - İletişim -->
          <div class="md:text-right footer-right">
            <h3
              class="text-sm font-semibold text-white uppercase tracking-wider mb-4"
            >
              Bize Ulaşın
            </h3>
            <div class="space-y-2 mb-6">
              <p class="text-sm">+1 (234) 567 89 99</p>
              <p class="text-sm">info@yapihan.com.tr</p>
              <p class="text-sm">
                Üçutlar Mahallesi, Dr. İlhan Gürel Caddesi 68-14, Merkez/Çorum
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Alt Bölüm -->
      <div
        class="py-4 border-t border-white/10 flex flex-col md:flex-row md:justify-between items-center footer-bottom"
      >
        <p class="text-xs text-white/70 uppercase tracking-wider mb-4 md:mb-0">
          YAPIHAN İNŞAAT - HAN HOLDİNG KURULUŞUDUR (C) 2024 TÜM HAKLARI
          SAKLIDIR.
        </p>

        <!-- Sosyal Medya İkonları -->
        <div class="flex space-x-4">
          <a
            href="#"
            class="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <i class="fab fa-facebook-f text-sm"></i>
          </a>
          <a
            href="#"
            class="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <i class="fab fa-instagram text-sm"></i>
          </a>
          <a
            href="#"
            class="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <i class="fab fa-twitter text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo-section {
  text-align: center;
}

@media (min-width: 768px) {
  .logo-section {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .footer-left,
  .footer-right {
    text-align: center;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .footer-bottom p {
    margin-bottom: 1rem;
  }
}

.text-gold {
  color: #bca78c;
}
</style>

<script setup>
// Bileşen mantığı gerekiyorsa buraya eklenebilir
</script>
