import React from 'react';
import { motion } from 'framer-motion';

const StudioHero = () => {
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: 'var(--header-height)',
      overflow: 'hidden'
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1
      }} />

      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ marginBottom: '24px' }}>
              We craft <span className="text-gradient">digital experiences</span><br />
              that define the future.
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'var(--color-text-secondary)', 
              marginBottom: '48px',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Award-winning design studio specializing in branding, web design, and digital innovation for forward-thinking companies.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn btn-primary">Start a Project</button>
              <button className="btn btn-outline">View Portfolio</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioHero;
