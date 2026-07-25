import React from 'react';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-stroke)', backgroundColor: 'rgba(11, 14, 20, 0.95)', padding: '40px 24px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logoImg} alt="Duat Studio Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: 800 }}>DUAT STUDIO</span>
        </div>

        <div style={{ textAlign: 'right' }}>
          &copy; 2026 Duat Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
