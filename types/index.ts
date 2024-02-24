export enum EItemCategory {
  hospital = "hospital",
  vet = "vet",
  pharmacy = "pharmacy",
}

export type TItemCategory = keyof typeof EItemCategory;

export const categories: {
  [key in TItemCategory]: string;
} = {
  hospital: "common.hospital",
  pharmacy: "common.pharmacy",
  vet: "common.vet",
};

export interface IAddress {
  street: string;
  district: string;
  city: "Praha";
  note?: string;
}

export interface IContact {
  phoneNumbers: number[];
  emailAddress?: string;
  url?: string;
}

export interface IItem {
  id: number;
  category: TItemCategory;
  name: string;
  address: IAddress;
  contact: IContact;
  coordinates: [number, number];
  googleMapsUrl: string;
}

export interface IItemWithDistance extends IItem {
  distance: number;
}

export interface IItemsGroup {
  id: TItemCategory;
  label: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
