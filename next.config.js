/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'trae-api-sg.mchost.guru' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'pandaily.com' },
      { protocol: 'https', hostname: 'www.pandaily.com' },
      { protocol: 'https', hostname: 'kr-asia.com' },
      { protocol: 'https', hostname: 'www.kr-asia.com' },
      { protocol: 'https', hostname: 'technode.com' },
      { protocol: 'https', hostname: 'www.technode.com' },
      { protocol: 'https', hostname: 'lowyat.net' },
      { protocol: 'https', hostname: 'www.lowyat.net' },
      { protocol: 'https', hostname: 'assets.lowyat.net' },
      { protocol: 'https', hostname: 'vulcanpost.com' },
      { protocol: 'https', hostname: 'www.vulcanpost.com' },
      { protocol: 'https', hostname: 'malaymail.com' },
      { protocol: 'https', hostname: 'www.malaymail.com' },
      { protocol: 'https', hostname: 'assets.malaymail.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.joevesmartsolutions.com' },
      { protocol: 'https', hostname: 'joevesmartsolutions.com' }
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/ai-chatbots',
        destination: '/services/smart-chatbot',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
