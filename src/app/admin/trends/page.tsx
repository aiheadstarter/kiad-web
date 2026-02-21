'use client';

import { useState, useEffect } from 'react';
import { getAllTrends, saveTrend, deleteTrend } from '@/lib/api';
import RichEditor from '@/components/admin/RichEditor';
import type { Trend } from '@/types/database';
import { useSearchParams } from 'next/navigation';

const emptyTrend: Partial<Trend> = {
  title: '', description: '', content: '', emoji: '🔥',
  badge: 'NEW', date: new Date().toISOString().split('T')[0],
  tags: '', category: '', image: '', views: 0,
  is_published: true, sort_order: 0,
};

export default function AdminTrendsPage() {
  const searchParams = useSearchParams();
  const [trends, setTrends] = useState<Trend[]>([]);
  const [editing, setEditing] = useState<Partial<Trend> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const loadTrends = async () => {
    const data = await getAllTrends();
    setTrends(data);
  };

  useEffect(() => {
    loadTrends();
    if (searchParams.get('action') === 'new') {
      setEditing({ ...emptyTrend });
    }
  }, [searchParams]);

  const handleSave = async () => {
    if (!editing?.title) { setMessage('제목을 입력해주세요.'); return; }
    setSaving(true);
    setMessage('');
    try {
      await saveTrend(editing as any);
      setMessage('저장 완료!');
      setEditing(null);
      await loadTrends();
      setTimeout(() => setMessage(''), 2000);
    } catch (err: any) {
      setMessage('오류: ' + err.message);
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await deleteTrend(id);
      await loadTrends();
      setMessage('삭제 완료');
      setTimeout(() => setMessage(''), 2000);
    } catch (err: any) {
      setMessage('삭제 오류: ' + err.message);
    }
  };

  // Editor Form
  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black text-white">
            {editing.id ? '트렌드 수정' : '새 트렌드 작성'}
          </h1>
          <button onClick={() => setEditing(null)} className="text-kiad-muted hover:text-white text-sm">
            ← 목록으로
          </button>
        </div>

        {message && (
          <div className={`mb-4 px-4 py-3 rounded-xl text-sm ${message.includes('오류') ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
            {message}
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">제목 *</label>
              <input
                type="text"
                value={editing.title || ''}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="트렌드 제목"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-kiad-muted text-sm mb-1 block">이모지</label>
                <input
                  type="text"
                  value={editing.emoji || ''}
                  onChange={(e) => setEditing({ ...editing, emoji: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white text-center text-xl focus:outline-none focus:border-accent/50"
                />
              </div>
              <div>
                <label className="text-kiad-muted text-sm mb-1 block">배지</label>
                <select
                  value={editing.badge || 'NEW'}
                  onChange={(e) => setEditing({ ...editing, badge: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                >
                  <option value="NEW">NEW</option>
                  <option value="HOT">HOT</option>
                  <option value="TREND">TREND</option>
                </select>
              </div>
              <div>
                <label className="text-kiad-muted text-sm mb-1 block">날짜</label>
                <input
                  type="date"
                  value={editing.date || ''}
                  onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-kiad-muted text-sm mb-1 block">요약 설명</label>
            <textarea
              value={editing.description || ''}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={2}
              className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 resize-none"
              placeholder="카드에 표시될 요약 설명"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">카테고리</label>
              <input
                type="text"
                value={editing.category || ''}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="예: AI 도구"
              />
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">태그 (쉼표 구분)</label>
              <input
                type="text"
                value={editing.tags || ''}
                onChange={(e) => setEditing({ ...editing, tags: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="AI, 마케팅, 트렌드"
              />
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">정렬 순서</label>
              <input
                type="number"
                value={editing.sort_order || 0}
                onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          <div>
            <label className="text-kiad-muted text-sm mb-1 block">본문 내용</label>
            <RichEditor
              value={editing.content || ''}
              onChange={(val) => setEditing({ ...editing, content: val })}
              placeholder="트렌드 본문을 작성하세요..."
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={editing.is_published !== false}
                onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })}
                className="accent-accent"
              />
              발행 (공개)
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="btn-primary !py-3 px-8"
            >
              {saving ? '저장 중...' : (editing.id ? '수정 저장' : '새로 등록')}
            </button>
            <button
              onClick={() => setEditing(null)}
              className="btn-outline !py-3 px-8"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-white">트렌드 관리</h1>
        <button onClick={() => setEditing({ ...emptyTrend })} className="btn-primary !py-2 !px-4 text-sm">
          + 새 트렌드
        </button>
      </div>

      {message && (
        <div className="mb-4 px-4 py-3 rounded-xl text-sm bg-green-500/10 text-green-400">
          {message}
        </div>
      )}

      <div className="bg-navy-card border border-navy-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-navy-border">
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3">제목</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">배지</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">날짜</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">상태</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3">작업</th>
            </tr>
          </thead>
          <tbody>
            {trends.length === 0 ? (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-kiad-muted">등록된 트렌드가 없습니다.</td></tr>
            ) : trends.map((trend) => (
              <tr key={trend.id} className="border-b border-navy-border/50 hover:bg-navy/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span>{trend.emoji}</span>
                    <span className="text-white text-sm font-medium truncate max-w-[200px]">{trend.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-bold ${trend.badge === 'HOT' ? 'text-red-400' : trend.badge === 'NEW' ? 'text-green-400' : 'text-blue-400'}`}>
                    {trend.badge}
                  </span>
                </td>
                <td className="px-4 py-3 text-kiad-muted text-sm hidden md:table-cell">{trend.date}</td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs ${trend.is_published ? 'text-green-400' : 'text-yellow-400'}`}>
                    {trend.is_published ? '발행' : '비공개'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing({ ...trend })}
                      className="text-accent hover:text-accent/80 text-xs"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(trend.id)}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      삭제
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
