import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppDownloadSection } from './components/AppDownloadSection';
import { DeveloperPortalSection } from './components/DeveloperPortalSection';
import { StoreCatalogSection } from './components/StoreCatalogSection';
import { Web3SettlementSection } from './components/Web3SettlementSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import type { UserSession } from './components/AuthModal';
import './styles/glassmorphism.css';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [session, setSession] = useState<UserSession | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginSuccess = (userSession: UserSession) => {
    setSession(userSession);
    if (userSession.role === 'developer') {
      setActiveTab('developer');
    }
  };

  const handleLogout = () => {
    setSession(null);
    setActiveTab('home');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        session={session}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main style={{ flexGrow: 1, width: '100%' }}>
        {activeTab === 'home' && (
          <>
            <Hero
              onDownloadClick={() => setActiveTab('download')}
              onPublishClick={() => {
                if (session?.role === 'developer') {
                  setActiveTab('developer');
                } else {
                  setIsAuthModalOpen(true);
                }
              }}
            />
            <StoreCatalogSection onGoToDownloadApp={() => setActiveTab('download')} />
            <AppDownloadSection />
            <Web3SettlementSection />
          </>
        )}

        {activeTab === 'store' && (
          <StoreCatalogSection onGoToDownloadApp={() => setActiveTab('download')} />
        )}

        {activeTab === 'download' && <AppDownloadSection />}

        {activeTab === 'developer' && (
          <DeveloperPortalSection
            session={session}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {activeTab === 'web3' && <Web3SettlementSection />}
      </main>

      <Footer />

      {/* Auth Modal for Player / Developer Authentication */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;
