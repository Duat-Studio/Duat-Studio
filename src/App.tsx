import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppDownloadSection } from './components/AppDownloadSection';
import { DeveloperPortalSection } from './components/DeveloperPortalSection';
import { StoreCatalogSection } from './components/StoreCatalogSection';
import { Web3SettlementSection } from './components/Web3SettlementSection';
import { Footer } from './components/Footer';
import './styles/glassmorphism.css';

export function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <>
            <Hero
              onDownloadClick={() => setActiveTab('download')}
              onPublishClick={() => setActiveTab('developer')}
            />
            <StoreCatalogSection />
            <AppDownloadSection />
            <Web3SettlementSection />
          </>
        )}

        {activeTab === 'store' && <StoreCatalogSection />}

        {activeTab === 'download' && <AppDownloadSection />}

        {activeTab === 'developer' && <DeveloperPortalSection />}

        {activeTab === 'web3' && <Web3SettlementSection />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
