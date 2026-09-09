import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CABRA_IMAGES } from '../assets';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppSection() {
  const perks = [
    'Acesso 100% imediato e gratuito',
    'Sem cadastros, formulários ou cartões',
    'Curadoria diária ativa feita pelo Cabra',
    'Você decide livremente se compra ou passa',
  ];

  return (
    <section
      id="secao-whatsapp"
      className="py-20 md:py-28 bg-[#05080F] relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Radiant golden backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-[32px] bg-gradient-to-br from-[#0B132B]/90 via-[#070B14]/90 to-[#05080F]/90 border border-amber-400/30 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-xl">
          
          {/* Top highlight glow inside container */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Mascot visual with animated bobbing & glowing halo */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[360px] animate-mascot-float"
              >
                {/* Golden ambient halo */}
                <div className="absolute -inset-3 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />

                <div className="aspect-square rounded-3xl bg-[#070B14] p-2.5 border border-amber-400/40 overflow-hidden shadow-2xl relative group">
                  <img
                    src={CABRA_IMAGES.pixarCircle}
                    alt="Mascote 3D Cabra das Promos Disney Pixar com boné dourado, chifres reluzentes e piscadela"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating badge inside */}
                  <div className="absolute top-4 left-4 bg-[#070B14]/85 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Radar WhatsApp</span>
                  </div>
                </div>
                
                {/* Micro floating indicator */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0B132B] border border-amber-400/50 px-4 py-1.5 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold text-white">Comunidade ativa 24 horas</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Conversion Copy & Pulsing CTA */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-1 lg:order-2">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 w-fit mx-auto lg:mx-0 mb-4 tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>[ GARIMPO DIRETO NO SEU CELULAR ]</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Quer deixar o Cabra{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  garimpar por você?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 mb-8 font-normal leading-relaxed">
                Você não precisa passar horas pesquisando preço, comparando fretes ou conferindo cupons. Entre no grupo oficial do WhatsApp e receba tudo mastigado.
              </p>

              {/* Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 text-left">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-amber-400 stroke-[3]" />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* PULSING CTA BUTTON */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-section-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-extrabold text-base sm:text-lg text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 animate-whatsapp-pulse shimmer-effect shadow-xl"
                >
                  <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                  <span>Entrar no grupo do WhatsApp agora</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Sem mensalidade, sem taxa de entrada. 100% gratuito.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
