import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import SEO from "@/components/Common/SEO";
import VideoModal from "@/components/Home/Work/VideoModal";
import { SITE_URL } from "@/lib/seo";

type AutomationVideo = {
  id: number;
  title: string;
  niche: string;
  goal: string;
  workflow: string;
  duration: string;
  thumbnail: string;
  stack: string[];
};

const automationVideos: AutomationVideo[] = [
  {
    id: 1,
    title: "AI Workflow Automation Developer",
    niche: "AI + Business Systems",
    goal: "Build automation pipelines connecting AI models with tools and databases.",
    workflow:
      "OpenAI/Claude integration, report automation, data processing, app delivery.",
    duration: "00:58",
    thumbnail: "/n8n_thumbnail/n8n1.jpg",
    stack: ["n8n", "OpenAI / Claude", "Airtable", "Slack"],
  },
  {
    id: 2,
    title: "Lead Gen & LinkedIn Outreach Automation",
    niche: "Sales Automation",
    goal: "Automate prospecting, enrichment, and outreach at scale.",
    workflow:
      "Scrape leads, enrich via Apollo/Clearbit, store in CRM, auto-send email.",
    duration: "00:56",
    thumbnail: "/n8n_thumbnail/n8n2.jpg",
    stack: ["n8n", "Apollo / Clearbit", "Gmail", "Airtable"],
  },
  {
    id: 3,
    title: "CRM Automation",
    niche: "HubSpot / Salesforce / Pipedrive",
    goal: "Automate CRM lifecycle from lead capture to sales follow-up.",
    workflow:
      "Create leads from forms, update records, notify team, auto follow-up.",
    duration: "00:51",
    thumbnail: "/n8n_thumbnail/n8n3.jpg",
    stack: ["HubSpot", "Salesforce", "Slack", "Google Sheets"],
  },
  {
    id: 4,
    title: "AI Content Automation",
    niche: "Blogs & Social Media",
    goal: "Generate and publish content automatically across channels.",
    workflow:
      "Scrape trends, draft with AI, publish to WordPress, distribute to socials.",
    duration: "00:54",
    thumbnail: "/n8n_thumbnail/n8n4.jpg",
    stack: ["n8n", "OpenAI", "WordPress API", "LinkedIn API"],
  },
  {
    id: 5,
    title: "AI Video / YouTube Automation",
    niche: "Creator Pipeline",
    goal: "Automate video idea-to-publish workflow.",
    workflow:
      "Generate topics, create script, TTS voice, auto-produce and upload videos.",
    duration: "01:05",
    thumbnail: "/n8n_thumbnail/n8n5.jpg",
    stack: ["n8n", "ElevenLabs", "YouTube API", "OpenAI"],
  },
  {
    id: 6,
    title: "Chatbot & Website Automation",
    niche: "Lead Qualification",
    goal: "Connect chatbot conversations to backend automations.",
    workflow:
      "Chatbot captures intent, syncs CRM, alerts sales, and starts email flows.",
    duration: "00:37",
    thumbnail: "/n8n_thumbnail/n8n6.jpg",
    stack: ["n8n", "Flowise / LangChain", "OpenAI", "CRM"],
  },
  {
    id: 7,
    title: "WhatsApp / Voice AI Automation",
    niche: "Customer Communication",
    goal: "Automate support and booking through voice or messaging channels.",
    workflow:
      "Receive request, process with AI, trigger actions, sync CRM/booking.",
    duration: "01:04",
    thumbnail: "/n8n_thumbnail/n8n7.jpg",
    stack: ["n8n", "Twilio", "WhatsApp API", "Speech AI"],
  },
  {
    id: 8,
    title: "Zapier / Make to n8n Migration",
    niche: "Migration & Optimization",
    goal: "Migrate existing automations to self-hosted n8n for control and savings.",
    workflow:
      "Rebuild workflows, optimize logic, deploy to VPS/cloud, reduce costs.",
    duration: "00:36",
    thumbnail: "/n8n_thumbnail/n8n8.jpg",
    stack: ["n8n", "VPS", "Docker", "Cloud"],
  },
  {
    id: 9,
    title: "API Integration Automation",
    niche: "SaaS Integrations",
    goal: "Connect business apps using custom API-based workflows.",
    workflow:
      "Stripe event -> invoice -> CRM update -> Slack notification pipeline.",
    duration: "01:03",
    thumbnail: "/n8n_thumbnail/n8n9.jpg",
    stack: ["Stripe", "Slack", "Google Sheets", "CRM API"],
  },
  {
    id: 10,
    title: "Debugging & Workflow Optimization",
    niche: "Reliability Engineering",
    goal: "Fix broken n8n workflows and improve performance.",
    workflow:
      "Resolve webhook issues, remove looping bugs, add logging and monitoring.",
    duration: "00:59",
    thumbnail: "/n8n_thumbnail/n8n10.jpg",
    stack: ["n8n", "Webhooks", "Logs", "Monitoring"],
  },
];

export default function AIAutomationPage() {
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string | null>(null);
  const getVideoSrc = (id: number) => `/n8n_video/n8n${id}.mp4`;

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
              onClick={() => setSelectedVideoSrc(getVideoSrc(video.id))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedVideoSrc(getVideoSrc(video.id));
                }
              }}
              role="button"
              tabIndex={0}
              className="group overflow-hidden rounded-3xl border border-white/20 bg-black/85 text-white backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                <p className="mt-3 text-sm text-white/75">{video.goal}</p>
                <p className="mt-2 text-xs text-white/60">{video.workflow}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {video.stack.map((item) => (
                    <span
                      key={item}
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
      <VideoModal
        isOpen={selectedVideoSrc !== null}
        src={selectedVideoSrc}
        onClose={() => setSelectedVideoSrc(null)}
      />
    </>
  );
}
