import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 flex items-center justify-center bg-navy-light">
        <div className="text-center">
          <h1 className="text-8xl font-black text-accent mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-kiad-muted mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <Link href="/" className="btn-primary inline-block">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
