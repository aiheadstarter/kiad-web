import Link from 'next/link';
import type { Trend } from '@/types/database';

function getBadgeClass(badge: string) {
  switch (badge?.toUpperCase()) {
    case 'HOT': return 'badge-hot';
    case 'NEW': return 'badge-new';
    case 'TREND': return 'badge-trend';
    default: return 'badge-new';
  }
}

export default function TrendsPreview({ trends }: { trends: Trend[] }) {
  return (
    <section className="section-padding bg-navy-DEFAULT">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-sm font-bold tracking-widest uppercase">AI Trends</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              AI 트렌드
            </h2>
          </div>
          <Link href="/trends" className="text-accent hover:text-accent-light text-sm font-medium transition-colors">
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.slice(0, 3).map((trend) => (
            <Link
              key={trend.id}
              href={`/trends/${trend.id}`}
              className="bg-navy-card border border-navy-border rounded-2xl p-6 card-hover group block"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{trend.emoji}</span>
                {trend.badge && (
                  <span className={`badge ${getBadgeClass(trend.badge)}`}>
                    {trend.badge}
                  </span>
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {trend.title}
              </h3>
              <p className="text-kiad-muted text-sm leading-relaxed mb-4 line-clamp-2">
                {trend.description}
              </p>
              <div className="flex items-center justify-between text-xs text-kiad-muted">
                <span>{trend.date}</span>
                <span>👁 {trend.views}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
