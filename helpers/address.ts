import { IAddress } from "@/types";

export const getMapUrl = (address: IAddress) =>
  `https://www.google.com/maps/search/?api=1&query=${address.street},${address.district}}`;
