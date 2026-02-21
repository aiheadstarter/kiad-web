import { getTrends } from '@/lib/api';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 마케팅 트렌드 - 한국광고연구소 KIAD',
  description: '최신 AI 마케팅 트렌드와 인사이트를 확인하세요. 한국광고연구소가 엄선한 AI 마케팅 동향 정보입니다.',
};

export const revalidate = 60;

export default async function TrendsPage() {
  const trends = await getTrends();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-navy">
          <div className="container-custom text-center">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Trends</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
              AI 마케팅 <span className="text-gradient">트렌드</span>
            </h1>
            <p className="text-kiad-muted text-lg max-w-2xl mx-auto">
              최신 AI 마케팅 트렌드와 인사이트를 한눈에 확인하세요.
            </p>
          </div>
        </section>

        {/* Trends Grid */}
        <section className="section-padding bg-navy-light">
          <div className="container-custom">
            {trends.length === 0 ? (
              <p className="text-center text-kiad-muted py-20">등록된 트렌드가 없습니다.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trends.map((trend) => {
                  const badgeClass =
                    trend.badge === 'HOT' ? 'badge-hot' :
                    trend.badge === 'NEW' ? 'badge-new' :
                    trend.badge === 'TREND' ? 'badge-trend' : 'badge-trend';

                  return (
                    <Link
                      key={trend.id}
                      href={`/trends/${trend.id}`}
                      className="bg-navy-card border border-navy-border rounded-2xl p-6 card-hover group block"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{trend.emoji}</span>
                        <span className={badgeClass}>{trend.badge}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {trend.title}
                      </h3>
                      <p className="text-kiad-muted text-sm line-clamp-3 mb-4">
                        {trend.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-kiad-muted">
                        <span>{trend.date}</span>
                        <span className="text-accent font-medium group-hover:underline">
                          자세히 보기 →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
