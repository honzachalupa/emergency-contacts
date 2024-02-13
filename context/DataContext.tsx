import { getDistanceBetweenTwoPoints } from "@/helpers/coordinates";
import { useGeoLocation } from "@/hooks";
import { IItemWithDistance } from "@/types";
import React, { createContext, useEffect, useState } from "react";
import data from "./data";
import { izs } from "./data/izs";

interface ContextState {
  izsItems: { name: string; phoneNumber: number }[];
  items: IItemWithDistance[];
}

const initialState: ContextState = {
  izsItems: izs,
  items: data as IItemWithDistance[],
};

const DataContext = createContext<ContextState>(initialState);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const currentLocation = useGeoLocation();

  const [state, setState] = useState<ContextState>(initialState);

  useEffect(() => {
    if (currentLocation) {
      const itemsWithDistance = state.items.map((item) => ({
        ...item,
        distance: getDistanceBetweenTwoPoints(
          {
            lat: item.coordinates[0],
            lng: item.coordinates[1],
          },
          currentLocation
        ),
      }));

      const sortByDistance = (a: IItemWithDistance, b: IItemWithDistance) =>
        a.distance > b.distance ? 1 : -1;

      setState((prevState) => ({
        ...prevState,
        items: itemsWithDistance.sort(sortByDistance),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataContext;
