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
      note: "pavilon B1",
    },
    contact: {
      phoneNumbers: [261082520, 603566584],
      url: "https://www.ftn.cz/lekarska-pohotovostni-sluzba-199/",
    },
    coordinates: [50.030167844191574, 14.45642939820309],
    googleMapsUrl: "https://maps.app.goo.gl/G7HisqfZvnZyDb3H9",
    keywords: ["adult-care", "child-care", "stomatology"],
  },

  {
    id: 102,
    category: "hospital",
    name: "Nemocnice Motol",
    address: {
      street: "V Úvalu 84",
      district: "Praha 5",
      city: "Praha",
      note: "budova P",
    },
    contact: {
      phoneNumbers: [224438590],
      url: "https://www.fnmotol.cz/kliniky-a-ambulance/kliniky-dospela-cast/oddeleni-lspp-pro-dospele-pohotovost/",
    },
    coordinates: [50.07366473019427, 14.339802577044816],
    googleMapsUrl: "https://maps.app.goo.gl/c5tYkk2TLSVScoZz8",
  },

  {
    id: 103,
    category: "hospital",
    name: "Nemocnice Motol - Dětská pohotovost",
    address: {
      street: "V Úvalu 84",
      district: "Praha 5",
      city: "Praha",
      note: "budova E",
    },
    contact: {
      phoneNumbers: [224433652, 224433653],
      url: "https://www.fnmotol.cz/kliniky-a-ambulance/kliniky-detska-cast/oddeleni-urgentniho-prijmu-a-lspp-deti/#detska-pohotovost-detsky-prijem",
    },
    coordinates: [50.07432120111059, 14.342987482813633],
    googleMapsUrl: "https://maps.app.goo.gl/D19ihieoa1R651Ra8",
    keywords: ["child-care"],
  },

  {
    id: 104,
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
    id: 105,
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
    id: 106,
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
    id: 107,
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

  {
    id: 108,
    category: "hospital",
    name: "Všeobecná fakultní Nemocnice",
    address: {
      street: "U Nemocnice 2094",
      district: "Praha 2",
      city: "Praha",
      note: "naproti přes ulici od hlavní budovy",
    },
    contact: {
      phoneNumbers: [224962928],
      url: "https://www.vfn.cz/pacienti/kliniky-ustavy/spolecny-prijem-interne-nemocnych-spin/",
    },
    coordinates: [50.073801483438544, 14.420476558391279],
    googleMapsUrl: "https://maps.app.goo.gl/9gzpxnoXGtZTs8pV9",
  },

  {
    id: 109,
    category: "hospital",
    name: "VFN - Stomatochirurgie",
    address: {
      street: "U Nemocnice 2",
      district: "Praha 2",
      city: "Praha",
      note: "pavilony A10 a A11",
    },
    contact: {
      phoneNumbers: [224963138],
      url: "https://www.vfn.cz/pacienti/kliniky-ustavy/stomatologicka-klinika/",
    },
    coordinates: [50.0734319, 14.4218489],
    googleMapsUrl: "https://maps.app.goo.gl/gJsfCCQiuzQsEG2h8",
    keywords: ["stomatology"],
  },

  {
    id: 110,
    category: "hospital",
    name: "VFN - Oční klinika",
    address: {
      street: "U Nemocnice 2",
      district: "Praha 2",
      city: "Praha",
      note: "pavilon A6",
    },
    contact: {
      phoneNumbers: [224962349, 224962344],
      url: "https://www.vfn.cz/pacienti/kliniky-ustavy/ocni-klinika/",
    },
    coordinates: [50.07270183002834, 14.420669034990032],
    googleMapsUrl: "https://maps.app.goo.gl/gJsfCCQiuzQsEG2h8",
    keywords: ["ophthalmology"],
  },

  {
    id: 111,
    category: "hospital",
    name: "VFN - Klinika dětského a dorostového lékařství",
    address: {
      street: "Ke Karlovu 455",
      district: "Praha 2",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [224967777],
      url: "https://www.vfn.cz/pacienti/kliniky-ustavy/klinika-detskeho-a-dorostoveho-lekarstvi/",
    },
    coordinates: [50.069836231412374, 14.428629644282651],
    googleMapsUrl: "https://maps.app.goo.gl/wWMetjahqiDbwiAH8",
    keywords: ["child-care"],
  },
];

export default items;
