/**
 * Structured Data (JSON-LD) Components
 * Schema.org markup for better search engine understanding
 */

import React from 'react';
import { SITE_NAME, SITE_URL, COMPANY_INFO } from '@/lib/seo';

// ============================================================================
// Organization Schema
// ============================================================================

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[]; // Social media URLs
  foundingDate?: string;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = SITE_NAME,
  url = SITE_URL,
  logo = `${SITE_URL}/logo.png`,
  description,
  email = COMPANY_INFO.email,
  telephone = COMPANY_INFO.phone,
  address = COMPANY_INFO.address,
  sameAs = [],
  foundingDate = COMPANY_INFO.foundingDate,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    ...(description && { description }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(address.streetAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(foundingDate && { foundingDate }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// LocalBusiness Schema
// ============================================================================

export interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  image?: string[];
  priceRange?: string; // e.g., "$$", "$$$"
  openingHours?: string[]; // e.g., ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"]
  paymentAccepted?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  image,
  priceRange,
  openingHours,
  paymentAccepted,
  aggregateRating,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    ...(description && { description }),
    url,
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(image && image.length > 0 && { image }),
    ...(priceRange && { priceRange }),
    ...(openingHours && { openingHours }),
    ...(paymentAccepted && { paymentAccepted }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// WebSite Schema
// ============================================================================

export interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  searchUrl?: string; // URL pattern for search, e.g., "https://example.com/search?q={search_term_string}"
}

export const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({
  name = SITE_NAME,
  url = SITE_URL,
  description,
  searchUrl,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    ...(description && { description }),
    ...(searchUrl && {
      potentialAction: {
        '@type': 'SearchAction',
        target: searchUrl,
        'query-input': 'required name=search_term_string',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// WebPage Schema
// ============================================================================

export interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
  datePublished,
  dateModified,
  image,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// Breadcrumb Schema
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// FAQ Schema
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// Article Schema
// ============================================================================

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo: string;
  };
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = {
    name: SITE_NAME,
    logo: `${SITE_URL}/logo.png`,
  },
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================================
// Service Schema
// ============================================================================

export interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    ...(areaServed && { areaServed }),
    ...(serviceType && { serviceType }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
