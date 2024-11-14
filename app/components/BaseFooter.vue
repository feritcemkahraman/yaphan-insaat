<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <footer class="bg-white rounded-lg shadow m-4 text-center">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <!-- YapıHan Yazısı ve Menü Öğeleri Ortalaması -->
      <div class="flex flex-col md:flex-row justify-between">
        <!-- Logo Yazısı -->
        <a href="#" class="flex items-center justify-center mb-4 space-x-3">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Y A P I H A N</span
          >
        </a>

        <!-- Menü Öğeleri -->
        <ul
          class="flex flex-wrap mb-6 text-sm font-medium justify-center text-gray-500 dark:text-gray-400"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />

      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="/" class="hover:underline">YapıHan Inşaat</a>. Tüm hakları
        saklıdır.</span
      >
    </div>
  </footer>
</template>
