export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '한국광고연구소 KIAD',
    alternateName: 'KIAD',
    url: 'https://ad.re.kr',
    logo: 'https://ad.re.kr/logo.png',
    description: 'AI 기반 마케팅 솔루션을 제공하는 한국광고연구소입니다.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서울',
      addressCountry: 'KR',
    },
    sameAs: [
      'https://blog.naver.com/kiad',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Korean',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '한국광고연구소 KIAD',
    url: 'https://ad.re.kr',
    description: 'AI 마케팅 솔루션 | 한국광고연구소',
    inLanguage: 'ko-KR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  author,
  url,
  image,
}: {
  title: string;
  description: string;
  date: string;
  author?: string;
  url: string;
  image?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: author || '한국광고연구소',
    },
    publisher: {
      '@type': 'Organization',
      name: '한국광고연구소 KIAD',
      url: 'https://ad.re.kr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
