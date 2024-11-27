import { useHead } from "nuxt/app";

interface SchemaOrg {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
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
    address?: {
      "@type": string;
      addressLocality: string;
      addressCountry: string;
    };
  };
  address?: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint?: {
    "@type": string;
    telephone: string;
    contactType: string;
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

export const useSeo = () => {
  const setSeo = (config: SeoConfig) => {
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
      script: config.schema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(config.schema),
            },
          ]
        : [],
    });
  };

  return {
    setSeo,
  };
};
