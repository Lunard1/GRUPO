export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface CategoryItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
  example: string;
}

export interface WhatsAppGroup {
  id: number;
  name: string;
  tag: string;
  url: string;
  highlight: string;
  status: string;
  accent: 'gold' | 'emerald' | 'cyan' | 'purple' | 'amber' | 'rose';
  isPopular?: boolean;
}
