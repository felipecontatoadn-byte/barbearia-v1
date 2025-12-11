export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface ServiceItem {
  name: string;
  price: string;
}

export enum FaceShape {
  OVAL = 'Oval',
  SQUARE = 'Quadrado',
  ROUND = 'Redondo',
  TRIANGLE = 'Triangular',
  DIAMOND = 'Diamante'
}

export enum HairType {
  STRAIGHT = 'Liso',
  WAVY = 'Ondulado',
  CURLY = 'Cacheado',
  COILY = 'Crespo'
}