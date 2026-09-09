import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CABRA_IMAGES } from '../assets';

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="py-24 md:py-36 bg-[#05080F] relative overflow-hidden border-t border-slate-800/80"
    >
      {/* 1. Dramatic Golden Halo Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-amber-500/15 blur-[180px] pointer-events-none rounded-full" />

      {/* 2. Giant Aesthetic Watermark Typography (Inspired by reference image) */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="text-[14vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          CABRA DAS PROMOS
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Mascot Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-full p-1 bg-gradient-to-b from-amber-400 via-amber-500 to-slate-900 shadow-[0_15px_35px_rgba(245,158,11,0.3)] animate-mascot-float"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-300 bg-[#070B14]">
            <img
              src={CABRA_IMAGES.pixarCircle}
              alt="Cabra das Promos"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-6 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>[ ACESSO DIRETO E GRATUITO ]</span>
        </div>

        <h2
          id="final-cta-title"
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
        >
          SEU PRÓXIMO ACHADO{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            JÁ FOI GARIMPADO.
          </span>
        </h2>

        <p
          id="final-cta-text"
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Entre no grupo oficial do WhatsApp e comece a economizar nas suas compras hoje mesmo.
        </p>

        {/* Big Pulsing Action Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl font-black text-lg text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.4)] animate-whatsapp-pulse shimmer-effect transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
            </div>
            <span>Entrar no grupo do WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2 mt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Acesso instantâneo • 100% gratuito • Saia quando quiser
          </p>
        </div>

      </div>
    </section>
  );
}
