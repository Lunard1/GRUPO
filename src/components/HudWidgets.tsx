import { motion } from 'motion/react';
import { Sparkles, TrendingDown, ShieldCheck, Zap, Activity, ArrowUpRight } from 'lucide-react';

export function HudWidgets() {
  return (
    <>
      {/* 1. Top Right Floating Glass Card: Curadoria VIP & Sparkline */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden xl:flex absolute -top-4 -right-12 z-30 flex-col gap-2 p-3.5 rounded-2xl bg-[#0B132B]/85 backdrop-blur-xl border border-amber-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] w-56 hover:border-amber-400/60 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Curadoria Diária
          </span>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
            Ao vivo
          </span>
        </div>
        
        <div>
          <span className="text-xl font-black text-white tracking-tight">Até 70% OFF</span>
          <p className="text-[11px] text-slate-300 mt-0.5">Em ofertas garimpadas e testadas</p>
        </div>

        {/* Mini SVG Sparkline */}
        <div className="pt-2 border-t border-slate-800">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>Volume de achados</span>
            <span className="text-amber-400 font-bold">+140 hoje</span>
          </div>
          <svg className="w-full h-7 overflow-visible" viewBox="0 0 100 24" fill="none">
            <path
              d="M0 20 Q 20 8, 40 14 T 75 4 T 100 10"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0 20 Q 20 8, 40 14 T 75 4 T 100 10 L 100 24 L 0 24 Z"
              fill="url(#sparkline-grad)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* 2. Middle Right Floating Glass Card: Circular Score Gauge (Inspired by the 93% gauge in reference) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="hidden xl:flex absolute top-1/2 -right-16 -translate-y-1/2 z-30 flex-col gap-2 p-3.5 rounded-2xl bg-[#0B132B]/85 backdrop-blur-xl border border-amber-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] w-52 hover:border-amber-400/60 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-300">Confiabilidade</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </div>

        <div className="flex items-center gap-3 py-1">
          {/* Circular Progress Gauge */}
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-amber-400"
                strokeDasharray="98, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-xs font-black text-white">98%</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">Lojas Oficiais</span>
            <span className="text-[10px] text-slate-400 leading-tight">Amazon, M. Livre, Magalu</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-800 text-center">
          <div className="bg-slate-900/60 rounded-lg p-1">
            <span className="block text-[11px] font-bold text-amber-300">100%</span>
            <span className="text-[9px] text-slate-400">Gratuito</span>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-1">
            <span className="block text-[11px] font-bold text-emerald-400">Zero</span>
            <span className="text-[9px] text-slate-400">Spam</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Lower Right Floating Metric: Realtime Speed / WhatsApp Latency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden lg:flex absolute -bottom-6 right-4 z-30 items-center gap-3 p-3 rounded-xl bg-[#0B132B]/90 backdrop-blur-xl border border-amber-400/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white">Entrega no WhatsApp</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[11px] text-slate-400">Tempo de disparo: Instantâneo</span>
        </div>
      </motion.div>
    </>
  );
}
