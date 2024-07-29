import { useState } from 'react';
import axios from 'axios';
import { Biome, Map, MapConfig } from './types/map-config.type';

const MapGenerator = () => {
  const [map, setMap] = useState<Map>([]);
  const [config, setConfig] = useState<MapConfig>({
    availableBiome: ['plain', 'desert', 'forest', 'ocean'],
    baseBiome: 'ocean',
    numberOfBiomes: 10,
    width: 10,
    height: 10,
  });

  const generateMap = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/map/generate',
        config
      );
      setMap(response.data);
    } catch (error) {
      console.error('Erreur lors de la génération de la carte', error);
    }
  };

  const getBiomeColor = (biome: Biome): string => {
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
        return 'white';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button onClick={generateMap}>Générer la carte</button>
      <div>
        <div>
          {map.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, cellIndex) => (
                <span
                  key={cellIndex}
                  style={{
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    backgroundColor: getBiomeColor(cell),
                  }}
                ></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapGenerator;
