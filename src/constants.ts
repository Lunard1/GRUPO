import { FaqItem, StepItem, CategoryItem, WhatsAppGroup } from './types';

// Link oficial do WhatsApp configurável
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/invite/cabradaspromos';

// 9 Grupos Oficiais do Cabra das Promos (diferenciados para distribuir os membros)
export const WHATSAPP_GROUPS: WhatsAppGroup[] = [
  {
    id: 1,
    name: 'Grupo 01',
    tag: '🔥 Mais Tradicional',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-01',
    highlight: 'Alertas em tempo real 24/7',
    status: 'Poucas vagas restantes',
    accent: 'gold',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Grupo 02',
    tag: '⭐ Recomendado',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-02',
    highlight: 'Ofertas Relâmpago & Cupons',
    status: 'Vagas abertas',
    accent: 'emerald',
    isPopular: true,
  },
  {
    id: 3,
    name: 'Grupo 03',
    tag: '⚡ Entrada Imediata',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-03',
    highlight: 'Eletrônicos & Smartphones',
    status: 'Vagas disponíveis',
    accent: 'amber',
  },
  {
    id: 4,
    name: 'Grupo 04',
    tag: '🎯 Radar de Preços',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-04',
    highlight: 'Quedas históricas monitoradas',
    status: 'Vagas disponíveis',
    accent: 'cyan',
  },
  {
    id: 5,
    name: 'Grupo 05',
    tag: '🎟️ Especial Cupons',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-05',
    highlight: 'Códigos promocionais testados',
    status: 'Vagas abertas',
    accent: 'purple',
  },
  {
    id: 6,
    name: 'Grupo 06',
    tag: '💰 Achados Diários',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-06',
    highlight: 'Itens úteis do dia a dia',
    status: 'Vagas disponíveis',
    accent: 'amber',
  },
  {
    id: 7,
    name: 'Grupo 07',
    tag: '🛡️ Lojas Oficiais',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-07',
    highlight: 'Amazon, Magalu, Shopee & ML',
    status: 'Vagas abertas',
    accent: 'emerald',
  },
  {
    id: 8,
    name: 'Grupo 08',
    tag: '🚀 Recém Criado',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-08',
    highlight: 'Menos concorrência nos cliques',
    status: 'Muitas vagas livres',
    accent: 'rose',
  },
  {
    id: 9,
    name: 'Grupo 09',
    tag: '👑 Grupo VIP Oficial',
    url: 'https://chat.whatsapp.com/invite/cabradaspromos-09',
    highlight: 'Novo canal oficial aberto',
    status: 'Muitas vagas livres',
    accent: 'gold',
    isPopular: true,
  },
];

export const TRUST_POINTS = [
  { text: 'Ofertas selecionadas', id: 'trust-1' },
  { text: 'Cupons e descontos', id: 'trust-2' },
  { text: 'Lojas confiáveis', id: 'trust-3' },
  { text: 'Conteúdo direto no WhatsApp', id: 'trust-4' },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'O Cabra procura',
    description: 'Encontramos promoções, descontos e oportunidades interessantes.',
    highlight: 'Curadoria diária',
  },
  {
    step: '02',
    title: 'Você recebe',
    description: 'As melhores descobertas são compartilhadas diretamente no grupo.',
    highlight: 'Sem excessos',
  },
  {
    step: '03',
    title: 'Você decide',
    description: 'Gostou da oferta? Aproveite. Não interessou? É só seguir em frente.',
    highlight: 'Zero pressão',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    icon: '🔥',
    title: 'Promoções',
    description: 'Ofertas selecionadas de produtos e serviços que realmente valem a pena.',
    badge: 'Verificadas',
    example: 'Eletrônicos, casa, moda e tecnologia com descontos reais de verdade.',
  },
  {
    icon: '🎟️',
    title: 'Cupons',
    description: 'Cupons para ajudar você a pagar menos nas maiores plataformas.',
    badge: 'Ativos',
    example: 'Códigos testados para você não perder tempo com cupom expirado.',
  },
  {
    icon: '💰',
    title: 'Achados',
    description: 'Produtos interessantes encontrados durante o garimpo diário.',
    badge: 'Oportunidades',
    example: 'Itens úteis do cotidiano com excelente custo-benefício.',
  },
  {
    icon: '🏷️',
    title: 'Preços especiais',
    description: 'Oportunidades que realmente merecem atenção e destaque.',
    badge: 'Destaques',
    example: 'Quedas históricas de preço monitoradas em lojas consolidadas.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'O grupo é gratuito?',
    answer: 'Sim. A entrada no grupo é 100% gratuita.',
  },
  {
    question: 'Que tipo de promoções vocês compartilham?',
    answer: 'Ofertas, cupons, descontos e achados interessantes de diferentes categorias (tecnologia, casa, estilo de vida e mais).',
  },
  {
    question: 'Vocês vendem os produtos?',
    answer: 'Não. O Cabra das Promos funciona como uma curadoria de oportunidades e direciona você para as lojas oficiais e confiáveis.',
  },
  {
    question: 'Vou receber muitas mensagens?',
    answer: 'A proposta é compartilhar oportunidades relevantes, evitando excesso de mensagens desnecessárias.',
  },
  {
    question: 'Posso sair do grupo quando quiser?',
    answer: 'Sim. A participação é totalmente opcional e livre.',
  },
];
