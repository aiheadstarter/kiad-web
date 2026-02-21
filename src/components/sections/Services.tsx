const services = [
  {
    icon: '🎓',
    title: 'AI 마케팅 교육',
    desc: '실무 중심의 AI 마케팅 교육 프로그램으로 마케팅 역량을 강화하세요.',
    features: ['ChatGPT 마케팅 활용', 'AI 광고 카피라이팅', 'AI 이미지/영상 제작', '데이터 분석 자동화'],
  },
  {
    icon: '📢',
    title: 'AI 광고 대행',
    desc: 'AI 기술을 활용한 정밀 타겟팅과 최적화로 광고 효과를 극대화합니다.',
    features: ['AI 타겟팅 최적화', '자동 입찰 관리', '성과 분석 리포트', '크리에이티브 A/B 테스트'],
  },
  {
    icon: '🎨',
    title: 'AI 홍보 콘텐츠 제작',
    desc: 'AI 기술로 고품질 홍보 콘텐츠를 빠르고 효과적으로 제작합니다.',
    features: ['AI 카피라이팅', 'AI 이미지 생성', 'AI 영상 제작', 'SNS 콘텐츠 자동화'],
  },
  {
    icon: '💡',
    title: 'AI 마케팅 컨설팅',
    desc: '기업별 맞춤 AI 마케팅 전략 수립부터 실행까지 함께합니다.',
    features: ['마케팅 현황 진단', 'AI 전환 로드맵', '실행 전략 수립', '성과 모니터링'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-DEFAULT">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            AI 기반 마케팅 서비스
          </h2>
          <p className="text-kiad-muted max-w-2xl mx-auto">
            최신 AI 기술을 활용한 전문 마케팅 서비스로 비즈니스 성장을 지원합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-navy-card border border-navy-border rounded-2xl p-6 card-hover group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-kiad-muted text-sm mb-4 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-kiad-light text-sm flex items-center gap-2">
                    <span className="text-accent text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
