import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-DEFAULT border-t border-navy-border">
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center text-navy-DEFAULT font-bold text-lg">
                K
              </div>
              <span className="text-white font-bold text-lg">한국광고연구소</span>
            </div>
            <p className="text-kiad-muted text-sm leading-relaxed">
              AI 기반 마케팅 전문 파트너<br />
              중소기업의 디지털 마케팅 성공을 함께합니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">서비스</h4>
            <ul className="space-y-2">
              {['AI 마케팅 교육', 'AI 광고 대행', 'AI 콘텐츠 제작', 'AI 마케팅 컨설팅'].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="text-kiad-muted hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-white font-bold mb-4">콘텐츠</h4>
            <ul className="space-y-2">
              {[
                { label: 'AI 트렌드', href: '/trends' },
                { label: '블로그', href: '/blog' },
                { label: 'FAQ', href: '/#faq' },
                { label: '문의하기', href: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-kiad-muted hover:text-accent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-kiad-muted text-sm">
              <li>📞 010-5765-4046</li>
              <li>📧 ad@ad.re.kr</li>
              <li>📸 @kiad_official</li>
              <li>💬 카카오톡 문의</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-border mt-12 pt-8 text-center text-kiad-muted text-sm">
          <p>&copy; {new Date().getFullYear()} 한국광고연구소 KIAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
