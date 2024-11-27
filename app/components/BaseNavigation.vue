<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const isProjectsDropdownOpen = ref(false);

const menuItems = [
  { path: "/", name: "Anasayfa" },
  { path: "/hakkimizda", name: "Hakkımızda" },
  {
    path: "#",
    name: "Projeler",
    hasDropdown: true,
    dropdownItems: [
      {
        path: "/projeler/tamamlanan/index.html",
        name: "Tamamlanan Projeler",
        isExternal: true,
      },
      {
        path: "/projeler/devameden/index.html",
        name: "Devam Eden Projeler",
        isExternal: true,
      },
    ],
  },
  { path: "/bize-ulasin", name: "Bize Ulaşın" },
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
            <div v-else class="menu-item">
              <div
                class="px-4 py-2 font-bold uppercase transition-colors hover:text-gold text-white cursor-pointer"
              >
                {{ item.name }}
              </div>

              <!-- Dropdown İçeriği -->
              <div class="dropdown-menu">
                <a
                  v-for="dropdownItem in item.dropdownItems"
                  :key="dropdownItem.path"
                  :href="dropdownItem.path"
                  class="block px-4 py-2 text-white font-bold uppercase transition-colors hover:text-gold"
                  :class="[route.path === dropdownItem.path ? 'text-gold' : '']"
                  :target="dropdownItem.isExternal ? '_self' : undefined"
                >
                  {{ dropdownItem.name }}
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Mobil Menü -->
    <div
      v-show="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden"
    >
      <!-- Kapatma Butonu -->
      <div class="p-4 flex justify-end">
        <button
          @click="isMenuOpen = false"
          class="text-white hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobil Menü Linkleri -->
      <div class="flex flex-col items-center justify-center h-full">
        <template v-for="item in menuItems" :key="item.path">
          <template v-if="!item.hasDropdown">
            <NuxtLink
              :to="item.path"
              class="px-4 py-4 text-white uppercase text-2xl hover:text-gray-400"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
          <template v-else>
            <div class="flex flex-col items-center">
              <div
                class="px-4 py-4 text-white uppercase text-2xl hover:text-gray-400 cursor-pointer"
                @click="isProjectsDropdownOpen = !isProjectsDropdownOpen"
              >
                {{ item.name }}
              </div>
              <div
                v-show="isProjectsDropdownOpen"
                class="flex flex-col items-center"
              >
                <a
                  v-for="dropdownItem in item.dropdownItems"
                  :key="dropdownItem.path"
                  :href="dropdownItem.path"
                  class="px-4 py-2 text-white uppercase text-xl hover:text-gray-400"
                  @click="isMenuOpen = false"
                  :target="dropdownItem.isExternal ? '_self' : undefined"
                >
                  {{ dropdownItem.name }}
                </a>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.menu-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #4c4c4c;
  z-index: 50;
}

.menu-item:hover .dropdown-menu {
  display: block;
}
</style>
