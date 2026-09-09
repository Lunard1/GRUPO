import { motion } from 'motion/react';
import { Search, Send, CheckCircle, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HowItWorks() {
  const stepIcons = [Search, Send, CheckCircle];

  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28 bg-[#05080F] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Architectural Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-4 tracking-wider uppercase">
            [ FLUXO EM 3 PASSOS ]
          </div>
          
          <h2
            id="how-it-works-title"
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5"
          >
            UMA CURADORIA COMPLETA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              DIRETO NO SEU WHATSAPP.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Sem ruído, sem enrolação e sem notificações desnecessárias. Você recebe apenas as oportunidades que realmente compensam.
          </p>
        </div>

        {/* 3 Step Cards (Bento style with glowing borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative rounded-3xl bg-[#0B132B]/60 backdrop-blur-xl border border-slate-800/80 hover:border-amber-400/40 p-8 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(245,158,11,0.08)] group flex flex-col justify-between"
                id={`how-it-works-step-${item.step}`}
              >
                {/* Top glow border hint */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400/30 group-hover:via-amber-400/70 to-transparent transition-all" />

                <div>
                  {/* Step Number & Icon Container */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-black text-slate-800 group-hover:text-amber-400/40 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-amber-300/80">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pulsing CTA in How It Works */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 animate-whatsapp-pulse shimmer-effect shadow-xl"
          >
            <WhatsAppIcon className="w-5 h-5 text-slate-950" />
            <span>Quero entrar no grupo e economizar</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
          <p className="text-xs text-slate-400 mt-2.5">
            Entrada 100% gratuita • Sem spam
          </p>
        </div>

      </div>
    </section>
  );
}
