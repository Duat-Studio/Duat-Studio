import React from 'react';
import { Download, Monitor, HardDrive, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AppDownloadSection: React.FC = () => {
  const downloadUrl = 'https://github.com/Duat-Studio/Ankhvault/releases/latest';

  return (
    <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
          DOWNLOAD ANKHVAULT DESKTOP LAUNCHER
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
          Available natively for 64-bit Windows. Download and manage your game library securely inside the Ankhvault Desktop Client.
        </p>
      </div>

      {/* Download Box */}
      <div
        className="glass-panel"
        style={{
          padding: '36px',
          border: '1px solid var(--accent-gold)',
          backgroundColor: 'rgba(212, 175, 55, 0.05)',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '32px',
          alignItems: 'center',
          borderRadius: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Monitor size={28} color="var(--accent-gold)" />
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: 700 }}>
              Ankhvault Launcher for Windows
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Official desktop client for Windows. High-performance gaming launcher featuring direct developer downloads, automated library management, and AES-256 encrypted local storage.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span><strong>System Requirements:</strong> Windows 10 / 11 (64-bit)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span><strong>Optimized Footprint:</strong> Fast startup with minimal background memory usage</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={16} color="var(--accent-emerald)" />
              <span><strong>Security & Integrity:</strong> Digitally signed and malware-verified release</span>
            </div>
          </div>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-gold glow-pulse"
            style={{ padding: '14px 28px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={18} />
            Download Latest Release (.exe)
          </a>
        </div>

        <div
          className="glass-panel"
          style={{ padding: '28px', backgroundColor: 'rgba(11, 14, 20, 0.7)', textAlign: 'center', borderRadius: '14px' }}
        >
          <HardDrive size={44} color="var(--accent-turquoise)" style={{ marginBottom: '14px' }} />
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>
            Latest Production Release
          </h4>
          <span
            style={{
              color: 'var(--accent-turquoise)',
              fontSize: '0.8rem',
              backgroundColor: 'rgba(23, 145, 158, 0.2)',
              padding: '4px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(23, 145, 158, 0.3)',
              fontWeight: 600,
            }}
          >
            Windows 64-bit Installer
          </span>
        </div>
      </div>
    </section>
  );
};
