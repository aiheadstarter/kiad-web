import type { Metadata } from 'next';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: '한국광고연구소 KIAD - AI 마케팅 전문 파트너',
  description: 'AI 기반 마케팅 교육, 광고 대행, 콘텐츠 제작, 컨설팅 서비스를 제공하는 한국광고연구소입니다. 중소기업의 디지털 마케팅 성공을 함께합니다.',
  keywords: 'AI 마케팅, 광고 대행, 디지털 마케팅, 마케팅 교육, 콘텐츠 제작, 마케팅 컨설팅, 한국광고연구소',
  authors: [{ name: '한국광고연구소' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://ad.re.kr',
    siteName: '한국광고연구소 KIAD',
    title: '한국광고연구소 KIAD - AI 마케팅 전문 파트너',
    description: 'AI 기반 마케팅 교육, 광고 대행, 콘텐츠 제작, 컨설팅 서비스',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-pretendard antialiased">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
