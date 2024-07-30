import { useState } from 'react';
import { Map, MapConfig } from './types/map-config.type';
import { fetchMapDatas } from './lib/common';
import { getBiomeColor, getBiomeImage } from './utils/biomeTexture';

const MapGenerator = () => {
  const [map, setMap] = useState<Map>([]);
  const [config, setConfig] = useState<MapConfig>({
    availableBiome: ['plain', 'forest', 'desert', 'ocean'],
    baseBiome: 'ocean',
    numberOfBiomes: 5,
    width: 10,
    height: 10,
  });

  const generateMap = async () => {
    try {
      const result = await fetchMapDatas(config);
      setMap(result);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button onClick={generateMap}>Générer la carte</button>
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
                  backgroundImage: getBiomeImage(cell),
                  backgroundSize: 'cover',
                }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapGenerator;
