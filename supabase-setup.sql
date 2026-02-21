-- ============================================
-- 한국광고연구소 (KIAD) Supabase 테이블 설정
-- AI트렌드 + KIAD블로그 콘텐츠 관리
-- (안전한 재실행 가능 버전)
-- ============================================

-- 1. AI트렌드 테이블
CREATE TABLE IF NOT EXISTS trends (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  emoji TEXT DEFAULT '🤖',
  badge TEXT DEFAULT 'NEW',
  date TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  sort_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. KIAD블로그 테이블
CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  emoji TEXT DEFAULT '📝',
  category TEXT NOT NULL,
  category_class TEXT DEFAULT 'edu',
  date TEXT NOT NULL,
  views INT DEFAULT 0,
  likes INT DEFAULT 0,
  sort_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RLS (Row Level Security) 활성화
ALTER TABLE trends ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 4. 기존 정책 제거 후 재생성 (중복 에러 방지)
DROP POLICY IF EXISTS "Anyone can read published trends" ON trends;
DROP POLICY IF EXISTS "Anyone can read published blog posts" ON blog_posts;

CREATE POLICY "Anyone can read published trends"
  ON trends FOR SELECT
  USING (is_published = true);

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

-- ============================================
-- 기존 데이터 정리 후 재삽입 (중복 방지)
-- ============================================
TRUNCATE trends RESTART IDENTITY;
TRUNCATE blog_posts RESTART IDENTITY;

-- ============================================
-- AI트렌드 콘텐츠 5개 삽입
-- ============================================
INSERT INTO trends (title, description, emoji, badge, date, tags, sort_order) VALUES

(
  '2026년 AI 에이전트 마케팅의 부상 — 자동화를 넘어 자율 마케팅 시대',
  'AI 에이전트가 단순 자동화를 넘어 고객 응대, 캠페인 기획, 콘텐츠 생성까지 자율적으로 수행하는 시대가 열리고 있습니다. 중소기업도 AI 에이전트를 활용해 24시간 마케팅 시스템을 구축할 수 있으며, 비용 대비 효율은 기존 대비 5배 이상 향상됩니다.',
  '🤖', 'HOT', '2026.02.14',
  ARRAY['AI 에이전트', '마케팅 자동화', '중소기업'],
  1
),

(
  'AI 초개인화 광고 — 소상공인도 대기업 수준의 타겟팅이 가능한 시대',
  '생성형 AI를 활용한 초개인화 광고가 소상공인 마케팅의 게임체인저로 부상하고 있습니다. 고객 데이터를 분석하여 1:1 맞춤 광고 메시지를 실시간으로 생성하는 기술로, 광고 전환율이 평균 340% 향상되는 결과를 보이고 있습니다.',
  '🎯', 'NEW', '2026.02.10',
  ARRAY['초개인화', '타겟팅', '생성형 AI'],
  2
),

(
  'AI 기반 SEO 전략 변화 — 검색 엔진 최적화의 새로운 패러다임',
  'AI 검색(SGE)의 확산으로 기존 SEO 전략이 대변혁을 맞이하고 있습니다. 중소기업이 AI 시대에 검색 노출을 극대화할 수 있는 최신 SEO 전략과 실전 팁을 정리했습니다. AEO(Answer Engine Optimization)가 새로운 핵심 키워드입니다.',
  '📊', 'TREND', '2026.02.05',
  ARRAY['AI SEO', '검색 최적화', 'SGE'],
  3
),

(
  'AI 동영상 광고 자동 생성 — 촬영 없이 만드는 전문 광고 영상',
  'Sora, Runway, Pika 등 AI 영상 생성 도구의 발전으로 촬영 장비와 전문 인력 없이도 고품질 광고 영상을 제작할 수 있게 되었습니다. 소상공인이 월 10만원 미만의 비용으로 TV 광고급 영상을 만드는 실전 방법을 소개합니다.',
  '🎬', 'HOT', '2026.01.28',
  ARRAY['AI 영상', '동영상 광고', 'Sora'],
  4
),

(
  'AI 소셜미디어 마케팅 — 인스타그램·유튜브 AI 자동화 전략',
  '인스타그램 릴스, 유튜브 쇼츠 등 숏폼 콘텐츠 시장이 폭발적으로 성장하고 있습니다. AI를 활용하면 콘텐츠 기획부터 제작, 게시 스케줄링, 성과 분석까지 전 과정을 자동화할 수 있어 1인 사업자도 전문 마케터 수준의 SNS 운영이 가능합니다.',
  '📱', 'NEW', '2026.01.20',
  ARRAY['소셜미디어', '인스타그램', '유튜브'],
  5
);

-- ============================================
-- KIAD블로그 콘텐츠 5개 삽입
-- ============================================
INSERT INTO blog_posts (title, description, emoji, category, category_class, date, views, likes, sort_order) VALUES

(
  'ChatGPT로 블로그 글 10분 만에 작성하기 — 소상공인 실전 가이드',
  '블로그 운영이 어려운 소상공인을 위해 ChatGPT를 활용한 블로그 콘텐츠 작성법을 단계별로 안내합니다. 프롬프트 작성부터 SEO 최적화까지 실전 노하우를 공개합니다.',
  '📝', '교육', 'edu', '2026.02.12',
  1234, 56, 1
),

(
  '월 매출 300% 상승 — AI 광고를 도입한 카페 사장님의 실제 이야기',
  '서울 마포구에서 카페를 운영하는 A 사장님이 AI 마케팅 교육 후 인스타그램 광고를 직접 운영하며 3개월 만에 매출 300%를 달성한 실제 사례를 소개합니다.',
  '🏆', '성공사례', 'case', '2026.02.08',
  2156, 89, 2
),

(
  '무료 AI 도구 TOP 5 — 마케팅 비용 0원으로 시작하는 방법',
  '비용 부담 없이 바로 사용할 수 있는 무료 AI 마케팅 도구 5가지를 소개합니다. 각 도구의 특징과 활용법을 비교 분석하여 최적의 조합을 제안합니다.',
  '💡', '꿀팁', 'tip', '2026.02.03',
  987, 42, 3
),

(
  'AI 챗봇으로 고객 문의 응대 자동화하기 — 소상공인 실전 매뉴얼',
  '카카오톡, 네이버 톡톡 등에 AI 챗봇을 연동하여 24시간 고객 문의에 자동 응답하는 시스템을 구축하는 방법을 안내합니다. 설정 10분이면 완료되는 초간단 가이드입니다.',
  '🤖', '실전가이드', 'guide', '2026.01.25',
  1567, 73, 4
),

(
  '네이버 스마트스토어 AI 마케팅 완전 정복 — 매출 2배 올리는 비법',
  '네이버 스마트스토어 운영자를 위한 AI 마케팅 전략 총정리입니다. AI로 상품 설명 자동 작성, 리뷰 분석, 키워드 최적화, 광고 자동 입찰까지 한 번에 배울 수 있습니다.',
  '🛒', '마케팅전략', 'strategy', '2026.01.18',
  1890, 95, 5
);

-- ============================================
-- 인덱스 생성 (성능 최적화) — 이미 존재하면 건너뜀
-- ============================================
CREATE INDEX IF NOT EXISTS idx_trends_published ON trends(is_published, sort_order);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, sort_order);

-- ============================================
-- updated_at 자동 업데이트 트리거
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_trends_updated_at ON trends;
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;

CREATE TRIGGER update_trends_updated_at
  BEFORE UPDATE ON trends
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
