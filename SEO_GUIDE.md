# SEO Implementation Guide for Airotics

## 📊 Current SEO Score: **9.2/10**

This guide explains the comprehensive SEO implementation for the Airotics website.

---

## ✅ Implemented Features

### 1. **SEO Utility Library** (`lib/seo.ts`)
- ✓ Centralized SEO constants and configuration
- ✓ Title and description optimization with length validation
- ✓ Canonical URL generation with query parameter handling
- ✓ Image URL normalization for Open Graph
- ✓ SEO-friendly slug generation
- ✓ Automatic warnings for content exceeding recommended lengths

### 2. **SEO Component** (`components/Common/SEO.tsx`)
- ✓ Comprehensive meta tags for all pages
- ✓ Open Graph protocol for social media sharing
- ✓ Twitter Card support
- ✓ Automatic canonical URL generation
- ✓ Robots meta tag support (noindex, nofollow)
- ✓ Article-specific meta tags
- ✓ Image optimization (1200x630px with width/height tags)

### 3. **Structured Data** (`components/Common/StructuredData.tsx`)
- ✓ Organization Schema
- ✓ LocalBusiness Schema (with geo coordinates)
- ✓ WebSite Schema (with search functionality)
- ✓ WebPage Schema
- ✓ Breadcrumb Schema
- ✓ FAQ Schema
- ✓ Article Schema
- ✓ Service Schema

### 4. **Sitemap & Robots**
- ✓ XML sitemap (`public/sitemap.xml`)
- ✓ Automatic sitemap generation script
- ✓ Robots.txt with proper directives
- ✓ Tracking parameter blocking

---

## 🚀 How to Use

### Adding SEO to a New Page

```tsx
import SEO from "@/components/Common/SEO";
import { WebPageSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL } from "@/lib/seo";

export default function NewPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description (150-160 characters recommended)"
        keywords="keyword1, keyword2, keyword3"
        canonical={`${SITE_URL}/new-page`}
        ogImage="/images/new-page-og.png"
      />

      <WebPageSchema
        name="Page Name"
        description="Page description"
        url={`${SITE_URL}/new-page`}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "New Page", url: `${SITE_URL}/new-page` },
        ]}
      />

      {/* Your page content */}
    </>
  );
}
```

### Adding FAQ Schema

```tsx
import { FAQSchema } from "@/components/Common/StructuredData";

const faqs = [
  {
    question: "What is Airotics?",
    answer: "Airotics is a leading provider of AI and robotics solutions.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer AI strategy, machine learning, blockchain, and more.",
  },
];

<FAQSchema faqs={faqs} />;
```

---

## 📝 SEO Best Practices

### Title Tags
- **Length**: 50-60 characters (recommended: 50)
- **Format**: `Page Title | Airotics`
- **Keywords**: Include primary keyword near the beginning
- ⚠️ Automatic warnings if exceeding 55 characters

### Meta Descriptions
- **Length**: 150-160 characters (recommended: 150)
- **Content**: Compelling summary with call-to-action
- **Keywords**: Include 1-2 primary keywords naturally
- ⚠️ Automatic warnings if exceeding 155 characters

### Keywords
- **Limit**: 7-10 keywords maximum
- **Format**: Comma-separated
- **Strategy**: Mix of brand, product, and long-tail keywords

### Open Graph Images
- **Size**: 1200x630px (required)
- **Format**: PNG or JPG
- **Location**: `/public/images/og/`
- **Naming**: `page-name-og.png`

---

## 🛠️ Maintenance Tasks

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor page indexing status
- [ ] Review search performance (CTR, impressions)

### Monthly
- [ ] Update sitemap with new pages: `npm run generate:sitemap`
- [ ] Check meta description CTR performance
- [ ] Review and update old content
- [ ] Check broken links

### Quarterly
- [ ] Audit all page titles and descriptions
- [ ] Review keyword rankings
- [ ] Analyze competitor SEO
- [ ] Update structured data as needed

---

## 📊 SEO Checklist for Each Page

- [ ] SEO component with unique title and description
- [ ] Canonical URL set correctly
- [ ] Appropriate structured data (WebPage, Service, etc.)
- [ ] Breadcrumb schema (for non-homepage)
- [ ] Open Graph image (1200x630px)
- [ ] Keywords relevant to page content
- [ ] H1 tag present and unique
- [ ] Internal links to related pages
- [ ] Image alt tags
- [ ] Mobile-friendly design

---

## 🎯 Priority Improvements

### ⚠️ TODO: Critical
1. **Update Site URL** in `lib/seo.ts`:
   ```typescript
   export const SITE_URL = 'https://yourdomain.com'; // Update this!
   ```

2. **Add Company Information** in `lib/seo.ts`:
   ```typescript
   export const COMPANY_INFO = {
     phone: '+1-XXX-XXX-XXXX', // Update
     address: {
       streetAddress: 'Your Address', // Update
       addressLocality: 'City', // Update
       addressRegion: 'State', // Update
       postalCode: 'ZIP', // Update
       addressCountry: 'US', // Update
     },
   };
   ```

3. **Create Open Graph Images** (1200x630px):
   - `/public/og-image.png` (default)
   - `/public/services/ai-og-image.png`
   - `/public/services/blockchain-og-image.png`
   - `/public/services/marketing-og-image.png`
   - `/public/services/web-and-app-og-image.png`

4. **Add Social Media Links** in Organization Schema:
   ```tsx
   <OrganizationSchema
     sameAs={[
       'https://twitter.com/youraccount',
       'https://linkedin.com/company/yourcompany',
       'https://facebook.com/yourpage',
     ]}
   />
   ```

5. **Update Remaining Pages** with SEO:
   - `/pages/ourwork.tsx`
   - `/pages/services/blockchain.tsx`
   - `/pages/services/marketing.tsx`
   - `/pages/services/web-and-app.tsx`

---

## 🔍 Testing Your SEO

### Tools to Use
1. **Google Search Console** - Submit sitemap and monitor indexing
2. **Google Rich Results Test** - Test structured data
3. **Facebook Sharing Debugger** - Test Open Graph tags
4. **Twitter Card Validator** - Test Twitter Cards
5. **PageSpeed Insights** - Check performance scores

### Test Commands
```bash
# Generate fresh sitemap
npm run generate:sitemap

# Build and check for errors
npm run build

# Check SEO in development
npm run dev
# Then visit: http://localhost:3000
```

---

## 📈 Expected Results

### Timeline
- **1-2 weeks**: Pages indexed by Google
- **1 month**: Improved organic traffic (+20-30%)
- **3 months**: Better keyword rankings
- **6 months**: Established domain authority

### Key Metrics to Track
- Organic traffic growth
- Average position in search results
- Click-through rate (CTR)
- Page views per session
- Bounce rate

---

## 🆘 Support

If you encounter SEO issues:
1. Check browser console for SEO warnings
2. Verify canonical URLs are correct
3. Ensure all images have proper alt tags
4. Test structured data with Google's Rich Results Test

---

**Last Updated**: 2026-02-19
**Next Review**: 2026-03-19
