"use client";

import DataContext from "@/context/DataContext";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useResponsive } from "@/hooks/useResponsive";
import { TItemCategory } from "@/types";
import { useColorScheme } from "@mui/joy";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { useContext } from "react";
import {
  LAT_ALIGNMENT_DESKTOP,
  LNG_ALIGNMENT_DESKTOP,
  icons,
  mapStyles,
} from "./Map.helpers";

export interface IMarker {
  category: TItemCategory;
  name?: string;
  coordinates: [number, number];
}

interface IProps {
  onMarkerClick?: (markerName: IMarker["name"] | null) => void;
}

export const Map: React.FC<IProps> = ({ onMarkerClick }) => {
  const { systemMode: colorScheme } = useColorScheme();
  const { isMobile } = useResponsive();
  const currentLocation = useGeoLocation();

  const { items } = useContext(DataContext);

  const markers: IMarker[] = items.map(({ name, category, coordinates }) => ({
    category,
    name,
    coordinates,
  }));

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      {currentLocation && (
        <GoogleMap
          defaultCenter={{
            lat: currentLocation.lat - (isMobile ? LAT_ALIGNMENT_DESKTOP : 0),
            lng: currentLocation.lng - (isMobile ? 0 : LNG_ALIGNMENT_DESKTOP),
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
          mapId={mapStyles[colorScheme || "light"]}
          onClick={() => onMarkerClick?.(null)}
        >
          <Marker
            title="Moje poloha"
            position={currentLocation}
            clickable={false}
          />

          {markers.map(({ name, category, coordinates }) => (
            <Marker
              key={name}
              title={name}
              position={{
                lat: coordinates[0],
                lng: coordinates[1],
              }}
              icon={{
                url: icons[category],
              }}
              onClick={() => onMarkerClick?.(name)}
            />
          ))}
        </GoogleMap>
      )}
    </APIProvider>
  );
};
