const benefits = [
  {
    icon: '⚡',
    title: '업무 효율화',
    desc: 'AI 자동화로 반복 업무를 줄이고 핵심 업무에 집중할 수 있습니다.',
  },
  {
    icon: '💰',
    title: '비용 절감',
    desc: '마케팅 비용을 최적화하여 더 적은 비용으로 더 큰 효과를 만듭니다.',
  },
  {
    icon: '📈',
    title: '매출 증대',
    desc: 'AI 기반 정밀 타겟팅으로 전환율과 매출을 향상시킵니다.',
  },
  {
    icon: '🎯',
    title: '데이터 기반 의사결정',
    desc: 'AI 분석을 통해 정확한 데이터 기반의 마케팅 의사결정을 지원합니다.',
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            왜 AI 마케팅인가?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-navy-card border border-navy-border rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-kiad-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
