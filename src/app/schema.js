export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${process.env.BASE_URL || 'https://www.kasunsameera.com'}/#breadcrumblist`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "@id": `${process.env.BASE_URL || 'https://www.kasunsameera.com'}#listItem`,
      "position": 1,
      "name": "Home"
    }
  ]
};