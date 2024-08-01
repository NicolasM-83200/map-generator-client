import axios from 'axios';
import { MapConfig } from '../types/map-config.type';

export const fetchMapDatas = async (config: MapConfig) => {
  try {
    const response = await axios.post(
      'https://map-generator-api.fly.dev/map/generate',
      config
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la génération de la carte', error);
  }
};
