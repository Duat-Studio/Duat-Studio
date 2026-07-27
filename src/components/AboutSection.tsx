import React from 'react';
import { Building2, Shield, Users, Award, Zap } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <img
            src={logoImg}
            alt="Duat Studio Logo"
            style={{ width: '80px', height: '80px', objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(212, 175, 55, 0.4))' }}
          />
        </div>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          ABOUT DUAT STUDIO
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
          Building next-generation PC gaming experiences, client software, and independent developer empowerment tools.
        </p>
      </div>

      {/* Grid of Story & Mission */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
        <div className="glass-panel" style={{ padding: '32px', border: '1px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Building2 size={24} color="var(--accent-gold)" />
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 700 }}>
              Our Vision & Philosophy
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
            Duat Studio was founded to solve key challenges facing independent game creators: high platform commission cuts, delayed payout cycles, and heavy client launchers. We designed <strong>Ankhvault</strong> from the ground up using <strong>Rust & Tauri 2.0</strong> to deliver an ultra-lightweight client that consumes minimal system resources while keeping games running at peak performance.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '32px', border: '1px solid var(--accent-turquoise)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Zap size={24} color="var(--accent-turquoise)" />
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-turquoise)', fontSize: '1.3rem', fontWeight: 700 }}>
              The 95% Developer Retain Model
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
            Traditional storefronts take 30% of developer earnings. At Duat Studio, creators retain <strong>95% of gross revenue</strong> on every sale. With x402 Payment Protocol integration, developers enjoy instant settlement across USD Stablecoins (USDT & USDC).
          </p>
        </div>
      </div>

      {/* Core Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Shield size={20} color="var(--accent-emerald)" />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>Vault Security</h4>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
            AES-256 binary database file encryption and SHA-256 salted credentials protect player accounts and game libraries.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Users size={20} color="var(--accent-gold)" />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>Community Focused</h4>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
            Direct developer self-service portal with zero platform lock-in, enabling game creators to self-host build packages.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Award size={20} color="var(--accent-turquoise)" />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>Native Performance</h4>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
            Native Windows execution powered by Rust 1.75+ and Tauri 2.0 with sub-50MB system memory usage.
          </p>
        </div>
      </div>
    </section>
  );
};
