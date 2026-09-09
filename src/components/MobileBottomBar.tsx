import { WHATSAPP_GROUP_URL } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function MobileBottomBar() {
  return (
    <div
      id="mobile-sticky-bottom-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#070B14]/95 backdrop-blur-lg border-t border-amber-500/20 shadow-2xl"
    >
      <a
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-bottom-cta-btn"
        className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform"
      >
        <WhatsAppIcon className="w-5 h-5 text-slate-950" />
        <span>Entrar no grupo</span>
      </a>
    </div>
  );
}
