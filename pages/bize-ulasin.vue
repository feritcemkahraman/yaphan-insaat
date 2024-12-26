<!-- pages/contact.vue -->
<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <div class="relative bg-nice py-16 mb-20">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <h1 class="text-5xl text-center font-bold text-white animate-slideDown">
          Bize Ulaşın
        </h1>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl py-16">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h4 class="text-nice text-xl font-bold mb-3">Bize Ulaşın</h4>
        <h2 class="text-4xl font-bold mb-4">
          Herhangi Bir Sorunuz Varsa, Lütfen Bizimle İletişime Geçmekten
          Çekinmeyin.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="flex flex-col justify-between space-y-4">
          <div class="bg-gray-100 flex items-center p-6">
            <div
              class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gray-800"
            >
              <i class="fas fa-map-marker-alt text-nice"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-600 mb-1">Genel Merkez</p>
              <h3 class="text-xl font-bold">
                Üçtutlar Mahallesi Dr. İlhan Gürel Caddesi 68-14 Merkez/Çorum
              </h3>
            </div>
          </div>

          <div class="bg-gray-100 flex items-center p-6">
            <div
              class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gray-800"
            >
              <i class="fas fa-phone-alt text-nice"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-600 mb-1">Telefon</p>
              <h3 class="text-xl font-bold">+90 539 855 93 82</h3>
            </div>
          </div>

          <div class="bg-gray-100 flex items-center p-6">
            <div
              class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gray-800"
            >
              <i class="fas fa-envelope text-nice"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-600 mb-1">Mail</p>
              <h3 class="text-xl font-bold">info@yaphan.com.tr</h3>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="flex flex-col justify-between space-y-4 mt-4">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Success Message -->
            <div
              v-if="isSuccess"
              class="p-4 bg-green-50 border border-green-200 rounded-md mb-4"
            >
              <p class="text-green-700 font-bold text-center">
                Mesajınız başarılı bir şekilde bize ulaştı. İnceleyip en kısa
                zamanda dönüş sağlayacağız, teşekkürler.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="relative">
                <input
                  type="text"
                  name="name"
                  class="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-nice focus:border-transparent resize-none outline-none"
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  class="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-nice focus:border-transparent resize-none outline-none"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="relative">
              <input
                type="tel"
                name="phone"
                class="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-nice focus:border-transparent resize-none outline-none"
                placeholder="Telefon"
                required
              />
            </div>
            <div class="relative">
              <textarea
                name="message"
                rows="4"
                class="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-nice focus:border-transparent resize-none outline-none"
                placeholder="Mesajınız"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-4 px-6 relative mt-auto"
              :disabled="isLoading"
            >
              <div
                class="absolute inset-0 bg-nice hover:bg-nice/80 transition duration-200 ease-in-out"
              ></div>
              <span class="relative z-10 text-white text-xl font-semibold">
                {{ isLoading ? "Gönderiliyor..." : "Mesajı Gönder" }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="w-full h-[450px] mt-16 mb-[90px]">
      <iframe
        title="YapHan İnşaat ve Mühendislik A.Ş. Çorum Merkez Ofisi - Google Haritalar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.2626248658207!2d34.96412060000001!3d40.5799581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4086d58d9d1e55a5%3A0x601a6c6d76414539!2sYeksun%20M%C3%BChendislik!5e0!3m2!1str!2str!4v1732711220636!5m2!1str!2str"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div class="container mx-auto px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h3 class="text-gray-600 text-lg mb-2">Ofislerimiz</h3>
      <h2 class="text-4xl font-bold text-gray-900">
        Bizi ziyaret edebileceğiniz diğer adreslerimiz.
      </h2>
    </div>

    <!-- Offices Grid -->
    <div class="flex justify-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl"
      >
        <div v-for="office in offices" :key="office.city" class="space-y-4">
          <div class="border-t-2 border-gray-500 w-16"></div>
          <h3 class="font-medium text-gray-900">{{ office.title }}</h3>
          <div class="space-y-2 text-gray-800">
            <p>{{ office.neighborhood }}</p>
            <p>{{ office.street }}</p>
            <p>{{ office.district }}</p>
            <p>{{ office.city }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Increased bottom spacing -->
  <div class="pb-16"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSeo } from "~/composables/useSeo";

// TypeScript tip tanımlaması
interface ExtendedSchema extends Record<string, any> {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  mainEntity?: {
    "@type": string;
    name: string;
    address?: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint?: {
      "@type": string;
      telephone: string;
      contactType: string;
      areaServed: string;
      availableLanguage: string[];
    };
  };
  isPartOf?: {
    "@type": string;
    name: string;
    url: string;
  };
}

definePageMeta({
  layout: "default",
});

const { setSeo } = useSeo({
  title: "Bize Ulaşın - YapHan İnşaat ve Mühendislik A.Ş. | İletişim",
  description:
    "YapHan İnşaat ve Mühendislik A.Ş. ile iletişime geçin. Merkez ofisimiz Çorum'da bulunmaktadır. Projelerimiz hakkında bilgi almak için bize ulaşın.",
  keywords:
    "yaphan inşaat ve mühendislik a.ş. iletişim, yaphan iletişim, yaphan telefon, yaphan adres, yaphan konum, yaphan inşaat, lüks konut projeleri, güvenilir müteahhit, modern konut projeleri, ticari yapılar, inşaat firması çorum, yaphan, kat karşılığı, arsa satışı, villa inşaatı, istanbul inşaat firması, yapıhan, yapıhan inşaat, inşaat, inşaat firması, inşaat projeleri, inşaat projeler, inşaat projeleri istanbul, han holding, han, holding",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "YapHan İnşaat ve Mühendislik A.Ş. İletişim",
    description: "YapHan İnşaat ve Mühendislik A.Ş. iletişim bilgileri ve ofis konumu",
    url: "https://yaphan.com.tr/bize-ulasin",
    isPartOf: {
      "@type": "WebSite",
      name: "YapHan İnşaat ve Mühendislik A.Ş.",
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
          position: 5,
          name: "Bize Ulaşın",
          item: "https://yaphan.com.tr/bize-ulasin",
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "YapHan İnşaat ve Mühendislik A.Ş.",
      description:
        "YapHan İnşaat ve Mühendislik A.Ş., 10 yılı aşkın süredir lüks villa projeleri, modern konut projeleri ve ticari yapılar inşa eden güvenilir inşaat şirketi.",
      url: "https://yaphan.com.tr",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-539-855-9382",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    },
  },
});

const isSuccess = ref(false);
const isLoading = ref(false);

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  isLoading.value = true;

  try {
    const formData = new FormData(form);

    // Mesaj formatını düzenle
    const timestamp = new Date().toLocaleString("tr-TR");
    const message = formData.get("message");

    const formattedMessage = `
Mesaj: ${message}
Gönderim Zamanı: ${timestamp}
    `.trim();

    // Web3Forms için gerekli alanları ekle
    formData.set("message", formattedMessage);
    formData.append("access_key", "7b591374-bc17-48b4-aad3-e4af50415e5e");
    formData.append("to_email", "info@yaphan.com.tr");
    formData.append(
      "from_name",
      "YapHan Iletisim Formu\n\n - Web sitemizden yeni bir form gonderildi. Detaylar asagidadir:"
    );
    formData.append("subject", `YapHan Iletisim Formu - ${timestamp}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      isSuccess.value = true;
      form.reset();
      setTimeout(() => {
        isSuccess.value = false;
      }, 5000);
    } else {
      throw new Error(data.message || "Form gönderimi başarısız oldu.");
    }
  } catch (error: any) {
    console.error("Form gönderim hatası:", error);
    alert(
      error.message ||
        "Form gönderimi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin."
    );
  } finally {
    isLoading.value = false;
  }
};

setSeo();

const offices = [
  {
    title: "İSTANBUL (Bölge Ofisi)",
    neighborhood: "Baklacı Mahallesi",
    street: "Fatih Caddesi No:15",
    district: "Beykoz",
    city: "İstanbul",
  },
  {
    title: "ANKARA (Bölge Ofisi)",
    neighborhood: "Büğdüz Mahallesi",
    street: "Büğdüz Küme Evler No:1/1",
    district: "Akyurt",
    city: "Ankara",
  },
  {
    title: "ANTALYA (Bölge Ofisi)",
    neighborhood: "Kışla Mahallesi",
    street: "Nailkonuk İş Hanı 6.Kat No:9",
    district: "Muratpaşa",
    city: "Antalya",
  },
];
</script>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideDown {
  animation: slideDown 1s ease-out;
}

/* Input ve textarea için varsayılan stilleri override et */
input,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: black 1px solid;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #c29e7c !important;
  box-shadow: 0 0 0 1px #c29e7c !important;
}

/* Tarayıcı varsayılan focus rengini kaldır */
input:focus-visible,
textarea:focus-visible {
  outline: none;
}
</style>
