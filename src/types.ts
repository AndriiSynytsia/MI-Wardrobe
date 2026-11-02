export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export interface ComponentSlice {
  id: string;
  name: string;
  subtitle: string;
  offsetRatio: number; // relative horizontal movement
  clipRect: { x: number; y: number; width: number; height: number };
  specs: string[];
  description: string;
}

export interface LookScenario {
  id: string;
  label: string;
  title: string;
  copy: string;
  items: { name: string; category: string; position: string }[];
}

export interface EnquiryData {
  name: string;
  email: string;
  interest: string;
  model: string;
  message: string;
}
