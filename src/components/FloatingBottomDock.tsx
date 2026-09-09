import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CABRA_IMAGES } from '../assets';

export function FloatingBottomDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once user scrolls past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
          id="floating-bottom-dock"
        >
          <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-3 rounded-full bg-[#0B132B]/90 backdrop-blur-2xl border border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-xl w-full">
            
            {/* Left side: Avatar + Status */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-400/60 shrink-0 bg-[#070B14]">
                <img
                  src={CABRA_IMAGES.pixarCircle}
                  alt="Cabra avatar"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0B132B]" />
              </div>
              <div className="hidden xs:flex flex-col truncate">
                <span className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                  Cabra das Promos
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </span>
                <span className="text-[11px] text-slate-400 truncate">
                  Ofertas em tempo real no WhatsApp
                </span>
              </div>
            </div>

            {/* Right side: Pulsing Action Button */}
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="floating-dock-cta-btn"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md animate-whatsapp-pulse shimmer-effect shrink-0 whitespace-nowrap group cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              <span>Entrar no grupo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
