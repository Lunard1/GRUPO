import { CheckCircle2, ShieldCheck, Tag, Smartphone } from 'lucide-react';

export function TrustBadges() {
  const items = [
    { text: 'Ofertas selecionadas', icon: CheckCircle2 },
    { text: 'Cupons e descontos', icon: Tag },
    { text: 'Lojas confiáveis', icon: ShieldCheck },
    { text: 'Conteúdo direto no WhatsApp', icon: Smartphone },
  ];

  return (
    <div
      id="trust-elements-bar"
      className="pt-5 pb-2 border-t border-slate-800/80 mt-6"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
              id={`trust-item-${idx}`}
            >
              <div className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
