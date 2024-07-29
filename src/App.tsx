import { useState } from 'react';
import { Biome, Map, MapConfig } from './types/map-config.type';
import { fetchMapDatas } from './lib/common';

const MapGenerator = () => {
  const [map, setMap] = useState<Map>([]);
  const [config, setConfig] = useState<MapConfig>({
    availableBiome: ['plain', 'forest', 'desert', 'ocean'],
    baseBiome: 'ocean',
    numberOfBiomes: 500,
    width: 30,
    height: 30,
  });

  const generateMap = async () => {
    try {
      const result = await fetchMapDatas(config);
      setMap(result);
    } catch (error: any) {
      throw new Error(error.message);
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
        return '#fff';
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
                    width: '20px',
                    height: '20px',
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
