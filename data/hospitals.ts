import { IItem } from "@/types";

const items: IItem[] = [
  {
    type: "hospital",
    name: "Nemocnice Thomayerova",
    address: {
      street: "Vídeňská 800",
      district: "Praha 4",
      city: "Praha",
      note: "Pavilon B1 (vpravo od hlavní brány)",
    },
    contact: {
      phoneNumbers: [261082520, 603566584],
      url: "https://www.ftn.cz/lekarska-pohotovostni-sluzba-199/",
    },
  },

  {
    type: "hospital",
    name: "Nemocnice Motol",
    address: {
      street: "V Úvalu 84",
      district: "Praha 5",
      city: "Praha",
      note: "Modrá budova P",
    },
    contact: {
      phoneNumbers: [224438590],
      url: "https://www.fnmotol.cz/kliniky-a-ambulance/kliniky-dospela-cast/oddeleni-lspp-pro-dospele-pohotovost/",
    },
  },

  {
    type: "hospital",
    name: "Nemocnice Na Bulovce",
    address: {
      street: "Budínova 2",
      district: "Praha 8",
      city: "Praha",
      note: "Přízemí budovy č. 2",
    },
    contact: {
      phoneNumbers: [283842222, 266083301],
      url: "https://bulovka.cz/kliniky-a-oddeleni/pohotovost-lekarska-sluzba-prvni-pomoci/lekarska-sluzba-prvni-pomoci",
    },
  },

  {
    type: "hospital",
    name: "Nemocnice Královské Vinohrady",
    address: {
      street: "Šrobárova 50",
      district: "Praha 10",
      city: "Praha",
      note: "Přízemí pavilonu S",
    },
    contact: {
      phoneNumbers: [267163778],
      url: "https://www.fnkv.cz/lekarska-pohotovostni-sluzba.php",
    },
  },

  {
    type: "hospital",
    name: "Ústřední vojenská nemocnice",
    address: {
      street: "U Vojenské nemocnice 1200",
      district: "Praha 6",
      city: "Praha",
      note: "Budova CH2",
    },
    contact: {
      phoneNumbers: [973203571],
      url: "https://www.uvn.cz/cs/informace-pro-pacienty-uvn",
    },
  },

  {
    type: "hospital",
    name: "Poliklinika Šustova",
    address: {
      street: "Šustova 1930/2",
      district: "Praha 4",
      city: "Praha",
      note: "",
    },
    contact: {
      phoneNumbers: [296506302],
      url: "https://euc.cz/nase-zarizeni/kliniky/euc-klinika-praha-sustova/lekarska-pohotovost-pro-dospele/",
    },
  },
];

export default items;
