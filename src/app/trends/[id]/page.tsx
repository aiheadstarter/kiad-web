import { getTrendById, getTrends } from '@/lib/api';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const trend = await getTrendById(Number(id));
  if (!trend) return { title: '트렌드를 찾을 수 없습니다' };

  return {
    title: `${trend.title} - AI 마케팅 트렌드 | KIAD`,
    description: trend.description,
    openGraph: {
      title: trend.title,
      description: trend.description,
      type: 'article',
    },
  };
}

export const revalidate = 60;

export default async function TrendDetailPage({ params }: Props) {
  const { id } = await params;
  const trend = await getTrendById(Number(id));

  if (!trend) {
    notFound();
  }

  const tags = trend.tags ? trend.tags.split(',').map((t: string) => t.trim()) : [];

  return (
    <>
      <ArticleJsonLd
        title={trend.title}
        description={trend.description}
        date={trend.date}
        url={`https://ad.re.kr/trends/${id}`}
      />
      <BreadcrumbJsonLd items={[
        { name: '홈', url: 'https://ad.re.kr' },
        { name: '트렌드', url: 'https://ad.re.kr/trends' },
        { name: trend.title, url: `https://ad.re.kr/trends/${id}` },
      ]} />
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <section className="bg-navy border-b border-navy-border">
          <div className="container-custom py-4">
            <nav className="flex items-center gap-2 text-sm text-kiad-muted">
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <span>/</span>
              <Link href="/trends" className="hover:text-accent transition-colors">트렌드</Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">{trend.title}</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-navy-light">
          <div className="container-custom max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{trend.emoji}</span>
                <span className={
                  trend.badge === 'HOT' ? 'badge-hot' :
                  trend.badge === 'NEW' ? 'badge-new' : 'badge-trend'
                }>
                  {trend.badge}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                {trend.title}
              </h1>
              <p className="text-kiad-muted text-lg mb-4">{trend.description}</p>
              <div className="flex items-center gap-4 text-sm text-kiad-muted">
                <span>📅 {trend.date}</span>
                <span>👁️ {trend.views?.toLocaleString() || 0}회 조회</span>
                {trend.category && <span>📁 {trend.category}</span>}
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag: string) => (
                  <span key={tag} className="bg-navy-card border border-navy-border rounded-full px-3 py-1 text-xs text-kiad-muted">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-6 md:p-10">
              <div
                className="rich-content"
                dangerouslySetInnerHTML={{ __html: trend.content }}
              />
            </div>

            {/* Back */}
            <div className="mt-10 text-center">
              <Link
                href="/trends"
                className="btn-outline inline-block"
              >
                ← 트렌드 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
