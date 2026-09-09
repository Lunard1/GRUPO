import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AnimatedMascot } from './AnimatedMascot';

interface SingleSectionProps {
  onSelectGroup?: () => void;
}

export function SingleSection({ onSelectGroup }: SingleSectionProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Garante que o usuário inicie no topo da página
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    // Desliza suavemente a tela em direção ao botão de entrar no WhatsApp
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="cabra-whatsapp-section"
      className="min-h-[105vh] w-full bg-[#05080F] relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:py-16 overflow-x-hidden select-none"
    >
      {/* 1. Dramatic Golden Halo Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[750px] bg-gradient-to-b from-amber-500/20 via-amber-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-1/4 w-[350px] h-[350px] bg-amber-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* 2. Geometric background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af3715_1px,transparent_1px)] [background-size:26px_26px] opacity-45 pointer-events-none" />

      {/* 3. Main Centered Responsive Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Desktop) / Bottom Column (Mobile): Copy and Pulsing WhatsApp CTA */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1 items-center lg:items-start">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-5 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              id="brand-badge"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>CABRA DAS PROMOS • RADAR WHATSAPP</span>
            </motion.div>

            {/* Main Headline with High-Contrast Golden Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="main-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-5"
            >
              AS MELHORES PROMOS,{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.3)]">
                DIRETO NO SEU WHATSAPP.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="main-description"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-normal"
            >
              O Cabra garimpa ofertas reais, descontos e cupons testados nas principais lojas e envia tudo mastigado para você economizar.
            </motion.p>

            {/* THE PULSING WHATSAPP ENTER BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto"
            >
              <button
                ref={buttonRef}
                onClick={onSelectGroup}
                type="button"
                id="enter-whatsapp-button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-11 py-4 sm:py-5 rounded-2xl font-extrabold text-base sm:text-lg text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 animate-whatsapp-pulse shimmer-effect group cursor-pointer shadow-[0_20px_45px_-10px_rgba(245,158,11,0.5)]"
              >
                <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                </div>
                
                <span className="tracking-tight">Entrar no grupo do WhatsApp</span>
                
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Discreet subtext under button */}
              <p id="whatsapp-subtext" className="text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                100% Gratuito • Sem Spam • Ofertas Selecionadas
              </p>
            </motion.div>

          </div>

          {/* Right Column (Desktop) / Top Column (Mobile): Animated Photo with 3D Pixar Goat, Floating Coins & Glow */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <AnimatedMascot variant="hero" className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]" />
          </div>

        </div>
      </div>

      {/* Subtle bottom brand credit mark */}
      <div className="relative z-10 mt-8 text-center text-xs text-slate-600 font-medium">
        © {new Date().getFullYear()} Cabra das Promos • Todos os direitos reservados
      </div>
    </section>
  );
}
