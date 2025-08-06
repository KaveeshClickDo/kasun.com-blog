const config = {
    api: process.env.NEXT_PUBLIC_API_URL || 'http://backend:1337',
    externalApi: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://admin.kasunsameera.com'
}

export default config;