import { motion } from 'motion/react';
import { Sparkles, Coins, Tag, Percent, Star, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';
import { CABRA_IMAGES } from '../assets';
import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function MascotStory() {
  const brandPillars = [
    {
      icon: Coins,
      title: 'Garimpo Inteligente',
      desc: 'Pesquisa ativa de preços reais, evitando falsas promoções.',
    },
    {
      icon: Tag,
      title: 'Cupons Validados',
      desc: 'Códigos testados antes do envio para poupar o seu tempo.',
    },
    {
      icon: Percent,
      title: 'Descontos Notáveis',
      desc: 'Apenas quedas de preço expressivas que compensam o clique.',
    },
    {
      icon: ShieldCheck,
      title: 'Lojas Consolidadas',
      desc: 'Apenas varejistas oficiais com entrega garantida e boa reputação.',
    },
  ];

  return (
    <section
      id="o-cabra"
      className="py-20 md:py-28 bg-[#05080F] relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute left-10 bottom-10 w-[350px] h-[350px] bg-amber-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-3 tracking-wider uppercase">
            [ QUEM É O CABRA ]
          </div>
          <h2
            id="mascot-story-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            QUEM ESTÁ POR TRÁS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              DOS MELHORES ACHADOS?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mascot 3D Visual with Pixar Character and Floating Coins */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[440px] animate-mascot-float"
              id="mascot-section-visual"
            >
              {/* Outer decorative glowing aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-600/10 blur-xl rounded-[32px] pointer-events-none animate-mascot-aura" />

              <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-amber-400/40 via-slate-800/40 to-slate-900 border border-amber-400/30 shadow-2xl">
                <div className="relative rounded-[22px] bg-[#070B14] overflow-hidden">
                  
                  {/* Mascot Image (Pixar 3D) */}
                  <img
                    src={CABRA_IMAGES.pixarHero}
                    alt="O Cabra das Promos 3D Pixar renderizado em alta definição com boné e chifres dourados"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-square object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    id="mascot-story-image"
                  />

                  {/* Discreet floating badges */}
                  <div className="absolute top-4 right-4 bg-[#0B132B]/85 backdrop-blur-md border border-amber-400/30 rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-amber-300">Garimpeiro Oficial</span>
                  </div>

                  {/* Bottom Mascot Card Caption */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/90 to-transparent p-5 pt-8">
                    <p className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      "Promoção boa de verdade não precisa de gritaria."
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Filosofia do Cabra das Promos
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Animated 3D Coin (Top Left) */}
              <div className="absolute -top-4 -left-4 z-20 animate-coin-1 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[2px] shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-slate-950 font-black" />
                  </div>
                </div>
              </div>

              {/* Floating Badge (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 z-20 animate-coin-2 pointer-events-none hidden sm:flex items-center gap-2 bg-[#0B132B] border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full shadow-xl text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Economia Garantida</span>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              O amigo que encontra as melhores oportunidades para você.
            </h3>

            <p
              id="mascot-story-text"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal"
            >
              O Cabra das Promos nasceu com uma missão clara: <strong>garimpar boas oportunidades todos os dias e colocar você diante do que realmente vale o clique e o seu dinheiro.</strong> Sem pegadinha, sem links suspeitos e sem promessas vazias.
            </p>

            {/* 4 Brand Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {brandPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0B132B]/70 border border-slate-800/80 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Pulsing CTA */}
            <div>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="mascot-story-cta"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all animate-whatsapp-pulse shimmer-effect shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                <span>Entrar no grupo do Cabra</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
