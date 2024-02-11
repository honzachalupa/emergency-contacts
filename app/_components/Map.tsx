"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { TItemCategory } from "@/types";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export interface IMarker {
  category: TItemCategory;
  name?: string;
  coordinates: [number, number];
}

interface IProps {
  markers: IMarker[];
  onMarkerClick?: (markerName: IMarker["name"] | null) => void;
}

const LAT_ALIGNMENT_DESKTOP = 0.05;
const LNG_ALIGNMENT_DESKTOP = 0.08;

const icons: {
  [type in TItemCategory]: string;
} = {
  hospital: "https://cdn-icons-png.flaticon.com/64/10714/10714002.png",
  vet: "https://cdn-icons-png.flaticon.com/64/10714/10714002.png",
  pharmacy: "https://cdn-icons-png.flaticon.com/64/10714/10714001.png",
};

export const Map: React.FC<IProps> = ({ markers, onMarkerClick }) => {
  const isMobile = useIsMobile();

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          setLocation({
            lat,
            lng,
          });
        }
      );
    }
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      {location && (
        <GoogleMap
          defaultCenter={{
            lat: location.lat - (isMobile ? LAT_ALIGNMENT_DESKTOP : 0),
            lng: location.lng - (isMobile ? 0 : LNG_ALIGNMENT_DESKTOP),
          }}
          defaultZoom={12}
          disableDefaultUI
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onClick={() => onMarkerClick?.(null)}
        >
          <Marker title="Moje poloha" position={location} clickable={false} />

          {markers.map(({ name, category, coordinates }) => (
            <Marker
              key={name}
              title={name}
              position={{
                lat: coordinates[0],
                lng: coordinates[1],
              }}
              icon={icons[category]}
              onClick={() => onMarkerClick?.(name)}
            />
          ))}
        </GoogleMap>
      )}
    </APIProvider>
  );
};
