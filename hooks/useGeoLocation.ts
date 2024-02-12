import { ICoordinates } from "@/types";
import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates | null>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          setCoordinates({
            lat,
            lng,
          });
        }
      );
    }
  }, []);

  return coordinates;
};
