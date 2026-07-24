import React from 'react';
import { ShieldCheck, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-stroke)', backgroundColor: 'rgba(11, 14, 20, 0.95)', padding: '40px 24px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 800 }}>☥ DUAT STUDIO</span>
          <span>•</span>
          <span>Ankhvault Game Launcher & Developer Store Platform</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://github.com/Duat-Studio/Duat-Studio"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Code size={16} />
            Duat Studio Website Repo
          </a>
          <a
            href="https://github.com/Duat-Studio/Ankhvault"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <ShieldCheck size={16} color="var(--accent-gold)" />
            Ankhvault Client Repo
          </a>
        </div>

        <div style={{ textAlign: 'right' }}>
          &copy; 2026 Duat Studio. All rights reserved. Built with Rust, Tauri 2.0 & React.
        </div>
      </div>
    </footer>
  );
};
