/** @type {import('next').NextConfig} */
const nextConfig = {
    // crossOrigin: 'anonymous',
    images:{
        domains: ['images.pexels.com'],
        localPatterns: [
            {
                pathname: '/public/images/**',
                search: '',
            },
        ],
    }
};

export default nextConfig;
