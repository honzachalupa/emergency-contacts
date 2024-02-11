"use client";

import { TItemCategory } from "@/types";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export interface IMarker {
  id: number;
  category: TItemCategory;
  name?: string;
  coordinates: [number, number];
}

interface IProps {
  markers: IMarker[];
  onMarkerClick?: (markerId: IMarker["id"] | null) => void;
}

const LNG_ALIGNMENT = 0.03;

const icons: {
  [type in TItemCategory]: string;
} = {
  hospital: "https://cdn-icons-png.flaticon.com/64/10714/10714002.png",
  vet: "https://cdn-icons-png.flaticon.com/64/10714/10714002.png",
  pharmacy: "https://cdn-icons-png.flaticon.com/64/10714/10714001.png",
};

export const Map: React.FC<IProps> = ({ markers, onMarkerClick }) => {
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          setLocation({ lat, lng: lng - LNG_ALIGNMENT });
        }
      );
    }
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      {location && (
        <GoogleMap
          defaultCenter={location}
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
          {markers.map(({ id, name, category, coordinates }) => (
            <Marker
              key={id}
              title={name}
              position={{
                lat: coordinates[0],
                lng: coordinates[1],
              }}
              icon={icons[category]}
              onClick={() => onMarkerClick?.(id)}
            />
          ))}
        </GoogleMap>
      )}
    </APIProvider>
  );
};
