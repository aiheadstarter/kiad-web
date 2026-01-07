import { TrendingUp, Users, BarChart3, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-black" />,
      title: "디지털 트렌드 분석",
      description: "급변하는 디지털 광고 시장의 최신 트렌드를 실시간으로 분석합니다."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-black" />,
      title: "소비자 심리 연구",
      description: "데이터 기반으로 소비자의 행동 패턴과 심리를 심층 연구합니다."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-black" />,
      title: "광고 효율 측정",
      description: "과학적인 방법론을 통해 광고 캠페인의 실제 효율을 측정합니다."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-black" />,
      title: "글로벌 마켓 인사이트",
      description: "국내를 넘어 글로벌 시장의 광고 전략과 성공 사례를 연구합니다."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="research">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">핵심 연구 분야</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            데이터와 크리에이티브가 만나는 접점에서 새로운 가치를 발견합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <div className="bg-brand-yellow/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
