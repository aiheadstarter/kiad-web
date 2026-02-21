import { getTrends, getBlogPosts } from '@/lib/api';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Results from '@/components/sections/Results';
import Testimonials from '@/components/sections/Testimonials';
import Benefits from '@/components/sections/Benefits';
import TrendsPreview from '@/components/sections/TrendsPreview';
import BlogPreview from '@/components/sections/BlogPreview';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';

export const revalidate = 60; // ISR: 60초마다 재검증

export default async function HomePage() {
  const [trends, posts] = await Promise.all([
    getTrends(3),
    getBlogPosts(3),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <Benefits />
        <TrendsPreview trends={trends} />
        <BlogPreview posts={posts} />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
