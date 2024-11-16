<template>
  <footer class="relative w-full text-white">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="/footer-bg.jpg"
        alt="Footer background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/80"></div>
    </div>

    <!-- Footer Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-8">
      <!-- Main Footer Content -->
      <div class="pt-24 pb-8">
        <div class="flex flex-col md:flex-row md:justify-between">
          <!-- Left Section - Logo & Description -->
          <div class="md:w-1/2 mb-8 md:mb-0">
            <span
          class="self-center text-2xl text-gold font-semibold whitespace-nowrap"
        >
          Y A P I H A N
        </span>
        <span
          class="self-center text-l font-semibold whitespace-nowrap text-gold mt-1"
        >
          İ N Ş A A T
        </span>
            <p class="text-sm leading-relaxed opacity-90 max-w-lg">
              YapıHan İnşaat olarak, işimizin temelinde kolektif bir tasarım anlayışı
              yatmaktadır. İlk günden bu yana, fikirlerin paylaşılmasının, ortak
              emeğin, bilgi alışverişinin ve tutkunun projelerimizi
              mükemmelleştirdiğine inanıyoruz.
            </p>
          </div>

          <!-- Right Section - Contact & Social -->
          <div class="md:text-right">
            <h3 class="text-sm text-blue-400 uppercase tracking-wider mb-4">
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

      <!-- Bottom Section - Copyright & Social -->
      <div
        class="py-8 border-t border-white/10 flex flex-col md:flex-row md:justify-between items-center"
      >
        <p class="text-xs text-white uppercase tracking-wider mb-4 md:mb-0">
          YAPIHAN (C) 2024 TÜM HAKLARI SAKLIDIR.
        </p>

        <!-- Social Media Icons -->
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
