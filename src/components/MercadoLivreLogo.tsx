interface MercadoLivreLogoProps {
  className?: string;
  variant?: 'color' | 'gold' | 'minimal';
  showText?: boolean;
}

export function MercadoLivreLogo({
  className = 'w-16 h-16',
  variant = 'color',
  showText = true,
}: MercadoLivreLogoProps) {
  // Cores adaptadas para harmonizar com a paleta noturna / âmbar do Cabra das Promos
  const isGold = variant === 'gold';
  
  const yellowFill = isGold ? '#F59E0B' : '#FFE600';
  const blueColor = isGold ? '#0F172A' : '#2D3277';
  const strokeColor = isGold ? '#D97706' : '#2D3277';
  const handFill = isGold ? '#FEF3C7' : '#FFFFFF';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)]"
      >
        {/* Glow de fundo */}
        <ellipse
          cx="80"
          cy="60"
          rx="52"
          ry="36"
          fill={yellowFill}
          className="opacity-95"
        />

        {/* Borda do oval */}
        <ellipse
          cx="80"
          cy="60"
          rx="52"
          ry="36"
          stroke={strokeColor}
          strokeWidth="6"
          fill="none"
        />

        {/* Arco superior do oval (design oficial) */}
        <path
          d="M 36 60 C 45 42, 60 38, 80 38 C 100 38, 115 42, 124 60"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arco inferior do oval */}
        <path
          d="M 36 60 C 45 78, 60 82, 80 82 C 100 82, 115 78, 124 60"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Mão esquerda (aperço de mãos estilizado) */}
        <path
          d="M 44 46 
             L 64 54 
             C 68 56, 74 54, 78 50 
             L 86 42 
             C 89 39, 94 40, 96 44 
             L 98 48 
             C 100 52, 98 56, 94 59 
             L 84 66 
             C 80 69, 74 69, 70 66 
             L 50 56 
             Z"
          fill={handFill}
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Mão direita se conectando */}
        <path
          d="M 116 74 
             L 96 66 
             C 92 64, 86 66, 82 70 
             L 74 78 
             C 71 81, 66 80, 64 76 
             L 62 72 
             C 60 68, 62 64, 66 61 
             L 76 54 
             C 80 51, 86 51, 90 54 
             L 110 64 
             Z"
          fill={handFill}
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Dedos da mão direita dobrados */}
        <path
          d="M 72 73 C 75 75, 78 74, 80 71"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 77 76 C 80 78, 83 77, 85 74"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 83 79 C 86 81, 89 80, 91 77"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Texto "mercado livre" (se ativo) */}
        {showText && (
          <g transform="translate(80, 118)">
            <text
              textAnchor="middle"
              fill={isGold ? '#FCD34D' : '#FFFFFF'}
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="20"
              letterSpacing="-0.5"
            >
              mercado
            </text>
            <text
              y="22"
              textAnchor="middle"
              fill={isGold ? '#FCD34D' : '#FFFFFF'}
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="20"
              letterSpacing="-0.5"
            >
              livre
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
