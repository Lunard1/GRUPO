import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CABRA_IMAGES } from '../assets';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080F]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with 3D Pixar Mascot Avatar */}
        <a
          href="#"
          className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
          id="navbar-brand-logo"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 p-[1.5px] shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <div className="w-full h-full bg-[#070B14] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={CABRA_IMAGES.pixarCircle}
                alt="Logo Cabra das Promos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#070B14] rounded-full" />
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              CABRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">DAS PROMOS</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">
              Radar no WhatsApp
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300" id="desktop-nav-links">
          <a
            href="#como-funciona"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Como funciona
          </a>
          <a
            href="#para-quem-e"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Para quem é
          </a>
          <a
            href="#o-que-encontra"
            className="hover:text-amber-400 transition-colors py-1"
          >
            O que você encontra
          </a>
          <a
            href="#o-cabra"
            className="hover:text-amber-400 transition-colors py-1"
          >
            O Cabra
          </a>
          <a
            href="#duvidas"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Dúvidas
          </a>
        </nav>

        {/* Action Button Desktop with Pulse */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-cta-button"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-md animate-whatsapp-pulse shimmer-effect"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>Entrar no grupo</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-amber-400 flex items-center gap-1.5 animate-whatsapp-pulse"
            id="mobile-nav-quick-cta"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Abrir menu de navegação"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="sm:hidden bg-[#070B14]/95 border-b border-amber-500/20 px-5 pt-3 pb-6 space-y-3 mt-2 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2"
        >
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60"
          >
            Como funciona
          </a>
          <a
            href="#para-quem-e"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60"
          >
            Para quem é
          </a>
          <a
            href="#o-que-encontra"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60"
          >
            O que você encontra
          </a>
          <a
            href="#o-cabra"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60"
          >
            O Cabra
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60"
          >
            Dúvidas frequentes
          </a>
          
          <div className="pt-2">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg animate-whatsapp-pulse"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Entrar no grupo oficial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
