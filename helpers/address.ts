import { Address } from "@/types";

export const formatAddress = ({ street, district }: Address) => {
  return `${street}, ${district}`;
};

export const getMapUrl = (address: Address) =>
  `https://www.google.com/maps/search/?api=1&query=${address.street},${address.district}}`;
