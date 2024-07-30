import { Biome } from '../types/map-config.type';

export const getBiomeColor = (biome: Biome): string => {
  switch (biome) {
    case 'plain':
      return '#AFF4C6';
    case 'desert':
      return '#FFCD29';
    case 'forest':
      return '#14AE5C';
    case 'ocean':
      return '#0D99FF';
    default:
      return '#fff';
  }
};
export const getBiomeImage = (biome: Biome): string => {
  switch (biome) {
    case 'plain':
      return 'url(./textures/plain.png)';
    case 'desert':
      return 'url(./textures/desert.png)';
    case 'forest':
      return 'url(./textures/forest.png)';
    case 'ocean':
      return 'url(./textures/ocean.png)';
    default:
      return 'url(./textures/ocean.png)';
  }
};
