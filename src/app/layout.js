import { DM_Sans } from 'next/font/google';
import './globals.css';
import { breadcrumbSchema } from './schema';
import '../styles/ckeditor-content.css';
import Header from '@/components/shared/Header';
import Newsletter from '@/components/shared/Newsletter';
import Footer from '@/components/shared/Footer';
import fetchPageMeta from '@/data/fetchPageMeta';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export async function generateMetadata() {
  try {

    const metaResponse = await fetchPageMeta();
    const metaData = metaResponse?.data || {};
    
    const websiteName = metaData.websiteName || 'Website Name';
    const title = metaData.title || 'Website Title';
    const description = metaData.description || 'Website Description';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Fallback images
    const fallbackFavicon = '/favicon.ico'; // → public/favicon.ico
    const fallbackOgImage = '/images/default-og-image.jpg'; // → public/images/default-og-image.jpg


    const faviconUrl = metaData.favicon?.url 
      ? `${backendUrl}${metaData.favicon.url}` 
      : fallbackFavicon;
    
    const ogImageUrl = metaData.openGraphImage?.url 
      ? `${backendUrl}${metaData.openGraphImage.url}` 
      : `${baseUrl}${fallbackOgImage}`;

    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: `${title} | ${websiteName}`,
        template: `%s | ${websiteName}`
      },
      description: description,
      

      icons: {
        icon: faviconUrl,
        shortcut: faviconUrl,
        apple: faviconUrl,
      },
      

      openGraph: {
        title: title,
        description: description,
        siteName: websiteName,
        images: [
          {
            url: ogImageUrl,
            width: metaData.openGraphImage?.width || 1200,
            height: metaData.openGraphImage?.height || 630,
            alt: metaData.openGraphImage?.alternativeText || title,
          }
        ],
      },
      

      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [ogImageUrl],
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const fallbackFavicon = '/favicon.ico';
    const fallbackOgImage = `${baseUrl}/images/default-og-image.jpg`;
    
    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: 'Website Title | Website Name',
        template: '%s | Website Name'
      },
      description: 'Website Description',
      

      icons: {
        icon: fallbackFavicon,
        shortcut: fallbackFavicon,
        apple: fallbackFavicon,
      },
      

      openGraph: {
        title: 'Website Title',
        description: 'Website Description',
        siteName: 'Website Name',
        images: [
          {
            url: fallbackOgImage,
            width: 1200,
            height: 630,
            alt: 'Website Title',
          }
        ],
      },
      

      twitter: {
        card: 'summary_large_image',
        title: 'Website Title',
        description: 'Website Description',
        images: [fallbackOgImage],
      }
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
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}