<script setup>
// Script kısmı aynı kalacak
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const isProjectsDropdownOpen = ref(false);

const menuItems = [
  { path: "/", name: "Anasayfa" },
  { path: "/hakkimizda", name: "Hakkımızda" },
  {
    path: "/projeler",
    name: "Projeler",
    hasDropdown: true,
    dropdownItems: [
      { path: "/projeler/tamamlanan", name: "Tamamlanan Projeler" },
      { path: "/projeler/devameden", name: "Devam Eden Projeler" },
    ],
  },
  { path: "/iletisim", name: "İletİşİm" },
];

const route = useRoute();
</script>

<template>
  <nav class="bg-black bg-opacity-70">
    <div
      class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo (değişmedi) -->
      <a href="/" class="flex flex-col items-center">
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
      </a>

      <!-- Mobil Menü Butonu (değişmedi) -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Desktop Menü -->
      <div class="hidden md:block">
        <div class="flex space-x-4 items-center">
          <template v-for="item in menuItems" :key="item.path">
            <!-- Normal Menü Öğeleri -->
            <div v-if="!item.hasDropdown" class="h-full flex items-center">
              <NuxtLink
                :to="item.path"
                class="px-4 py-2 font-bold uppercase transition-colors hover:text-gold"
                :class="[route.path === item.path ? 'text-gold' : 'text-white']"
              >
                {{ item.name }}
              </NuxtLink>
            </div>

            <!-- Dropdown Menü -->
            <div v-else class="dropdown-container h-full flex items-center">
              <NuxtLink
                :to="item.path"
                class="px-4 py-2 font-bold uppercase transition-colors hover:text-gold"
                :class="[
                  route.path.startsWith(item.path) ? 'text-gold' : 'text-white',
                ]"
              >
                {{ item.name }}
              </NuxtLink>

              <!-- Dropdown İçeriği -->
              <div class="dropdown-content">
                <NuxtLink
                  v-for="dropdownItem in item.dropdownItems"
                  :key="dropdownItem.path"
                  :to="dropdownItem.path"
                  class="block px-4 py-2 text-white font-bold uppercase transition-colors hover:text-gold"
                  :class="[route.path === dropdownItem.path ? 'text-gold' : '']"
                >
                  {{ dropdownItem.name }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Mobil Menü (değişmedi) -->
    <div
      v-show="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden"
    >
      <!-- Mobil menü içeriği aynı kalacak -->
      <!-- ... -->
    </div>
  </nav>
</template>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 200px;
  z-index: 50;
  background-color: #4c4c4c;
}

.dropdown-container:hover .dropdown-content {
  display: block;
}

/* Menü öğelerini hizalamak için ek stiller */
.dropdown-container,
.dropdown-container > a {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
