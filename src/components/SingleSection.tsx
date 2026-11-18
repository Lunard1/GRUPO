import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Check,
  CheckCheck,
  Copy,
  Minus,
  Plus,
  Wrench,
} from 'lucide-react';
import {
  FAQ_LIST,
  FEATURED_TOOL_DEALS,
  HOW_IT_WORKS_STEPS,
  MEMBER_TESTIMONIALS,
  WHATSAPP_GROUP_URL,
  type ToolDealItem,
} from '../constants';
import { CABRA_IMAGES } from '../assets';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AnimatedMascot } from './AnimatedMascot';
import { MemberCounter } from './MemberCounter';
import { MercadoLivreCarousel } from './MercadoLivreCarousel';

type CategoryFilter = 'todos' | 'eletricas' | 'manuais' | 'kits';

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'todos', label: 'Todos os achados' },
  { id: 'eletricas', label: 'Elétricas' },
  { id: 'manuais', label: 'Manuais' },
  { id: 'kits', label: 'Kits' },
];

function formatBRL(value: number): string {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

export function SingleSection() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isTargetHighlighted, setIsTargetHighlighted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [selectedDeal, setSelectedDeal] = useState<ToolDealItem>(FEATURED_TOOL_DEALS[0]);
  const [copiedCouponId, setCopiedCouponId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredDeals =
    activeCategory === 'todos'
      ? FEATURED_TOOL_DEALS
      : FEATURED_TOOL_DEALS.filter((deal) => deal.category === activeCategory);

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    const nextList =
      category === 'todos'
        ? FEATURED_TOOL_DEALS
        : FEATURED_TOOL_DEALS.filter((deal) => deal.category === category);
    if (nextList.length > 0 && !nextList.some((d) => d.id === selectedDeal.id)) {
      setSelectedDeal(nextList[0]);
    }
  };

  const handleCopyCoupon = (deal: ToolDealItem) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(deal.couponCode).catch(() => {});
    }
    setCopiedCouponId(deal.id);
    setTimeout(() => {
      setCopiedCouponId((prev) => (prev === deal.id ? null : prev));
    }, 2000);
  };

  const scrollToYellowButton = (smooth = true) => {
    if (!buttonRef.current) return;

    try {
      buttonRef.current.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'center',
        inline: 'nearest',
      });
    } catch {
      const rect = buttonRef.current.getBoundingClientRect();
      const currentY = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = currentY + rect.top - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: smooth ? 'smooth' : 'auto',
      });
    }

    setIsTargetHighlighted(true);
    setTimeout(() => {
      setIsTargetHighlighted(false);
    }, 2200);
  };

  useEffect(() => {
    // Inicia no topo e faz a transição suave direto para o botão amarelo de entrada
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scrollTimer = setTimeout(() => {
      scrollToYellowButton(!prefersReducedMotion);
    }, 680);

    return () => {
      clearTimeout(scrollTimer);
    };
  }, []);

  const savings = selectedDeal.oldPrice - selectedDeal.dealPrice;

  return (
    <div id="inicio" className="min-h-screen w-full bg-[#09090B] text-zinc-100 relative overflow-x-hidden">
      {/* =================================================================== */}
      {/* TOP BAR CONTRACT: 3 Zones Separated by gap-8, Strictly Single-Line  */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-40 h-16 w-full bg-[#09090B]/88 backdrop-blur-md border-b border-white/[0.07]">
        <div className="max-w-[1200px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 md:gap-8">
          {/* Zone 1: Single Clean Brand Wordmark */}
          <a
            href="#inicio"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          >
            Cabra das Promos
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
          >
            <a
              href="#achados"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/70"
            >
              Achados
            </a>
            <a
              href="#como-funciona"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/70"
            >
              Como funciona
            </a>
            <a
              href="#quem-usa"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/70"
            >
              Quem usa
            </a>
            <a
              href="#duvidas"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/70"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action Link */}
          <div className="flex items-center shrink-0">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              Quero entrar no grupo
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ================================================================= */}
        {/* SECTION 1: HERO ARCHITECTURAL STAGE                               */}
        {/* ================================================================= */}
        <section
          id="cabra-whatsapp-section"
          className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 px-4 sm:px-6 lg:px-8"
        >
          {/* Focused Overhead Tungsten Backlight */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[520px] bg-radial from-amber-500/14 via-amber-600/5 to-transparent blur-3xl pointer-events-none"
          />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column (Desktop) / Second (Mobile): Value Proposition + Pulsing Yellow CTA */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                {/* Clean Unboxed Kicker */}
                <p
                  id="brand-kicker"
                  className="text-xs sm:text-[13px] font-semibold text-amber-400 tracking-wide mb-4"
                >
                  CURADORIA DE FERRAMENTAS PROFISSIONAIS • MERCADO LIVRE, AMAZON &amp; DISTRIBUIDORAS
                </p>

                {/* Dominant Display Headline */}
                <h1
                  id="main-title"
                  className="font-display font-bold text-white tracking-tight leading-[0.95] text-balance mb-5"
                  style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)' }}
                >
                  Ferramenta de marca pelo preço que a loja{' '}
                  <span className="text-amber-400">não quer que você veja.</span>
                </h1>

                {/* Concrete Value Subheadline */}
                <p
                  id="main-description"
                  className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8"
                >
                  Sabe quando a DeWalt, Makita ou Gedore baixa o preço de verdade e ninguém fica sabendo? A gente monitora isso 24h. Sem cupom falso, sem pegadinha. Quando o valor cai no distribuidor, o link direto apita no seu WhatsApp antes de acabar.
                </p>

                {/* PRIMARY PULSING YELLOW WHATSAPP CTA */}
                <div className="w-full sm:w-auto flex flex-col items-center lg:items-start gap-3.5 px-1 sm:px-0">
                  <a
                    ref={buttonRef}
                    href={WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="enter-whatsapp-button"
                    className={`w-full max-w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2 sm:gap-3.5 px-4 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-[13px] min-[390px]:text-sm sm:text-base lg:text-lg tracking-tight text-center leading-tight text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] transition-all duration-150 animate-whatsapp-pulse shimmer-effect group cursor-pointer relative whitespace-normal sm:whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 ${
                      isTargetHighlighted
                        ? 'ring-4 ring-amber-200 shadow-[0_0_52px_rgba(245,158,11,0.75)]'
                        : ''
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950 shrink-0 transition-transform duration-150 group-hover:scale-110" />
                    <span>ENTRAR NO GRUPO DO WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
                  </a>

                  {/* Unboxed Reassurance Line */}
                  <p
                    id="whatsapp-subtext"
                    className="text-xs sm:text-sm text-zinc-400"
                  >
                    Entrada gratuita • Grupo fechado sem spam • Saia quando quiser
                  </p>
                </div>

                {/* Claim-Adjacent Member Counter */}
                <div className="w-full max-w-xl mt-7">
                  <MemberCounter
                    variant="banner"
                    initialCount={2897}
                    maxCapacity={3000}
                    showCountdown={true}
                  />
                </div>
              </div>

              {/* Right Column (Desktop) / First (Mobile): Bespoke Animated Mascot Frame */}
              <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 py-4 sm:py-6">
                <AnimatedMascot
                  variant="hero"
                  className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px]"
                />
              </div>
            </div>

            {/* Full-Width 4-Column Architectural Proof Strip Below Hero Split */}
            <div className="mt-14 sm:mt-16 pt-8 pb-8 border-y border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                  Até 58%
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Desconto médio em queimas de estoque verificadas
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums tracking-tight">
                  2.897+
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Profissionais e hobistas ativos no grupo
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                  14/dia
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Média de ofertas auditadas manualmente
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums tracking-tight">
                  100% Oficial
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Apenas grandes lojas com nota fiscal e garantia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* BRISK MERCADO LIVRE PRODUCT CAROUSEL                              */}
        {/* ================================================================= */}
        <MercadoLivreCarousel />

        {/* ================================================================= */}
        {/* SECTION 2: INTERACTIVE TOOL DEALS SHOWCASE + LIVE WHATSAPP PREVIEW*/}
        {/* ================================================================= */}
        <section id="achados" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header + Working Segmented Filter */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-medium text-amber-400 mb-2.5">
                  Vitrine real de economia · Últimas 48 horas
                </p>
                <h2
                  className="font-display font-bold text-white tracking-tight leading-[1.02] text-balance"
                  style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
                >
                  O que cai lá dentro todos os dias
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 mt-2.5 max-w-xl">
                  Clique em qualquer oferta abaixo para ver exatamente como o alerta chega formatado no seu WhatsApp.
                </p>
              </div>

              {/* Interactive Category Filter Control */}
              <div
                role="tablist"
                aria-label="Filtrar achados por categoria"
                className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#121216] border border-white/[0.08] self-start md:self-auto overflow-x-auto max-w-full"
              >
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => handleCategoryChange(tab.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        isActive
                          ? 'bg-amber-400 text-zinc-950'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 12-Col Asymmetric Stage: Tool Drop Cards (Left 7) + Interactive WhatsApp Preview (Right 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left 7 cols: Tool Deal Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredDeals.map((deal) => {
                  const isSelected = selectedDeal.id === deal.id;
                  const savedValue = deal.oldPrice - deal.dealPrice;
                  const isImgFailed = failedImages[deal.id];

                  return (
                    <button
                      key={deal.id}
                      type="button"
                      onClick={() => setSelectedDeal(deal)}
                      className={`text-left rounded-2xl overflow-hidden bg-[#121216] border transition-all duration-150 flex flex-col justify-between cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        isSelected
                          ? 'border-amber-400/80 ring-1 ring-amber-400/30'
                          : 'border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {/* Studio Tool Photo */}
                      <div className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden">
                        {!isImgFailed ? (
                          <img
                            src={deal.image}
                            alt={deal.imageAlt}
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setFailedImages((prev) => ({ ...prev, [deal.id]: true }))
                            }
                            className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-4 text-center">
                            <Wrench className="w-8 h-8 text-amber-400/70 mb-2" />
                            <span className="text-xs text-zinc-400">{deal.shortTitle}</span>
                          </div>
                        )}

                        {/* Measured Bottom Contrast Scrim + Crisp Mono Discount */}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-end justify-between px-4 pb-3">
                          <span className="text-xs text-zinc-300 font-medium">
                            {deal.categoryLabel}
                          </span>
                          <span className="font-mono text-sm font-bold text-amber-400 tabular-nums">
                            -{deal.discountPercent}%
                          </span>
                        </div>
                      </div>

                      {/* Clean Card Content (Zero Pill Sandwiches) */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-zinc-400 mb-1.5">
                            <span>{deal.store}</span>
                            <span aria-hidden="true"> · </span>
                            <span className="font-mono tabular-nums">{deal.postedAgo}</span>
                          </p>
                          <h3 className="text-sm sm:text-[15px] font-semibold text-white leading-snug line-clamp-2 mb-4">
                            {deal.title}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-white/[0.06] flex items-end justify-between gap-2">
                          <div>
                            <span className="block font-mono text-xs line-through text-zinc-500 tabular-nums">
                              {formatBRL(deal.oldPrice)}
                            </span>
                            <span className="block font-mono text-xl font-bold text-white tabular-nums leading-tight">
                              {formatBRL(deal.dealPrice)}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-semibold text-emerald-400 tabular-nums whitespace-nowrap">
                            -{formatBRL(savedValue)}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right 5 cols: Interactive Authentic WhatsApp Alert Preview */}
              <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden bg-[#0E1418] border border-white/[0.09]">
                {/* Authentic WhatsApp Dark Group Header */}
                <div className="px-4 py-3.5 bg-[#161F25] border-b border-white/[0.07] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={CABRA_IMAGES.officialLogo}
                      alt="Cabra das Promos"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-amber-400/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        Cabra das Promos · Ferramentas
                      </p>
                      <p className="text-xs text-zinc-400 truncate">
                        Somente admins enviam • 2.897 participantes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Canvas */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between gap-4 bg-[#0B1115]">
                  <div>
                    <p className="text-center text-[11px] font-mono text-zinc-500 mb-4">
                      HOJE · PRÉVIA REAL DO ALERTA NO GRUPO
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedDeal.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="rounded-xl rounded-tl-sm bg-[#18232A] border border-white/[0.06] p-3.5"
                      >
                        {/* Sender Name */}
                        <p className="text-xs font-semibold text-amber-400 mb-2">
                          Cabra das Promos (Admin)
                        </p>

                        {/* Message Thumbnail */}
                        <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900 mb-3">
                          {!failedImages[selectedDeal.id] ? (
                            <img
                              src={selectedDeal.image}
                              alt={selectedDeal.imageAlt}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-center"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                              <Wrench className="w-8 h-8 text-amber-400/60" />
                            </div>
                          )}
                        </div>

                        {/* Alert Copy */}
                        <p className="text-sm font-bold text-white leading-snug mb-2">
                          {selectedDeal.title}
                        </p>

                        <div className="font-mono text-xs space-y-1 mb-3 tabular-nums">
                          <p className="text-zinc-400">
                            De:{' '}
                            <span className="line-through text-zinc-500">
                              {formatBRL(selectedDeal.oldPrice)}
                            </span>
                          </p>
                          <p className="text-amber-400 font-bold text-base">
                            Por: {formatBRL(selectedDeal.dealPrice)}{' '}
                            <span className="text-emerald-400 text-xs font-semibold">
                              (-{selectedDeal.discountPercent}% · Economia de {formatBRL(savings)})
                            </span>
                          </p>
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                          {selectedDeal.whatsappNote}
                        </p>

                        {/* Interactive Coupon Copy Control */}
                        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#0F171C] border border-white/[0.08] mb-2.5">
                          <div className="min-w-0">
                            <span className="block text-[10px] text-zinc-400">
                              Cupom verificado
                            </span>
                            <span className="font-mono text-sm font-bold text-amber-300 tracking-wider">
                              {selectedDeal.couponCode}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyCoupon(selectedDeal)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.07] hover:bg-white/[0.14] text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                          >
                            {copiedCouponId === selectedDeal.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-300">Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-zinc-300" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Message Timestamp + Read Ticks */}
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                          <span>{selectedDeal.stockNote}</span>
                          <span className="inline-flex items-center gap-1 font-mono tabular-nums shrink-0">
                            {selectedDeal.postedAt}
                            <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Direct Action Footer Inside Preview */}
                  <div className="pt-3 border-t border-white/[0.07]">
                    <a
                      href={WHATSAPP_GROUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.99] text-zinc-950 font-bold text-xs min-[390px]:text-sm text-center leading-tight transition-all duration-150 cursor-pointer whitespace-normal sm:whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-zinc-950 shrink-0" />
                      <span>Quero receber esses alertas grátis</span>
                      <ArrowRight className="w-4 h-4 text-zinc-950 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 3: EDITORIAL MECHANISM + ATTRIBUTABLE MEMBER PROOF        */}
        {/* ================================================================= */}
        <section
          id="como-funciona"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.07]"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Asymmetric Editorial Split: Mechanism */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
              <div className="lg:col-span-5">
                <p className="text-xs sm:text-sm font-medium text-amber-400 mb-3">
                  Filtro anti-enganação · Curadoria diária
                </p>
                <h2
                  className="font-display font-bold text-white tracking-tight leading-[0.98] text-balance mb-4"
                  style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
                >
                  Sem oferta falsa. Só preço de chão de fábrica.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-7">
                  A maioria dos grupos entope seu celular com link genérico e desconto maquiado. No Cabra das Promos, cada ferramenta passa por conferência de histórico de preço e teste real de cupom antes do disparo.
                </p>

                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl border border-amber-400/50 hover:border-amber-400 bg-amber-400/10 hover:bg-amber-400/15 text-amber-300 font-semibold text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <span>Entrar no grupo gratuito</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>

              {/* Clean Hairline-Divided Numbered Steps */}
              <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {HOW_IT_WORKS_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
                  >
                    <div className="sm:col-span-2">
                      <span className="font-mono text-lg font-bold text-amber-400 tabular-nums">
                        {item.step}.
                      </span>
                    </div>
                    <div className="sm:col-span-10">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-zinc-400">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attributable Member Proof Strip */}
            <div id="quem-usa">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-amber-400 mb-2">
                    Relatos de quem já economizou no grupo
                  </p>
                  <h2
                    className="font-display font-bold text-white tracking-tight leading-tight text-balance"
                    style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
                  >
                    Quem trabalha com ferramenta reconhece preço real
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-xs">
                  Economia comprovada em compras diretas feitas através dos alertas do grupo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {MEMBER_TESTIMONIALS.map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="rounded-2xl p-6 sm:p-7 bg-[#121216] border border-white/[0.08] flex flex-col justify-between gap-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono pb-4 mb-5 border-b border-white/[0.07]">
                        <span className="text-emerald-400 font-semibold tabular-nums">
                          {testimonial.savedAmount}
                        </span>
                        <span className="text-zinc-400 truncate">
                          {testimonial.itemPurchased}
                        </span>
                      </div>

                      <p className="text-sm text-zinc-200 leading-relaxed">
                        “{testimonial.quote}”
                      </p>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {testimonial.role} · {testimonial.city}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 4: OBJECTION-KILLING FAQ + FINAL CONVERSION STAGE         */}
        {/* ================================================================= */}
        <section
          id="duvidas"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.07]"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Interactive FAQ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm font-medium text-amber-400 mb-2.5">
                  Perguntas frequentes
                </p>
                <h2
                  className="font-display font-bold text-white tracking-tight leading-[1.02] text-balance mb-3"
                  style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.85rem)' }}
                >
                  Sem letra miúda. Tudo transparente.
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Respostas diretas sobre como os grupos funcionam e por que o acesso é totalmente gratuito.
                </p>
              </div>

              <div className="lg:col-span-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {FAQ_LIST.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="py-5">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md py-1"
                      >
                        <span className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {faq.question}
                        </span>
                        <span className="text-zinc-400 group-hover:text-amber-400 shrink-0 transition-colors">
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-zinc-400 leading-relaxed pt-3 pr-8">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FINAL CONVERSION STAGE */}
            <div className="relative rounded-2xl px-5 py-8 sm:p-14 bg-[#121216] border border-amber-400/25 overflow-hidden text-center">
              <div
                aria-hidden="true"
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[260px] bg-radial from-amber-500/18 to-transparent blur-3xl pointer-events-none"
              />

              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-xs sm:text-sm font-medium text-amber-400 mb-3">
                  Lote atual aberto · Acesso 100% gratuito
                </p>
                <h2
                  className="font-display font-bold text-white tracking-tight leading-[0.98] text-balance mb-4"
                  style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
                >
                  Sua próxima ferramenta não precisa custar o preço cheio.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl mx-auto">
                  Entre no grupo oficial agora mesmo e receba o próximo lote de descontos verificados direto no seu celular.
                </p>

                <div className="w-full sm:w-auto flex justify-center px-1 sm:px-0">
                  <a
                    href={WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="final-cta-whatsapp-button"
                    className="w-full max-w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2 sm:gap-3.5 px-4 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-[13px] min-[390px]:text-sm sm:text-base lg:text-lg tracking-tight text-center leading-tight text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] transition-all duration-150 animate-whatsapp-pulse shimmer-effect group cursor-pointer whitespace-normal sm:whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950 shrink-0" />
                    <span>ENTRAR NO GRUPO DO WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
                  </a>
                </div>

                <p className="text-xs text-zinc-400 mt-5">
                  Sem cadastro de cartão · Sem conversas paralelas · Saída livre com um toque
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================== */}
      {/* QUIET FOOTER                                                        */}
      {/* =================================================================== */}
      <footer className="border-t border-white/[0.07] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-bold text-white tracking-tight">
              Cabra das Promos
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Curadoria independente de ofertas e cupons de ferramentas em lojas oficiais.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#achados" className="hover:text-white transition-colors whitespace-nowrap">
              Achados
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors whitespace-nowrap">
              Como funciona
            </a>
            <a href="#quem-usa" className="hover:text-white transition-colors whitespace-nowrap">
              Quem usa
            </a>
            <a href="#duvidas" className="hover:text-white transition-colors whitespace-nowrap">
              Dúvidas
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Cabra das Promos
          </p>
        </div>
      </footer>
    </div>
  );
}
