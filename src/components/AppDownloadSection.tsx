import React, { useState } from 'react';
import { Download, Monitor, HardDrive, CheckCircle2 } from 'lucide-react';

export const AppDownloadSection: React.FC = () => {
  const [selectedOs, setSelectedOs] = useState<'windows' | 'linux'>('windows');

  const downloads = {
    windows: {
      title: 'Ankhvault Launcher for Windows',
      file: 'Ankhvault-Launcher-v3.0.0-Setup.exe',
      size: '18.4 MB',
      requirements: 'Windows 10 / 11 (64-bit)',
      url: 'https://github.com/Duat-Studio/Ankhvault/releases',
    },
    linux: {
      title: 'Ankhvault Launcher for Linux',
      file: 'Ankhvault-Launcher-v3.0.0.AppImage',
      size: '17.8 MB',
      requirements: 'Ubuntu 22.04+ / Arch / Debian / Fedora',
      url: 'https://github.com/Duat-Studio/Ankhvault/releases',
    },
  };

  const activeDl = downloads[selectedOs];

  return (
    <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
          DOWNLOAD ANKHVAULT DESKTOP LAUNCHER
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
          Available natively for Windows and Linux. All games must be launched and downloaded inside the Ankhvault Desktop Client.
        </p>
      </div>

      {/* OS Selector Tabs (Windows & Linux Only) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
        {[
          { id: 'windows', label: '🪟 Windows (.exe)' },
          { id: 'linux', label: '🐧 Linux (.AppImage)' },
        ].map((os) => (
          <button
            key={os.id}
            onClick={() => setSelectedOs(os.id as any)}
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              border: selectedOs === os.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-stroke)',
              backgroundColor: selectedOs === os.id ? 'rgba(212, 175, 55, 0.18)' : 'rgba(22, 27, 38, 0.6)',
              color: selectedOs === os.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {os.label}
          </button>
        ))}
      </div>

      {/* Download Box */}
      <div className="glass-panel" style={{ padding: '36px', border: '1px solid var(--accent-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Monitor size={28} color="var(--accent-gold)" />
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: 700 }}>
              {activeDl.title}
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
            Official release built on <strong>Rust + Tauri 2.0 Engine</strong> with sub-50MB RAM consumption and AES-256 vault encryption.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>System Requirements: {activeDl.requirements}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Package Size: ~{activeDl.size} (Ultra-compact installer)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>SHA-256 Verified & VirusTotal Clean</span>
            </div>
          </div>

          <a href={activeDl.url} target="_blank" rel="noreferrer" className="btn-gold glow-pulse" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <Download size={18} />
            Get Ankhvault Client on GitHub Releases
          </a>
        </div>

        <div className="glass-panel" style={{ padding: '24px', backgroundColor: 'rgba(11, 14, 20, 0.7)', textAlign: 'center' }}>
          <HardDrive size={40} color="var(--accent-turquoise)" style={{ marginBottom: '12px' }} />
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
            Official Releases
          </h4>
          <span style={{ color: 'var(--accent-turquoise)', fontSize: '0.8rem', backgroundColor: 'rgba(23, 145, 158, 0.2)', padding: '4px 10px', borderRadius: '12px', border: '1px solid rgba(23, 145, 158, 0.3)' }}>
            Windows & Linux Desktop Builds
          </span>
        </div>
      </div>
    </section>
  );
};
