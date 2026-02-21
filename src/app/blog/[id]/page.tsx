import { getBlogPostById, getBlogPosts } from '@/lib/api';
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
  const post = await getBlogPostById(Number(id));
  if (!post) return { title: '블로그 글을 찾을 수 없습니다' };

  return {
    title: `${post.title} - AI 마케팅 블로그 | KIAD`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export const revalidate = 60;

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        url={`https://ad.re.kr/blog/${id}`}
        image={post.image}
      />
      <BreadcrumbJsonLd items={[
        { name: '홈', url: 'https://ad.re.kr' },
        { name: '블로그', url: 'https://ad.re.kr/blog' },
        { name: post.title, url: `https://ad.re.kr/blog/${id}` },
      ]} />
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <section className="bg-navy border-b border-navy-border">
          <div className="container-custom py-4">
            <nav className="flex items-center gap-2 text-sm text-kiad-muted">
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">블로그</Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-navy-light">
          <div className="container-custom max-w-4xl">
            {/* Featured Image */}
            {post.image && (
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Header */}
            <div className="mb-8">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.category_class || 'bg-accent/20 text-accent'}`}>
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
                {post.title}
              </h1>
              <p className="text-kiad-muted text-lg mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-kiad-muted">
                <span>✍️ {post.author}</span>
                <span>📅 {post.date}</span>
                <span>⏱️ {post.read_time}</span>
                <span>👁️ {post.views?.toLocaleString() || 0}회 조회</span>
                <span>❤️ {post.likes || 0}</span>
              </div>
            </div>

            {/* Body */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-6 md:p-10">
              <div
                className="rich-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Back */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="btn-outline inline-block"
              >
                ← 블로그 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
