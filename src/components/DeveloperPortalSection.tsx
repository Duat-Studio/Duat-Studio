import React, { useState } from 'react';
import { UploadCloud, Sparkles, Loader2, Server } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitGameToDeveloperPortal } from '../lib/supabase';

export const DeveloperPortalSection: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    developer_name: '',
    email: '',
    category: 'Action / RPG',
    price: '9.99',
    description: '',
    tag: 'Indie Spotlight',
    download_url: '',
    dev_wallet_sol: '',
    dev_wallet_evm: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.developer_name || !formData.email || !formData.download_url) {
      setErrorMsg('Please fill in all required fields (Game Title, Developer Name, Email, Download Package URL).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await submitGameToDeveloperPortal({
        title: formData.title,
        developer_name: formData.developer_name,
        email: formData.email,
        category: formData.category,
        price: parseFloat(formData.price) || 0,
        description: formData.description || 'Action packed indie title.',
        tag: formData.tag,
        download_url: formData.download_url,
        dev_wallet_sol: formData.dev_wallet_sol,
        dev_wallet_evm: formData.dev_wallet_evm,
      });

      if (res.success) {
        setSuccessMsg(`Congratulations! "${formData.title}" has been published to the Ankhvault store catalog with 95% revenue split! Players will download directly from your server URL.`);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        setFormData({
          title: '',
          developer_name: '',
          email: '',
          category: 'Action / RPG',
          price: '9.99',
          description: '',
          tag: 'Indie Spotlight',
          download_url: '',
          dev_wallet_sol: '',
          dev_wallet_evm: '',
        });
      } else {
        setErrorMsg(res.message || 'Error publishing game.');
      }
    } catch (err: any) {
      setErrorMsg(err?.toString() || 'Failed to submit game.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ padding: '60px 24px', maxWidth: '980px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(23, 145, 158, 0.15)', border: '1px solid rgba(23, 145, 158, 0.3)', padding: '6px 16px', borderRadius: '20px', marginBottom: '16px' }}>
          <Sparkles size={16} color="var(--accent-turquoise)" />
          <span style={{ color: 'var(--accent-turquoise)', fontSize: '0.85rem', fontWeight: 700 }}>
            SELF-HOSTED INDIE DEVELOPER PORTAL
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>
          HOST ON YOUR SERVER • KEEP 95% REVENUE
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '720px', margin: '0 auto' }}>
          Host your game package (.zip / .exe / .AppImage) on your own web server, AWS S3, Cloudflare R2, or CDN. Players download directly from your server while you collect 95% revenue in USDT / USDC.
        </p>
      </div>

      {/* Zero-Host-Cost Architecture Banner */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px', border: '1px solid var(--accent-turquoise)', backgroundColor: 'rgba(23, 145, 158, 0.08)', display: 'flex', alignItems: 'center', gap: '18px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(23, 145, 158, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Server size={26} color="var(--accent-turquoise)" />
        </div>
        <div>
          <h4 style={{ color: 'var(--accent-turquoise)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>
            ⚡ Self-Hosted Storage & Direct Download CDN
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
            No third-party upload restrictions. Simply host your game file on your server or cloud storage (AWS S3, Cloudflare R2, Google Cloud, itch.io direct link, or custom domain). Ankhvault desktop client streams downloads directly from your link.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px', border: '1px solid var(--accent-gold)', backgroundColor: 'rgba(22, 27, 38, 0.85)' }}>
        <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid var(--border-stroke)', paddingBottom: '12px' }}>
          1. Game & Developer Profile Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Game Title *
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Cyber Genesis"
              value={formData.title}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Developer / Studio Name *
            </label>
            <input
              type="text"
              name="developer_name"
              placeholder="e.g. Apex Velocity Games"
              value={formData.developer_name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
              required
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Developer Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="dev@studio.com"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Category / Genre
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
            >
              <option value="Action / RPG">Action / RPG</option>
              <option value="Cyberpunk Racing">Cyberpunk Racing</option>
              <option value="Tactical Shooter">Tactical Shooter</option>
              <option value="Strategy / Deckbuilder">Strategy / Deckbuilder</option>
              <option value="Space Simulator">Space Simulator</option>
              <option value="Indie Adventure">Indie Adventure</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Price in USD ($0 for Free)
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="9.99"
              value={formData.price}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
            Developer Server / Direct Download Package URL (.zip / .exe) *
          </label>
          <input
            type="url"
            name="download_url"
            placeholder="https://downloads.yourstudio.com/releases/v1.0/game.zip"
            value={formData.download_url}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
            required
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
            Direct HTTPS download link hosted on your server, Cloudflare R2, AWS S3, or CDN.
          </span>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
            Game Description
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Provide a compelling overview of your game features, story, and gameplay mechanics..."
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
          />
        </div>

        {/* 2. Developer Wallet Addresses (95% Payout Split) */}
        <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-turquoise)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid var(--border-stroke)', paddingBottom: '12px' }}>
          2. Developer Payout Wallet Setup (95% Automated Payout Split)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Solana Wallet Address (SPL USDT/USDC)
            </label>
            <input
              type="text"
              name="dev_wallet_sol"
              placeholder="e.g. 2JxDavSJ9de1twMxDxdqz1sV3vkpYVDpPbx8qTy6q2cS"
              value={formData.dev_wallet_sol}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--accent-turquoise)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Base EVM Wallet Address (ERC-20 USDT/USDC)
            </label>
            <input
              type="text"
              name="dev_wallet_evm"
              placeholder="e.g. 0x5efe4d14d5f406bb748fab14a3e2cda06e51a986"
              value={formData.dev_wallet_evm}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
            />
          </div>
        </div>

        {errorMsg && (
          <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px' }}>
            {errorMsg}
          </p>
        )}

        {successMsg && (
          <div style={{ padding: '12px 16px', backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '16px' }}>
            {successMsg}
          </div>
        )}

        <button className="btn-gold glow-pulse" type="submit" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1.05rem' }}>
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Publishing Game Entry to Ankhvault Cloud Database...
            </>
          ) : (
            <>
              <UploadCloud size={18} />
              Publish Game to Ankhvault (Self-Hosted Direct Download)
            </>
          )}
        </button>
      </form>
    </section>
  );
};
