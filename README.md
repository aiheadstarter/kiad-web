# KIAD - 한국광고연구소 웹사이트

AI 기반 마케팅 솔루션을 제공하는 한국광고연구소의 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Cloudflare Pages
- **Font**: Pretendard

## 주요 기능

- 반응형 랜딩 페이지 (11개 섹션)
- AI 마케팅 트렌드 게시판
- 블로그 시스템
- WordPress형 어드민 CMS (CRUD, 리치 에디터)
- SEO 최적화 (Sitemap, Robots.txt, JSON-LD)
- ISR (Incremental Static Regeneration)

## 로컬 개발

```bash
npm install
npm run dev
```

## 환경 변수

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 배포

Cloudflare Pages에 연결하여 자동 배포됩니다.

## 라이선스

© 2025 한국광고연구소. All rights reserved.
