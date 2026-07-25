import React from 'react';
import { Download, Sparkles, Gamepad2, UploadCloud, User, LogOut, Info } from 'lucide-react';
import logoImg from '../assets/logo.png';
import type { UserSession } from './AuthModal';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  session: UserSession | null;
  onOpenAuthModal: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, session, onOpenAuthModal, onLogout }) => {
  const isDev = session?.role === 'developer';

  const handleDevPortalClick = () => {
    if (isDev) {
      setActiveTab('developer');
    } else {
      onOpenAuthModal();
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)', backgroundColor: 'rgba(11, 14, 20, 0.88)', borderBottom: '1px solid var(--border-stroke)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        {/* Official Brand Logo */}
        <div onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src={logoImg}
            alt="Duat Studio Logo"
            style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.4))' }}
          />
          <div>
            <h1 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '1px', lineHeight: 1, margin: 0 }}>
              DUAT STUDIO
            </h1>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeTab === 'home' ? '1px solid var(--accent-gold)' : '1px solid transparent',
              backgroundColor: activeTab === 'home' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
              color: activeTab === 'home' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={16} color={activeTab === 'home' ? 'var(--accent-gold)' : 'var(--text-muted)'} />
            Home
          </button>

          <button
            onClick={() => setActiveTab('store')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeTab === 'store' ? '1px solid var(--accent-gold)' : '1px solid transparent',
              backgroundColor: activeTab === 'store' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
              color: activeTab === 'store' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Gamepad2 size={16} color={activeTab === 'store' ? 'var(--accent-gold)' : 'var(--text-muted)'} />
            Store Catalog
          </button>

          <button
            onClick={() => setActiveTab('download')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeTab === 'download' ? '1px solid var(--accent-gold)' : '1px solid transparent',
              backgroundColor: activeTab === 'download' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
              color: activeTab === 'download' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Download size={16} color={activeTab === 'download' ? 'var(--accent-gold)' : 'var(--text-muted)'} />
            Download App
          </button>

          {/* Protected Developer Portal Tab */}
          <button
            onClick={handleDevPortalClick}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeTab === 'developer' ? '1px solid var(--accent-gold)' : '1px solid transparent',
              backgroundColor: activeTab === 'developer' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
              color: isDev ? 'var(--accent-gold)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            title={isDev ? 'Access Developer Self-Service Portal' : 'Sign in as Game Developer to access'}
          >
            <UploadCloud size={16} color={isDev ? 'var(--accent-gold)' : 'var(--text-muted)'} />
            Developer Portal {isDev ? '⚡' : '🔒'}
          </button>

          {/* About Us Tab */}
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeTab === 'about' ? '1px solid var(--accent-gold)' : '1px solid transparent',
              backgroundColor: activeTab === 'about' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
              color: activeTab === 'about' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Info size={16} color={activeTab === 'about' ? 'var(--accent-gold)' : 'var(--text-muted)'} />
            About Us
          </button>
        </nav>

        {/* User Account Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {session ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} />
                <span>{session.developer_name || session.username} ({session.role})</span>
              </div>
              <button onClick={onLogout} className="btn-outline" style={{ padding: '6px 10px', fontSize: '0.78rem' }} title="Sign Out">
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button className="btn-outline" onClick={onOpenAuthModal} style={{ fontSize: '0.88rem' }}>
              <User size={16} />
              Sign In / Dev Login
            </button>
          )}

          <button className="btn-gold" onClick={() => setActiveTab('download')}>
            <Download size={16} />
            Get Launcher (.exe)
          </button>
        </div>
      </div>
    </header>
  );
};
