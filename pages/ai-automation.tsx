import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import SEO from "@/components/Common/SEO";
import AIAutomationModal, {
  type AutomationCase,
} from "@/components/Automation/AIAutomationModal";
import { SITE_URL } from "@/lib/seo";

const automationVideos: AutomationCase[] = [
  {
    id: 1,
    title: "AI Workflow Automation Developer",
    niche: "AI + Business Systems",
    challenge:
      "Build automation pipelines that connect AI models with business tools and databases.",
    solutions: [
      "Integrate OpenAI or Claude with n8n workflows.",
      "Automate report generation on a schedule.",
      "Process incoming data from forms, APIs, and webhooks.",
      "Push AI-generated outputs to internal and client apps.",
    ],
    duration: "00:58",
    thumbnail: "/n8n_thumbnail/n8n1.jpg",
    videoSrc: "/n8n_video/n8n1.mp4",
    stack: ["n8n", "OpenAI / Claude", "Airtable", "Slack"],
    client: "N techcompany",
    year: "2021",
    category: "Workflow Automation",
  },
  {
    id: 2,
    title: "Lead Gen & LinkedIn Outreach Automation",
    niche: "Sales Automation",
    challenge:
      "Automate the sales lead generation process from sourcing to outreach.",
    solutions: [
      "Scrape leads from LinkedIn and target websites.",
      "Enrich lead data with Apollo or Clearbit.",
      "Store leads in Airtable or CRM automatically.",
      "Send outreach emails through Gmail/SMTP sequences.",
    ],
    duration: "00:56",
    thumbnail: "/n8n_thumbnail/n8n2.jpg",
    videoSrc: "/n8n_video/n8n2.mp4",
    stack: ["n8n", "Apollo / Clearbit", "Gmail", "Airtable"],
    client: "V sales agency",
    year: "2024",
    category: "Lead Generation",
  },
  {
    id: 3,
    title: "CRM Automation",
    niche: "HubSpot / Salesforce / Pipedrive",
    challenge: "Automate CRM workflows to reduce manual sales operations.",
    solutions: [
      "Create CRM leads from website forms in real time.",
      "Send follow-up emails based on lead stage.",
      "Keep CRM records synced across systems.",
      "Notify sales teams through Slack and email triggers.",
    ],
    duration: "00:51",
    thumbnail: "/n8n_thumbnail/n8n3.jpg",
    videoSrc: "/n8n_video/n8n3.mp4",
    stack: ["HubSpot", "Salesforce", "Slack", "Google Sheets"],
    client: "O dental group",
    year: "2022",
    category: "CRM Systems",
  },
  {
    id: 4,
    title: "AI Content Automation",
    niche: "Blogs & Social Media",
    challenge: "Generate and publish content automatically across channels.",
    solutions: [
      "Scrape trending topics and keyword opportunities.",
      "Generate article drafts with OpenAI.",
      "Publish approved posts to WordPress automatically.",
      "Distribute posts to Twitter and LinkedIn APIs.",
    ],
    duration: "00:54",
    thumbnail: "/n8n_thumbnail/n8n4.jpg",
    videoSrc: "/n8n_video/n8n4.mp4",
    stack: ["n8n", "OpenAI", "WordPress API", "LinkedIn API"],
    client: "N media studio",
    year: "2025",
    category: "Content Automation",
  },
  {
    id: 5,
    title: "AI Video / YouTube Automation",
    niche: "Creator Pipeline",
    challenge: "Automate video production and publishing pipeline for YouTube.",
    solutions: [
      "Generate topic ideas using AI prompt workflows.",
      "Create scripts automatically with OpenAI.",
      "Convert text to voice using ElevenLabs TTS.",
      "Auto-generate and upload final videos to YouTube.",
    ],
    duration: "01:05",
    thumbnail: "/n8n_thumbnail/n8n5.jpg",
    videoSrc: "/n8n_video/n8n5.mp4",
    stack: ["n8n", "ElevenLabs", "YouTube API", "OpenAI"],
    client: "S creator network",
    year: "2023",
    category: "Video Automation",
  },
  {
    id: 6,
    title: "Chatbot & Website Automation",
    niche: "Lead Qualification",
    challenge: "Connect chatbot conversations to backend automation workflows.",
    solutions: [
      "Qualify leads through chatbot conversation flows.",
      "Store lead information into CRM systems.",
      "Notify sales teams immediately on qualified leads.",
      "Trigger automated follow-up email sequences.",
    ],
    duration: "00:37",
    thumbnail: "/n8n_thumbnail/n8n6.jpg",
    videoSrc: "/n8n_video/n8n6.mp4",
    stack: ["n8n", "Flowise / LangChain", "OpenAI", "CRM"],
    client: "H real estate company",
    year: "2020",
    category: "Conversational Automation",
  },
  {
    id: 7,
    title: "WhatsApp / Voice AI Automation",
    niche: "Customer Communication",
    challenge:
      "Automate customer communication via WhatsApp and voice systems.",
    solutions: [
      "Receive incoming requests via WhatsApp or phone call.",
      "Process requests using AI decision logic.",
      "Trigger operational workflows automatically.",
      "Update CRM and booking systems with the result.",
    ],
    duration: "01:04",
    thumbnail: "/n8n_thumbnail/n8n7.jpg",
    videoSrc: "/n8n_video/n8n7.mp4",
    stack: ["n8n", "Twilio", "WhatsApp API", "Speech AI"],
    client: "P healthcare clinic",
    year: "2026",
    category: "Messaging & Voice",
  },
  {
    id: 8,
    title: "Zapier / Make to n8n Migration",
    niche: "Migration & Optimization",
    challenge:
      "Migrate automation systems from Zapier/Make to self-hosted n8n.",
    solutions: [
      "Rebuild existing workflows with parity checks.",
      "Optimize trigger/action logic and reduce unnecessary runs.",
      "Deploy n8n on VPS or cloud infrastructure.",
      "Improve customization and reduce recurring automation costs.",
    ],
    duration: "00:36",
    thumbnail: "/n8n_thumbnail/n8n8.jpg",
    videoSrc: "/n8n_video/n8n8.mp4",
    stack: ["n8n", "VPS", "Docker", "Cloud"],
    client: "D aircraft company",
    year: "2021",
    category: "Migration",
  },
  {
    id: 9,
    title: "API Integration Automation",
    niche: "SaaS Integrations",
    challenge: "Connect multiple SaaS platforms through API automation.",
    solutions: [
      "Capture Stripe payment events via webhook.",
      "Generate invoices automatically after payment.",
      "Update CRM records and deal status.",
      "Notify teams through Slack with delivery status.",
    ],
    duration: "01:03",
    thumbnail: "/n8n_thumbnail/n8n9.jpg",
    videoSrc: "/n8n_video/n8n9.mp4",
    stack: ["Stripe", "Slack", "Google Sheets", "CRM API"],
    client: "S logistics company",
    year: "2024",
    category: "API Integration",
  },
  {
    id: 10,
    title: "Debugging & Workflow Optimization",
    niche: "Reliability Engineering",
    challenge:
      "Fix broken workflows and improve automation performance/reliability.",
    solutions: [
      "Debug webhook errors and malformed payloads.",
      "Fix looping workflows and duplicate triggers.",
      "Improve throughput and execution reliability.",
      "Add structured logging and monitoring alerts.",
    ],
    duration: "00:59",
    thumbnail: "/n8n_thumbnail/n8n10.jpg",
    videoSrc: "/n8n_video/n8n10.mp4",
    stack: ["n8n", "Webhooks", "Logs", "Monitoring"],
    client: "B finance company",
    year: "2022",
    category: "Workflow Maintenance",
  },
];

export default function AIAutomationPage() {
  const [selectedCase, setSelectedCase] = useState<AutomationCase | null>(null);

  return (
    <>
      <SEO
        title="AI Automation Work - Airotics"
        description="Explore 10 AI automation workflows built by Airotics across sales, operations, marketing, and customer support."
        keywords="AI automation, workflow automation, AI agent portfolio, business automation"
        canonical={`${SITE_URL}/ai-automation`}
      />

      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover object-[72%_center] lg:object-center"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />

      <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pt-30 pb-12 lg:pt-44 lg:pb-16">
        <p className="text-sm tracking-[0.18em] text-black/70 uppercase">
          AI Automation Portfolio
        </p>
        <h1 className="font-display mt-4 text-[clamp(3rem,8vw,8.8rem)] leading-[0.95] text-black uppercase">
          Make your buisness smarter
        </h1>
        <p className="mt-6 max-w-2xl text-base text-black/70 lg:text-xl">
          Top automation jobs we have delivered as client workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-black/20 bg-white/85 px-3 py-1 text-xs tracking-wider text-black/80 uppercase">
            Agentic Workflow
          </span>
          <span className="rounded-full border border-black/20 bg-white/85 px-3 py-1 text-xs tracking-wider text-black/80 uppercase">
            No-code + Custom API
          </span>
          <span className="rounded-full border border-black/20 bg-white/85 px-3 py-1 text-xs tracking-wider text-black/80 uppercase">
            Human-in-the-loop
          </span>
        </div>
      </section>

      <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pb-18 lg:pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {automationVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => setSelectedCase(video)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedCase(video);
                }
              }}
              role="button"
              tabIndex={0}
              className="group overflow-hidden rounded-3xl border border-white/20 bg-black/85 text-white backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs tracking-wide text-white/90">
                  #{String(video.id).padStart(2, "0")}
                </div>
                <div className="absolute top-4 right-4 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-xs text-white/90">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Play className="h-5 w-5 fill-black" />
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-xs tracking-[0.14em] text-white/60 uppercase">
                  {video.niche}
                </p>
                <h2 className="mt-2 text-2xl leading-tight font-semibold text-white">
                  {video.title}
                </h2>
                <p className="mt-3 text-sm text-white/75">{video.challenge}</p>
                <p className="mt-2 text-xs text-white/60">
                  {video.solutions[0]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {video.stack.map((item, index) => (
                    <span
                      key={`${video.id}-stack-${index}`}
                      className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pb-20 lg:pb-28">
        <div className="rounded-3xl border border-white/20 bg-black/85 px-6 py-12 text-center text-white backdrop-blur-sm lg:px-10">
          <h3 className="text-3xl font-bold lg:text-5xl">
            Want full video walkthroughs?
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            We can share private demos and architecture details tailored to your
            business model.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-white/90"
          >
            Book AI automation consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <AIAutomationModal
        isOpen={selectedCase !== null}
        selectedCase={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </>
  );
}
