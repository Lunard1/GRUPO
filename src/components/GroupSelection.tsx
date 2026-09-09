import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Users, Zap, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_GROUPS } from '../constants';
import { CABRA_IMAGES } from '../assets';
import { WhatsAppIcon } from './WhatsAppIcon';
import { type WhatsAppGroup } from '../types';

interface GroupSelectionProps {
  onBack: () => void;
}

export function GroupSelection({ onBack }: GroupSelectionProps) {
  return (
    <div
      id="cabra-group-selection-page"
      className="min-h-screen w-full bg-[#05080F] text-slate-100 relative flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-x-hidden select-none"
    >
      {/* Dramatic Golden Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-500/20 via-amber-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-400/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af3712_1px,transparent_1px)] [background-size:26px_26px] opacity-40 pointer-events-none" />

      {/* Top Header Navigation */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between mb-8 relative z-10">
        <button
          onClick={onBack}
          id="back-to-home-button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-amber-400/50 text-sm font-semibold text-slate-300 hover:text-white transition-all cursor-pointer shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-amber-400" />
          <span>Voltar para o início</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs font-bold text-amber-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>9 GRUPOS OFICIAIS ATIVOS</span>
        </div>
      </div>

      {/* Main Header Presentation */}
      <div className="w-full max-w-3xl mx-auto text-center relative z-10 mb-10">
        {/* Mascot Avatar with Golden Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-4"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-100 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#070B14] border-2 border-[#05080F]">
              <img
                src={CABRA_IMAGES.pixarCircle}
                alt="Mascote Cabra das Promos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#05080F] flex items-center justify-center shadow-lg">
            <WhatsAppIcon className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-extrabold text-amber-300 mb-3"
        >
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span>ESCOLHA O SEU GRUPO</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4"
        >
          SELECIONE UM GRUPO PARA ENTRAR
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-6 font-normal"
        >
          Temos 9 grupos oficiais para não superlotar. Todos recebem exatamente as <strong>mesmas ofertas, cupons e achados</strong> no mesmo instante!
        </motion.p>

        {/* Helper Banner */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="p-3.5 sm:p-4 rounded-2xl bg-amber-400/10 border border-amber-400/25 text-xs sm:text-sm text-amber-200/90 max-w-2xl mx-auto flex items-center gap-3 text-left shadow-lg backdrop-blur-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-amber-300">Dica do Cabra:</span> Escolha qualquer grupo com vagas abertas. Se por acaso um estiver cheio, volte aqui e clique no seguinte.
          </div>
        </motion.div>
      </div>

      {/* Grid with 9 Differentiated Group Buttons */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10 mb-12">
        {WHATSAPP_GROUPS.map((group, index) => {
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              id={`group-card-${group.id}`}
              className={`rounded-2xl p-5 relative overflow-hidden transition-all duration-300 flex flex-col justify-between border ${
                group.isPopular
                  ? 'bg-gradient-to-b from-[#0F172A]/90 to-[#070B14]/95 border-amber-400/50 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.25)] hover:border-amber-400'
                  : 'bg-[#0A0F1D]/80 hover:bg-[#0E1528] border-slate-800 hover:border-slate-700 shadow-md'
              }`}
            >
              {/* Subtle top glow for popular groups */}
              {group.isPopular && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 blur-2xl pointer-events-none rounded-full" />
              )}

              {/* Card Top Section: Group Number + Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/60 font-mono">
                    #{group.id.toString().padStart(2, '0')}
                  </span>

                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${
                    group.isPopular
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {group.tag}
                  </span>
                </div>

                {/* Group Title */}
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1 flex items-center gap-2">
                  <span>{group.name}</span>
                  {group.isPopular && (
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  )}
                </h3>

                {/* Highlight */}
                <p className="text-xs text-slate-400 mb-3">
                  {group.highlight}
                </p>

                {/* Status bar */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>{group.status}</span>
                </div>
              </div>

              {/* The Dedicated WhatsApp Button for this group */}
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`join-group-button-${group.id}`}
                className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
                  group.isPopular
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_4px_18px_rgba(245,158,11,0.35)]'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_4px_15px_rgba(16,185,129,0.25)]'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-slate-950/20 flex items-center justify-center">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-slate-950" />
                </div>
                <span>Entrar no {group.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Information & Trust Footer */}
      <div className="w-full max-w-2xl mx-auto text-center relative z-10 pt-4 pb-8 border-t border-slate-800/80">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mb-4 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            100% Gratuito
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Sem Spam
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Alertas Instantâneos
          </span>
        </div>

        <button
          onClick={onBack}
          className="text-xs text-amber-400/80 hover:text-amber-300 hover:underline cursor-pointer"
        >
          ← Voltar para a página principal
        </button>

        <p className="text-[11px] text-slate-600 mt-4">
          © {new Date().getFullYear()} Cabra das Promos • Todos os 9 grupos são administrados oficialmente.
        </p>
      </div>
    </div>
  );
}
