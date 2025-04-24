// Types pour les offres
export interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

// Types pour les témoignages
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}
