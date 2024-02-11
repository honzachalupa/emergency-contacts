export type TItemCategory = "hospital" | "vet" | "pharmacy";

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
  category: TItemCategory;
  name: string;
  address: IAddress;
  contact: IContact;
  coordinates: [number, number];
  googleMapsUrl: string;
}

export interface IItemsGroup {
  id: TItemCategory;
  label: string;
}
