# Quick Start: Add SEO to Your Remaining Pages

## 🚀 5-Minute SEO Setup for Each Page

### Template for Service Pages

Copy this pattern to your remaining service pages:

```tsx
// At the top of your file, add these imports:
import SEO from "@/components/Common/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

// In your component's return statement, add BEFORE your existing content:
<>
  <SEO
    title="[Service Name] - [Brief Description]"
    description="[Compelling 150-character description of the service]"
    keywords="[keyword1, keyword2, keyword3, keyword4, keyword5]"
    canonical={`${SITE_URL}/services/[service-name]`}
    ogImage="/services/[service-name]-og-image.png"
  />

  <ServiceSchema
    name="[Service Name]"
    description="[Brief service description]"
    provider={{
      name: SITE_NAME,
      url: SITE_URL,
    }}
    serviceType="[Service Type]"
  />

  <BreadcrumbSchema
    items={[
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: "[Service Name]", url: `${SITE_URL}/services/[service-name]` },
    ]}
  />

  {/* Your existing page content below */}
</>
```

---

## 📝 Specific Examples

### 1. Blockchain Service (`pages/services/blockchain.tsx`)

```tsx
import SEO from "@/components/Common/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

// ... other imports ...

const BlockchainPage = () => {
  return (
    <>
      <SEO
        title="Blockchain Services - Decentralized Solutions"
        description="Build secure, scalable blockchain solutions with Airotics. From smart contracts to DApps, we deliver cutting-edge blockchain technology for your business."
        keywords="blockchain, smart contracts, DApps, Web3, cryptocurrency, blockchain development, decentralized applications"
        canonical={`${SITE_URL}/services/blockchain`}
        ogImage="/services/blockchain-og-image.png"
      />

      <ServiceSchema
        name="Blockchain Services"
        description="Secure and scalable blockchain solutions for modern businesses"
        provider={{
          name: SITE_NAME,
          url: SITE_URL,
        }}
        serviceType="Blockchain Development"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Blockchain", url: `${SITE_URL}/services/blockchain` },
        ]}
      />

      {/* Your existing content */}
    </>
  );
};
```

---

### 2. Marketing Service (`pages/services/marketing.tsx`)

```tsx
import SEO from "@/components/Common/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const MarketingPage = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Services - AI-Powered Marketing"
        description="Transform your marketing with AI-powered strategies. Data-driven campaigns, automation, and analytics that deliver measurable results."
        keywords="digital marketing, AI marketing, marketing automation, content marketing, social media marketing, SEO services"
        canonical={`${SITE_URL}/services/marketing`}
        ogImage="/services/marketing-og-image.png"
      />

      <ServiceSchema
        name="Digital Marketing Services"
        description="AI-powered marketing solutions that drive growth"
        provider={{
          name: SITE_NAME,
          url: SITE_URL,
        }}
        serviceType="Digital Marketing"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Marketing", url: `${SITE_URL}/services/marketing` },
        ]}
      />

      {/* Your existing content */}
    </>
  );
};
```

---

### 3. Web & App Service (`pages/services/web-and-app.tsx`)

```tsx
import SEO from "@/components/Common/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const WebAndAppPage = () => {
  return (
    <>
      <SEO
        title="Web & App Development - Custom Digital Solutions"
        description="Build powerful web applications and mobile apps with Airotics. Custom development, responsive design, and scalable architecture for your business."
        keywords="web development, app development, mobile apps, web applications, custom software, responsive design, full stack development"
        canonical={`${SITE_URL}/services/web-and-app`}
        ogImage="/services/web-and-app-og-image.png"
      />

      <ServiceSchema
        name="Web & App Development"
        description="Custom web and mobile application development services"
        provider={{
          name: SITE_NAME,
          url: SITE_URL,
        }}
        serviceType="Software Development"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Web & App", url: `${SITE_URL}/services/web-and-app` },
        ]}
      />

      {/* Your existing content */}
    </>
  );
};
```

---

### 4. Our Work Page (`pages/ourwork.tsx`)

```tsx
import SEO from "@/components/Common/SEO";
import { WebPageSchema } from "@/components/Common/StructuredData";
import { SITE_URL } from "@/lib/seo";

const OurWorkPage = () => {
  return (
    <>
      <SEO
        title="Our Work - Portfolio & Case Studies"
        description="Explore Airotics' portfolio of successful AI and robotics projects. See how we've helped businesses transform with cutting-edge technology."
        keywords="portfolio, case studies, projects, AI projects, robotics solutions, success stories, client work"
        canonical={`${SITE_URL}/ourwork`}
        ogImage="/ourwork-og-image.png"
      />

      <WebPageSchema
        name="Our Work - Airotics Portfolio"
        description="Portfolio of AI and robotics projects"
        url={`${SITE_URL}/ourwork`}
      />

      {/* Your existing content */}
    </>
  );
};
```

---

## ✅ Checklist for Each Page

When updating a page:
- [ ] Add imports at the top
- [ ] Add SEO component with unique title (< 60 chars)
- [ ] Add unique description (150-160 chars)
- [ ] Add 5-7 relevant keywords
- [ ] Set correct canonical URL
- [ ] Add appropriate Schema (Service or WebPage)
- [ ] Add Breadcrumb schema (except homepage)
- [ ] Create OG image (1200x630px) - or use default
- [ ] Test in dev mode: `npm run dev`

---

## 🎯 Title Writing Tips

Good titles follow this pattern:
```
[Primary Keyword] - [Benefit/Description] | Airotics
```

Examples:
- ✅ "AI Services - Artificial Intelligence Solutions | Airotics"
- ✅ "Blockchain Development - Secure DApps & Smart Contracts"
- ✅ "Digital Marketing - AI-Powered Growth Strategies"
- ❌ "Services" (too vague)
- ❌ "Blockchain Cryptocurrency Web3 DApps Smart Contracts" (keyword stuffing)

---

## 📝 Description Writing Tips

Great descriptions:
1. **Hook** (first 20 chars): Grab attention
2. **Value** (middle): What you offer
3. **Call-to-action** (end): What they should do

Example:
```
"Transform your business with AI-powered marketing.
Data-driven campaigns, automation, and analytics
that deliver measurable results. Get started today."
```

---

## 🔍 Keyword Research Quick Guide

For each page, include:
- **1-2 Primary keywords**: Main service (e.g., "AI services")
- **2-3 Secondary keywords**: Variations (e.g., "artificial intelligence solutions")
- **2-3 Long-tail keywords**: Specific phrases (e.g., "AI consulting for startups")

Example for AI Services:
```
"AI services, artificial intelligence, machine learning,
 AI consulting, AI strategy, AI development, AI integration"
```

---

## 🚨 Common Mistakes to Avoid

1. ❌ **Duplicate titles** - Each page needs unique title
2. ❌ **Too long** - Keep title < 60 chars, description < 160 chars
3. ❌ **Keyword stuffing** - Use keywords naturally
4. ❌ **Generic descriptions** - Be specific about your service
5. ❌ **Missing canonical URLs** - Always set canonical
6. ❌ **Wrong breadcrumbs** - Match your actual page structure

---

## 💡 Pro Tips

1. **Use the warnings**: The system will warn you if titles/descriptions are too long
2. **Be specific**: "AI Chatbot Development" > "AI Services"
3. **Include benefits**: "Increase Sales with AI" > "AI Solutions"
4. **Natural language**: Write for humans, not search engines
5. **Test as you go**: Run `npm run dev` to see your changes

---

## 🧪 Testing Your Changes

After adding SEO to a page:

1. **Dev Mode**:
   ```bash
   npm run dev
   ```
   Visit the page and check console for warnings

2. **View Source**:
   - Right-click → "View Page Source"
   - Search for `<title>` and `<meta name="description"`
   - Verify they're correct

3. **Production Build**:
   ```bash
   npm run build
   npm start
   ```
   Test the built version

---

## ⏱️ Time Estimate

- **Per page**: 5-7 minutes
- **4 remaining pages**: ~30 minutes total
- **Testing**: 5 minutes
- **Total**: ~35 minutes to complete all SEO

---

## 📞 Need Help?

If you get stuck:
1. Look at `/pages/services/ai.tsx` as reference
2. Check `SEO_GUIDE.md` for detailed docs
3. Console will show ⚠️ warnings for issues

---

**You've got this!** 💪

Just copy, customize, and test. Your SEO will be complete in under an hour!
