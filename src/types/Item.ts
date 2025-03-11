export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: {
    [key: number]: boolean;
  };
  stats: Record<string, number>;
};

export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ItemGold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};
