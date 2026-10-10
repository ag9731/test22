import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  // Services
  { url: '/website-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/business-website-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/ecommerce-website-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/website-redesign', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-application-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/mobile-app-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/digital-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/google-ads-management', changefreq: 'monthly', priority: 0.9 },
  { url: '/meta-ads-management', changefreq: 'monthly', priority: 0.8 },
  { url: '/social-media-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/lead-generation', changefreq: 'monthly', priority: 0.9 },
  { url: '/seo-services', changefreq: 'monthly', priority: 0.9 },
  { url: '/local-seo', changefreq: 'monthly', priority: 0.8 },
  { url: '/technical-seo', changefreq: 'monthly', priority: 0.8 },
  { url: '/on-page-seo', changefreq: 'monthly', priority: 0.8 },
  { url: '/google-business-profile-optimization', changefreq: 'monthly', priority: 0.9 },
  { url: '/google-maps-ranking', changefreq: 'monthly', priority: 0.8 },
  { url: '/google-business-profile-management', changefreq: 'monthly', priority: 0.8 },
  { url: '/ai-automation', changefreq: 'monthly', priority: 0.8 },
  { url: '/ai-chatbot-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/business-process-automation', changefreq: 'monthly', priority: 0.8 }
];

const generateSitemap = async () => {
  try {
    const smStream = new SitemapStream({ hostname: 'https://www.parvidigital.com' });
    const writeStream = createWriteStream('./public/sitemap.xml');
    smStream.pipe(writeStream);
    
    links.forEach(link => {
      smStream.write(link);
    });
    
    smStream.end();
    
    await streamToPromise(smStream);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
