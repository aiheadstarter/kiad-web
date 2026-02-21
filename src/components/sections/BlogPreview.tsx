import Link from 'next/link';
import type { BlogPost } from '@/types/database';

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Blog</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              블로그
            </h2>
          </div>
          <Link href="/blog" className="text-accent hover:text-accent-light text-sm font-medium transition-colors">
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-navy-card border border-navy-border rounded-2xl overflow-hidden card-hover group block"
            >
              {/* Image placeholder */}
              {post.image ? (
                <div className="h-48 bg-navy-border">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/30 to-navy-card flex items-center justify-center">
                  <span className="text-5xl opacity-30">📝</span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent text-xs font-bold bg-accent/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-kiad-muted text-xs">{post.read_time} 읽기</span>
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-kiad-muted text-sm line-clamp-2 mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-kiad-muted">
                  <span>{post.author} · {post.date}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
