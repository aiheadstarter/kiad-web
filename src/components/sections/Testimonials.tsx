const testimonials = [
  {
    quote: 'AI 마케팅 교육 후 자체적으로 광고를 운영할 수 있게 되었고, 매출이 2배 이상 증가했습니다.',
    author: '김대표',
    company: '○○커머스',
    role: '대표',
  },
  {
    quote: '전문적이고 체계적인 컨설팅 덕분에 마케팅 비용은 줄이면서 효율은 크게 높아졌습니다.',
    author: '이팀장',
    company: '△△테크',
    role: '마케팅팀장',
  },
  {
    quote: 'AI 콘텐츠 제작 서비스로 SNS 운영 시간이 80% 단축되었고, 팔로워도 3배 증가했습니다.',
    author: '박사장',
    company: '□□푸드',
    role: '사장',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy-DEFAULT">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            고객 후기
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-navy-card border border-navy-border rounded-2xl p-8 card-hover">
              <div className="text-accent text-3xl mb-4">&ldquo;</div>
              <p className="text-kiad-light leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-kiad-muted text-sm">{t.company} · {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
