import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[60rem] h-[60rem] bg-yellow-50/80 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-black px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            2025년도 신입 연구원 모집 중
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 tracking-tight font-sans">
            광고 데이터로 <br/>
            <span className="relative inline-block">
              <span className="relative z-10">세상을 읽다</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-yellow/40 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed break-keep">
            한국광고연구소는 광고 데이터를 통해 시장의 흐름을 분석하고, 
            미래 비즈니스 인사이트를 제공하는 국내 최고의 연구 기관입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-black hover:bg-gray-800 text-white rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group">
              연구 참여하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-full font-bold text-lg transition-all">
              최신 리포트 보기
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 text-gray-500 font-medium border-t border-gray-100 pt-10">
            <div className="flex flex-col items-center gap-1">
              <BookOpen className="w-8 h-8 text-brand-yellow mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm">발행 리포트</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="w-8 h-8 text-brand-yellow mb-2" />
              <div className="text-2xl font-bold text-gray-900">12,000+</div>
              <div className="text-sm">연구원 및 회원</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-8 h-8 text-brand-yellow mb-2" />
              <div className="text-2xl font-bold text-gray-900">No.1</div>
              <div className="text-sm">업계 신뢰도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
