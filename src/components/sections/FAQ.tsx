'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'AI 마케팅 교육은 어떻게 진행되나요?',
    a: '기업 맞춤형으로 온라인/오프라인 교육이 진행됩니다. ChatGPT, AI 이미지 생성, 데이터 분석 등 실무에 바로 적용 가능한 커리큘럼으로 구성됩니다.',
  },
  {
    q: 'AI 마케팅 서비스 비용은 어떻게 되나요?',
    a: '서비스 종류와 기업 규모에 따라 맞춤 견적을 제공합니다. 무료 상담을 통해 정확한 비용을 안내받으실 수 있습니다.',
  },
  {
    q: '소규모 기업도 이용할 수 있나요?',
    a: '네, 중소기업과 소상공인을 위한 맞춤 패키지가 있습니다. 규모에 맞는 최적의 솔루션을 제안해 드립니다.',
  },
  {
    q: '서비스 기간은 어느 정도인가요?',
    a: '프로젝트 단위 또는 월 단위 계약이 가능합니다. 단기 컨설팅부터 장기 운영 대행까지 유연하게 진행됩니다.',
  },
  {
    q: '성과 보장이 되나요?',
    a: '데이터 기반의 성과 목표를 설정하고, 주기적인 리포팅을 통해 성과를 투명하게 공유합니다. KPI 달성을 위해 지속적으로 최적화합니다.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-navy-DEFAULT">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-navy-card border border-navy-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className={`text-accent text-xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer px-5 pb-5 ${openIndex === i ? 'open' : ''}`}>
                <p className="text-kiad-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
