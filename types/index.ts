export type ItemType = "hospital" | "vet" | "pharmacy";

export interface Address {
  street: string;
  district: string;
  city: "Praha";
  note?: string;
}

export interface Contact {
  phoneNumbers: number[];
  emailAddress?: string;
  url?: string;
}

export interface Item {
  type: ItemType;
  name: string;
  address: Address;
  contact: Contact;
}
