/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en','id', 'de', 'jp', 'ch'], 
        defaultLocale: 'en', 
        localeDetection: true, 
    }, 
    reactStrictMode: true
};

export default nextConfig;
