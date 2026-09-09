import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_GROUP_URL, TRUST_POINTS } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AnimatedMascot } from './AnimatedMascot';
import { HudWidgets } from './HudWidgets';

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#05080F]"
    >
      {/* 1. Dramatic Ambient Backlight & Volumetric Lightcone (Exact aesthetic from reference image) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-500/25 via-amber-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-400/10 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Subtle Grid / Starfield lines in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af3715_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Architectural Copy & Pulsing CTA */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            {/* Pill Tag (like [AI EXPERIENCE PLATFORM] in reference) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 w-fit mx-auto lg:mx-0 mb-6 text-xs font-bold text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>RADAR DE OFERTAS NO WHATSAPP</span>
            </motion.div>

            {/* Huge Headline with bold typographic contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-headline"
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-white tracking-tight leading-[1.08] mb-6"
            >
              AS MELHORES PROMOS,{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.3)]">
                SEM VOCÊ PRECISAR
              </span>
              <span className="text-white">FICAR PROCURANDO.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="hero-subheadline"
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal"
            >
              O Cabra garimpa ofertas, descontos e oportunidades em lojas confiáveis e reúne tudo em um só lugar.
            </motion.p>

            {/* THE PULSING WHATSAPP CTA (High priority requirement) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-3.5 mb-10"
            >
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-pulsing-whatsapp-cta"
                className="relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-extrabold text-base sm:text-lg text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 animate-whatsapp-pulse shimmer-effect group cursor-pointer"
              >
                {/* Emerald icon container */}
                <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                </div>
                
                <span className="tracking-tight">Entrar no grupo do WhatsApp</span>
                
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Discreet text under button */}
              <p id="hero-microtext" className="text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Grátis • Ofertas selecionadas • Sem complicação
              </p>
            </motion.div>

            {/* Trust points bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0"
            >
              {TRUST_POINTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Mini matrix indicator & Scroll hint (Inspired by reference image bottom left) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:flex items-center gap-4 mt-10 pt-6 text-slate-400 text-xs font-semibold uppercase tracking-wider"
            >
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-sm bg-amber-400/60" />
                <span className="w-1.5 h-1.5 rounded-sm bg-amber-400/30" />
              </div>
              <a href="#como-funciona" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <span>ROLE PARA CONHECER</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Disney Pixar 3D Animated Character & Floating Glass HUD */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnimatedMascot variant="hero" />
            <HudWidgets />
          </div>

        </div>

      </div>
    </section>
  );
}
