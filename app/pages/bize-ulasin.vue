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
              <h3 class="text-xl font-bold">+012 345 6789</h3>
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
            <button type="submit" class="w-full py-4 px-6 relative mt-auto">
              <div
                class="absolute inset-0 bg-nice hover:bg-nice/80 transition duration-200 ease-in-out"
              ></div>
              <span class="relative z-10 text-white text-xl font-semibold"
                >Mesajı Gönder</span
              >
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="w-full h-[450px] mt-16 mb-[90px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.2626248658207!2d34.96412060000001!3d40.5799581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4086d58d9d1e55a5%3A0x601a6c6d76414539!2sYeksun%20M%C3%BChendislik!5e0!3m2!1str!2str!4v1732711220636!5m2!1str!2str"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Yeksun Mühendislik Google Maps"
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
import { useSeo } from "../../composables/useSeo";

const { setSeo } = useSeo();
const isSuccess = ref(false);

setSeo({
  title: "İletişim - YapHan İnşaat | Bize Ulaşın",
  description:
    "YapHan İnşaat ile iletişime geçin. İstanbul'da inşaat, renovasyon ve tadilat projeleriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.",
  keywords:
    "yaphan inşaat iletişim, inşaat firması iletişim, yaphan telefon, yaphan adres, inşaat firması istanbul",
  schema: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "YapHan İnşaat İletişim",
    description:
      "YapHan İnşaat iletişim bilgileri ve formu. Projeleriniz için bizimle iletişime geçin.",
    url: "https://yaphan.com.tr/bize-ulasin",
    mainEntity: {
      "@type": "Organization",
      name: "YapHan İnşaat",
      description:
        "İstanbul'da inşaat ve renovasyon hizmetleri sunan profesyonel inşaat firması",
      url: "https://yaphan.com.tr",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-212-123-4567",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
  },
});

const handleSubmit = async (event: { target: any }) => {
  const form = event.target;
  const formData = new FormData();

  // Web3Forms gerekli alanları
  formData.append("access_key", "7b591374-bc17-48b4-aad3-e4af50415e5e");
  formData.append("from_name", "YapHan İnşaat Website");
  formData.append("replyto", "info@yaphan.com.tr");
  formData.append("subject", "Yeni İletişim Formu Mesajı - YapHan İnşaat");

  // Form alanları
  formData.append("name", form.name.value);
  formData.append("email", form.email.value);
  formData.append("phone", form.phone.value);
  formData.append("message", form.message.value);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      isSuccess.value = true;
      form.reset();
      // 10 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        isSuccess.value = false;
      }, 10000);
    } else {
      console.error("Form submission error:", data.message);
    }
  } catch (error) {
    console.error("Form submission failed:", error);
  }
};

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
