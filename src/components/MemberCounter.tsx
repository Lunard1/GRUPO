import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Zap } from 'lucide-react';

interface MemberCounterProps {
  initialCount?: number;
  maxCapacity?: number;
  variant?: 'banner' | 'card' | 'compact';
  className?: string;
  showCountdown?: boolean;
}

// Bespoke metallic member monograms (zero fragile external URLs)
const MEMBER_MONOGRAMS = [
  { initials: 'RM', bg: 'bg-zinc-800 text-amber-300' },
  { initials: 'EV', bg: 'bg-zinc-900 text-zinc-200' },
  { initials: 'TN', bg: 'bg-amber-500/20 text-amber-300' },
  { initials: 'LC', bg: 'bg-zinc-800 text-emerald-300' },
];

export function MemberCounter({
  initialCount = 2897,
  maxCapacity = 3000,
  variant = 'banner',
  className = '',
  showCountdown = true,
}: MemberCounterProps) {
  const [count, setCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('cabra_members_count_v2');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= initialCount) return parsed;
      }
    }
    return initialCount;
  });

  const [displayCount, setDisplayCount] = useState<number>(Math.max(0, initialCount - 42));
  const [justIncremented, setJustIncremented] = useState<boolean>(false);
  const [recentNotification, setRecentNotification] = useState<string | null>(null);

  // Smooth upward count-up animation on first mount
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1350;
    const startValue = Math.max(0, count - 42);
    const endValue = count;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeOut);
      setDisplayCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Organic member arrival ticker
  useEffect(() => {
    const activityNames = [
      'Lucas S. entrou no grupo',
      'Felipe D. entrou agora',
      'Rodrigo M. entrou no grupo',
      'Bruno C. entrou agora',
      'Marcos T. entrou no grupo',
      'Rafael A. entrou agora',
    ];

    let t1: ReturnType<typeof setTimeout> | null = null;
    let t2: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = Math.min(prev + 1, maxCapacity - 2);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('cabra_members_count_v2', next.toString());
        }
        setDisplayCount(next);
        return next;
      });

      setJustIncremented(true);
      const randomText = activityNames[Math.floor(Math.random() * activityNames.length)];
      setRecentNotification(randomText);

      t1 = setTimeout(() => setJustIncremented(false), 1000);
      t2 = setTimeout(() => setRecentNotification(null), 3600);
    }, 6400);

    return () => {
      clearInterval(interval);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [maxCapacity]);

  const remainingSlots = Math.max(1, maxCapacity - displayCount);
  const formattedCount = displayCount.toLocaleString('pt-BR');
  const progressPercent = Math.min(98, (displayCount / maxCapacity) * 100);

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#121216] border border-white/[0.08] ${className}`}
      >
        <div className="flex -space-x-2 shrink-0">
          {MEMBER_MONOGRAMS.slice(0, 3).map((m) => (
            <span
              key={m.initials}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-semibold ring-2 ring-[#121216] border border-white/[0.1] ${m.bg}`}
            >
              {m.initials}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-300">
          <span className="font-mono font-semibold text-white tabular-nums">{formattedCount}</span>
          <span>membros</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="font-mono text-amber-400 tabular-nums">{remainingSlots} vagas restantes</span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="live-member-counter-component"
      className={`w-full rounded-xl p-4 sm:p-5 bg-[#121216] border border-white/[0.08] ${className}`}
    >
      {/* Row 1: Overlapping Avatars + Count & Limited Batch Subtitle */}
      <div className="flex items-center gap-3.5">
        <div className="flex -space-x-2 shrink-0" aria-hidden="true">
          {MEMBER_MONOGRAMS.map((m) => (
            <span
              key={m.initials}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-semibold ring-2 ring-[#121216] border border-white/[0.1] ${m.bg}`}
            >
              {m.initials}
            </span>
          ))}
        </div>

        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <motion.span
              key={displayCount}
              animate={justIncremented ? { color: ['#ffffff', '#fbbf24', '#ffffff'] } : {}}
              transition={{ duration: 0.35 }}
              className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight tabular-nums"
            >
              {formattedCount}
            </motion.span>
            <span className="text-xs sm:text-sm font-medium text-zinc-200">
              profissionais já estão dentro
            </span>
          </div>
          <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
            <Users className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>Lote gratuito com vagas limitadas</span>
          </p>
        </div>
      </div>

      {/* Row 2: Scarcity Line + Live Status */}
      {showCountdown && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 mt-3.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 tabular-nums">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>{remainingSlots} vagas restantes</span>
            <span aria-hidden="true" className="text-zinc-600 font-sans">•</span>
            <span className="font-sans font-medium text-zinc-300">
              <AnimatePresence mode="wait">
                <motion.span
                  key={recentNotification || 'default'}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="inline-block"
                >
                  {recentNotification || 'Entradas abertas agora'}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <span className="text-[11px] font-mono text-zinc-500 tabular-nums">
            {Math.round(progressPercent)}%
          </span>
        </div>
      )}

      {/* Row 3: Yellow Progress Bar (~96% filled) */}
      <div className="w-full bg-zinc-800/90 h-1.5 rounded-full overflow-hidden mt-2.5">
        <div
          className="h-full bg-amber-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
