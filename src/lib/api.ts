import { supabase } from './supabase';
import { fallbackTrends, fallbackBlogPosts } from './fallback-data';
import type { Trend, BlogPost } from '@/types/database';

// ============ Trends ============

export async function getTrends(limit?: number): Promise<Trend[]> {
  try {
    let query = supabase
      .from('trends')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (limit) query = query.limit(limit);

    const { data, error } = await query;
    if (error) throw error;
    return (data as Trend[]) || fallbackTrends.slice(0, limit);
  } catch {
    return limit ? fallbackTrends.slice(0, limit) : fallbackTrends;
  }
}

export async function getTrendById(id: number): Promise<Trend | null> {
  try {
    const { data, error } = await supabase
      .from('trends')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    // Increment views
    if (data) {
      supabase
        .from('trends')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', id)
        .then();
    }

    return data as Trend | null;
  } catch {
    return fallbackTrends.find((t) => t.id === id) || null;
  }
}

// ============ Blog Posts ============

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (limit) query = query.limit(limit);

    const { data, error } = await query;
    if (error) throw error;
    return (data as BlogPost[]) || fallbackBlogPosts.slice(0, limit);
  } catch {
    return limit ? fallbackBlogPosts.slice(0, limit) : fallbackBlogPosts;
  }
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    // Increment views
    if (data) {
      supabase
        .from('blog_posts')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', id)
        .then();
    }

    return data as BlogPost | null;
  } catch {
    return fallbackBlogPosts.find((b) => b.id === id) || null;
  }
}

// ============ Admin CRUD ============

export async function getAllTrends(): Promise<Trend[]> {
  const { data, error } = await supabase
    .from('trends')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data as Trend[]) || [];
}

export async function saveTrend(trend: Partial<Trend>, id?: number): Promise<Trend> {
  if (id) {
    const { data, error } = await supabase
      .from('trends')
      .update(trend)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Trend;
  } else {
    const { data, error } = await supabase
      .from('trends')
      .insert(trend)
      .select()
      .single();
    if (error) throw error;
    return data as Trend;
  }
}

export async function deleteTrend(id: number): Promise<void> {
  const { error } = await supabase.from('trends').delete().eq('id', id);
  if (error) throw error;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data as BlogPost[]) || [];
}

export async function saveBlogPost(post: Partial<BlogPost>, id?: number): Promise<BlogPost> {
  if (id) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as BlogPost;
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
      .single();
    if (error) throw error;
    return data as BlogPost;
  }
}

export async function deleteBlogPost(id: number): Promise<void> {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) throw error;
}

// ============ Auth ============

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// ============ Dashboard Stats ============

export async function getDashboardStats() {
  try {
    const [trendsRes, blogsRes] = await Promise.all([
      supabase.from('trends').select('id, views', { count: 'exact' }),
      supabase.from('blog_posts').select('id, views', { count: 'exact' }),
    ]);

    const totalViews = [
      ...(trendsRes.data || []),
      ...(blogsRes.data || []),
    ].reduce((sum, item: any) => sum + (item.views || 0), 0);

    return {
      trendsCount: trendsRes.count || 0,
      blogsCount: blogsRes.count || 0,
      totalViews,
    };
  } catch {
    return { trendsCount: 0, blogsCount: 0, totalViews: 0 };
  }
}
