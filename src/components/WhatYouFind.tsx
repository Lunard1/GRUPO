import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { CATEGORIES, WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatYouFind() {
  const [activeTab, setActiveTab] = useState(0);

  // Sample real-world message preview for the selected category
  const sampleMessages = [
    {
      title: 'Smart TV 55" 4K QLED Dolby Vision 120Hz',
      store: 'Amazon Brasil (Oficial)',
      tag: '🔥 Menor preço histórico',
      originalPrice: 'R$ 3.499',
      currentPrice: 'R$ 2.199',
      discount: '37% OFF',
      installment: 'em até 10x sem juros no cartão',
      note: 'Vendido e entregue pela Amazon oficial. Frete Prime grátis e entrega rápida.',
    },
    {
      title: 'Cupom R$ 60 OFF em compras acima de R$ 180',
      store: 'Mercado Livre Oficial',
      tag: '🎟️ Cupom Testado & Válido',
      originalPrice: '',
      currentPrice: 'CUPOM: CABRAVIP',
      discount: 'R$ 60 OFF',
      installment: 'Válido para produtos selecionados e full',
      note: 'Aplicado e validado pela nossa curadoria há poucos minutos.',
    },
    {
      title: 'Fone Bluetooth ANC com Cancelamento de Ruído Ativo',
      store: 'AliExpress Choice (Estoque Brasil)',
      tag: '💰 Achado Garimpado',
      originalPrice: 'R$ 299',
      currentPrice: 'R$ 149',
      discount: '50% OFF',
      installment: 'Sem taxa de importação adicional',
      note: 'Achado de alta durabilidade com avaliação média 4.9/5 estrelas.',
    },
    {
      title: 'Monitor Gamer 27" 165Hz Fast IPS 1ms',
      store: 'Kabum Oficial',
      tag: '🏷️ Alerta de Queda de Preço',
      originalPrice: 'R$ 1.399',
      currentPrice: 'R$ 899',
      discount: '35% OFF',
      installment: 'À vista no Pix com desconto ou 10x',
      note: 'Nosso radar pegou a alteração automática na madrugada.',
    },
  ];

  return (
    <section
      id="o-que-encontra"
      className="py-20 md:py-28 bg-[#070B14] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Radiant glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-4 tracking-wider uppercase">
            [ OPORTUNIDADES EM TEMPO REAL ]
          </div>
          <h2
            id="what-you-find-title"
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
          >
            O QUE VOCÊ ENCONTRA NO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              CABRA DAS PROMOS
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Apenas o que vale o seu dinheiro. Sem excesso de notificações, sem itens aleatórios e sem propagandas chatas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CATEGORIES.map((cat, index) => {
            const isSelected = activeTab === index;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#0B132B] border-amber-400/60 shadow-[0_15px_35px_rgba(245,158,11,0.15)] scale-[1.02]'
                    : 'bg-[#05080F]/90 border-slate-800/80 hover:border-amber-500/40 hover:bg-[#0B132B]/60 hover:shadow-lg'
                }`}
                id={`category-card-${index}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl filter drop-shadow">{cat.icon}</span>
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 group-hover:bg-amber-400/20 group-hover:text-amber-300'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 group-hover:text-slate-200">Ver alerta no WhatsApp</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Notification Mockup Preview */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl bg-[#0B132B]/85 backdrop-blur-xl border border-amber-400/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Cabra das Promos • Alerta Oficial
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  </h4>
                  <p className="text-[11px] text-slate-400">Exemplo real do formato enviado no grupo</p>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Agora</span>
            </div>

            {/* Message Bubble content */}
            <div className="bg-[#070B14] rounded-2xl p-5 border border-slate-800/90 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {sampleMessages[activeTab].tag}
                </span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {sampleMessages[activeTab].store}
                </span>
              </div>

              <div>
                <p className="text-base font-bold text-white mb-2 leading-snug">
                  {sampleMessages[activeTab].title}
                </p>
                <div className="flex items-baseline gap-3">
                  {sampleMessages[activeTab].originalPrice && (
                    <span className="text-xs text-slate-500 line-through">
                      {sampleMessages[activeTab].originalPrice}
                    </span>
                  )}
                  <span className="text-2xl font-black text-amber-400">
                    {sampleMessages[activeTab].currentPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/15 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                    {sampleMessages[activeTab].discount}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {sampleMessages[activeTab].installment}
                </p>
              </div>

              <div className="pt-2.5 text-xs text-slate-400 border-t border-slate-800">
                💡 <em>{sampleMessages[activeTab].note}</em>
              </div>
            </div>

            {/* Pulsing button on the notification mockup */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Mensagens curadas, objetivas e direto ao ponto.
              </span>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg animate-whatsapp-pulse shimmer-effect"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                <span>Receber alertas no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
