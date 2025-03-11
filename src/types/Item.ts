export type ItemData = {
  id: number;
  name: string;
  plaintext: string;
  image: ItemImage;
};

export type ItemDataResponse = {
  data: { [key: string]: Item };
};

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
  stats: ItemStats;
  depth?: number;
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

export type ItemStats = {
  FlatSpellBlockMod?: number;
  FlatHPPoolMod?: number;
  FlatArmorMod?: number;
  FlatMagicDamageMod?: number;
  PercentAttackSpeedMod?: number;
  PercentMovementSpeedMod?: number;
};
