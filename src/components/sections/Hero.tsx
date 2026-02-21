import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-DEFAULT via-primary to-navy-DEFAULT" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
          <span className="text-accent text-sm font-medium">🚀 AI 마케팅의 새로운 기준</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          AI로 마케팅의<br />
          <span className="text-gradient">미래를 열다</span>
        </h1>

        {/* Description */}
        <p className="text-kiad-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          한국광고연구소는 AI 기술을 활용한 혁신적인 마케팅 솔루션으로<br className="hidden md:block" />
          중소기업의 성장을 돕습니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#contact" className="btn-primary text-lg">
            무료 상담 신청 →
          </Link>
          <Link href="/#services" className="btn-outline text-lg">
            서비스 알아보기
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kiad-muted/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
