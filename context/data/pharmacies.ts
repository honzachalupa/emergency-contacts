import { IItem } from "@/types";

const items: IItem[] = [
  {
    id: 201,
    category: "pharmacy",
    name: "Lékárna Na Františku",
    address: {
      street: "Na Františku 847/8",
      district: "Praha 1",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [222801397],
    },
    coordinates: [50.092885283175825, 14.421454427041075],
    googleMapsUrl: "https://maps.app.goo.gl/auLbs9BCr8ajLYNt5",
  },

  {
    id: 202,
    category: "pharmacy",
    name: "Lékárna U svaté Ludmily",
    address: {
      street: "Belgická 37",
      district: "Praha 2",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [222513396],
    },
    coordinates: [50.07432557152274, 14.435317140533208],
    googleMapsUrl: "https://maps.app.goo.gl/HLJyHQ3wfvUZydHPA",
  },

  {
    id: 203,
    category: "pharmacy",
    name: "Lékárna Thomayerova nemocnice",
    address: {
      street: "Vídeňská 800",
      district: "Praha 4",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [261084019],
    },
    coordinates: [50.03084464263791, 14.45631679820307],
    googleMapsUrl: "https://maps.app.goo.gl/YXiLompupHixajJX8",
  },

  {
    id: 204,
    category: "pharmacy",
    name: "Lékárna Motol",
    address: {
      street: "U Úvalu 84",
      district: "Praha 5",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [224435736],
    },
    coordinates: [50.07419451512776, 14.340999396354682],
    googleMapsUrl: "https://maps.app.goo.gl/PLZVM4Tpjtjs5oo2A",
  },

  {
    id: 205,
    category: "pharmacy",
    name: "Lékárna Benu",
    address: {
      street: "Františka Křížka 22",
      district: "Praha 7",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [230233910],
    },
    coordinates: [50.09950876374047, 14.430609720893035],
    googleMapsUrl: "https://maps.app.goo.gl/KAreYSRb3VSCVaZ98",
  },

  {
    id: 206,
    category: "pharmacy",
    name: "Lékárna Malešice",
    address: {
      street: "Plaňanská 753/1",
      district: "Praha 10",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [281019258],
    },
    coordinates: [50.080235529349665, 14.501360637604256],
    googleMapsUrl: "https://maps.app.goo.gl/du68on8L9i95vmGa7",
  },

  {
    id: 207,
    category: "pharmacy",
    name: "Lékárna Šustova",
    address: {
      street: "Šustova 1930/2",
      district: "Praha 11",
      city: "Praha",
    },
    contact: {
      phoneNumbers: [271913307],
    },
    coordinates: [50.02815793348571, 14.489909055874504],
    googleMapsUrl: "https://maps.app.goo.gl/fxopieL9zRTi58hD7",
  },
];

export default items;
