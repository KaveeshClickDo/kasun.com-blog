export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    '/private/',
                    '/_next/',
                    '/thank-you/',
                    '/order-confirmation/',
                    '/search?*',
                    '/*?utm_*',  
                ],
                crawlDelay: 1, 
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    '/private/',
                    '/thank-you/',
                    '/order-confirmation/',
                ],
                
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_BASE_URL, 
    }
}