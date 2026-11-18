import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Clock, ArrowRight, X, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_GROUP_URL } from '../constants';

interface FlashDeal {
  id: string;
  category: string;
  title: string;
  originalPrice: number;
  promoPrice: number;
  discountPercentage: number;
  badge: string;
  store: string;
  remainingUnits: number;
  initialMinutes: number;
}

const FLASH_DEALS: FlashDeal[] = [
  {
    id: 'deal-1',
    category: 'Ferramentas Elétricas',
    title: 'Kit Parafusadeira e Furadeira de Impacto 12V Bivolt + Maleta',
    originalPrice: 489.9,
    promoPrice: 179.9,
    discountPercentage: 63,
    badge: 'Menor Preço Histórico',
    store: 'Mercado Livre Oficial',
    remainingUnits: 6,
    initialMinutes: 18,
  },
  {
    id: 'deal-2',
    category: 'Ferramentas Manuais',
    title: 'Jogo de Soquetes e Catraca Aço Cromo Vanádio 46 Peças',
    originalPrice: 229.0,
    promoPrice: 69.9,
    discountPercentage: 69,
    badge: 'Cupom Aplicado',
    store: 'Loja Oficial Mecânico',
    remainingUnits: 4,
    initialMinutes: 14,
  },
  {
    id: 'deal-3',
    category: 'Medição & Precisão',
    title: 'Trena Laser Digital Profissional 40M com Nível Eletrônico',
    originalPrice: 189.9,
    promoPrice: 64.5,
    discountPercentage: 66,
    badge: 'Frete Grátis Full',
    store: 'Mercado Livre',
    remainingUnits: 9,
    initialMinutes: 22,
  },
];

interface FlashOfferFloatingCardProps {
  onAction?: () => void;
  className?: string;
}

export function FlashOfferFloatingCard({ onAction, className = '' }: FlashOfferFloatingCardProps) {
  const [currentDealIndex, setCurrentDealIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 35); // 14 min 35 sec
  const [isHovered, setIsHovered] = useState(false);

  const activeDeal = FLASH_DEALS[currentDealIndex];

  // Contagem regressiva realista de segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Quando expirar, renova para a próxima oferta
          setCurrentDealIndex((idx) => (idx + 1) % FLASH_DEALS.length);
          return 16 * 60 + 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotação suave entre as melhores ofertas a cada 10s se não estiver em hover
  useEffect(() => {
    if (isHovered || isMinimized) return;

    const rotation = setInterval(() => {
      setCurrentDealIndex((prev) => (prev + 1) % FLASH_DEALS.length);
    }, 11000);

    return () => clearInterval(rotation);
  }, [isHovered, isMinimized]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCtaClick = () => {
    if (onAction) {
      onAction();
    } else {
      window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id="floating-flash-offer-container"
      className={`fixed top-2.5 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] max-w-xl transition-all duration-300 pointer-events-auto ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          /* Pílula minimizada e discreta caso o usuário queira recolher */
          <motion.div
            key="minimized"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="flex items-center justify-between gap-3 px-4 py-2 rounded-full bg-slate-950/90 border border-amber-400/40 shadow-[0_8px_25px_rgba(245,158,11,0.25)] backdrop-blur-xl mx-auto w-fit"
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
              title="Expandir Oferta Relâmpago"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Oferta Relâmpago (-{activeDeal.discountPercentage}%)
              </span>
              <span className="font-mono text-slate-300 bg-black/40 px-1.5 py-0.5 rounded text-[11px]">
                {formattedTime}
              </span>
              <span className="text-[11px] text-amber-400/90 underline ml-1">Ver</span>
            </button>
          </motion.div>
        ) : (
          /* Card Flutuante Principal Expandido e Realçado */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: -24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative rounded-2xl p-3 sm:p-3.5 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-[#05080f]/95 border border-amber-400/35 shadow-[0_12px_40px_-10px_rgba(245,158,11,0.32)] backdrop-blur-xl ring-1 ring-white/10"
          >
            {/* Brilho superior âmbar refinado */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

            {/* Cabeçalho do Card Flutuante */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.07]">
              {/* Tag Oferta Relâmpago + Loja */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-[10.5px] sm:text-xs font-black tracking-wide text-amber-300 uppercase shadow-sm">
                  <Zap className="w-3 h-3 fill-amber-400 text-amber-400 animate-pulse" />
                  <span>Oferta Relâmpago</span>
                </span>

                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium hidden sm:inline-flex items-center gap-1">
                  • {activeDeal.store}
                </span>

                <span className="inline-flex items-center text-[10px] sm:text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  {activeDeal.badge}
                </span>
              </div>

              {/* Temporizador Regressivo + Botão Fechar */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-semibold">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{formattedTime}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Minimizar oferta relâmpago"
                  title="Minimizar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Corpo da Oferta: Dados do Produto + Preço + Ação */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Detalhes do Produto */}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="text-xs sm:text-sm font-bold text-white tracking-tight truncate leading-tight">
                    {activeDeal.title}
                  </p>
                </div>

                {/* Preços e Economia */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-400 line-through">
                    R$ {activeDeal.originalPrice.toFixed(2).replace('.', ',')}
                  </span>

                  <span className="text-base sm:text-lg font-black text-amber-300 tracking-tight">
                    R$ {activeDeal.promoPrice.toFixed(2).replace('.', ',')}
                  </span>

                  <span className="text-[11px] font-extrabold text-slate-950 bg-amber-400 px-1.5 py-0.5 rounded shadow-sm">
                    -{activeDeal.discountPercentage}% OFF
                  </span>

                  <span className="text-[11px] text-amber-200/80 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-ping" />
                    Restam {activeDeal.remainingUnits} unid.
                  </span>
                </div>
              </div>

              {/* Botão de Ação Imediata (Direto para o Grupo do WhatsApp) */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_0_18px_rgba(245,158,11,0.45)] hover:shadow-[0_0_24px_rgba(245,158,11,0.6)] cursor-pointer group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>Pegar no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Rodapé Sutil com Indicador de Postagem Recente no Grupo */}
            <div className="mt-2 pt-1.5 flex items-center justify-between text-[10.5px] text-slate-400 border-t border-white/[0.04]">
              <span className="flex items-center gap-1.5 text-emerald-400/90 font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Cupom testado e verificado hoje pela equipe
              </span>

              {/* Botão para alternar entre as 3 ofertas relâmpago */}
              <div className="flex items-center gap-1">
                {FLASH_DEALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentDealIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentDealIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Ver oferta ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
