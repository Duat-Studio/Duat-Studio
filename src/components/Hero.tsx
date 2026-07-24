import React from 'react';
import { Download, UploadCloud, ShieldCheck, Zap, Cpu, Award } from 'lucide-react';

interface HeroProps {
  onDownloadClick: () => void;
  onPublishClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onPublishClick }) => {
  return (
    <section style={{ padding: '80px 24px 60px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '6px 16px', borderRadius: '20px', marginBottom: '28px' }}>
        <Award size={16} color="var(--accent-gold)" />
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>
          DUAT STUDIO • NEXT-GEN PC GAMING PLATFORM
        </span>
      </div>

      {/* Main Headline */}
      <h1 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '3.8rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', background: 'linear-gradient(135deg, #EDE6D6 0%, #D4AF37 50%, #17919E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        EMPOWERING CREATORS.<br />REDEFINING PC GAMING.
      </h1>

      {/* Subtitle */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '820px', margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 400 }}>
        Ankhvault is an ultra-fast Rust + Tauri 2.0 desktop game launcher built for players and game developers. Enjoy <strong style={{ color: 'var(--accent-gold)' }}>95% revenue retention</strong> with instant 1:1 USD Stablecoin settlement.
      </p>

      {/* CTA Button Pair */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '64px', flexWrap: 'wrap' }}>
        <button className="btn-gold glow-pulse" onClick={onDownloadClick} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
          <Download size={20} />
          Download Ankhvault Launcher (.exe)
        </button>

        <button className="btn-turquoise" onClick={onPublishClick} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
          <UploadCloud size={20} />
          Upload / Publish Your Game
        </button>
      </div>

      {/* Feature Highlights Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', textIndent: 0 }}>
        <div className="glass-panel glass-panel-interactive" style={{ padding: '28px', textAlign: 'left' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <Zap size={24} color="var(--accent-gold)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
            🔥 95% Dev Revenue Split
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Game developers keep 95% of every sale. No corporate gatekeeping or 30% cuts. Payouts settled directly to your wallet.
          </p>
        </div>

        <div className="glass-panel glass-panel-interactive" style={{ padding: '28px', textAlign: 'left' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(23, 145, 158, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <ShieldCheck size={24} color="var(--accent-turquoise)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-turquoise)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
            ⚡ Stablecoin x402 Gateway
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Accept 1:1 USD Stablecoin payments (USDT & USDC) on Solana & Base EVM networks with mobile QR code support.
          </p>
        </div>

        <div className="glass-panel glass-panel-interactive" style={{ padding: '28px', textAlign: 'left' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <Cpu size={24} color="var(--accent-emerald)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-emerald)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
            🚀 Rust + Tauri 2.0 Engine
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Lightweight native binary client with sub-50MB RAM consumption, AES-256 binary vault database encryption, and instant downloads.
          </p>
        </div>
      </div>
    </section>
  );
};
