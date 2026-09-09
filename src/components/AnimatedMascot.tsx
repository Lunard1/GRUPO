import { useState, useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, DollarSign, ShieldCheck, Zap, TrendingDown, Star } from 'lucide-react';
import { CABRA_IMAGES } from '../assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AnimatedMascotProps {
  variant?: 'hero' | 'story' | 'circle';
  className?: string;
}

export function AnimatedMascot({ variant = 'hero', className = '' }: AnimatedMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics for 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const translateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 15]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const imageSrc = variant === 'circle' ? CABRA_IMAGES.pixarCircle : CABRA_IMAGES.pixarHero;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none perspective-[1000px] ${className}`}
      id={`animated-mascot-${variant}`}
    >
      {/* 1. Dramatic Golden Backlight Cone (Atmospheric lighting from reference image) */}
      <div className="absolute -inset-10 bg-gradient-to-t from-amber-500/0 via-amber-500/20 to-amber-400/35 blur-[120px] rounded-full pointer-events-none animate-mascot-aura" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-gradient-to-b from-amber-400/25 via-amber-600/10 to-transparent blur-[90px] rounded-full pointer-events-none" />

      {/* 2. Main 3D Card / Frame with spring tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-[440px] aspect-square rounded-[32px] p-2 bg-gradient-to-b from-amber-400/40 via-amber-500/10 to-slate-900/60 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25)] border border-amber-400/30"
      >
        {/* Inner Glass Container */}
        <div className="w-full h-full rounded-[26px] bg-[#070B14] overflow-hidden relative border border-amber-500/20 group">
          
          {/* Subtle Ambient Radial Mask */}
          <div className="absolute inset-0 bg-radial from-amber-500/15 via-transparent to-transparent pointer-events-none" />

          {/* 3D Disney Pixar Character Image */}
          <motion.img
            src={imageSrc}
            alt="Mascote 3D Cabra das Promos estilo Disney Pixar com boné e chifres dourados, corrente de dólar e piscadela carismática"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            style={{ translateZ }}
          />

          {/* LOGO DO WHATSAPP OFICIAL NA IMAGEM DA CABRA (Cor padrão verde #25D366) */}
          <motion.div
            style={{ translateZ }}
            className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-[#070B14]/85 backdrop-blur-md border border-[#25D366]/50 shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform group-hover:scale-105"
            id="mascot-whatsapp-badge"
          >
            {/* Ícone circular com o verde oficial do WhatsApp #25D366 */}
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-65" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_14px_rgba(37,211,102,0.85)] border-2 border-white/40 relative">
                <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white drop-shadow-sm" />
              </div>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] font-black text-white tracking-wide leading-tight font-mono">
                WHATSAPP
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-[#25D366] leading-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
                OFICIAL
              </span>
            </div>
          </motion.div>

          {/* Subtle vignette gradient bottom blend */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070B14] via-[#070B14]/70 to-transparent pointer-events-none" />

          {/* HUD Overlay Strip inside the card: Live Radar Status */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0B132B]/85 backdrop-blur-md border border-amber-400/25 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-xs font-extrabold text-white tracking-wide">
                RADAR ATIVO 24/7
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Garimpando</span>
            </div>
          </div>
        </div>

        {/* 3. Floating 3D Coin #1 (Top Left) */}
        <motion.div
          className="absolute -top-5 -left-5 z-20 animate-coin-1 pointer-events-none"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[2px] shadow-[0_10px_25px_rgba(245,158,11,0.5)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center border border-amber-200/50">
              <DollarSign className="w-6 h-6 text-slate-950 font-black" />
            </div>
          </div>
          {/* Sparkle */}
          <div className="absolute -top-1 -right-1 animate-sparkle">
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
          </div>
        </motion.div>

        {/* 4. Floating 3D Official WhatsApp Emblem (Right Center) */}
        <motion.div
          className="absolute top-1/3 -right-5 sm:-right-6 z-20 animate-coin-2 pointer-events-none"
        >
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#4ade80] p-[2px] shadow-[0_10px_25px_rgba(37,211,102,0.55)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center border border-white/40 shadow-inner">
                <WhatsAppIcon className="w-6 h-6 text-white drop-shadow" />
              </div>
            </div>
            {/* Sparkle */}
            <div className="absolute -top-1 -right-1 animate-sparkle">
              <Star className="w-3.5 h-3.5 text-emerald-200 fill-emerald-200" />
            </div>
          </div>
        </motion.div>

        {/* 5. Floating Sparkles / Stars */}
        <div className="absolute top-12 -left-2 z-20 animate-sparkle pointer-events-none">
          <Sparkles className="w-5 h-5 text-amber-300" />
        </div>
        <div className="absolute -bottom-2 -right-2 z-20 animate-sparkle pointer-events-none" style={{ animationDelay: '1s' }}>
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        </div>

      </motion.div>
    </div>
  );
}
