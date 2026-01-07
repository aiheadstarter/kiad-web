import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div>
           <a href="#" style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-text)' }}>
            STUDIO
          </a>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '14px' }}>
            © 2025 Studio Inc. All rights reserved.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px' }}>
          {['Privacy Policy', 'Terms of Service', 'Support'].map(item => (
            <a key={item} href="#" style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
