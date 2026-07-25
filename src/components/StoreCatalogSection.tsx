import React, { useEffect, useState } from 'react';
import { Star, Monitor, Download } from 'lucide-react';
import { fetchCatalogFromSupabase } from '../lib/supabase';

interface GameItem {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  tag: string;
  developer_name?: string;
}

interface StoreCatalogSectionProps {
  onGoToDownloadApp: () => void;
}

export const StoreCatalogSection: React.FC<StoreCatalogSectionProps> = ({ onGoToDownloadApp }) => {
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedGamePrompt, setSelectedGamePrompt] = useState<GameItem | null>(null);

  useEffect(() => {
    fetchCatalogFromSupabase().then((data) => {
      if (data && data.length > 0) {
        setGames(
          data.map((item) => ({
            id: item.id,
            title: item.title,
            category: item.category,
            price: Number(item.price),
            rating: Number(item.rating || 5.0),
            description: item.description,
            tag: item.tag || 'Featured',
            developer_name: item.developer_name || 'Independent Publisher',
          }))
        );
      }
      setLoading(false);
    });
  }, []);

  const allGenres = ['All', ...Array.from(new Set(games.map((g) => g.category)))];
  const filteredGames = selectedGenre === 'All' ? games : games.filter((g) => g.category === selectedGenre);

  return (
    <section style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>
          ANKHVAULT STORE CATALOG
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
          Explore flagship games and indie releases. All games are purchased, installed, and launched exclusively inside the Ankhvault Desktop App.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Loading catalog...</div>
        </div>
      ) : games.length === 0 ? (
        <div className="glass-panel" style={{ padding: '80px 32px', textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <Monitor size={48} color="var(--accent-gold)" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '12px' }}>
            Store Launching Soon
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px', lineHeight: 1.6 }}>
            The Ankhvault catalog is being curated. Be the first developer to list your game — 95% revenue, zero storage fees.
          </p>
          <button className="btn-gold" onClick={onGoToDownloadApp} style={{ margin: '0 auto' }}>
            <Download size={18} />
            Download Ankhvault Launcher
          </button>
        </div>
      ) : (
        <>
          {/* Genre Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: selectedGenre === genre ? '1px solid var(--accent-gold)' : '1px solid var(--border-stroke)',
                  background: selectedGenre === genre ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                  color: selectedGenre === genre ? 'var(--accent-gold)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Game Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="glass-panel glass-panel-interactive"
                style={{ padding: '24px', cursor: 'pointer', position: 'relative' }}
                onClick={() => setSelectedGamePrompt(game)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: 'rgba(212,175,55,0.15)', color: 'var(--accent-gold)', border: '1px solid rgba(212,175,55,0.3)' }}>
                    {game.tag}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B', fontSize: '0.85rem' }}>
                    <Star size={14} fill="currentColor" />
                    {game.rating.toFixed(1)}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                  {game.title}
                </h3>
                <p style={{ color: 'var(--accent-turquoise)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '8px' }}>
                  {game.category}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '16px' }}>
                  {game.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 800 }}>
                    {game.price === 0 ? 'FREE' : `$${game.price.toFixed(2)}`}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{game.developer_name}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Game Detail Prompt */}
      {selectedGamePrompt && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }} onClick={() => setSelectedGamePrompt(null)}>
          <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '36px' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '8px' }}>{selectedGamePrompt.title}</h3>
            <p style={{ color: 'var(--accent-turquoise)', fontSize: '0.85rem', marginBottom: '16px' }}>{selectedGamePrompt.category} · {selectedGamePrompt.developer_name}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>{selectedGamePrompt.description}</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-gold" onClick={onGoToDownloadApp} style={{ flex: 1, justifyContent: 'center' }}>
                <Monitor size={16} />
                Get in Ankhvault App
              </button>
              <button onClick={() => setSelectedGamePrompt(null)} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--border-stroke)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
