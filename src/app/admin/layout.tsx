'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-accent text-xl">로딩 중...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white">KIAD Admin</h1>
            <p className="text-kiad-muted mt-2">관리자 로그인</p>
          </div>
          <form onSubmit={handleLogin} className="bg-navy-card border border-navy-border rounded-2xl p-8 space-y-4">
            {authError && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                {authError}
              </div>
            )}
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-navy border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-navy border border-navy-border rounded-xl px-4 py-3 text-white placeholder:text-kiad-muted focus:outline-none focus:border-accent/50"
            />
            <button type="submit" className="btn-primary w-full text-center !py-3">
              로그인
            </button>
          </form>
          <div className="text-center mt-4">
            <Link href="/" className="text-kiad-muted text-sm hover:text-accent transition-colors">
              ← 메인 사이트로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: '/admin', label: '대시보드', icon: '📊' },
    { href: '/admin/trends', label: '트렌드 관리', icon: '🔥' },
    { href: '/admin/blog', label: '블로그 관리', icon: '📝' },
  ];

  return (
    <div className="min-h-screen bg-navy-light flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-navy border-r border-navy-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <Link href="/admin" className="text-xl font-black text-white">
            KIAD <span className="text-accent">Admin</span>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-accent/10 text-accent'
                  : 'text-kiad-muted hover:text-white hover:bg-navy-card'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-navy-border">
          <div className="text-kiad-muted text-xs mb-2 truncate px-2">{session.user.email}</div>
          <div className="flex gap-2">
            <Link href="/" className="flex-1 text-center text-xs text-kiad-muted hover:text-white bg-navy-card rounded-lg py-2 transition-colors">
              사이트 보기
            </Link>
            <button onClick={handleLogout} className="flex-1 text-center text-xs text-red-400 hover:text-red-300 bg-navy-card rounded-lg py-2 transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top bar */}
        <header className="bg-navy border-b border-navy-border px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-white text-xl"
          >
            ☰
          </button>
          <div className="text-sm text-kiad-muted hidden lg:block">
            한국광고연구소 콘텐츠 관리 시스템
          </div>
          <div className="text-sm text-kiad-muted">
            {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
