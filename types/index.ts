export type TItemType = "hospital" | "vet" | "pharmacy";

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
  type: TItemType;
  name: string;
  address: IAddress;
  contact: IContact;
}

export interface IItemsGroup {
  id: TItemType;
  label: string;
  items: IItem[];
}
