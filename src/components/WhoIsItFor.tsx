import { motion } from 'motion/react';
import { Clock, ShieldCheck, BadgePercent, Sparkles, Check } from 'lucide-react';
import { CABRA_IMAGES } from '../assets';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhoIsItFor() {
  const pillars = [
    {
      title: 'Economize tempo',
      desc: 'Esqueça ficar abrindo dezenas de abas de lojas, testando cupom expirado ou monitorando preços o dia inteiro. O Cabra faz esse trabalho duro para você.',
      icon: Clock,
      badge: 'Menos estresse',
    },
    {
      title: 'Descontos validados',
      desc: 'Cada oportunidade é checada para garantir que é preço baixo de verdade, e não aquela famosa "metade do dobro". Só entra o que realmente vale a pena.',
      icon: BadgePercent,
      badge: 'Sem pegadinhas',
    },
    {
      title: 'Lojas 100% confiáveis',
      desc: 'Apenas grandes redes e marketplaces consolidados como Amazon, Mercado Livre, Magalu e outras gigantes oficiais. Segurança em primeiro lugar.',
      icon: ShieldCheck,
      badge: 'Compra segura',
    },
  ];

  return (
    <section id="para-quem-e" className="py-20 md:py-28 bg-[#070B14] relative overflow-hidden border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Architectural Headline (Exact styling from reference) */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-4 tracking-wider uppercase">
            [ PARA QUEM É ]
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            CURADORIA INTELIGENTE FEITA PARA QUEM QUER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
              ECONOMIZAR, NÃO PERDER TEMPO.
            </span>
          </h2>
        </div>

        {/* Composition: Spotlight circular Cabra portrait in center + 3 Benefit Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Center: Circular 3D Mascot Spotlight with rotating golden orbital ring */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-84 aspect-square">
              
              {/* Outer Golden Aura Ring with breathing pulse */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/30 to-transparent blur-2xl animate-mascot-aura pointer-events-none" />
              
              {/* Rotating orbital dashed ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/40 animate-radar pointer-events-none" />

              {/* Main Circular Container */}
              <div className="w-full h-full rounded-full p-2 bg-gradient-to-b from-amber-400/50 via-amber-500/20 to-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-400/40 overflow-hidden relative group">
                <img
                  src={CABRA_IMAGES.pixarCircle}
                  alt="Cabra das Promos 3D Pixar Emblem"
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating pill badge on the circle */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#070B14]/90 backdrop-blur-md border border-amber-400/40 text-[11px] font-extrabold text-amber-300 shadow-xl whitespace-nowrap flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Garimpeiro Oficial</span>
                </div>
              </div>

              {/* Floating micro card */}
              <div className="absolute -top-3 -right-4 bg-[#0B132B]/90 backdrop-blur-md border border-amber-400/30 p-2.5 rounded-xl shadow-lg flex items-center gap-2 hidden sm:flex">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-white">Comunidade Ativa</span>
              </div>

            </div>
          </div>

          {/* Right: 3 Pillars with refined cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#0B132B]/60 backdrop-blur-md border border-slate-800/80 hover:border-amber-400/40 hover:bg-[#0B132B]/85 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 group-hover:bg-amber-400/15 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                          {pillar.badge}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
