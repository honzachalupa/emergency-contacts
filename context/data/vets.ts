import { IItem } from "@/types";

const items: IItem[] = [
  {
    id: 301,
    category: "vet",
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
    coordinates: [50.05716590517126, 14.323807131936238],
    googleMapsUrl: "https://maps.app.goo.gl/QbHrsPjHhHTiJa4X9",
    keywords: [],
  },

  {
    id: 302,
    category: "vet",
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
    coordinates: [50.106510136458645, 14.475127327041552],
    googleMapsUrl: "https://maps.app.goo.gl/ypTp8qGipMk59fHg6",
    keywords: [],
  },

  {
    id: 303,
    category: "vet",
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
    coordinates: [50.02438445554914, 14.521309215220395],
    googleMapsUrl: "https://maps.app.goo.gl/oK4zcM5Zspo8UqHi6",
    keywords: [],
  },

  {
    id: 304,
    category: "vet",
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
    coordinates: [50.01573755394979, 14.446284610471366],
    googleMapsUrl: "https://maps.app.goo.gl/jSqEmhign2uQTFhv8",
    keywords: [],
  },
];

export default items;
