import { useForm, SubmitHandler } from "react-hook-form";
import { MapConfig } from "../types/map-config.type";

export const MapConfigForm = ({
  setConfig,
}: {
  setConfig: (data: MapConfig) => void;
}) => {
  const { register, handleSubmit } = useForm<MapConfig>();
  const onSubmit: SubmitHandler<MapConfig> = (data) => setConfig(data);

  const biomes: string[] = ["desert", "ocean", "forest", "plain"];

  return (
    <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">ENVOYER</button>
      <div>
        <label>Biome de base : </label>
        <select defaultValue="ocean" {...register("baseBiome")}>
          {biomes.map((biome) => (
            <option key={biome} value={biome}>
              {biome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Biomes disponibles: </p>
        <div className="flex space-x-2">
          {biomes.map((biome) => (
            <div className="" key={biome}>
              <input
                type="checkbox"
                id={biome}
                value={biome}
                {...register("availableBiome")}
              />
              <label htmlFor={biome} className="ml-2">
                {biome.charAt(0).toUpperCase() + biome.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex">
          <label>Nombre de biome à afficher : </label>
          <input
            type="number"
            className="ml-auto w-1/6 text-center"
            {...register("numberOfBiomes")}
          />
        </div>
        <div className="flex">
          <label>Largeur : </label>
          <input
            type="number"
            className="ml-auto w-1/6 text-center"
            {...register("width")}
          />
        </div>
        <div className="flex">
          <label>Hauteur : </label>
          <input
            type="number"
            className="ml-auto w-1/6 text-center"
            {...register("height")}
          />
        </div>
      </div>
    </form>
  );
};
