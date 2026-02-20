'use client'

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import PortfolioModal from '@/components/portfolio/PortfolioModal';
import portfolioData, { quickPortfolioData } from '@/components/portfolio/data';

export default function OurWork() {
  type PortfolioItem = (typeof portfolioData)[number];
  type QuickPortfolioItem = (typeof quickPortfolioData)[number];
  const QUICK_ITEMS_PER_PAGE = 8;
  const portfolioItems = portfolioData as PortfolioItem[];
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [quickPage, setQuickPage] = useState(1);

  const categories = [
    { key: 'all', name: 'All' },
    { key: 'corporate', name: 'Corporate Website' },
    { key: 'ecommerce', name: 'E-commerce' },
    { key: 'startup', name: 'Startup' },
    { key: 'medical', name: 'Medical / Healthcare' },
    { key: 'studio', name: 'Studio' },
    { key: 'personal', name: 'Personal Website' }
  ];

  

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);
  const filteredQuickPortfolio: QuickPortfolioItem[] = activeFilter === 'all'
    ? quickPortfolioData
    : quickPortfolioData.filter((item) => item.category === activeFilter);
  const featuredPortfolio = filteredPortfolio.slice(0);
  const quickPortfolio = filteredQuickPortfolio;
  const quickTotalPages = Math.max(1, Math.ceil(quickPortfolio.length / QUICK_ITEMS_PER_PAGE));
  const quickStart = (quickPage - 1) * QUICK_ITEMS_PER_PAGE;
  const pagedQuickPortfolio = quickPortfolio.slice(quickStart, quickStart + QUICK_ITEMS_PER_PAGE);

  useEffect(() => {
    setQuickPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (quickPage > quickTotalPages) setQuickPage(quickTotalPages);
  }, [quickPage, quickTotalPages]);

  return (
    <>
      <Head>
        <title>Airotics Application | Our Work</title>
      </Head>
      <video
        className="video-load fixed inset-0 -z-10 h-full w-full object-cover object-[72%_center] lg:object-center"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <main>
        <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pt-28 pb-16 lg:pt-44 lg:pb-24">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70">Case Studies</p>
          <h1 className="font-display mt-4 text-[clamp(3rem,8vw,9.2rem)] leading-[0.95] uppercase text-black">
            Our Work
          </h1>
          <p className="mt-6 max-w-2xl text-base text-black/70 lg:text-xl">
            Explore result-driven projects delivered for clients across multiple industries.
          </p>
          {/* <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeFilter === category.key
                    ? 'border-black bg-black text-white'
                    : 'border-black/20 bg-white/80 text-black hover:bg-black/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div> */}
        </section>

        <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pb-24 lg:pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPortfolio.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedCase(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/85 text-white backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                      <div className="ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-black"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                      {categories.find(cat => cat.key === item.category)?.name}
                    </span>
                    <span className="text-xs text-white/60">{item.year}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-white/70">
                    {item.problem}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/80">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center font-medium text-white/90">
                    <span className="text-sm">View details</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {quickPortfolio.length > 0 && (
          <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pb-20 lg:pb-24">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-semibold text-black lg:text-4xl">More Works</h2>
              <p className="text-sm text-black/60 lg:text-base">Quick preview with direct links</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 grid-cols-2">
              {pagedQuickPortfolio.map((item) => (
                <Link
                  key={item.id}
                  href={item.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-black/15 bg-white/85 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="truncate text-sm font-medium text-black">{item.title}</p>
                    <ArrowRight className="h-4 w-4 text-black/70 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
            {quickTotalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  onClick={() => setQuickPage((prev) => Math.max(1, prev - 1))}
                  disabled={quickPage === 1}
                  className="rounded-full border border-black/20 bg-white px-4 py-2 text-sm text-black transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Prev
                </button>
                <p className="text-sm text-black/70">
                  {quickPage} / {quickTotalPages}
                </p>
                <button
                  onClick={() => setQuickPage((prev) => Math.min(quickTotalPages, prev + 1))}
                  disabled={quickPage === quickTotalPages}
                  className="rounded-full border border-black/20 bg-white px-4 py-2 text-sm text-black transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </section>
        )}

        <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto pb-20 lg:pb-28">
          <div className="rounded-3xl border border-white/20 bg-black/85 px-6 py-12 text-center text-white backdrop-blur-sm lg:px-10">
            <h2 className="text-3xl font-bold lg:text-5xl">Want to see more?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-white/70">
              We have 100+ additional project cases and can suggest the best direction for your business.
            </p>
            <div className="mt-8 space-y-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-white/90"
              >
                Request a custom portfolio consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-white/60">In a free consultation, we will share project cases tailored to your goals.</p>
            </div>
          </div>
        </section>
      </main>
      <PortfolioModal
        isOpen={selectedCase !== null}
        onClose={() => setSelectedCase(null)}
        selectedCase={selectedCase}
        portfolioData={featuredPortfolio}
        categories={categories}
      />
    </>
  );
}