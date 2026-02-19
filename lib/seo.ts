/**
 * SEO Utility Functions and Constants
 * Centralized SEO configuration for Airotics
 */

// Site Configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://airotics.io';
export const SITE_NAME = 'Airotics';
export const SITE_TITLE = 'Airotics - AI & Robotics Solutions';
export const SITE_DESCRIPTION = 'Leading provider of AI and robotics solutions. Transform your business with cutting-edge artificial intelligence and automation technology.';
export const SITE_KEYWORDS = 'AI, robotics, artificial intelligence, automation, machine learning, AI solutions, robotics solutions';

// Company Information
export const COMPANY_INFO = {
  name: 'Airotics',
  legalName: 'Airotics Inc.',
  foundingDate: '2020',
  email: 'contact@airotics.com',
  phone: '+1-XXX-XXX-XXXX', // Update with actual phone
  address: {
    streetAddress: '', // Update with actual address
    addressLocality: '', // City
    addressRegion: '', // State/Province
    postalCode: '', // ZIP
    addressCountry: 'US', // Update as needed
  },
};

// SEO Limits (Google/Naver Best Practices)
export const SEO_LIMITS = {
  title: {
    max: 60,
    recommended: 50,
    warning: 55,
  },
  description: {
    max: 160,
    recommended: 150,
    warning: 155,
  },
  keywords: {
    max: 10,
    recommended: 7,
  },
};

// Default SEO Configuration
export const defaultSEO = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  ogImage: '/og-image.png', // 1200x630px
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const,
};

/**
 * Generate canonical URL with trailing slash handling
 */
export function generateCanonicalUrl(path: string): string {
  // Remove query parameters and hash
  const cleanPath = path.split('?')[0].split('#')[0];

  // Remove trailing slash except for root
  const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');

  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Optimize title length for SEO
 * Warns if title exceeds recommended length
 */
export function optimizeTitle(title: string, siteName: boolean = true): string {
  const fullTitle = siteName && !title.includes(SITE_NAME)
    ? `${title} | ${SITE_NAME}`
    : title;

  if (fullTitle.length > SEO_LIMITS.title.warning) {
    console.warn(
      `⚠️ SEO Warning: Title length (${fullTitle.length}) exceeds ${SEO_LIMITS.title.warning} characters. May be truncated in search results.`
    );
  }

  if (fullTitle.length > SEO_LIMITS.title.max) {
    return fullTitle.slice(0, SEO_LIMITS.title.max - 3) + '...';
  }

  return fullTitle;
}

/**
 * Optimize description length for SEO
 */
export function optimizeDescription(description: string): string {
  if (description.length > SEO_LIMITS.description.warning) {
    console.warn(
      `⚠️ SEO Warning: Description length (${description.length}) exceeds ${SEO_LIMITS.description.warning} characters. May be truncated in search results.`
    );
  }

  if (description.length > SEO_LIMITS.description.max) {
    return description.slice(0, SEO_LIMITS.description.max - 3) + '...';
  }

  return description;
}

/**
 * Validate and optimize keywords
 */
export function optimizeKeywords(keywords: string | string[]): string {
  const keywordArray = typeof keywords === 'string'
    ? keywords.split(',').map(k => k.trim())
    : keywords;

  if (keywordArray.length > SEO_LIMITS.keywords.recommended) {
    console.warn(
      `⚠️ SEO Warning: ${keywordArray.length} keywords provided. Recommended: ${SEO_LIMITS.keywords.recommended} or fewer.`
    );
  }

  return keywordArray.slice(0, SEO_LIMITS.keywords.max).join(', ');
}

/**
 * Generate full image URL for Open Graph
 */
export function getFullImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * SEO-friendly URL slug generator
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get page type for Open Graph
 */
export function getPageType(path: string): 'website' | 'article' {
  // Blog posts, news, etc. should be 'article'
  if (path.includes('/blog/') || path.includes('/news/')) {
    return 'article';
  }
  return 'website';
}
