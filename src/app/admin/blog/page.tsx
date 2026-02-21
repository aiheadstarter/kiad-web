'use client';

import { useState, useEffect } from 'react';
import { getAllBlogPosts, saveBlogPost, deleteBlogPost } from '@/lib/api';
import RichEditor from '@/components/admin/RichEditor';
import type { BlogPost } from '@/types/database';
import { useSearchParams } from 'next/navigation';

const emptyPost: Partial<BlogPost> = {
  title: '', description: '', content: '', emoji: '📝',
  category: '', category_class: 'blue',
  date: new Date().toISOString().split('T')[0],
  author: '한국광고연구소', read_time: '5분',
  image: '', tags: '', likes: 0,
  is_published: true, sort_order: 0,
};

const categoryClasses = [
  { value: 'blue', label: '파란색' },
  { value: 'green', label: '초록색' },
  { value: 'purple', label: '보라색' },
  { value: 'red', label: '빨간색' },
  { value: 'yellow', label: '노란색' },
];

export default function AdminBlogPage() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const loadPosts = async () => {
    const data = await getAllBlogPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
    if (searchParams.get('action') === 'new') {
      setEditing({ ...emptyPost });
    }
  }, [searchParams]);

  const handleSave = async () => {
    if (!editing?.title) { setMessage('제목을 입력해주세요.'); return; }
    setSaving(true);
    setMessage('');
    try {
      await saveBlogPost(editing as any);
      setMessage('저장 완료!');
      setEditing(null);
      await loadPosts();
      setTimeout(() => setMessage(''), 2000);
    } catch (err: any) {
      setMessage('오류: ' + err.message);
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await deleteBlogPost(id);
      await loadPosts();
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
            {editing.id ? '블로그 수정' : '새 블로그 작성'}
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
                placeholder="블로그 제목"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">카테고리</label>
              <input
                type="text"
                value={editing.category || ''}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="예: AI 마케팅"
              />
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">카테고리 색상</label>
              <select
                value={editing.category_class || 'blue'}
                onChange={(e) => setEditing({ ...editing, category_class: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
              >
                {categoryClasses.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">작성자</label>
              <input
                type="text"
                value={editing.author || ''}
                onChange={(e) => setEditing({ ...editing, author: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="한국광고연구소"
              />
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">읽기 시간</label>
              <input
                type="text"
                value={editing.read_time || ''}
                onChange={(e) => setEditing({ ...editing, read_time: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="5분"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">대표 이미지 URL</label>
              <input
                type="text"
                value={editing.image || ''}
                onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="text-kiad-muted text-sm mb-1 block">태그 (쉼표 구분)</label>
              <input
                type="text"
                value={editing.tags || ''}
                onChange={(e) => setEditing({ ...editing, tags: e.target.value })}
                className="w-full bg-navy-card border border-navy-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="AI, 마케팅, 전략"
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
              placeholder="블로그 본문을 작성하세요..."
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
        <h1 className="text-2xl font-black text-white">블로그 관리</h1>
        <button onClick={() => setEditing({ ...emptyPost })} className="btn-primary !py-2 !px-4 text-sm">
          + 새 블로그
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
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">카테고리</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">날짜</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3 hidden md:table-cell">상태</th>
              <th className="text-left text-kiad-muted text-xs font-medium px-4 py-3">작업</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-kiad-muted">등록된 블로그가 없습니다.</td></tr>
            ) : posts.map((post) => (
              <tr key={post.id} className="border-b border-navy-border/50 hover:bg-navy/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span>{post.emoji}</span>
                    <span className="text-white text-sm font-medium truncate max-w-[200px]">{post.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-xs text-kiad-muted">{post.category}</span>
                </td>
                <td className="px-4 py-3 text-kiad-muted text-sm hidden md:table-cell">{post.date}</td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs ${post.is_published ? 'text-green-400' : 'text-yellow-400'}`}>
                    {post.is_published ? '발행' : '비공개'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing({ ...post })}
                      className="text-accent hover:text-accent/80 text-xs"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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
