import { useState, useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { CABRA_IMAGES } from '../assets';

interface AnimatedMascotProps {
  variant?: 'hero' | 'story' | 'circle';
  className?: string;
}

// Subtle metallic light motes drifting outside the frame perimeter
const AMBIENT_SPARKS = [
  { id: 1, top: '8%', left: '4%', size: 3, duration: 4.8, delay: 0 },
  { id: 2, top: '18%', right: '3%', size: 4, duration: 4.2, delay: 0.7 },
  { id: 3, bottom: '20%', left: '2%', size: 3, duration: 5.2, delay: 1.4 },
  { id: 4, bottom: '10%', right: '6%', size: 3.5, duration: 4.4, delay: 0.5 },
];

// 36 precision tick marks around a 360-degree micrometer ring (every 10 deg)
const DIAL_TICKS = Array.from({ length: 36 }, (_, i) => i * 10);

export function AnimatedMascot({ variant = 'hero', className = '' }: AnimatedMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(
    variant === 'circle' ? CABRA_IMAGES.pixarCircle : CABRA_IMAGES.hero
  );
  const [imgFailed, setImgFailed] = useState(false);

  // Physical spring tilt tracking pointer position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 160 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['-30%', '30%']), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleImageError = () => {
    if (imgSrc !== CABRA_IMAGES.fallbackHero) {
      setImgSrc(CABRA_IMAGES.fallbackHero);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none perspective-[1100px] ${className}`}
      id={`animated-mascot-${variant}`}
    >
      {/* 1. Warm Tungsten Workshop Backlight (focused depth behind frame) */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 sm:-inset-10 bg-radial from-amber-500/20 via-amber-600/6 to-transparent blur-3xl rounded-full pointer-events-none"
      />

      {/* 2. Subtle Expanding Sonar Ring Outlines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[102%] h-[102%] rounded-full border border-amber-400/25 animate-sonar-1" />
        <div className="w-[102%] h-[102%] rounded-full border border-amber-400/15 animate-sonar-2" />
      </div>

      {/* 3. Outer Precision Micrometer / Caliper Degree Ring (Clockwise) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="absolute w-[124%] h-[124%] pointer-events-none animate-caliper-cw opacity-70"
      >
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="none"
          stroke="rgba(245, 158, 11, 0.14)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {DIAL_TICKS.map((deg) => {
          const isCardinal = deg % 90 === 0;
          const isMajor = deg % 30 === 0;
          const innerR = isCardinal ? 176 : isMajor ? 182 : 186;
          const outerR = 192;
          const rad = (deg * Math.PI) / 180;
          const x1 = 200 + innerR * Math.cos(rad);
          const y1 = 200 + innerR * Math.sin(rad);
          const x2 = 200 + outerR * Math.cos(rad);
          const y2 = 200 + outerR * Math.sin(rad);

          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={
                isCardinal
                  ? 'rgba(251, 191, 36, 0.78)'
                  : isMajor
                  ? 'rgba(245, 158, 11, 0.42)'
                  : 'rgba(255, 255, 255, 0.16)'
              }
              strokeWidth={isCardinal ? 2 : 1}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* 4. Inner Vernier Arc Ring (Counter-Clockwise) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="absolute w-[113%] h-[113%] pointer-events-none animate-caliper-ccw opacity-80"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />
        {/* Four machined amber arc accents */}
        <path
          d="M 200 10 A 190 190 0 0 1 286 31"
          fill="none"
          stroke="rgba(245, 158, 11, 0.65)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 200 390 A 190 190 0 0 1 114 369"
          fill="none"
          stroke="rgba(245, 158, 11, 0.45)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Delicate Drifting Metallic Embers Outside Perimeter */}
      {AMBIENT_SPARKS.map((spark) => (
        <motion.div
          key={spark.id}
          aria-hidden="true"
          style={{
            top: spark.top,
            bottom: spark.bottom,
            left: spark.left,
            right: spark.right,
            width: spark.size,
            height: spark.size,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.25, 0.85, 0.25],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: spark.delay,
          }}
          className="absolute rounded-full bg-amber-300 pointer-events-none"
        />
      ))}

      {/* 6. Architectural Brushed-Steel & Gold Frame Holding Uploaded Mascot */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-[420px] aspect-square rounded-[24px] p-[2px] group shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]"
      >
        {/* Rotating Conic Brushed-Gold Rim Sweep */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none"
        >
          <div className="absolute -inset-[45%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.08)_120deg,rgba(245,158,11,0.75)_180deg,rgba(251,191,36,0.2)_220deg,transparent_360deg)] animate-rim-sweep" />
        </div>

        {/* Machined Precision Corner Hairlines */}
        <div
          aria-hidden="true"
          className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t border-l border-amber-400/80 pointer-events-none transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <div
          aria-hidden="true"
          className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t border-r border-amber-400/80 pointer-events-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b border-l border-amber-400/80 pointer-events-none transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b border-r border-amber-400/80 pointer-events-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />

        {/* Inner Portrait Container (r_inner = 24 - 2 = 22px) */}
        <div className="relative w-full h-full rounded-[22px] bg-[#121216] overflow-hidden border border-white/[0.08]">
          {!imgFailed ? (
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Mascote oficial Cabra das Promos de terno azul, gravata vermelha e óculos escuros segurando torquímetro de precisão"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 text-center">
              <span className="font-display text-4xl font-bold text-amber-400 tracking-tight">
                Cabra das Promos
              </span>
              <span className="text-xs text-zinc-400 mt-2">
                Curadoria Oficial de Ferramentas
              </span>
            </div>
          )}

          {/* Subtle Studio Specular Reflection Gliding with Cursor */}
          <motion.div
            aria-hidden="true"
            style={{ x: sheenX }}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          {/* Subtle Edge Vignette for Seamless Dark Integration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.09] pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
}
