const results = [
  { value: '300%', label: '평균 ROAS 달성' },
  { value: '50%', label: '마케팅 비용 절감' },
  { value: '200%', label: '리드 생성 증가' },
  { value: '5배', label: '콘텐츠 생산성 향상' },
];

export default function Results() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r) => (
            <div key={r.label}>
              <div className="text-3xl md:text-4xl font-black text-accent mb-2">{r.value}</div>
              <p className="text-white/80 text-sm">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
