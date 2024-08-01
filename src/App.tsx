import { useState } from "react";
import { Map, MapConfig } from "./types/map-config.type";
import { fetchMapDatas } from "./lib/common";
import { getBiomeColor, getBiomeImage } from "./utils/biomeTexture";
// import { MapConfigForm } from "./components/MapConfigForm";

const MapGenerator = () => {
  const [map, setMap] = useState<Map>([]);
  // const [config, setConfig] = useState<MapConfig>({
  //   availableBiome: ["plain", "forest", "desert", "ocean"],
  //   baseBiome: "ocean",
  //   numberOfBiomes: 20,
  //   width: 10,
  //   height: 10,
  // });

  const config: MapConfig = {
    availableBiome: ["plain", "forest", "desert", "ocean"],
    baseBiome: "ocean",
    numberOfBiomes: 5,
    width: 10,
    height: 10,
  };

  const generateMap = async () => {
    try {
      const result = await fetchMapDatas(config);
      setMap(result);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={generateMap}>Générer la carte</button>
      {/* <MapConfigForm setConfig={setConfig} /> */}
      <div>
        {map.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <span
                key={cellIndex}
                className={`inline-block size-8 bg-[${getBiomeColor(cell)}] bg-cover`}
                style={{
                  backgroundImage: getBiomeImage(cell),
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
