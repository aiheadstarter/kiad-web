import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--color-surface)', borderRadius: '32px', margin: '0 24px 80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ order: 1 }} // Mobile first logic if needed, but grid usually handles it
        >
           {/* Placeholder for the second product image */}
           <div style={{
            width: '100%',
            paddingBottom: '100%',
            background: 'url("https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80") no-repeat center center',
            backgroundSize: 'cover',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
          }} />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ order: 2 }}
        >
          <h2 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1 }}>
            Premium Noise Canceling Headphones
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-light)', marginBottom: '32px', lineHeight: 1.6 }}>
            The premium noise canceling headphone, caginess your aume experience. Designed for audiophiles who demand nothing but the best.
          </p>
          <button className="btn btn-text" style={{ paddingLeft: 0, fontSize: '16px', color: 'var(--color-primary)' }}>
            Learn more →
          </button>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; }
          div[style*="order: 1"] { order: 2 !important; }
          div[style*="order: 2"] { order: 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
