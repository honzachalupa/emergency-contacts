type LanguageType = "cs" | "en";

type KeyType =
  | "app.name"
  | "app.description"
  | "common.hospital"
  | "common.hospitals"
  | "common.pharmacy"
  | "common.pharmacies"
  | "common.vet"
  | "common.vets"
  | "address.address"
  | "address.note"
  | "contact.phoneNumber"
  | "contact.emailAddress"
  | "contact.url";

type Translations = {
  [language in LanguageType]: {
    [key in KeyType]: string;
  };
};

const translations: Translations = {
  cs: {
    "app.name": "Pohotovostní kontakty",
    "app.description": "Najděte nejbližší pohotovost, lékárnu nebo veterináře.",
    "common.hospital": "Pohotovost",
    "common.hospitals": "Pohotovosti",
    "common.pharmacy": "Nonstop lékárna",
    "common.pharmacies": "Nonstop lékárny",
    "common.vet": "Veterinární pohotovost",
    "common.vets": "Veterinární pohotovosti",
    "address.address": "Adresa",
    "address.note": "Note",
    "contact.phoneNumber": "Telefon",
    "contact.emailAddress": "E-mail",
    "contact.url": "Web",
  },
  en: {
    "app.name": "Emergency Contacts",
    "app.description": "Find the nearest emergency room, pharmacy, or vet.",
    "common.hospital": "Emergency Room",
    "common.hospitals": "Emergency Rooms",
    "common.pharmacy": "Nonstop Pharmacy",
    "common.pharmacies": "Nonstop Pharmacies",
    "common.vet": "Nonstop Vet",
    "common.vets": "Nonstop Vets",
    "address.address": "Address",
    "address.note": "Note",
    "contact.phoneNumber": "Phone Number",
    "contact.emailAddress": "E-mail Address",
    "contact.url": "Website",
  },
};

export const useTranslations = (language: LanguageType) => ({
  t: (key: KeyType) => translations[language][key] || key,
});
