import { useHead } from "nuxt/app";
import { useRuntimeConfig } from "nuxt/app";
import { useRoute } from "nuxt/app";

interface SchemaOrg {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  potentialAction?: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    }[];
  };
  mainEntity?: {
    "@type": string;
    name: string;
    description: string;
    url: string;
    foundingDate?: string;
    contactPoint?: {
      "@type": string;
      telephone: string;
      contactType: string;
      areaServed?: string;
      availableLanguage?: string[];
    };
  };
  isPartOf?: {
    "@type": string;
    name: string;
    url: string;
  };
  sameAs?: string[];
  hasOfferCatalog?: {
    "@type": string;
    name: string;
    itemListElement: {
      "@type": string;
      name: string;
      url: string;
      description: string;
    }[];
  };
  contactPoint?: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed?: string;
    availableLanguage?: string[];
  };
}

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: SchemaOrg;
}

export function useSeo(config: SeoConfig) {
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();

  const defaultSchema: SchemaOrg = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.title || "YapHan İnşaat",
    description: config.description,
    url: `${runtimeConfig.public.siteUrl}${route.path}`,
    potentialAction: {
      "@type": "SearchAction",
      target: [{
        "@type": "EntryPoint",
        urlTemplate: `${runtimeConfig.public.siteUrl}/search?q={search_term_string}`
      }]
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "YapHan İnşaat Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Hakkımızda",
          url: `${runtimeConfig.public.siteUrl}/hakkimizda`,
          description: "YapHan İnşaat hakkında detaylı bilgi"
        },
        {
          "@type": "Offer",
          name: "Bize Ulaşın",
          url: `${runtimeConfig.public.siteUrl}/bize-ulasin`,
          description: "YapHan İnşaat iletişim bilgileri"
        }
      ]
    }
  };

  const setSeo = () => {
    useHead({
      title: config.title,
      meta: [
        {
          name: "description",
          content: config.description,
        },
        {
          name: "keywords",
          content: config.keywords,
        },
        {
          property: "og:title",
          content: config.title,
        },
        {
          property: "og:description",
          content: config.description,
        },
        {
          property: "og:image",
          content: config.image,
        },
        {
          property: "og:type",
          content: config.type || "website",
        },
      ].filter((meta) => meta.content !== undefined),
      script: config.schema || defaultSchema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(config.schema || defaultSchema),
            },
          ]
        : [],
    });
  };

  return {
    setSeo,
  };
}
