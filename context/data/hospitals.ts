import { IItem } from "@/types";

const items: IItem[] = [
  {
    id: 101,
    category: "hospital",
    name: "Nemocnice Thomayerova",
    address: {
      street: "Vídeňská 800",
      district: "Praha 4",
      city: "Praha",
      note: "pavilon B1 - vpravo od hlavní brány",
    },
    contact: {
      phoneNumbers: [261082520, 603566584],
      url: "https://www.ftn.cz/lekarska-pohotovostni-sluzba-199/",
    },
    coordinates: [50.030167844191574, 14.45642939820309],
    googleMapsUrl: "https://maps.app.goo.gl/G7HisqfZvnZyDb3H9",
  },

  {
    id: 102,
    category: "hospital",
    name: "Nemocnice Motol",
    address: {
      street: "V Úvalu 84",
      district: "Praha 5",
      city: "Praha",
      note: "modrá budova P",
    },
    contact: {
      phoneNumbers: [224438590],
      url: "https://www.fnmotol.cz/kliniky-a-ambulance/kliniky-dospela-cast/oddeleni-lspp-pro-dospele-pohotovost/",
    },
    coordinates: [50.07500749583149, 14.34089017491106],
    googleMapsUrl: "hhttps://maps.app.goo.gl/5FEkx9rPESeqZ2cv7",
  },

  {
    id: 103,
    category: "hospital",
    name: "Nemocnice Na Bulovce",
    address: {
      street: "Budínova 2",
      district: "Praha 8",
      city: "Praha",
      note: "přízemí budovy č. 13",
    },
    contact: {
      phoneNumbers: [283842222, 266083301],
      url: "https://bulovka.cz/kliniky-a-oddeleni/pohotovost-lekarska-sluzba-prvni-pomoci/lekarska-sluzba-prvni-pomoci",
    },
    coordinates: [50.11588287296042, 14.464298271220448],
    googleMapsUrl: "https://maps.app.goo.gl/mXcQkwCEaWNoqFfy8",
  },

  {
    id: 104,
    category: "hospital",
    name: "Nemocnice Královské Vinohrady",
    address: {
      street: "Šrobárova 50",
      district: "Praha 10",
      city: "Praha",
      note: "přízemí pavilonu S",
    },
    contact: {
      phoneNumbers: [267163778],
      url: "https://www.fnkv.cz/lekarska-pohotovostni-sluzba.php",
    },
    coordinates: [50.07629237648254, 14.475488488265587],
    googleMapsUrl: "https://maps.app.goo.gl/gmf2uDqFZNVTdBmc9",
  },

  {
    id: 105,
    category: "hospital",
    name: "Ústřední vojenská nemocnice",
    address: {
      street: "U Vojenské nemocnice 1200",
      district: "Praha 6",
      city: "Praha",
      note: "budova CH2",
    },
    contact: {
      phoneNumbers: [973203571],
      url: "https://www.uvn.cz/cs/informace-pro-pacienty-uvn",
    },
    coordinates: [50.08899055359174, 14.362616551251657],
    googleMapsUrl: "https://maps.app.goo.gl/aWbhxLo9qcDcXecd8",
  },

  {
    id: 106,
    category: "hospital",
    name: "Poliklinika Šustova",
    address: {
      street: "Šustova 1930/2",
      district: "Praha 4",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [296506302],
      url: "https://euc.cz/nase-zarizeni/kliniky/euc-klinika-praha-sustova/lekarska-pohotovost-pro-dospele/",
    },
    coordinates: [50.027631328420476, 14.489504771815515],
    googleMapsUrl: "https://maps.app.goo.gl/x8rqcehKjKgLsn7m8",
  },
];

export default items;
