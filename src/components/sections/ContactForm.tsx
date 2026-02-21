'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Supabase 또는 이메일 연동
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
              무료 상담 신청
            </h2>
            <p className="text-kiad-muted mb-8">
              AI 마케팅에 대해 궁금한 점이 있으시면 편하게 문의해 주세요.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="이름 *"
                  required
                  className="bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="회사명"
                  className="bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="연락처 *"
                  required
                  className="bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="이메일"
                  className="bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <select className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors">
                <option value="">관심 분야 선택</option>
                <option value="education">AI 마케팅 교육</option>
                <option value="agency">AI 광고 대행</option>
                <option value="content">AI 콘텐츠 제작</option>
                <option value="consulting">AI 마케팅 컨설팅</option>
              </select>

              <textarea
                placeholder="문의 내용을 입력해 주세요"
                rows={4}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />

              <label className="flex items-center gap-2 text-kiad-muted text-sm cursor-pointer">
                <input type="checkbox" required className="accent-accent" />
                개인정보 수집 및 이용에 동의합니다.
              </label>

              <button type="submit" className="btn-primary w-full text-center !py-4">
                {submitted ? '✓ 신청이 완료되었습니다!' : '무료 상담 신청하기'}
              </button>
            </form>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl mb-6">바로 연락하기</h3>

            {[
              { icon: '📞', label: '전화 상담', value: '010-5765-4046', href: 'tel:010-5765-4046' },
              { icon: '📸', label: 'Instagram', value: '@kiad_official', href: 'https://instagram.com/kiad_official' },
              { icon: '💬', label: '카카오톡 상담', value: '카카오톡 문의하기', href: '#' },
              { icon: '📧', label: '이메일', value: 'ad@ad.re.kr', href: 'mailto:ad@ad.re.kr' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 bg-navy-card border border-navy-border rounded-xl p-5 card-hover group"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-kiad-muted text-sm">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-accent transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
