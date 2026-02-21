const steps = [
  { num: '01', title: '상담 & 분석', desc: '기업의 마케팅 현황과 목표를 분석합니다.' },
  { num: '02', title: '전략 수립', desc: 'AI 기반 맞춤 마케팅 전략을 수립합니다.' },
  { num: '03', title: '실행 & 최적화', desc: 'AI 도구를 활용하여 전략을 실행하고 최적화합니다.' },
  { num: '04', title: '성과 보고', desc: '데이터 기반 성과를 분석하고 보고합니다.' },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">Process</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            진행 프로세스
          </h2>
          <p className="text-kiad-muted max-w-2xl mx-auto">
            체계적인 4단계 프로세스로 마케팅 성과를 만들어 갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-navy-border" />
              )}
              <div className="relative z-10 w-20 h-20 mx-auto bg-navy-card border-2 border-accent/30 rounded-2xl flex items-center justify-center text-accent font-black text-xl mb-4 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                {step.num}
              </div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-kiad-muted text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
