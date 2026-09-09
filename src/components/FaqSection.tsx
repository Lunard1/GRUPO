import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../constants';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="duvidas"
      className="py-20 md:py-28 bg-[#090F1F] border-t border-slate-800/80 relative"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Perguntas <span className="text-amber-400">Frequentes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa saber antes de entrar no grupo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" id="faq-accordion-list">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#070B14] border border-slate-800/80 overflow-hidden transition-all duration-200"
                id={`faq-item-${index}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-base hover:text-amber-300 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-400/20 text-amber-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/40">
                    <p className="mt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
