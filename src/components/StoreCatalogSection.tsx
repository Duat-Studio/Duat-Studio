import React, { useEffect, useState } from 'react';
import { Star, Download } from 'lucide-react';
import { fetchCatalogFromSupabase } from '../lib/supabase';

interface GameItem {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  tag: string;
  download_url: string;
  developer_name?: string;
}

export const StoreCatalogSection: React.FC = () => {
  const [games, setGames] = useState<GameItem[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

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
            download_url: item.download_url,
            developer_name: item.developer_name || 'Independent Publisher',
          }))
        );
      } else {
        // Default catalog fallback
        setGames([
          { id: 'kemet', title: 'Shadow of Kemet', category: 'Action / RPG', price: 14.99, rating: 4.9, description: 'Unravel ancient temple mysteries and slay mythical guardians in ancient Egypt.', tag: 'Flagship Title', download_url: '#', developer_name: 'Duat Studio' },
          { id: 'racer', title: 'Nomad Racer', category: 'Cyberpunk Racing', price: 9.99, rating: 4.7, description: 'High-octane neon drag racing across futuristic desert highways.', tag: 'Best Seller', download_url: '#', developer_name: 'Apex Velocity' },
          { id: 'aegis', title: 'Aegis Protocol', category: 'Tactical Shooter', price: 0.00, rating: 4.8, description: 'Competitive squad tactics and cybernetic combat in a dystopian city.', tag: 'Free to Play', download_url: '#', developer_name: 'Ironclad Interactive' },
          { id: 'duat', title: 'Chronicles of Duat', category: 'Strategy / Deckbuilder', price: 4.99, rating: 4.6, description: 'Master ritual spells and summon celestial pharaohs in turn-based combat.', tag: 'New Release', download_url: '#', developer_name: 'Duat Studio' },
          { id: 'neon', title: 'Neon Odyssey', category: 'Space Simulator', price: 14.99, rating: 4.9, description: 'Explore uncharted galaxy sectors, mine rare plasma ores, and command dreadnoughts.', tag: 'Featured', download_url: '#', developer_name: 'SynthWave Interactive' },
        ]);
      }
    });
  }, []);

  const genres = ['All', 'Action / RPG', 'Cyberpunk Racing', 'Tactical Shooter', 'Strategy / Deckbuilder', 'Space Simulator'];

  const filteredGames = selectedGenre === 'All' ? games : games.filter((g) => g.category.includes(selectedGenre));

  return (
    <section style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>
          ANKHVAULT STORE CATALOG
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
          Explore flagship games and indie releases available on the Ankhvault Desktop Launcher.
        </p>
      </div>

      {/* Genre Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: selectedGenre === genre ? '1px solid var(--accent-gold)' : '1px solid var(--border-stroke)',
              backgroundColor: selectedGenre === genre ? 'rgba(212, 175, 55, 0.18)' : 'transparent',
              color: selectedGenre === genre ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Game Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {filteredGames.map((game) => (
          <div key={game.id} className="glass-panel glass-panel-interactive" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ backgroundColor: 'rgba(23, 145, 158, 0.2)', color: 'var(--accent-turquoise)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(23, 145, 158, 0.3)' }}>
                {game.tag}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600 }}>
                <Star size={14} fill="#fbbf24" />
                {game.rating.toFixed(1)}
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>
              {game.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500, marginBottom: '12px' }}>
              {game.category} • {game.developer_name}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
              {game.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid var(--border-stroke)', marginTop: 'auto' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Price</span>
                <span style={{ fontSize: '1.2rem', color: game.price === 0 ? 'var(--accent-emerald)' : 'var(--text-primary)', fontWeight: 800 }}>
                  {game.price === 0 ? 'Free to Play' : `$${game.price.toFixed(2)}`}
                </span>
              </div>

              <a href={game.download_url} className={game.price === 0 ? "btn-turquoise" : "btn-gold"} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <Download size={14} />
                Get Game
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
