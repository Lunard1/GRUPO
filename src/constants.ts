import { FaqItem, StepItem, CategoryItem, WhatsAppGroup } from './types';
import { TOOL_DEAL_IMAGES } from './assets';

// Link oficial do WhatsApp configurável
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/GJszd2Urax904Re35CD0aX';

// Grupos Oficiais de Ferramentas do Cabra das Promos
export const WHATSAPP_GROUPS: WhatsAppGroup[] = [
  {
    id: 1,
    name: 'Grupo de Ferramentas 01',
    buttonText: 'Entrar no grupo de ferramentas 01',
    tag: 'Canal 01 · Principal',
    url: 'https://chat.whatsapp.com/GJszd2Urax904Re35CD0aX',
    highlight: 'Parafusadeiras, furadeiras, marteletes, chaves e cupons testados diariamente',
    status: 'Vagas abertas',
    accent: 'gold',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Grupo de Ferramentas 02',
    buttonText: 'Entrar no grupo de ferramentas 02',
    tag: 'Canal 02 · Radar Rápido',
    url: 'https://chat.whatsapp.com/LdNutEy2GGoKyidoJLKutx',
    highlight: 'Desovas de estoque, quedas bruscas de preço e oportunidades relâmpago',
    status: 'Vagas abertas',
    accent: 'emerald',
    isPopular: false,
  },
];

export interface ToolDealItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'eletricas' | 'manuais' | 'kits';
  categoryLabel: string;
  store: string;
  oldPrice: number;
  dealPrice: number;
  discountPercent: number;
  couponCode: string;
  postedAgo: string;
  postedAt: string;
  image: string;
  imageAlt: string;
  whatsappNote: string;
  stockNote: string;
}

export const FEATURED_TOOL_DEALS: ToolDealItem[] = [
  {
    id: 'dewalt-18v-xr',
    title: 'Parafusadeira e Furadeira de Impacto Brushless 18V XR + Bateria 5.0Ah',
    shortTitle: 'Parafusadeira Impacto Brushless 18V XR',
    category: 'eletricas',
    categoryLabel: 'Elétricas',
    store: 'Mercado Livre Oficial',
    oldPrice: 1189,
    dealPrice: 589,
    discountPercent: 50,
    couponCode: 'CABRA100',
    postedAgo: 'Há 14 min',
    postedAt: '14:18',
    image: TOOL_DEAL_IMAGES.dewaltDrill,
    imageAlt: 'Parafusadeira de impacto sem fio Brushless 18V com bateria de lítio 5.0Ah sobre bancada escura',
    whatsappNote: 'Menor preço registrado nos últimos 9 meses. Entrega Full com nota fiscal e garantia nacional de 3 anos.',
    stockNote: 'Restavam 19 unidades no lote promocional',
  },
  {
    id: 'gedore-crv-72',
    title: 'Jogo de Soquetes e Catraca Reversível 72 Dentes Cromo-Vanádio com Maleta',
    shortTitle: 'Jogo Soquetes & Catraca 72 Dentes Cr-V',
    category: 'manuais',
    categoryLabel: 'Manuais',
    store: 'Amazon Brasil',
    oldPrice: 649,
    dealPrice: 349,
    discountPercent: 46,
    couponCode: 'OFICINA40',
    postedAgo: 'Há 38 min',
    postedAt: '13:54',
    image: TOOL_DEAL_IMAGES.gedoreSockets,
    imageAlt: 'Jogo profissional de soquetes e catraca 72 dentes em aço cromo-vanádio dentro de maleta rígida preta',
    whatsappNote: 'Aço cromo-vanádio forjado, encaixe 1/2" com recartilhado antiderrapante. Queda direta de distribuidora.',
    stockNote: 'Frete grátis Prime confirmado',
  },
  {
    id: 'bosch-gws-125',
    title: 'Esmerilhadeira Angular Profissional 125mm 900W com Disco de Corte Metal',
    shortTitle: 'Esmerilhadeira Angular 125mm 900W',
    category: 'eletricas',
    categoryLabel: 'Elétricas',
    store: 'Mercado Livre Oficial',
    oldPrice: 519,
    dealPrice: 269,
    discountPercent: 48,
    couponCode: 'CORTE50',
    postedAgo: 'Há 1h',
    postedAt: '13:12',
    image: TOOL_DEAL_IMAGES.boschGrinder,
    imageAlt: 'Esmerilhadeira angular profissional azul e alumínio escovado com disco de corte metálico',
    whatsappNote: 'Cabeçote em alumínio fundido e empunhadura auxiliar antivibração. Cupom aplicado direto no carrinho.',
    stockNote: 'Parcelamento em até 10x sem juros',
  },
  {
    id: 'makita-impact-kit',
    title: 'Chave de Impacto Compacta 20V + Kit 10 Brocas Revestidas em Titânio',
    shortTitle: 'Chave de Impacto 20V + Brocas Titânio',
    category: 'kits',
    categoryLabel: 'Kits',
    store: 'Loja do Mecânico Oficial',
    oldPrice: 879,
    dealPrice: 459,
    discountPercent: 48,
    couponCode: 'TITANIO15',
    postedAgo: 'Há 2h',
    postedAt: '12:05',
    image: TOOL_DEAL_IMAGES.makitaImpact,
    imageAlt: 'Chave de impacto sem fio 20V acompanhada de conjunto escalonado de brocas revestidas em titânio',
    whatsappNote: 'Combo fechado que sai mais barato que comprar apenas a máquina avulsa. Lote de queima de estoque.',
    stockNote: 'Estoque monitorado em tempo real',
  },
];

export interface MercadoLivreDeal {
  id: string;
  brand: string;
  title: string;
  shippingLabel: string;
  oldPrice: number;
  dealPrice: number;
  discountPercent: number;
  installments: string;
  image: string;
  imageAlt: string;
}

export const MERCADO_LIVRE_CAROUSEL_DEALS: MercadoLivreDeal[] = [
  {
    id: 'ml-dewalt-dcd778',
    brand: 'DeWalt',
    title: 'Parafusadeira de Impacto Brushless 18V/20V MAX + Bateria 5.0Ah',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 1189,
    dealPrice: 589,
    discountPercent: 50,
    installments: '10x R$ 58,90 sem juros',
    image: TOOL_DEAL_IMAGES.dewaltDrill,
    imageAlt: 'Parafusadeira de impacto DeWalt Brushless com bateria de lítio 5.0Ah',
  },
  {
    id: 'ml-dewalt-d25133k',
    brand: 'DeWalt',
    title: 'Martelete Perfurador Rompedor SDS-Plus 800W 3 Modos',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 1249,
    dealPrice: 729,
    discountPercent: 42,
    installments: '10x R$ 72,90 sem juros',
    image: TOOL_DEAL_IMAGES.rotaryHammer,
    imageAlt: 'Martelete perfurador rompedor DeWalt SDS-Plus com talhadeira',
  },
  {
    id: 'ml-dewalt-dwe560',
    brand: 'DeWalt',
    title: 'Serra Circular Profissional 7-1/4" 1400W Disco Wídea',
    shippingLabel: 'Loja Oficial · Full',
    oldPrice: 1199,
    dealPrice: 699,
    discountPercent: 42,
    installments: '10x R$ 69,90 sem juros',
    image: TOOL_DEAL_IMAGES.circularSaw,
    imageAlt: 'Serra circular elétrica DeWalt 7-1/4 polegadas sobre madeira e bancada escura',
  },
  {
    id: 'ml-vonder-110',
    brand: 'Vonder',
    title: 'Maleta de Ferramentas 110 Peças Cromo-Vanádio Completa',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 629,
    dealPrice: 419,
    discountPercent: 33,
    installments: '10x R$ 41,90 sem juros',
    image: TOOL_DEAL_IMAGES.vonderToolkit,
    imageAlt: 'Maleta rígida aberta com 110 ferramentas em aço cromo-vanádio',
  },
  {
    id: 'ml-laser-verde',
    brand: 'Linha Pro',
    title: 'Nível a Laser Verde Linhas Cruzadas 15m com Mini Tripé',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 899,
    dealPrice: 519,
    discountPercent: 42,
    installments: '10x R$ 51,90 sem juros',
    image: TOOL_DEAL_IMAGES.laserLevel,
    imageAlt: 'Nível a laser feixe verde profissional projetando linhas cruzadas com tripé',
  },
  {
    id: 'ml-karcher-k3',
    brand: 'Kärcher',
    title: 'Lavadora de Alta Pressão K3 Compact 1740 PSI + Mangueira',
    shippingLabel: 'Loja Oficial · Full',
    oldPrice: 879,
    dealPrice: 489,
    discountPercent: 44,
    installments: '10x R$ 48,90 sem juros',
    image: TOOL_DEAL_IMAGES.pressureWasher,
    imageAlt: 'Lavadora de alta pressão amarela Kärcher K3 Compact com lança e mangueira',
  },
  {
    id: 'ml-esmerilhadeira-125',
    brand: 'Linha Pro',
    title: 'Esmerilhadeira Angular Profissional 125mm 900W + Disco',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 519,
    dealPrice: 269,
    discountPercent: 48,
    installments: '6x R$ 44,83 sem juros',
    image: TOOL_DEAL_IMAGES.boschGrinder,
    imageAlt: 'Esmerilhadeira angular profissional 125mm com disco de corte para metal',
  },
  {
    id: 'ml-gedore-soquetes',
    brand: 'Gedore Red',
    title: 'Jogo de Soquetes e Catraca Reversível 72 Dentes Cr-V',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 649,
    dealPrice: 349,
    discountPercent: 46,
    installments: '8x R$ 43,62 sem juros',
    image: TOOL_DEAL_IMAGES.gedoreSockets,
    imageAlt: 'Jogo de soquetes e catraca 72 dentes em aço cromo-vanádio com maleta',
  },
  {
    id: 'ml-impacto-titanio',
    brand: 'Linha 20V',
    title: 'Chave de Impacto Compacta 20V + Kit 10 Brocas Titânio',
    shippingLabel: 'Mercado Livre · Full',
    oldPrice: 879,
    dealPrice: 459,
    discountPercent: 48,
    installments: '10x R$ 45,90 sem juros',
    image: TOOL_DEAL_IMAGES.makitaImpact,
    imageAlt: 'Chave de impacto sem fio 20V com conjunto de brocas revestidas em titânio',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  savedAmount: string;
  itemPurchased: string;
}

export const MEMBER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ricardo Mendes',
    role: 'Mecânico Automotivo',
    city: 'Campinas, SP',
    quote: 'Peguei a parafusadeira 18V Brushless por R$ 589 com o cupom que mandaram às 10h. Na loja física aqui da avenida estava R$ 1.190. Só nessa compra já pagou o ano inteiro.',
    savedAmount: 'Economizou R$ 601',
    itemPurchased: 'Parafusadeira 18V XR',
  },
  {
    id: 't2',
    name: 'Eduardo Vasconcelos',
    role: 'Marceneiro e Instalador',
    city: 'Curitiba, PR',
    quote: 'Eu sempre saía de grupo de promoção porque virava bagunça. Aqui só cai ferramenta boa de verdade, link oficial do Mercado Livre e zero conversa atravessada.',
    savedAmount: 'Economizou R$ 440',
    itemPurchased: 'Esmerilhadeira + Kit Brocas',
  },
  {
    id: 't3',
    name: 'Thiago Nogueira',
    role: 'Eletricista Industrial',
    city: 'Belo Horizonte, MG',
    quote: 'Montei meu jogo de soquetes cromo-vanádio e uma chave de impacto pagando quase metade do valor normal. Quando toca a notificação do Cabra, eu abro na hora.',
    savedAmount: 'Economizou R$ 525',
    itemPurchased: 'Jogo Cr-V 72 Dentes',
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
    title: 'Rastreamento de menor preço histórico',
    description: 'Monitoramos o histórico real de preços em Mercado Livre, Amazon e distribuidoras oficiais. Se a loja subiu o preço antes de dar desconto falso, a oferta é descartada na hora.',
    highlight: 'Zero "metade do dobro"',
  },
  {
    step: '02',
    title: 'Auditoria manual de cupom e vendedor',
    description: 'Antes de qualquer disparo, validamos se o vendedor é loja oficial, se emite nota fiscal e se o cupom está aplicando corretamente no carrinho.',
    highlight: 'Links 100% verificados',
  },
  {
    step: '03',
    title: 'Disparo cirúrgico no seu WhatsApp',
    description: 'O alerta chega limpo, direto com foto, preço antigo vs. preço real e o cupom pronto para copiar. O grupo é fechado para mensagens: você só recebe o que realmente faz economizar.',
    highlight: 'Sem spam ou bate-papo',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    icon: '01',
    title: 'Ferramentas Elétricas',
    description: 'Parafusadeiras, furadeiras, marteletes, esmerilhadeiras e serras de marcas consagradas.',
    badge: 'Verificadas',
    example: 'DeWalt, Makita, Bosch, Stanley e Milwaukee.',
  },
  {
    icon: '02',
    title: 'Ferramentas Manuais',
    description: 'Jogos de soquetes, catracas, torquímetros, chaves combinadas e alicates profissionais.',
    badge: 'Ativos',
    example: 'Gedore, Tramontina Pro, Sata e Irwin.',
  },
  {
    icon: '03',
    title: 'Cupons Secretos',
    description: 'Códigos exclusivos testados antes do envio para abater ainda mais no fechamento do pedido.',
    badge: 'Oportunidades',
    example: 'Cupons relâmpago do Mercado Livre e Amazon.',
  },
  {
    icon: '04',
    title: 'Queimas de Estoque',
    description: 'Desovas de grandes distribuidoras e quedas abruptas que costumam acabar em poucos minutos.',
    badge: 'Destaques',
    example: 'Quedas históricas com até 62% de desconto.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Preciso pagar alguma mensalidade para entrar no grupo?',
    answer: 'Não. O acesso ao grupo oficial do Cabra das Promos é 100% gratuito, sem cadastro de cartão e sem letras miúdas.',
  },
  {
    question: 'O grupo fica mandando centenas de mensagens e travando o celular?',
    answer: 'De forma alguma. O grupo é fechado — somente os administradores publicam. Enviamos apenas as oportunidades que passaram no filtro de preço histórico real, sem bate-papo paralelo.',
  },
  {
    question: 'Vocês vendem as ferramentas ou direcionam para lojas grandes?',
    answer: 'Somos uma curadoria independente. Todos os links levam diretamente para lojas oficiais reconhecidas (como Mercado Livre, Amazon e grandes distribuidoras) com nota fiscal e garantia de fábrica.',
  },
  {
    question: 'Os cupons e promoções funcionam para todo o Brasil?',
    answer: 'Sim. Priorizamos ofertas de grandes lojas nacionais com entrega para todo o país, frete grátis e estoque oficial verificado.',
  },
  {
    question: 'Posso sair do grupo se não gostar?',
    answer: 'Sim. Como em qualquer grupo comum do WhatsApp, você tem total liberdade para silenciar ou sair com um toque quando quiser.',
  },
];
