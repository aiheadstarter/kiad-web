'use client';

import { useState, useEffect } from 'react';
import { getDashboardStats } from '@/lib/api';
import Link from 'next/link';

interface Stats {
  trendsCount: number;
  blogsCount: number;
  totalViews: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  if (!stats) {
    return <div className="text-kiad-muted py-20 text-center">대시보드 로딩 중...</div>;
  }

  const cards = [
    { label: '총 트렌드', value: stats.trendsCount, icon: '🔥', href: '/admin/trends', color: 'text-orange-400' },
    { label: '총 블로그', value: stats.blogsCount, icon: '📝', href: '/admin/blog', color: 'text-blue-400' },
    { label: '총 조회수', value: stats.totalViews.toLocaleString(), icon: '👁️', href: '#', color: 'text-purple-400' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black text-white mb-6">대시보드</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-navy-card border border-navy-border rounded-xl p-5 card-hover"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <span className={`text-2xl font-black ${card.color}`}>{card.value}</span>
            </div>
            <p className="text-kiad-muted text-sm">{card.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-lg font-bold text-white mb-4">빠른 작업</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/admin/trends?action=new"
          className="bg-navy-card border border-navy-border rounded-xl p-6 card-hover group text-center"
        >
          <span className="text-3xl block mb-3">🔥</span>
          <span className="text-white font-bold group-hover:text-accent transition-colors">새 트렌드 작성</span>
          <p className="text-kiad-muted text-sm mt-1">AI 마케팅 트렌드를 등록합니다</p>
        </Link>
        <Link
          href="/admin/blog?action=new"
          className="bg-navy-card border border-navy-border rounded-xl p-6 card-hover group text-center"
        >
          <span className="text-3xl block mb-3">📝</span>
          <span className="text-white font-bold group-hover:text-accent transition-colors">새 블로그 작성</span>
          <p className="text-kiad-muted text-sm mt-1">블로그 포스트를 작성합니다</p>
        </Link>
        <Link
          href="/"
          target="_blank"
          className="bg-navy-card border border-navy-border rounded-xl p-6 card-hover group text-center"
        >
          <span className="text-3xl block mb-3">🌐</span>
          <span className="text-white font-bold group-hover:text-accent transition-colors">사이트 미리보기</span>
          <p className="text-kiad-muted text-sm mt-1">메인 사이트를 확인합니다</p>
        </Link>
      </div>
    </div>
  );
}
