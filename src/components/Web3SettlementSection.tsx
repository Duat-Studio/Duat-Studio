import React from 'react';
import { CreditCard, ArrowRightLeft, CheckCircle2 } from 'lucide-react';

export const Web3SettlementSection: React.FC = () => {
  return (
    <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>
          MOONPAY COMMERCE PAYMENT GATEWAY
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '680px', margin: '0 auto' }}>
          Seamless Cards, Mobile Pay & Stablecoin Checkout • Instant Settlement • 95% Developer Revenue Payout
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
        {/* Card 1: Universal Payment Options */}
        <div className="glass-panel" style={{ padding: '32px', border: '1px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={22} color="var(--accent-gold)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 700 }}>
              Universal MoonPay Commerce Checkout
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
            Gamers can purchase games effortlessly using Visa, Mastercard, Apple Pay, Google Pay, or USD Stablecoins (USDT & USDC). MoonPay Commerce provides friction-free 1-step checkout.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Credit & Debit Cards, Apple Pay, Google Pay Supported</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Crypto Tokens: USDT (Tether) & USDC (USD Coin)</span>
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
            Once purchase order status is confirmed by MoonPay Commerce, 95% of gross revenue is automatically disbursed directly to the developer's registered account or payout wallet.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>95% Direct Payout to Developer Wallet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>5% Platform Fee retained for Ankhvault operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
