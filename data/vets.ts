import { IItem } from "@/types";

const items: IItem[] = [
  {
    type: "vet",
    name: "Veterinární pohotovost Duchek",
    address: {
      street: "K Hajům 2671/8",
      district: "Praha 5",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [251511651, 724184840, 775688637],
      emailAddress: "provoz@vetcentrum.cz",
      url: "https://www.vetcentrum.cz/nem/pohotovost",
    },
  },

  {
    type: "vet",
    name: "Veterinární pohotovost Erika",
    address: {
      street: "Náměstí Dr. Holého 8",
      district: "Praha 8",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [284821784],
      url: "http://vet-klin-erika.cz",
    },
  },

  {
    type: "vet",
    name: "Veterinární pohotovost AA Vet",
    address: {
      street: "Chmelová 3316/6b",
      district: "Praha 10",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [604242789, 608433336],
      emailAddress: "info@aavet.cz",
      url: "https://www.aavet.cz/pohotovost/",
    },
  },

  {
    type: "vet",
    name: "Veterinární pohotovost IVET",
    address: {
      street: "Ke Kamýku 996/3",
      district: "Praha 5",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [241714358],
      emailAddress: "ivet@ivet.cz",
      url: "https://veterinarniklinikapraha.cz/",
    },
  },
];

export default items;
