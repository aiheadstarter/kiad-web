import { getBlogPosts } from '@/lib/api';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 마케팅 블로그 - 한국광고연구소 KIAD',
  description: 'AI 마케팅 전문 블로그. 실전 활용 전략, 도구 리뷰, 성공 사례를 통해 마케팅 역량을 강화하세요.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-navy">
          <div className="container-custom text-center">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Blog</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
              AI 마케팅 <span className="text-gradient">블로그</span>
            </h1>
            <p className="text-kiad-muted text-lg max-w-2xl mx-auto">
              실전 마케팅 전략과 AI 활용 노하우를 공유합니다.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-navy-light">
          <div className="container-custom">
            {posts.length === 0 ? (
              <p className="text-center text-kiad-muted py-20">등록된 블로그 글이 없습니다.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="bg-navy-card border border-navy-border rounded-2xl overflow-hidden card-hover group block"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-navy relative overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">
                          📝
                        </div>
                      )}
                      <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${post.category_class || 'bg-accent/20 text-accent'}`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-kiad-muted text-sm line-clamp-2 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-kiad-muted">
                        <div className="flex items-center gap-3">
                          <span>{post.author}</span>
                          <span>·</span>
                          <span>{post.read_time}</span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
