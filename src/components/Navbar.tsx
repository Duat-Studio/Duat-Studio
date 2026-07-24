import React from 'react';
import { Download, Sparkles, Gamepad2, UploadCloud, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)', backgroundColor: 'rgba(11, 14, 20, 0.85)', borderBottom: '1px solid var(--border-stroke)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <div onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #D4AF37, #17919E)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(212, 175, 55, 0.3)' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', color: '#0B0E14', fontSize: '1.4rem', fontWeight: 900 }}>☥</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '1px', lineHeight: 1 }}>
              DUAT STUDIO
            </h1>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
              Ankhvault Platform
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'home', label: 'Home', icon: Sparkles },
            { id: 'store', label: 'Store Catalog', icon: Gamepad2 },
            { id: 'download', label: 'Download App', icon: Download },
            { id: 'developer', label: 'Developer Portal', icon: UploadCloud },
            { id: 'web3', label: 'x402 Protocol', icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  backgroundColor: isActive ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} color={isActive ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <button className="btn-gold" onClick={() => setActiveTab('download')}>
          <Download size={16} />
          Get Launcher (.exe)
        </button>
      </div>
    </header>
  );
};
