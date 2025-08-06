import { DM_Sans } from 'next/font/google';
import './globals.css';
import { breadcrumbSchema } from './schema';
import '../styles/ckeditor-content.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import fetchPageMeta from '@/data/fetchPageMeta';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

// Generate metadata dynamically
export async function generateMetadata() {
  try {
    // Fetch metadata from your backend
    const metaResponse = await fetchPageMeta();
    const metaData = metaResponse?.data || {};
    
    const websiteName = metaData.websiteName || 'Kasun Sameera';
    const title = metaData.title || 'Top Lifestyle Blog by Kasun Sameera';
    const description = metaData.description || 'Lifestyle Blog by Top Blogger Kasun Sameera. A personal blogging site, where you see passions, experiences, and journey as I explored the things I love doing';

    // Get images if available (full URLs for dynamic images)
    const faviconUrl = metaData.favicon?.url ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://admin.kasunsameera.com'}${metaData.favicon.url}` : null;
    const ogImageUrl = metaData.openGraphImage?.url ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://admin.kasunsameera.com'}${metaData.openGraphImage.url}` : null;

    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
      title: {
        default: `${title} | ${websiteName}`,
        template: `%s | ${websiteName}`
      },
      description: description,
      // Dynamic favicon
      ...(faviconUrl && { 
        icons: {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      }),
      // Dynamic Open Graph image
      openGraph: {
        title: title,
        description: description,
        siteName: websiteName,
        ...(ogImageUrl && { 
          images: [
            {
              url: ogImageUrl,
              width: metaData.openGraphImage?.width || 1200,
              height: metaData.openGraphImage?.height || 630,
              alt: metaData.openGraphImage?.alternativeText || title,
            }
          ]
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        ...(ogImageUrl && { images: [ogImageUrl] }),
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    
    // Fallback to default metadata if API fails
    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
      title: {
        default: 'Top Lifestyle Blog by Kasun Sameera | Kasun Sameera',
        template: '%s | Kasun Sameera'
      },
      description: 'Lifestyle Blog by Top Blogger Kasun Sameera. A personal blogging site, where you see passions, experiences, and journey as I explored the things I love doing',
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add slick-carousel CSS via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}