/**
 * SEO Component
 * Comprehensive meta tags for search engines and social media
 */

import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  defaultSEO,
  generateCanonicalUrl,
  optimizeTitle,
  optimizeDescription,
  optimizeKeywords,
  getFullImageUrl,
  getPageType,
  SITE_NAME,
} from '@/lib/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  twitterCard = 'summary_large_image',
  canonical,
  noindex = false,
  nofollow = false,
  article,
}) => {
  const router = useRouter();

  // Generate optimized meta content
  const pageTitle = title ? optimizeTitle(title) : defaultSEO.title;
  const pageDescription = description
    ? optimizeDescription(description)
    : defaultSEO.description;
  const pageKeywords = keywords
    ? optimizeKeywords(keywords)
    : defaultSEO.keywords;

  // Generate canonical URL (remove query params)
  const canonicalUrl = canonical || generateCanonicalUrl(router.asPath.split('?')[0]);

  // Generate full image URL
  const fullOgImage = getFullImageUrl(ogImage || defaultSEO.ogImage);

  // Determine og:type
  const pageType = ogType || getPageType(router.asPath);

  // Robots meta
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  if (robotsContent.length === 0) {
    robotsContent.push('index', 'follow');
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content={robotsContent.join(', ')} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Article Meta Tags (if article type) */}
      {pageType === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title || SITE_NAME} />
      {/* Add your Twitter handle if you have one */}
      {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}
      {/* <meta name="twitter:creator" content="@yourtwitterhandle" /> */}

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#000000" />

      {/* Alternate Languages (if multilingual) */}
      {/* <link rel="alternate" hrefLang="en" href={canonicalUrl} /> */}
      {/* <link rel="alternate" hrefLang="ko" href={`${canonicalUrl}?lang=ko`} /> */}
    </Head>
  );
};

export default SEO;
