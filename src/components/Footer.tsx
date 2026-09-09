import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer
      id="main-footer"
      className="bg-[#05080E] border-t border-slate-800/80 pt-12 pb-24 md:pb-12 text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Subtext */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                C
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                CABRA <span className="text-amber-400">DAS PROMOS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Ofertas, achados e oportunidades — direto no WhatsApp.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
              Como funciona
            </a>
            <a href="#duvidas" className="hover:text-amber-400 transition-colors">
              Perguntas frequentes
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Entrar no grupo</span>
            </a>
          </nav>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500">
          <p>© 2026 Cabra das Promos. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
