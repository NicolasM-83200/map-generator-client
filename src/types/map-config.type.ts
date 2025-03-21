export interface MapConfig {
  availableBiome: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
}

export type Biome = 'plain' | 'desert' | 'forest' | 'ocean';

export type Map = Biome[][];
