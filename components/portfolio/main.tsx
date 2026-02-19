'use client'

import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';
import PortfolioModal from './PortfolioModal';
import portfolioData from './data';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const categories = [
    { key: 'all', name: '전체' },
    { key: 'corporate', name: '기업 웹사이트' },
    { key: 'ecommerce', name: 'E-커머스' },
    { key: 'startup', name: '스타트업' },
    { key: 'medical', name: '의료/헬스케어' },
    { key: 'studio', name: '스튜디오' },
    { key: 'personal', name: '개인 웹사이트' }
  ];

  

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="pb-16 pt-28 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            성공 사례로 입증된 실력
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            다양한 업계의 고객들과 함께 만들어낸 성공 스토리를 확인해보세요
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      {/* <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeFilter === category.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedCase(index)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Preview Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.key === item.category)?.name}
                    </span>
                    <span className="text-sm text-slate-500">{item.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {item.problem}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span className="text-sm">자세히 보기</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        isOpen={selectedCase !== null}
        onClose={() => setSelectedCase(null)}
        selectedCase={selectedCase}
        portfolioData={filteredPortfolio}
        categories={categories}
      />

      {/* More Portfolio Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            더 보고 싶으신가요?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            100개 이상의 다양한 프로젝트 사례가<br className='block md:hidden' /> 더 있습니다. 
            <br />
            <span className="text-blue-600 font-medium">귀하의 비즈니스에 맞는 맞춤형 솔루션</span>을 <br className='block md:hidden' />직접 확인해보세요.
          </p>
          <div className="space-y-4">
            <Link
              href="/service-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              맞춤형 포트폴리오 상담받기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-slate-500">
              무료 상담을 통해 귀하의 프로젝트에 <br className='block md:hidden' />최적화된 사례들을 보여드립니다
            </p>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      {/* <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            귀하의 성공 스토리를 만들어보세요
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            지금까지의 경험을 바탕으로 귀하의 비즈니스에 최적화된 솔루션을 제안드리겠습니다
          </p>
          <Link
            href="/check-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            프로젝트 상담받기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
}