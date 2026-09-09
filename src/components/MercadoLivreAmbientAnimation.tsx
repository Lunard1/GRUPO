import { motion } from 'motion/react';
import { MercadoLivreLogo } from './MercadoLivreLogo';
import { Sparkles, Tag, Zap } from 'lucide-react';

export function MercadoLivreAmbientAnimation() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[5] select-none"
    >
      {/* 
        Elemento 1: Logo do Mercado Livre em cápsula de vidro escura/dourada
        Passando discretamente pela parte superior da tela (velocidade lenta e suave)
      */}
      <motion.div
        initial={{ x: '-25vw', y: '14vh', opacity: 0 }}
        animate={{
          x: ['-25vw', '115vw'],
          y: ['14vh', '16vh', '13vh', '15vh'],
          opacity: [0, 0.35, 0.4, 0.35, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
        className="absolute top-0 left-0 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B132B]/60 backdrop-blur-md border border-amber-400/25 shadow-[0_4px_25px_rgba(245,158,11,0.15)]"
      >
        <MercadoLivreLogo variant="gold" showText={false} className="w-6 h-6 shrink-0" />
        <span className="text-[11px] font-extrabold tracking-wider text-amber-300/80 uppercase font-mono">
          MERCADO LIVRE • OFERTA ATIVA
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
      </motion.div>

      {/* 
        Elemento 2: O Logo clássico estilizado com transparência suave (marca d'água)
        Passando suavemente pelo centro-fundo da tela em diagonal
      */}
      <motion.div
        initial={{ x: '115vw', y: '50vh', opacity: 0, scale: 0.9 }}
        animate={{
          x: ['115vw', '-25vw'],
          y: ['50vh', '47vh', '53vh', '49vh'],
          opacity: [0, 0.22, 0.28, 0.22, 0],
          scale: [0.9, 1, 0.95, 1, 0.9],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'linear',
          delay: 12,
        }}
        className="absolute top-0 left-0 flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-400/15 backdrop-blur-[2px]"
      >
        <div className="relative">
          {/* Brilho dourado atrás da logo */}
          <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full" />
          <MercadoLivreLogo variant="gold" showText={true} className="w-16 h-16 relative z-10" />
        </div>
        <span className="text-[9px] font-bold text-amber-400/60 uppercase tracking-widest mt-1">
          Radar de Preços
        </span>
      </motion.div>

      {/* 
        Elemento 3: Mini-emblema do Mercado Livre com cupom/desconto passando na parte inferior
      */}
      <motion.div
        initial={{ x: '-20vw', y: '82vh', opacity: 0 }}
        animate={{
          x: ['-20vw', '115vw'],
          y: ['82vh', '80vh', '84vh', '81vh'],
          opacity: [0, 0.3, 0.35, 0.25, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
          delay: 18,
        }}
        className="absolute top-0 left-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070B14]/80 backdrop-blur-sm border border-yellow-400/20 shadow-[0_2px_15px_rgba(255,230,0,0.12)]"
      >
        <MercadoLivreLogo variant="color" showText={false} className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-bold text-slate-300/80">
          Mercado Livre
        </span>
        <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-black">
          CUPOM TESTADO
        </span>
      </motion.div>

      {/* 
        Elemento 4: Discreto brilho flutuante orbital com o ícone do handshake na lateral direita
      */}
      <motion.div
        initial={{ opacity: 0.15, y: 0 }}
        animate={{
          y: [-12, 12, -12],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-4 sm:right-10 top-1/3 hidden md:flex flex-col items-center p-2 rounded-2xl bg-amber-500/5 border border-amber-400/10 pointer-events-none"
      >
        <MercadoLivreLogo variant="gold" showText={false} className="w-10 h-10 opacity-70" />
        <div className="flex items-center gap-1 text-[9px] font-bold text-amber-400/60 mt-1">
          <Zap className="w-2.5 h-2.5" />
          <span>Monitorado</span>
        </div>
      </motion.div>
    </div>
  );
}
