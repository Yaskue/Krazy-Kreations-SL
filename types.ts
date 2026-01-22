export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export interface AIResponse {
  themeName: string;
  colorPalette: string[];
  suggestedItems: string[];
  description: string;
}