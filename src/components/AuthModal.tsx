import React, { useState } from 'react';
import { X, Lock, User, Mail, Loader2 } from 'lucide-react';
import { supabase, registerUserProfileSupabase } from '../lib/supabase';

export interface UserSession {
  username: string;
  email: string;
  role: 'player' | 'developer';
  developer_name?: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (session: UserSession) => void;
  defaultRole?: 'player' | 'developer';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess, defaultRole = 'developer' }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<'player' | 'developer'>(defaultRole);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please provide email and password.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const userHandle = username || email.split('@')[0];
      if (isRegister) {
        await registerUserProfileSupabase(userHandle, email, role);

        if (role === 'developer') {
          await supabase.from('developer_profiles').upsert(
            {
              developer_name: userHandle,
              email: email,
              payout_split_percent: 95.0,
            },
            { onConflict: 'developer_name' }
          );
        }

        const session: UserSession = {
          username: userHandle,
          email,
          role,
          developer_name: role === 'developer' ? userHandle : undefined,
        };

        onLoginSuccess(session);
        onClose();
      } else {
        const session: UserSession = {
          username: userHandle,
          email,
          role,
          developer_name: role === 'developer' ? userHandle : undefined,
        };

        onLoginSuccess(session);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Authentication error.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(5, 7, 10, 0.88)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '480px', maxHeight: '90vh', overflowY: 'auto', padding: '32px', position: 'relative', border: '1px solid var(--accent-gold)' }}>
        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #D4AF37, #17919E)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', color: '#0B0E14', fontSize: '1.6rem', fontWeight: 900 }}>☥</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: 700 }}>
            {isRegister ? 'Create Duat Studio Account' : 'Sign In to Duat Studio'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {isRegister ? 'Register as a Verified Game Developer or Player' : 'Access Developer Portal & App Store'}
          </p>
        </div>

        {/* Account Role Selector */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px' }}>
            Select Account Role
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setRole('developer')}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: role === 'developer' ? '1px solid var(--accent-gold)' : '1px solid var(--border-stroke)',
                backgroundColor: role === 'developer' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(11, 14, 20, 0.5)',
                color: role === 'developer' ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              ⚡ Game Developer
            </button>
            <button
              type="button"
              onClick={() => setRole('player')}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: role === 'player' ? '1px solid var(--accent-turquoise)' : '1px solid var(--border-stroke)',
                backgroundColor: role === 'player' ? 'rgba(23, 145, 158, 0.2)' : 'rgba(11, 14, 20, 0.5)',
                color: role === 'player' ? 'var(--accent-turquoise)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              🎮 Player / Gamer
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {isRegister && (
            <div>
              <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                {role === 'developer' ? 'Studio / Developer Name' : 'Username'}
              </label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder={role === 'developer' ? 'e.g. Apex Velocity Games' : 'e.g. GamerPro'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: '100%', padding: '10px 10px 10px 36px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                placeholder={role === 'developer' ? 'dev@studio.com' : 'player@email.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '10px 10px 10px 36px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '10px 10px 10px 36px', backgroundColor: 'rgba(11, 14, 20, 0.8)', border: '1px solid var(--border-stroke)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                required
              />
            </div>
          </div>

          {errorMsg && (
            <p style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '4px' }}>
              {errorMsg}
            </p>
          )}

          <button className="btn-gold glow-pulse" type="submit" disabled={isLoading} style={{ marginTop: '10px', justifyContent: 'center', padding: '12px', fontSize: '0.95rem' }}>
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : isRegister ? `Create ${role === 'developer' ? 'Developer' : 'Player'} Account` : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {isRegister ? 'Already have an account?' : `Don't have a ${role === 'developer' ? 'developer' : 'player'} account?`}{' '}
          <button
            type="button"
            onClick={() => { setIsRegister(!isRegister); setErrorMsg(''); }}
            style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isRegister ? 'Sign In' : 'Create Account'}
          </button>
        </div>
      </div>
    </div>
  );
};
