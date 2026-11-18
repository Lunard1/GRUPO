import { useState } from 'react';
import { ArrowUpRight, Pause, Play, Wrench } from 'lucide-react';
import {
  MERCADO_LIVRE_CAROUSEL_DEALS,
  WHATSAPP_GROUP_URL,
  type MercadoLivreDeal,
} from '../constants';
import { MercadoLivreLogo } from './MercadoLivreLogo';

function formatBRL(value: number): string {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

export function MercadoLivreCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Duplicate list once for seamless -50% infinite loop
  const trackItems: { deal: MercadoLivreDeal; loopKey: string }[] = [
    ...MERCADO_LIVRE_CAROUSEL_DEALS.map((deal) => ({ deal, loopKey: `a-${deal.id}` })),
    ...MERCADO_LIVRE_CAROUSEL_DEALS.map((deal) => ({ deal, loopKey: `b-${deal.id}` })),
  ];

  return (
    <section
      aria-label="Carrossel rápido de ofertas exploradas no Mercado Livre"
      className="py-12 sm:py-16 border-b border-white/[0.07] bg-[#0B0B0E] overflow-hidden"
    >
      {/* Editorial Header Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#141419] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
              <MercadoLivreLogo variant="gold" showText={false} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-medium text-amber-400 tracking-wide">
                Garimpo no Mercado Livre · Ofertas exploradas recentemente
              </p>
              <h2
                className="font-display font-bold text-white tracking-tight leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.4rem)' }}
              >
                Produtos que já passaram no radar do Cabra
              </h2>
            </div>
          </div>

          {/* Functional Controls: Pause/Play + Direct Group Entry */}
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-pressed={isPaused}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#141419] hover:bg-zinc-800 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Retomar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>Pausar</span>
                </>
              )}
            </button>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-400/12 hover:bg-amber-400/20 border border-amber-400/35 text-xs font-semibold text-amber-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Ver no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Full-Width Brisk Marquee Stream (Pauses on Hover) */}
      <div className="ml-marquee-wrapper ml-edge-mask w-full overflow-hidden">
        <div
          className={`flex gap-4 sm:gap-5 w-max py-1 animate-ml-marquee ${
            isPaused ? 'ml-marquee-paused' : ''
          }`}
        >
          {trackItems.map(({ deal, loopKey }) => {
            const isImgFailed = failedImages[deal.id];
            const saved = deal.oldPrice - deal.dealPrice;

            return (
              <a
                key={loopKey}
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[248px] sm:w-[276px] shrink-0 rounded-xl overflow-hidden bg-[#121216] border border-white/[0.08] hover:border-amber-400/75 transition-colors duration-150 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {/* Crisp 4:3 Studio Product Photo */}
                <div className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden">
                  {!isImgFailed ? (
                    <img
                      src={deal.image}
                      alt={deal.imageAlt}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [deal.id]: true }))
                      }
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-4 text-center">
                      <Wrench className="w-7 h-7 text-amber-400/70 mb-2" />
                      <span className="text-xs text-zinc-400">{deal.brand}</span>
                    </div>
                  )}

                  {/* Measured Bottom Scrim with Brand + Discount */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between px-3.5 pb-2.5">
                    <span className="text-xs font-medium text-zinc-200">
                      {deal.brand}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-400 tabular-nums">
                      -{deal.discountPercent}% OFF
                    </span>
                  </div>
                </div>

                {/* Clean Product Info & Pricing */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-zinc-400 mb-1">
                      {deal.shippingLabel}
                    </p>
                    <h3 className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2 mb-3 group-hover:text-amber-300 transition-colors">
                      {deal.title}
                    </h3>
                  </div>

                  <div className="pt-2.5 border-t border-white/[0.06]">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-base sm:text-lg font-bold text-white tabular-nums">
                          {formatBRL(deal.dealPrice)}
                        </span>
                        <span className="font-mono text-[11px] line-through text-zinc-500 tabular-nums">
                          {formatBRL(deal.oldPrice)}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-emerald-400 tabular-nums shrink-0">
                        -{formatBRL(saved)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-1 text-[11px]">
                      <span className="text-zinc-400 truncate">{deal.installments}</span>
                      <span className="text-amber-400/90 font-medium inline-flex items-center gap-0.5 shrink-0 opacity-80 group-hover:opacity-100">
                        Grupo
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Quiet Helper Line */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-5 flex items-center justify-between text-xs text-zinc-500">
        <span>Passe o mouse ou toque em pausar para conferir qualquer ferramenta</span>
        <span className="hidden sm:inline font-mono tabular-nums text-zinc-400">
          {MERCADO_LIVRE_CAROUSEL_DEALS.length} ofertas verificadas em rotação
        </span>
      </div>
    </section>
  );
}
