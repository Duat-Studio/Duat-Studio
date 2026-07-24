import React from 'react';
import { QrCode, ArrowRightLeft, CheckCircle2 } from 'lucide-react';

export const Web3SettlementSection: React.FC = () => {
  return (
    <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>
          STABLECOIN x402 PAYMENT GATEWAY
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '680px', margin: '0 auto' }}>
          Instant 1:1 USD Settlement • Zero Chargeback Fraud • Automated 95% Developer Revenue Split
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
        {/* Card 1: 1-Step Single Customer Payment */}
        <div className="glass-panel" style={{ padding: '32px', border: '1px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={22} color="var(--accent-gold)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 700 }}>
              1-Step Mobile QR Code Payment
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
            Gamers pay for titles using USDT or USDC on Solana (SPL) or Base (EVM). Simply scan the single QR code using Phantom, Solflare, MetaMask, Coinbase Wallet, or Trust Wallet.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Instant 1:1 USD Settlement (No Volatility)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Supported Tokens: USDT & USDC</span>
            </div>
          </div>
        </div>

        {/* Card 2: Automated 95% Dev Payout Split */}
        <div className="glass-panel" style={{ padding: '32px', border: '1px solid var(--accent-turquoise)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(23, 145, 158, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRightLeft size={22} color="var(--accent-turquoise)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-turquoise)', fontSize: '1.3rem', fontWeight: 700 }}>
              Automated 95% / 5% Payout Split
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
            Once the customer sends their single payment, the x402 protocol verifies the signature on-chain and automatically disburses 95% directly to the game developer's payout wallet while retaining a 5% platform fee.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>95% Direct Payout to Developer Wallet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>5% Platform Fee to Duat Studio Treasury Vaults</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
