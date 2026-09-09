/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SingleSection } from './components/SingleSection';
import { GroupSelection } from './components/GroupSelection';
import { MercadoLivreAmbientAnimation } from './components/MercadoLivreAmbientAnimation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'grupos'>(() => {
    return window.location.hash === '#grupos' ? 'grupos' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#grupos') {
        setCurrentPage('grupos');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goToGroups = () => {
    window.location.hash = '#grupos';
    setCurrentPage('grupos');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05080F] text-slate-100 selection:bg-amber-400/20 selection:text-amber-300 relative">
      {/* Animação ambiente discreta da logo do Mercado Livre integrada à paleta noturna/dourada */}
      <MercadoLivreAmbientAnimation />

      <main className="relative z-10">
        {currentPage === 'home' ? (
          <SingleSection onSelectGroup={goToGroups} />
        ) : (
          <GroupSelection onBack={goToHome} />
        )}
      </main>
    </div>
  );
}
